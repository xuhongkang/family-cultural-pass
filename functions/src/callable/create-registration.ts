import * as admin from "firebase-admin";
import { onCall } from "firebase-functions/v2/https";
import { CallablePayload, FirestoreSubmission } from "../utils/types";
import { CALLABLE_OPTIONS } from "../utils/constants";
import { throwHttpsError } from "../utils/throwHttpsError";
import { sanitizeText } from "../utils/sanitizeText";

const db = admin.firestore();

/**
 * Validate the incoming form data to ensure all required fields are present and valid.
 * @param formData - The form data to validate
 */
function validateFormData(formData: CallablePayload["formData"]): void {
  // Character limits to protect against buffer overflow
  const FIELD_LIMITS = {
    zipCode: 6,
    firstName: 100,
    lastName: 100,
    email: 320,
    phoneNumber: 15,
    gradeLevel: 5,
  };

  // Utility function for validating strings
  function isValidString(value: string | undefined, maxLength: number): boolean {
    return value !== undefined && value.length > 0 && value.length <= maxLength;
  }

  // Validate each required field
  const requiredFields = [
    { field: formData.zipCode, maxLength: FIELD_LIMITS.zipCode, name: "Zip Code" },
    { field: formData.firstName, maxLength: FIELD_LIMITS.firstName, name: "First Name" },
    { field: formData.lastName, maxLength: FIELD_LIMITS.lastName, name: "Last Name" },
    { field: formData.email, maxLength: FIELD_LIMITS.email, name: "Email" },
    { field: formData.gradeLevel, maxLength: FIELD_LIMITS.gradeLevel, name: "Grade Level" },
  ];

  for (const { field, maxLength, name } of requiredFields) {
    if (!isValidString(field, maxLength)) {
      throwHttpsError(
        "invalid-argument",
        `${name} is required and must not exceed ${maxLength} characters.`
      );
    }
  }

  // Optional validation
  if (formData.phoneNumber && !/^\d{10}$/.test(formData.phoneNumber)) {
    throwHttpsError(
      "invalid-argument",
      "Phone Number must be a valid 10-digit number."
    );
  }
}

/**
 * Cloud Function to create a new registration in Firestore.
 */
export const CreateRegistration = onCall(
  CALLABLE_OPTIONS,
  async (request): Promise<{ success: boolean; docId: string }> => {
    try {
      // Validate App Check token if required
      if (CALLABLE_OPTIONS.enforceAppCheck && !request.app) {
        throwHttpsError("failed-precondition", "App Check token is missing.");
      }

      // Extract and validate the incoming data
      const { formData } = request.data;
      validateFormData(formData);

      // Sanitize the data to avoid injection attacks
      const sanitizedFormData = {
        ...formData,
        firstName: sanitizeText(formData.firstName),
        lastName: sanitizeText(formData.lastName),
        email: sanitizeText(formData.email),
      };

      // Add the sanitized data to Firestore
      const docRef = await db.collection("formSubmissions").add({
        ...sanitizedFormData,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      } as FirestoreSubmission);

      return { success: true, docId: docRef.id };
    } catch (error) {
      console.error("Error saving registration:", error);
      throwHttpsError("internal", "Error saving registration.");
    }
  }
);
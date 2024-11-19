/**
 * @file Shared types for form data and Firestore documents.
 */

// Complete Form Data
export interface FormData {
  zipCode: string; // 6-digit zip code
  firstName: string;
  lastName: string;
  studentID?: string; // Optional alphanumeric
  dob?: string; // Optional date in MM/DD/YYYY format
  gender?: string; // Optional string
  parentName: string;
  email: string; // Email format
  phoneNumber?: string; // Optional 10-digit US number
  gradeLevel: string; // K0, K1, K2, or 1-12
  age?: string; // Optional, "0-19" or "19+"
  firstLanguage: string; // Dropdown option
  preferredLanguage: string; // Dropdown option
  englishLearner: 'Yes' | 'No' | 'Unsure'; // Yes/No/Unsure
  race: string; // Dropdown or radio button
  ethnicity?: string; // Optional or 'Prefer not to share'
  programs: string[]; // Multi-select options
  iep: 'Yes' | 'No' | 'Unsure'; // Yes/No/Unsure
}

// Firestore Document Data
export interface FirestoreSubmission extends FormData {
  createdAt: FirebaseFirestore.Timestamp; // Server timestamp
}

// Callable Function Payload
export interface CallablePayload {
  formData: FormData; // Complete form data
}
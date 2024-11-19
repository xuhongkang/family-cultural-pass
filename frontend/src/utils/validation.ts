import { Step1Data, Step2Data, Step3Data, Step4Data } from './types';

export const validateStep1 = (data: Step1Data, validZipCodes: string[]): string | null => {
  if (!data.zipCode || !/^\d{5}$/.test(data.zipCode)) return 'Zip Code must be a 6-digit number';
  if (!validZipCodes.includes(data.zipCode)) return 'Zip Code not recognized';
  return null;
};

export const validateStep2 = (data: Step2Data): string | null => {
  if (!data.firstName || !data.lastName) return 'First and Last Name are required';
  if (data.studentID && !/^[a-zA-Z0-9]+$/.test(data.studentID)) return 'Student ID must contain only letters and numbers';
  if (data.gender && !/^[a-zA-Z]+$/.test(data.gender)) return 'Gender must be a valid string of letters';
  if (data.dob && !/^\d{2}\/\d{2}\/\d{4}$/.test(data.dob)) return 'Date of Birth must be in MM/DD/YYYY format';
  return null;
};

export const validateStep3 = (data: Step3Data): string | null => {
  if (!data.parentName) return 'Parent Name is required';
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'A valid email is required';
  if (data.phoneNumber && !/^\d{10}$/.test(data.phoneNumber)) return 'Phone Number must be a 10-digit US number';
  return null;
};

export const validateStep4 = (data: Step4Data): string | null => {
  if (!data.gradeLevel) return 'Grade Level is required';
  if (data.age && (isNaN(Number(data.age)) || !((+data.age >= 0 && +data.age <= 19) || data.age === '19+')))
    return 'Age must be between 0-19 or "19+"';
  if (!data.firstLanguage) return 'First Language is required';
  if (!data.preferredLanguage) return 'Preferred Language is required';
  if (!['Yes', 'No', 'Unsure'].includes(data.englishLearner)) return 'English Learner must be Yes, No, or Unsure';
  if (!data.race) return 'Race is required';
  if (data.ethnicity && typeof data.ethnicity !== 'string') return 'Ethnicity must be a string or blank';
  if (!data.programs || !Array.isArray(data.programs)) return 'State-administered programs must be selected';
  if (!['Yes', 'No', 'Unsure'].includes(data.iep)) return 'IEP must be Yes, No, or Unsure';
  return null;
};
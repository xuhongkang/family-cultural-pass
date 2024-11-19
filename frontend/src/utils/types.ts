export type Step1Data = {
  zipCode: string;
};

export type Step2Data = {
  firstName: string;
  lastName: string;
  studentID?: string;
  dob?: string;
  gender?: string;
};

export type Step3Data = {
  parentName: string;
  email: string;
  phoneNumber?: string;
};

export type Step4Data = {
  gradeLevel: string;
  age?: string;
  firstLanguage: string;
  preferredLanguage: string;
  englishLearner: string;
  race: string;
  ethnicity?: string;
  programs: string[];
  iep: string;
};

export type FormData = {
  step1: Step1Data;
  step2: Step2Data;
  step3: Step3Data;
  step4: Step4Data;
};
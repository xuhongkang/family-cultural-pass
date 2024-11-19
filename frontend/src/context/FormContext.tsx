import React, { createContext, useContext, useState } from 'react';
import { FormData } from '../utils/types';

type FormContextType = {
  formData: FormData;
  updateFormData: (step: keyof FormData, data: Partial<FormData[keyof FormData]>) => void;
  currentStep: number;
  goToStep: (step: number) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    step1: { zipCode: '' },
    step2: { firstName: '', lastName: '' },
    step3: { parentName: '', email: '' },
    step4: {
      gradeLevel: '',
      firstLanguage: '',
      preferredLanguage: '',
      englishLearner: '',
      race: '',
      programs: [],
      iep: '',
    },
  });

  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (
    step: keyof FormData,
    data: Partial<FormData[keyof FormData]>
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step], ...data },
    }));
  };

  const goToStep = (step: number): void => {
    setCurrentStep(step);
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, currentStep, goToStep }}>
      {children}
    </FormContext.Provider>
  );
};
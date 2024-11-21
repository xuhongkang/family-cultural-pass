import React, { createContext, useContext, useState } from "react";

interface FormState {
  currentStep: number;
  data: Record<string, any>;
  nextStep: () => void;
  prevStep: () => void;
  updateField: (id: string, value: any) => void;
}

const FormContext = createContext<FormState | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<Record<string, any>>({});

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);
  const updateField = (id: string, value: any) =>
    setData((prev) => ({ ...prev, [id]: value }));

  return (
    <FormContext.Provider value={{ currentStep, data, nextStep, prevStep, updateField }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error("useFormContext must be used within a FormProvider");
  return context;
};
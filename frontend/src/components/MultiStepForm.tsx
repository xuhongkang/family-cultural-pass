import React from "react";
import { useFormContext } from "../context/FormContext";
import { Step } from "./Step";
import { StepConfig } from "../utils/FormConfiguration";

interface MultiStepFormProps {
  config: StepConfig[];
}

export const MultiStepForm: React.FC<MultiStepFormProps> = ({ config }) => {
  const { currentStep } = useFormContext();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Step stepConfig={config[currentStep]} />
    </div>
  );
};
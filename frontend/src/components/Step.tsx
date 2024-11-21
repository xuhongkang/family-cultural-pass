import React from "react";
import { Field } from "./Field";
import { useFormContext } from "../context/FormContext";
import { StepConfig } from "../utils/FormConfiguration";

interface StepProps {
  stepConfig: StepConfig;
}

export const Step: React.FC<StepProps> = ({ stepConfig }) => {
  const { nextStep, prevStep } = useFormContext();

  return (
    <div>
      <h2 className="text-lg font-bold">{stepConfig.title}</h2>
      <p className="text-gray-600">{stepConfig.message}</p>
      <div className="mt-4">
        {stepConfig.fields.map((field) => (
          <Field key={field.id} config={field} />
        ))}
      </div>
      <div className="mt-6 flex justify-between">
        {prevStep && <button onClick={prevStep} className="btn-secondary">Go Back</button>}
        <button onClick={nextStep} className="btn-primary">{stepConfig.fields.length - 1 ? "Submit" : "Continue"}</button>
      </div>
    </div>
  );
};
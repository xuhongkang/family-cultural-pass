import React from "react";
import { FormProvider } from "./context/FormContext";
import { MultiStepForm } from "./components/MultiStepForm";
import { StepConfig } from "./utils/FormConfiguration";

const formConfig: StepConfig[] = [
  {
    title: "Step 1: Personal Information",
    message: "Please provide your basic details.",
    fields: [
      {
        id: "name",
        type: "input",
        label: "Full Name",
        validation: (value) => (!value ? "Name is required" : null),
        variant: "uswds",
        required: true,
      },
    ],
  },
  {
    title: "Step 2: Preferences",
    message: "Select your preferences.",
    fields: [
      {
        id: "hobbies",
        type: "multi-select",
        label: "Hobbies",
        options: ["Reading", "Traveling", "Gaming"],
      },
    ],
  },
];

export default function App() {
  return (
    <FormProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
          <MultiStepForm config={formConfig} />
        </div>
      </div>
    </FormProvider>
  );
};
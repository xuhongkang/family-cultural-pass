export interface FieldConfig {
  id: string;
  type: "multi-select" | "radio" | "input";
  label: string;
  options?: string[]; // For multi-select and radio buttons
  validation?: (value: any) => string | null; // Validation function
  variant?: "uswds" | "default"; // For inputs
  required?: boolean;
}

export interface StepConfig {
  title: string;
  message: string;
  fields: FieldConfig[];
}

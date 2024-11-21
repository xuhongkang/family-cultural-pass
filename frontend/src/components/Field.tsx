import React from "react";
import { useFormContext } from "../context/FormContext";
import { FieldConfig } from "../utils/FormConfiguration";

interface FieldProps {
  config: FieldConfig;
}

export const Field: React.FC<FieldProps> = ({ config }) => {
  const { updateField, data } = useFormContext();

  if (config.type === "input") {
    return (
      <div className="mb-4">
        <label htmlFor={config.id} className="block text-sm font-medium text-gray-700">
          {config.label}
        </label>
        <input
          id={config.id}
          type="text"
          value={data[config.id] || ""}
          onChange={(e) => updateField(config.id, e.target.value)}
          className={`form-input ${config.variant === "uswds" ? "uswds-class" : ""}`}
        />
      </div>
    );
  }

  if (config.type === "multi-select") {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">{config.label}</label>
        <select
          multiple
          value={data[config.id] || []}
          onChange={(e) =>
            updateField(config.id, Array.from(e.target.selectedOptions, (opt) => opt.value))
          }
          className="form-select"
        >
          {config.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (config.type === "radio") {
    return (
      <div className="mb-4">
        <span className="block text-sm font-medium text-gray-700">{config.label}</span>
        {config.options?.map((option) => (
          <label key={option} className="inline-flex items-center">
            <input
              type="radio"
              name={config.id}
              value={option}
              checked={data[config.id] === option}
              onChange={(e) => updateField(config.id, e.target.value)}
              className="form-radio"
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
    );
  }

  return null;
};
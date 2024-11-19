import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormContext } from '../context/FormContext';
import { validateStep1 } from '../utils/validation';

type Step1Props = {
  validZipCodes: string[];
};

const Step1: React.FC<Step1Props> = ({ validZipCodes }) => {
  const history = useHistory();
  const { formData, updateFormData } = useFormContext();
  const [error, setError] = useState<string | null>(null);

  const handleNext = () => {
    const validationError = validateStep1(formData.step1, validZipCodes);
    if (validationError) {
      setError(validationError);
    } else {
      setError(null);
      history.push('/step2');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Step 1: Enter Zip Code</h2>
      <input
        type="text"
        value={formData.step1.zipCode}
        onChange={(e) => updateFormData('step1', { zipCode: e.target.value })}
        placeholder="Enter your 6-digit Zip Code"
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-64"
      />
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
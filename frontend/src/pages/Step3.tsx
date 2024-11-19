import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormContext } from '../context/FormContext';

const Step3: React.FC = () => {
  const history = useHistory();
  const { formData, updateFormData } = useFormContext();
  const [error, setError] = useState<string | null>(null);

  const validate = (): string | null => {
    if (!formData.step3.parentName) return 'Parent name is required';
    return null;
  };

  const handleNext = () => {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
    } else {
      setError(null);
      history.push('/step4');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Step 3: Contact Information</h2>
      <input
        type="text"
        value={formData.step3.parentName}
        onChange={(e) => updateFormData('step3', { parentName: e.target.value })}
        placeholder="Parent Name"
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-64"
      />
      <input
        type="email"
        value={formData.step3.email}
        onChange={(e) => updateFormData('step3', { email: e.target.value })}
        placeholder="Email"
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-64"
      />
      <input
        type="text"
        value={formData.step3.phoneNumber || ''}
        onChange={(e) => updateFormData('step3', { phoneNumber: e.target.value })}
        placeholder="Phone Number (Optional)"
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

export default Step3;
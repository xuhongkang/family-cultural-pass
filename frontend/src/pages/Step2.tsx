import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormContext } from '../context/FormContext';

const Step2: React.FC = () => {
  const history = useHistory();
  const { formData, updateFormData } = useFormContext();

  const handleNext = () => {
    history.push('/step3');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Step 2: Student Information</h2>
      <input
        type="text"
        value={formData.step2.firstName}
        onChange={(e) => updateFormData('step2', { firstName: e.target.value })}
        placeholder="First Name"
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-64"
      />
      <input
        type="text"
        value={formData.step2.lastName}
        onChange={(e) => updateFormData('step2', { lastName: e.target.value })}
        placeholder="Last Name"
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-64"
      />
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Step2;
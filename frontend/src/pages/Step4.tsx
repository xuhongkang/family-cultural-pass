import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormContext } from '../context/FormContext';

const Step4: React.FC = () => {
  const history = useHistory();
  const { formData, updateFormData } = useFormContext();
  const [error, setError] = useState<string | null>(null);

  const validate = (): string | null => {
    if (!formData.step4.gradeLevel) return 'Grade Level is required';
    if (!formData.step4.firstLanguage) return 'First Language is required';
    if (!formData.step4.preferredLanguage) return 'Preferred Language is required';
    return null;
  };

  const handleNext = () => {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
    } else {
      setError(null);
      history.push('/review');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Step 4: Student Education</h2>
      <select
        value={formData.step4.gradeLevel}
        onChange={(e) => updateFormData('step4', { gradeLevel: e.target.value })}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-64"
      >
        <option value="">Select Grade Level</option>
        <option value="K0">K0</option>
        <option value="K1">K1</option>
        <option value="K2">K2</option>
        {[...Array(12)].map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <select
        value={formData.step4.firstLanguage}
        onChange={(e) => updateFormData('step4', { firstLanguage: e.target.value })}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-64"
      >
        <option value="es-419">Spanish (Latin American)</option>
        <option value="ht">Haitian Creole</option>
        <option value="zh-Hans">Simplified Chinese</option>
        <option value="zh-Hant">Traditional Chinese</option>
        <option value="vi">Vietnamese</option>
        <option value="pt-BR">Portuguese (Brazilian)</option>
        <option value="kea">Cabo Verdean Creole</option>
        <option value="ru">Russian</option>
        <option value="fr">French (European)</option>
        <option value="ar">Arabic (Standard)</option>
        <option value="so">Somali</option>
      </select>
      <select
        value={formData.step4.preferredLanguage}
        onChange={(e) => updateFormData('step4', { preferredLanguage: e.target.value })}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-64"
      >
        <option value="es-419">Spanish (Latin American)</option>
        <option value="ht">Haitian Creole</option>
        <option value="zh-Hans">Simplified Chinese</option>
        <option value="zh-Hant">Traditional Chinese</option>
        <option value="vi">Vietnamese</option>
        <option value="pt-BR">Portuguese (Brazilian)</option>
        <option value="kea">Cabo Verdean Creole</option>
        <option value="ru">Russian</option>
        <option value="fr">French (European)</option>
        <option value="ar">Arabic (Standard)</option>
        <option value="so">Somali</option>
      </select>
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

export default Step4;
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormContext } from '../context/FormContext';

const ReviewPage: React.FC = () => {
  const history = useHistory();
  const { formData, goToStep } = useFormContext();

  const handleEditStep = (step: number) => {
    goToStep(step);
    history.push(`/step${step}`);
  };

  const handleSubmit = () => {
    history.push('/confirmation');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Review Your Information</h2>
      <pre className="bg-gray-200 p-4 rounded-md shadow w-96 text-left">{JSON.stringify(formData, null, 2)}</pre>
      <div className="mt-6 space-x-4">
        <button
          className="px-6 py-3 bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600 transition"
          onClick={() => handleEditStep(1)}
        >
          Edit Step 1
        </button>
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewPage;
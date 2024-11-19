import React from 'react';
import { useHistory } from 'react-router-dom';

const IntroPage: React.FC = () => {
  const history = useHistory();

  const handleStart = () => {
    history.push('/step1');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to the Application</h1>
      <p className="mt-4 text-lg text-gray-700">Click below to begin your application.</p>
      <button
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
        onClick={handleStart}
      >
        Start Application
      </button>
    </div>
  );
};

export default IntroPage;
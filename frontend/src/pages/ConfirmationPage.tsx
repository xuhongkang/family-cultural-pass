import React from 'react';

const Confirmation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-600">Thank You!</h1>
      <p className="mt-4 text-lg text-gray-700">Your application has been submitted successfully.</p>
    </div>
  );
};

export default Confirmation;
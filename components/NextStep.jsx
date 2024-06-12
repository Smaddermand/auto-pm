import { useState } from 'react';

const NextStep = ({ description, todos }) => {
  const [nextStep, setNextStep] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchNextStep = async () => {
    setLoading(true);
    const response = await fetch('/api/generate-next-step', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description, todos }),
    });

    const data = await response.json();
    setNextStep(data.nextStep);
    setLoading(false);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Next Step
      </label>
      <button
        onClick={fetchNextStep}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Next Step'}
      </button>
      <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4">
        {nextStep}
      </div>
    </div>
  );
};

export default NextStep;
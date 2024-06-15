// Nextstep.jsx
import { useState } from 'react';

const NextStep = ({ description, todos }) => {
  const [nextStep, setNextStep] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchNextStep = async () => {
    setLoading(true);
    try {
      const response = await fetch('app/api/generate-next-step', { // Updated path
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description, todos }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setNextStep(data.nextStep);
    } catch (error) {
      console.error('Error fetching next step:', error);
      setNextStep('Error generating the next step.');
    } finally {
      setLoading(false);
    }
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

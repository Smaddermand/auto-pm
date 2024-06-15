// components/OpenAIButton.js
import React from 'react';
import { callOpenAI } from '../app/api/openai';

const OpenAIButton = () => {
  const handleClick = async () => {
    await callOpenAI();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Call OpenAI
      </button>
    </div>
  );
};

export default OpenAIButton;
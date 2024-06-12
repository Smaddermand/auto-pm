// components/ProjectInfo.js
import React from 'react'
import { useState } from 'react';



const ProjectInfo = () => {
  const [description, setDescription] = useState('');

  return (
    <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="project-info">
      Project Description
    </label>
    <textarea
      id="project-info"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      rows="4"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Enter the project description here..."
      />
      </div>
  )
}

export default ProjectInfo
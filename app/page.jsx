// home
// page.jsx

'use client';
import React from 'react'
import { useState } from 'react';
import dynamic from 'next/dynamic';



const ProjectInfo = dynamic(() => import('../components/ProjectInfo'), { ssr: false });
const Todo = dynamic(() => import('../components/Todo'), { ssr: false });
const NextStep = dynamic(() => import('../components/NextStep'), { ssr: false });

const Home = () => {
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);

  return (
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Project Management</h2>
        <ProjectInfo description={description} setDescription={setDescription} />
        <Todo todos={todos} setTodos={setTodos} />
        <NextStep description={description} todos={todos} />
      </div>

  )
}

export default Home
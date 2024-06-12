// home
// page.jsx

'use client';
import React from 'react'
import ProjectInfo from '@/components/ProjectInfo'
import Todo from '@/components/Todo'
import NextStep from '@/components/NextStep'

const Home = () => {
  return (
    <div className="container mx-auto py-8">
    <h2 className="text-2xl font-bold mb-4">Project Management</h2>
    <ProjectInfo />
    <Todo />
    <NextStep />
  </div>

  )
}

export default Home
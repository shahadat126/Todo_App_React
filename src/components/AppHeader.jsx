import React from 'react'
import { CheckSquare } from 'lucide-react';

const AppHeader = () => {
  return (
    <header className='flex items-center justify-between mb-8'>
      <div className='flex items-center gap-2'>
        <CheckSquare className='h-8 w-8 text-blue-500'/>
        <h1 className='text-gray-800 font-bold text-2xl'>Task Flow</h1>

      </div>
      <p className='text-sm text-gray-500 mr-5'>Manage Your Tasks Ease</p>
    </header>
  )
}

export default AppHeader
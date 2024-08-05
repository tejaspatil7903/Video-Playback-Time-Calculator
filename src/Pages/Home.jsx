import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  function clickHandler(){
    navigate("/calculator")
  }

  return (
    <div className='flex justify-center items-center w-full min-h-screen'>
        <button onClick={clickHandler} className='bg-green-600 py-3 px-1 rounded-md hover:bg-green-800 transition-all'>
            Go to Calculator
        </button>
    </div>
  )
}

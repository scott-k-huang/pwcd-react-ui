import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Procrastinator's Wellness Count Down</h1>
      <div className="card">
        <p>
          The purpose of this tool is to help you form good habits by allowing you to track progress on simple goals over the course of the week
        </p>
      </div>
    </>
  )
}

export default App

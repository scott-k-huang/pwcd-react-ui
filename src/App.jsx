import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <p>
          The purpose of this tool is to help you form good habits by allowing you to track progress on simple goals over the course of the week
        </p>
      </div>
    </>
  )
}

export default App

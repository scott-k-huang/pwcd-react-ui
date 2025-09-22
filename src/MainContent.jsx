import { useState } from 'react'
import './MainContent.css'

function MainContent() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="mainContent" className="card">
        <p>
          The purpose of this tool is to help you form good habits by allowing you to track progress on simple goals over the course of the week
        </p>
      </div>
    </>
  )
}

export default MainContent

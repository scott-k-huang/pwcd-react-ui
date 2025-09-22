import { useState } from 'react'

function Header() {
  const [title, setTitle] = useState("Procrastinator's Wellness Count Down (header file)")

  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

export default Header

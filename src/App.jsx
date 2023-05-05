import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyLocation from './pages/map/MyLocation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>aap</h2>
      <MyLocation></MyLocation>
    </div>
  )
}

export default App

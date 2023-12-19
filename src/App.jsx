// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [marks, setMarks] = useState([10, 20, 30, 40, 50])

  function increment(index) {
    const updatedMarks = [...marks]
    updatedMarks[index]++
    setMarks(updatedMarks)
  }

  function decrement(index) {
    const updatedMarks = [...marks]
    updatedMarks[index]--
    setMarks(updatedMarks)
  }

  return (
    <>
      {marks.map((mark, index) => (
        <div className='d1'>
          <button onClick={() => increment(index)}>+</button>
          <span>{mark}</span>
          <button onClick={() => decrement(index)}>-</button>
         
        </div>
      ))}
    </>
  )
}

export default App

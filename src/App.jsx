import { useState } from 'react'
import './App.css'



function App() {
  const [length,setLength] = useState(8);
  const[numbersAllowed ,setNumbersAllowed] = useState(false);
  const[charAllowed,setCharAllowed] = useState(false);
  

  return (
    <>
    <h1>React password generator</h1>
    <input readOnly/>
    <div>
      <input type='range' max={20} min={6}  value={length} onChange={(e) => {setLength(e.target.value)}}/>
      <label htmlFor="length">{length}</label>
    </div>
    <div>
      <input type='checkbox' defaultChecked={charAllowed} onChange={() => setCharAllowed((prev) => {!prev})} />
      <label htmlFor="charAllowed">Char Allowed</label>
      <input type='checkbox' defaultChecked={numbersAllowed} onChange={() => setNumbersAllowed((prev) => {!prev})} />
      <label htmlFor="numbersAllowed">Numbers Allowed</label>
    </div>



      
        
    </>
  )
}

export default App

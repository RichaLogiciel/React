// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const display = (value) => {
  console.log(value);
  
}

function App() {

  // let [value, setCounter] = useState()


  // setCounter(value)
  return (
    <>
      <div>
        <button onClick = {() => display(1)}>1</button>
        <button onClick = {() => display(2)}>2</button>
        <button onClick = {() => display(3)}>3</button>
        <button onClick = {() => display('AC')}>AC</button>
        <br></br>
        <button onClick = {() => display(4)}>4</button>
        <button onClick = {() => display(5)}>5</button>
        <button onClick = {() => display(6)}>6</button>
        <button onClick = {() => display('=')}>=</button>
        <br></br>
        <button onClick = {() => display(7)}>7</button>
        <button onClick = {() => display(8)}>8</button>
        <button onClick = {() => display(9)}>9</button>
        <button onClick = {() => display('AC')}>AC</button>
        <br></br>
        <button onClick = {() => display(0)}>0</button>
        <button onClick = {() => display('*')}>*</button>
        <button onClick = {() => display('/')}>/</button>
        <button onClick = {() => display('%')}>%</button>
        <br></br>
        <button onClick = {() => display('.')}>.</button>
        <button onClick = {() => display('+')}>+</button>
        <button onClick = {() => display('-')}>-</button>
        <button onClick = {() => display('').display('')}>*</button>

      
    
      </div>
     
    </>
  )
}

export default App

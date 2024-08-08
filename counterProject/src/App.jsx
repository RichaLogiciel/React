import { useState } from 'react'


function App() {

  const [value, setCounter] = useState(15) // if we  change this variable to let then we can use {value = value=/-1}

  const addValue = () => {
    console.log("clicked", value);
    // value = value + 1;
    // console.log("valued Added",Math.random());\
    if(value < 20) {
      setCounter(value + 1)
      return
    }
    console.log(value)
    
    
  }

const removeValue = () => {
  // console.log('Removing value', Math.random()) // not giving the value means added value giving output in 0.997497934.. someting
  if(value > 0) {
    setCounter(value - 1);

  }
  console.log("clicked", value);
}

  return (
    <>
     <h1>Chai or Code</h1>
     <h2>Counter Value: {value}</h2>

     <button onClick={addValue} disabled= {value >= 20} >Add Value {value} </button>
     <br></br>
     <button onClick = {removeValue} disabled={value == 0}>Remove Value {value} </button>
    </>
  )
}

export default App

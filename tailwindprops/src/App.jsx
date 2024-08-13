// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import img from '/1.jpg'
import Card from './components/card'

import './App.css'


function App() {

  // let newArray = [1,2,3]
  // const myObj= {
  //   username: "Richa",
  //   age: 21
  // }
  return (
    <>  
      <Card username="Paint Castle" btnText="Click me" description="This is a painting demo" ddetails="Delievery Details" price="$500"/>
      <Card username="richa"  />
    </>
  )
}

export default App

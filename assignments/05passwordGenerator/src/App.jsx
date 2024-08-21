import { useState,useCallback,useEffect } from 'react'

function App() {
   const [length, setLength ] = useState(8)
   const [numberAllowed, setNumberAllowed] = useState(false);
   const [characterAllowed, setAllowedCharacter] = useState(false);
   const [password, setPassword] = useState("")
   const passwordGenerator = useCallback(() => {
     let pass = ""
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(numberAllowed) str += "0123456789"
     if(characterAllowed) str += "!@#$%^&*()_+"
     for (let i = 1; i < length; i++) {
       let char = Math.floor(Math.random() * str.length + 1)
       pass += str.charAt(char)
     }
     setPassword(pass)
     
   } ,[setAllowedCharacter,length,setNumberAllowed,setPassword])

   useEffect(() => {
    passwordGenerator()
   }, [length,numberAllowed,characterAllowed, passwordGenerator])

  //  passwordGenerator();
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-gray-700">
      <h1 className="text-white text-center mb-4 mt-4">Password Generator</h1>
      <div className="flex shadow-lg text-center bg-gray-400 rounded-lg overflow-hidden mb-5 text-orange-600">
        <input
          type="text"
          value= {password}
          className="outline-none w-full py-1 px-3"
          placeholder= "Password"
          readOnly
        />
        <button className=" text-right bg-blue-600 px-3 py-0.5 shrink-0 outline-none">copy</button>
      </div>
      <div className="flex text-sm gap-x-2 ">
        <div className="flex items-center gap-x-1 mb-3">
          <input 
          type="range" 
          min= {8}
          max= {100}
          value= {length}
          className="cursor-pointer" 
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label className="text-blue-300">Length: {length}</label>
          <div>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={ () => {
              setNumberAllowed((prev) => !prev);
            } }
             />
             <label htmlFor="numberInput" className='text-blue-400'>Numbers</label>
          </div>
          <div>
            <input 
            type="checkbox"
            defaultChecked={characterAllowed}
            id="CharInput"
            onChange={ () => {
              setAllowedCharacter((prev) => !prev);
            } }
             />
             <label htmlFor="CharInput" className='text-blue-400'>Characters</label>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App


// <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-gray-800">
// <h1 className="text-white text-center">Password Generator</h1>
// <div className="flex shadow-lg rounded-sm overflow-hidden mb-4">
//   <input
//   type="text"
//   value={password}
//   className="outline-none w-full py-1 px-3"
//   placeholder="Password"
//   readonly
//   />
  
// </div>
// </div>
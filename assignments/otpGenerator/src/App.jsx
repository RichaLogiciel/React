// import { useState } from 'react'

import './App.css'

function App() {
  return (
      <div className="bg-gray-700 max-w-md m-auto">
        <h1 className=" text-white mb-3 rounded-lg mt-2">OTP Generator</h1>
        <div className="bg-neutral-700 ">
          <input
            placeholder="Otp"
            className='rounded-lg'
          />
          <button className="text-right bg-blue-400 rounded-lg shrink-0 px-3 py-0.5 outline-none">copy</button>
        </div>
        <div className="flex mt-3" >
          <div className="flex mt-3"></div>
          <input type="range"
           />
        </div>
      </div>
  )
}

export default App

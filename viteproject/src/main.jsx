// import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime" 

import App from './App.jsx'

// function App() {
//   return (
//     <div>
//       <h1>Custom App</h1>
//     </div>
//   )
// }

// const newElement = {
//   type: 'a',
//   props: {
//       href: "https://chatgpt.com/",
//       target: "_blank",
//   },
//   children: "Click to open chatgpt",
// }


// const anotherElement = (
//     <a href='http://google.com' target='_blank'>Visit Google</a>
// )
// const anotherUser = "richa";

// const ReactElement = React.createElement(
//   'a',              // 'tag',object->adds properties
//   { href: 'http://google.com', target: '_blank' },
//   'click me to visit google',
//   anotherUser
// )

ReactDOM.createRoot(document.getElementById('root')).render(

  // ReactElement
  <App />
    // anotherElement
    // newElement
    // /* <MyApp /> */
)

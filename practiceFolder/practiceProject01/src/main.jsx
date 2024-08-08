import React from 'react'
import ReactDOM from 'react-dom/client'
// import ReactElement from './App.jsx'

// function MyApp() {
//   return (
//     <>
//     <h1>Hey There</h1>
//     <p>Chair or code</p>
//     </>
//   )
// }

const reactUser = "Hey this is react user 1"
const ReactElement = React.createElement(
  'a',
  { href: 'http://google.com', target: '_blank'},
  'Click to visit Goole',
  reactUser
)



ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
    //  <App /> 
    // ReactElement
    // <MyApp />
    // <ReactElement />
  )

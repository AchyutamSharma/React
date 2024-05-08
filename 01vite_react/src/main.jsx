import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const anotherEliment = (
//   <a href="https://akhutam-portfolio.vercel.app" target='_blank'>visit Akhutam portfolio</a>
// )

const reactElement = React.createElement(
  'a',
  {href: 'https://akshutam-portfolio.vercel.app/'},
  'click me to visit my portfolio....'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // </React.StrictMode>,
  // reactElement
    <App />
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)



// import * as React from 'react'

// // 1. import `ChakraProvider` component
// import { ChakraProvider } from '@chakra-ui/react'

// function App() {
//   // 2. Wrap ChakraProvider at the root of your app
//   return (
//     <ChakraProvider>
//       <TheRestOfYourApplication />
//     </ChakraProvider>
//   )
// }
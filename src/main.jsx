import React from 'react'
import ReactDOM from 'react-dom/client'
import App2 from './App.jsx'
import Practice, { Array, Counter, Css2, Form, Object, Props } from './reactpractice/practice.jsx'
// import './index.css'
 
const users={hobby:'football',gender:'male'}
const array=['array1','array2']

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <App2/>
{/* <Form/>  <Practice /> <Counter/><Array/> <Object/>  <Props name='harhsit' lastname='vashitsha' age={27} object={users} array={array}/> <Css2/> */}
  </React.StrictMode>,
)

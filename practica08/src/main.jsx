import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import miFileSet from './miFileSet.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <miFileSet titulo="datos personales" txt1="nombre" txt2="password"/>
  </React.StrictMode>,
)

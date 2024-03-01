import React from 'react'
import ReactDOM from 'react-dom/client'
import { Componente } from './Componente.jsx'
import {Contador} from './Contador.jsx'
import {ListadoApp} from './ListadoApp.jsx'
import {MapeoApp} from './MapeoApp.jsx'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Componente /> */}
    {/* <Contador value={0}></Contador> */}
    {/* <ListadoApp /> */}
    <MapeoApp></MapeoApp>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FacturaApp } from './FacturaApp.jsx'
import { BarraNavegacion } from './components/BarraNavegacion.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <BarraNavegacion></BarraNavegacion>
  <Routes>
    <Route path='/' element={<App></App>}></Route>
    <Route path='facturas' element={<FacturaApp></FacturaApp>}></Route>
  </Routes>
  </BrowserRouter>
)

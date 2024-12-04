import { BarraNavegacion } from './components/BarraNavegacion'
import { FacturaApp } from './FacturaApp'


function App() {
  

  return (
    <div>
      <div>
        <BarraNavegacion></BarraNavegacion>
      </div>
      <h1 className='text-center'>Bienvenido a mi pagina de inicio</h1>
      <div>
        <FacturaApp></FacturaApp>
      </div>
    </div>
  )
}

export default App

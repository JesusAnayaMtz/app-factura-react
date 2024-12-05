import { Link } from "react-router-dom"

export const BarraNavegacion = () => {

    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={"/Facturas"} className="nav-link">Facturas</Link>
        </li>
        <li className="nav-item">
          <Link to={"/CrearFactura"} className="nav-link">Crear Factura</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}


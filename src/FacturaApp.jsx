import { factura } from "./data/factura";
import { facturaService } from "./services/facturaService";
import { DatosCliente } from "./components/DatosCliente";
import { DatosEmpresa } from "./components/DatosEmpresa";
import { DatosFactura } from "./components/DatosFactura";
import { DatosProductos } from "./components/DatosProductos";
import { DatosTotal } from "./components/DatosTotal";

export const FacturaApp = () => {
  //obtenemos la factura del service que se creo y la destructuramos
  const { total, id, nombreFact, cliente, compania, productos } = facturaService();



  return (
    <div className="container">
      <div className="card mb-3">
        <div className="card-header text-bg-secondary">Ejemplo Factura</div>
        <div className="card-body">
          <DatosFactura id={id} nombreFact={nombreFact}></DatosFactura >
          <div className="container row mt-3">
            <div className="col">
             <DatosCliente cliente={cliente}></DatosCliente>
            </div>
            <div className="col">
              <DatosEmpresa compania={compania}></DatosEmpresa>
            </div>
          </div>
          <DatosProductos productos={productos}></DatosProductos>
          <DatosTotal total={total}></DatosTotal>
        </div>
      </div>
    </div>
  );
};

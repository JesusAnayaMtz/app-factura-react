import { factura } from "../data/factura";
import { facturaService } from "../services/facturaService"

export const FacturaApp = () => {

    //obtenemos la factura del service que se creo y la destructuramos
    const {id, nombreFact, cliente, compania, productos} = facturaService();

    //destructuramos el cliente y le damos un alias a nombre ya que si no choca con el nombre de la factura
    const {nombre: nombreCliente, apellido, direccion} = cliente;

    const {pais, estado, ciudad, numero} = cliente.direccion;
    


    return (
        <div>
            <h1>Ejemplo Factura</h1>
                <ul>
                     <li>Id: {id}</li>
                     <li>Nombre: {nombreFact}</li>
                </ul>

                <h3>Datos Del Cliente</h3>
                <ul>
                    <li>Nombre: {nombreCliente} {apellido}</li>
                    <li>Estado: {estado} </li>
                    <li>Ciudad: {ciudad}</li>
                </ul>

                <h3>Datos De La Empresa</h3>
                <ul>
                    <li>Compañia: {compania.nombre}</li>
                    <li>Numero Fiscal: {compania.numeroFiscal}</li>
                </ul>
                <h4>Lista De Productos</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map(product => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.producto}</td>
                                    <td>{product.precio}</td>
                                    <td>{product.cantidad}</td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
         </div>
    )
}
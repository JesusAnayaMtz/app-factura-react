import { FilasProductos } from "./FilasProductos";

export const DatosProductos = ({productos}) => {
    return (
        <div>
            <h4 className="mt-3">Lista De Productos</h4>
          <table className="table table-striped table-bordered border-secondary table-hover mt-3">
            <thead>
              <tr>
                <th>Nombre Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {productos.map((product) => {
                return (
                  <FilasProductos key={product.id} product={product}></FilasProductos>
                );
              })}
            </tbody>
          </table>
        </div>
    )
}
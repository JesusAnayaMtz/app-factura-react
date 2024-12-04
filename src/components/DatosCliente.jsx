export const DatosCliente = ({cliente}) => {

      //destructuramos el cliente y le damos un alias a nombre ya que si no choca con el nombre de la factura
      //podemos hacer una destructuracion anidada de direccion
      //los dos puntos despues de destruturar puede ser para renombrar una atributo o para destruturar un objeto dentro de una destructuracion de otro objeto
        const { nombre: nombreCliente, apellido, direccion: {pais, estado, ciudad, numero} } = cliente;

    return (
        <div>
             <h3>Datos Del Cliente</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  Nombre: {nombreCliente} {apellido}
                </li>
                <li className="list-group-item">Estado: {estado} </li>
                <li className="list-group-item">Ciudad: {ciudad}</li>
              </ul>
        </div>
    )
}
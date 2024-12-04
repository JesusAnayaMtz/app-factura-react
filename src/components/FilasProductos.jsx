export const FilasProductos = ({product}) => {


    return (
            <tr>
                    <td>{product.producto}</td>
                    <td>{product.precio}</td>
                    <td>{product.cantidad}</td>
                  </tr>
    )
}
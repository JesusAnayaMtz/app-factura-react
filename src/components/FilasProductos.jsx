export const FilasProductos = ({product}) => {


    return (
            <tr>
                    <td>{product.producto}</td>
                    <td>{product.cantidad}</td>
                    <td>${product.precio}</td>
                  </tr>
    )
}
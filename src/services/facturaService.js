import { factura } from "../data/factura"

export const facturaService = () => {

    //una forma de calcular el total
    
    /* let total = 0;
    factura.productos.forEach( product => {
        total = total + product.precio * product.cantidad;
    }); */

    //otra forma de calcular wl total usando reduce primero los productos al ser objeto se debe usar map paa solo usar el precio y cantidad para que se numerico
    //despues con reduce se pasa el acumulador que sera la suma, y el valor actual, y dentro se calcula la suma mas el valor actual, pero este debe llevar un tercer parametro que seria el valor inicial
    // del valor actual.
    const total = factura.productos.map(product => product.precio * product.cantidad).reduce((suma, valorActual) => suma + valorActual, 0);



    //destructuramos con el operador spread para clonar la factura y aparte le pasamos el total pa agregarlo a la nueva factura
    return {...factura, total: total};
}
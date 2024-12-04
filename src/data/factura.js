//creamos un  objeto prueba que se usara para muestra en la factura

export const factura = {
    id: 1,
    nombreFact: 'Componentes Pc',
    cliente: {
        nombre: 'Jesus',
        apellido: 'Anaya',
        direccion: {
            pais: 'mexico',
            estado: 'veracruz',
            ciudad: 'cordoba',
            numero: 12
        }
    },
    compania:{ 
        nombre: 'pcsermex',
        numeroFiscal: 1254636
    },
    productos: [
        {
            id: 1,
            producto: 'Tarjeta Madre Asus',
            precio: 1200,
            cantidad: 1
        },
        {
            id: 2,
            producto: 'Procesador Intel Core i7',
            precio: 2000,
            cantidad: 1
        },
        {
            id: 3,
            producto: 'Memoria Ram DDR5',
            precio: 800,
            cantidad: 2
        }
    ]
}
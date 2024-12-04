import PropTypes from 'prop-types';

export const DatosFactura = ({id, nombreFact}) => {

    return (
        <div>
            <ul className="list-group">
            <li className="list-group-item">Id: {id}</li>
            <li className="list-group-item">Nombre: {nombreFact}</li>
          </ul>
        </div>
    )
}

//esto se usa para valida tipo de dato y si es requerido pero se muestra en consola el error en caso de no ser del tipo declarado
DatosFactura.propTypes = {
    id: PropTypes.number.isRequired,
    nombreFact: PropTypes.string.isRequired
}
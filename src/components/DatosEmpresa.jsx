export const DatosEmpresa = ({compania}) => {

    

    return (
        <div>
            <h3>Datos De La Empresa</h3>
              <ul className="list-group">
                <li className="list-group-item">Compañia: {compania.nombre}</li>
                <li className="list-group-item">
                  Numero Fiscal: {compania.numeroFiscal}
                </li>
              </ul>
        </div>
    )
}
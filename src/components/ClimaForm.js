import React from 'react';

const ClimaForm = props => {
    return (
        <div className="container">
            <div>{props.error ? error(): null}</div>
        <form onSubmit={props.cargarclima}>
        < div className="row">
            <div className="col-md-3 offset-md-4">
                <input type="text" className="form-control" name="ciudad" placeholder="ingrese el nombre de la ciudad"></input>
            </div>
            <div className="col-md-1 mt-md-0 py-1 text-md-left">
                <button className="btn btn-outline-success">Buscar</button>
            </div>
        </div>
        </form>
    </div>
    );  
};

function error(){
    return(
        <div className="alert alert-danger alert-dismissible">
        <strong>Ingrese el nombre de la ciudad</strong>
        </div>

        
    );
};

export default ClimaForm;
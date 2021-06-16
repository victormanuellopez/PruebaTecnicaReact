import React from 'react';

const ClimaInfo = props => {

    return (
        <div className="container text-light">
            <div className="cards pt-4">
            <h1>{props.ciudad}, {props.pais}</h1>
            <h4 className="py-4">
                <i className={`wi ${props.icono}   display-1`}/>
            </h4>
            <h5 className="py-2">temperatura:</h5>
            <h1 className="py-2">{props.temperatura}&deg;</h1>
            
            {tempmaxmin(props.tempmin,props.tempmax)}
            
            <h5 className="py-3">estado del clima:</h5>
            <h2 className="py-2">{props.descripcion}</h2>
        </div> 
        </div>
    )
}

function tempmaxmin(min, max){
    return(
        <h3>
            <span className="px-4">min: {min}&deg;</span>
            <span className="px-4">max: {max}&deg;</span>
        </h3>
    )
}

export default ClimaInfo;
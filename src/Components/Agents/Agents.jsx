import React from "react";
// import agente1 from "../img/agente1.png";
import '../css/Agentes.css';



function Agents(listAgents){

    return(
        <React.Fragment>
            <div className="contAgents">
                <div className="imgAgents">
                    <img src={require(`../img/${listAgents.imagen}.png`)} alt={`Foto de ${listAgents.nombre}`}/>
                </div>
                <div className="infoAgents">
                    <div>
                        <p className="infoName"><span>{listAgents.nombre}</span> en {listAgents.pais}</p>
                        <p>{listAgents.cargo} en <span>{listAgents.empresa}</span></p>
                        <p>{listAgents.testimonial}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}


export {Agents}
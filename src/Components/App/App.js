import React from "react";
import '../css/contApp.css'
import { TitleAgents } from "../TitleAgents/TitleAgents";
import { Agents } from "../Agents/Agents";
import { ListAgents } from "../ListAgents/ListAgents";



function App() {

  const listAgents = [
    {
      imagen: "agente1",
      nombre: "Shawn Wang",
      pais: "Singapur",
      cargo: "Ingeniero de Software",
      empresa: "Amazon",
      testimonial: '"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."'
    },
    {
      imagen: "agente2",
      nombre: "Sarah Chima",
      pais: "Nigeria",
      cargo: "Ingeniero de Software",
      empresa: "ChatDesk",
      testimonial: '"freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."'
    },
    {
      imagen: "agente3",
      nombre: "Emma Bostian",
      pais: "Suecia",
      cargo: "Ingeniero de Software",
      empresa: "Spotify",
      testimonial: '"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."'
    }
  ];

  

  return (
    <React.Fragment>
      <div className="contApp">
        <div>
          <TitleAgents />
          
          <ListAgents />

          {listAgents.map((item) => (
            <Agents
              key={item.nombre}
              imagen={item.imagen}
              nombre={item.nombre}
              pais={item.pais}
              cargo={item.cargo}
              empresa={item.empresa}
              testimonial={item.testimonial}
            />
          ))}

        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

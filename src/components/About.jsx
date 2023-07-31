import React from "react";

const About = () => {
  return (
    <div name="conoceme" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Acerca de mi..
          </p>
        </div>
        <p className="text-xl mt-20">
          Soy una persona proactiva, organizada y responsable, con buenas relaciones interpersonales. Poseo conocimientos en tecnologías Frontend y Backend, alto grado de compromiso en equipos de trabajo, en constante aprendizaje para mejorar habilidades y conocimientos. Siempre dispuesta a asumir nuevos retos y facilidad de adaptación al cambio.
        </p>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Cheesecake from "../assets/portfolio/Cheesecake.png";
import Sunnyside from "../assets/portfolio/sunnyside.png";
import Windbnb from "../assets/portfolio/windbnb.png";
import Tictac from "../assets/portfolio/Tic-tac.png"
import Weater from "../assets/portfolio/Weater-app.png"
import Country from "../assets/portfolio/Countries.png"


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      im: Cheesecake,
      page: "https://carmenocotan.github.io/Cheesecake-recipe/",
      cod: "https://github.com/CarmenOcotan/Cheesecake-recipe.git",
      description: "Esta es una descripción del proyecto Cheesecake.",
    },
    {
      id: 2,
      im: Sunnyside,
      page: "https://carmenocotan.github.io/Sunnyside/",
      cod: "https://github.com/CarmenOcotan/Sunnyside.git",
      description: "Esta es una descripción del proyecto Sunnyside.",
    },
    {
      id: 3,
      im: Windbnb,
      page: "https://carmenocotan.github.io/Windbnb/",
      cod: "https://github.com/CarmenOcotan/Windbnb.git",
      description: "Esta es una descripción del proyecto Windbnb.",
    },
    {
    id: 4,
    im: Country,
    page: "https://carmenocotan.github.io/Rest-Countries/",
    cod: "https://github.com/CarmenOcotan/Rest-Countries.git",
    description: "Esta es una descripción del proyecto Country.",
    },
    {
      id: 5,
      im: Weater,
      page: "https://carmenocotan.github.io/Weather-App/",
      cod: "https://github.com/CarmenOcotan/Weather-App.git",
      description: "Esta es una descripción del proyecto Weater.",
    },
    {
      id: 6,
      im: Tictac,
      page: "https://carmenocotan.github.io/Tic-Tac-Toe/",
      cod: "https://github.com/CarmenOcotan/Tic-Tac-Toe.git",
      description: "Esta es una descripción del proyecto Tictac.",
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Mira algunos de mis Proyectos</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, im, page, cod, description }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <div className="relative group overflow-hidden rounded-t-md">
                <img src={im} alt="" className="rounded-t-md" />
                <div className="absolute inset-0 bg-black bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white">{description}</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <a href={page} className="w-1/2 px-6 py-3 m-4">
                  Demo
                </a>
                <a href={cod} className="w-1/2 px-6 py-3 m-4">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
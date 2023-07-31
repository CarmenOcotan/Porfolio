import React from "react";

const Contact = () => {
  return (
    <div name="contactame" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white pt-12 ">
      <div className="flex flex-col justify-end max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contactame
          </p>
        </div>
        <div className="flex justify-center ">
          <form action="https://getform.io/f/542deaf4-5ae3-4164-921c-8f43ddf2b67f" method="POST" className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="Nombre" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
            <input type="text" name="email" placeholder="Email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
            <textarea name="message" placeholder="Escribe tu mensaje" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Hablemos
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

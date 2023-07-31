import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
return (
    <footer className="bg-gray-800 p-5">
        <div className="container mx-auto px-4">
            <div className="flex justify-center items-center mb-4">
                <ul className="flex space-x-4 lg:hidden">
                    <li>
                        <a href="https://www.linkedin.com/in/carmen-ocotan/" className="text-white hover:text-gray-400 transition duration-300">
                            <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/CarmenOcotan" className="text-white hover:text-gray-400 transition duration-300" >
                            <FaGithub size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:liz.ocotan.clno@gmail.com" className="text-white hover:text-gray-400 transition duration-300">
                            <HiOutlineMail size={30} />
                        </a>
                    </li>
                </ul>
            </div>
            <p className="text-center text-gray-400 mt-4">
            © {new Date().getFullYear()} Carmen Ocotán. Todos los derechos reservados.
            </p>
        </div>
    </footer>
);
};

export default Footer;

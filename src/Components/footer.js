import React from 'react'
import {FaGithub, FaHeart, FaLinkedin, FaPaypal} from "react-icons/fa";

function Footer() {
    return (
        <div className="w-full flex items-center justify-evenly py-8" style={{backgroundColor: '#1A237E'}}>
            <p className="text-white font-semibold">Hecho con <FaHeart className="text-red-500 inline-block"/> por <a href="https://github.com/iangg29" className="hover:font-bold" target="_blank" rel="noopener noreferrer">Ian García</a>.</p>
            <p className="text-white font-semibold">Copyright &copy; 2020 - Derechos reservados</p>
            <div className="flex flex-wrap text-white text-3xl">
                <a href="https://github.com/iangg29" target="_blank" rel="noopener noreferrer"><FaGithub className="mx-4"/></a>
                <a href="https://www.linkedin.com/in/iangarciag" target="_blank" rel="noopener noreferrer"><FaLinkedin className="mx-4"/></a>
                <FaPaypal className="mx-4"/>
            </div>
        </div>
    );
}

export default Footer
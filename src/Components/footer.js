import React from 'react'
import {FaGithub, FaHeart, FaLinkedin, FaPaypal} from "react-icons/fa";

function Footer() {
    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-evenly py-8 px-20" style={{backgroundColor: '#00113B'}}>
            <p className="text-white mb-6 md:mb-0 font-semibold"><a href="https://github.com/iangg29" className="hover:font-bold" target="_blank" rel="noopener noreferrer">Ian García</a></p>
            <p className="text-white mb-8 md:mb-0 font-semibold">Copyright &copy; 2020 - Derechos reservados</p>
            <div className="flex flex-wrap text-white text-3xl">
                <a href="https://github.com/iangg29" target="_blank" rel="noopener noreferrer"><FaGithub className="mx-4"/></a>
                <a href="https://www.linkedin.com/in/iangarciag" target="_blank" rel="noopener noreferrer"><FaLinkedin className="mx-4"/></a>
                <FaPaypal className="mx-4"/>
            </div>
        </div>
    );
}

export default Footer
import React from 'react'
import {FaArrowAltCircleDown} from "react-icons/fa";

function Splash() {
    return (
        <div className="splash flex flex-col w-full z-50 min-h-screen justify-evenly content-center items-center">
            <h1 className="text-white text-6xl font-bold">
                ¡Hola! Mi nombre es Ian García <br/>y soy <span
                className="typer"
                id="some-id"
                data-words="estudiante,diseñador web,desarrollador web"
                data-colors="#039BE5,#26C6DA,#FFA726"
                data-delay="50"></span>.</h1>
            <a href="#"><FaArrowAltCircleDown className="text-white text-5xl opacity-50 hover:opacity-100"/></a>
        </div>
    );
}

export default Splash
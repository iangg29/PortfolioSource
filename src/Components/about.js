import React, {Component} from 'react';
import Tec from '../assets/TecNegro.png';
import Dotted from '../assets/dot-grid-half.png';
import Image from "./image";

class About extends Component {
    render() {
        return (
            <div className="flex flex-col py-10 relative" id="aboutme">
                <img src={Dotted} alt="Dots" className="absolute top-0 left-0 right-0 mx-auto"
                     style={{zIndex: 1, minHeight: 50}}/>
                <div className="text-center font-semibold text-3xl flex justify-center z-10">
                    <h2 className="section-title" data-aos="fade-up">Acerca de mí</h2>
                </div>
                <div className="flex flex-row mt-10 z-20">
                    <div className="w-7/12 py-20 px-32 tracking-widest leading-loose text-justify">
                        <p data-aos="fade-right" data-aos-delay="100">¡Hola! Mi nombre es <span className="font-bold text-main text-md">Ian García</span>,
                            actualmente soy estudiante de Ingeniería en Software por el <span
                                className="font-bold text-main text-md">Tecnológico de Monterrey</span>, principalmente
                            estoy enfocado al desarrollo de aplicaciones web tanto del FrontEnd (diseño / interacción
                            con el usuario) y BackEnd (Interacción de la aplicación alguna base de datos). </p>
                        <br/>
                        <p data-aos="fade-right" data-aos-delay="200">Las principales tecnologías que uso son HTML y CSS, Javascript con algunas de sus frameworks
                            / librerías como ReactJS, NodeJS, Axios, entre otras. Para el diseño suelo utilizar un
                            framework llamado TailwindCSS o Bootstrap para hacer más eficiente mi trabajo. Últimamente
                            he trabajado en el desarrollo, diseño y construcción de APIs para el consumo de mis
                            aplicaciones, haciendo más efectiva y rápida la aplicación. Para aplicaciones más complejas
                            hago uso de distintas frameworks MVC (Modelo - Vista - Controlador) como Laravel o DJango
                            principalmente.</p>
                        <br/>
                        <p data-aos="fade-right" data-aos-delay="300">Actualmente esto abierto a cualquier tipo de colaboración, trabajo o proyecto.</p>
                    </div>
                    <div className="w-5/12 flex flex-col">
                        <div className="w-full">
                            <img src={Tec} alt="Tecnológico de Monterrey" className="mx-auto my-5" data-aos="flip-up"
                                 style={{maxHeight: 70}}/>
                            <Image/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About
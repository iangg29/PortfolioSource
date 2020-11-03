import React, {Component} from 'react';
import Dotted from "../assets/dot-grid-half.png";
import Img from "../assets/extra-img.jpg";
import simpleParallax from "simple-parallax-js";
import Progressbar from "./progressbar";

class Abilities extends Component {

    componentDidMount() {
        var image = document.getElementsByClassName('parallax');
        new simpleParallax(image, {
            scale: 1.5,
            overflow: true
        });
    }

    render() {
        return (
            <div className="flex flex-col my-10 py-10 relative" id="abilities">
                <img src={Dotted} alt="Dots" className="absolute top-0 left-0 right-0 mx-auto"
                     style={{zIndex: 1, minHeight: 50}}/>
                <div className="text-center font-semibold text-3xl flex justify-center z-10">
                    <h2 className="section-title" data-aos="fade-up">Mis habilidades</h2>
                </div>
                <div className="flex flex-row mt-10 z-20">
                    <div className="w-1/2">
                        <div className="w-4/5 mx-auto shadow-xl rounded-md p-10 bg-white">
                            <h2 className="font-bold text-xl" data-aos="fade-right">Lenguajes</h2>
                            <hr className="my-5" data-aos="fade-right"/>
                            <h3 className="my-4 font-semibold" data-aos="fade-right">HTML & CSS</h3>
                            <Progressbar barlength="80%" name="Avanzado"/>
                            <h3 className="my-4 font-semibold" data-aos="fade-right">Python</h3>
                            <Progressbar barlength="85%" name="Avanzado"/>
                            <h3 className="my-4 font-semibold" data-aos="fade-right">Javascript</h3>
                            <Progressbar barlength="60%" name="Intermedio"/>
                            <h3 className="my-4 font-semibold" data-aos="fade-right">PHP</h3>
                            <Progressbar barlength="45%" name="Intermedio"/>
                            <h3 className="my-4 font-semibold" data-aos="fade-right">Go</h3>
                            <Progressbar barlength="30%" name="Principiante"/>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center items-center content-center">
                        <div className="">
                            <img src={Img} alt="Ian García" className="rounded-lg shadow w-2/3 mx-auto parallax"
                                 data-aos="flip-up"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Abilities
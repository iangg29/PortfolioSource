import React, {Component} from 'react';
import simpleParallax from 'simple-parallax-js';
import ParaImage from '../assets/parallax.jpg';
import {NavLink} from "react-router-dom";


class Para extends Component {

    componentDidMount() {
        var image = document.getElementsByClassName('paraImg');
        new simpleParallax(image, {
            scale: 1.5
        });
    }


    render() {
        return (
            <div className="paraImg flex flex-row justify-center items-center text-white"
                 style={{
                     maxHeight: 500, minHeight: 300, backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
        ), url(${ParaImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
                 }}>
                <h1 className="font-extrabold  text-2xl mx-20" data-aos="fade-right">Empieza un proyecto</h1>
                <p className="font-semibold" data-aos="fade-up">¿Estás interesado en trabajar juntos? <br/>Deberíamos conversar un rato.</p>
                <NavLink className="bg-indigo-800 px-10 py-2 rounded shadow mx-20 hover:shadow-inner hover:bg-indigo-700" exact to="/contact" data-aos="fade-left">Hagámoslo</NavLink>
            </div>
        );
    }
}

export default Para

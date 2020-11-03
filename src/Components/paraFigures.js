import React, {Component} from 'react';
import simpleParallax from 'simple-parallax-js';


class ParaFigures extends Component {
    componentDidMount() {
        var circle = document.getElementsByClassName('circle');
        new simpleParallax(circle, {
            orientation: 'right',
            scale: 1.5
        });
    }

    render() {
        return (
            <div className="w-56 h-56 bg-red-800 rounded-full circle"></div>
        );
    }
}

export default ParaFigures
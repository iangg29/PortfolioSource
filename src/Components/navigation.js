import React, {Component} from 'react';
import $ from 'jquery';
import {NavLink} from "react-router-dom";

class Navigation extends Component {

    componentDidMount() {
        $(function () {
            $(document).scroll(function () {
                var $nav = $(".web-navbar");
                var $logo = $(".logo");
                $nav.toggleClass('bg-main', $(this).scrollTop() > $nav.height());
                $logo.toggleClass('hidden', $(this).scrollTop() < $nav.height());
            });
        });
    }

    render() {
        return (
            <header
                className="fixed bg-transparent text-white z-50 w-full px-5 py-2 flex justify-between items-center web-navbar ">
                <div className="flex-1 flex justify-between items-center ml-5 md:ml-10 lg:ml-20">
                    <NavLink className="font-bold hidden logo" data-aos="fade-right" exact to="/">
                        Ian García
                    </NavLink>
                </div>

                <label htmlFor="menu-toggle" className="pointer-cursor my-4 lg:hidden block">
                    <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="30"
                         height="30"
                         viewBox="0 0 20 20"><title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </label>
                <input className="hidden" type="checkbox" id="menu-toggle"/>

                <div className="hidden lg:flex bg-transparent lg:items-right lg:w-auto w-full text-xl font-semibold"
                     id="menu">
                    <nav>
                        <ul className="lg:flex items-center justify-between text-base pt-4 lg:pt-0">
                            <li data-aos="fade-left"><a
                                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white"
                                href="/#aboutme">Acerca de mí</a>
                            </li>
                            <li data-aos="fade-left" data-aos-delay="300">
                                <NavLink
                                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white"
                                    exact to="/projects"
                                    activeStyle={{fontWeight: "bold", borderBottom: '2px solid #FFF'}}>
                                    Proyectos
                                </NavLink>
                            </li>
                            <li data-aos="fade-left" data-aos-delay="600">
                                <NavLink
                                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white"
                                    exact to="/contact"
                                    activeStyle={{fontWeight: "bold", borderBottom: '2px solid #FFF'}}>
                                    ¡Contáctame!
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Navigation
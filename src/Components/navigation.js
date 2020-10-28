import React, {Component} from 'react';
import $ from 'jquery';

class Navigation extends Component {

    componentDidMount() {
        $(function () {
            $(document).scroll(function () {
                var $nav = $(".web-navbar");
                var $logo = $(".logo");
                $nav.toggleClass('bg-black', $(this).scrollTop() > $nav.height());
                $logo.toggleClass('hidden', $(this).scrollTop() < $nav.height());
            });
        });
    }

    render() {
        return (
            <header
                className="fixed bg-transparent text-white z-50 w-full px-5 py-2 flex justify-between items-center web-navbar ">
                <div className="flex-1 flex justify-between items-center ml-20">
                    <a href="/" className="font-bold hidden logo">Ian García</a>
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
                            <li><a
                                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white"
                                href="#aboutme">Acerca de mí</a></li>
                            <li><a
                                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white"
                                href="#">Proyectos</a></li>
                            <li><a
                                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white lg:mb-0 mb-2"
                                href="#">¡Contáctame!</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Navigation
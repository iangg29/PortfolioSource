import React, {Component} from 'react';
import Footer from "./footer";
import $ from "jquery";
import Card from "./card";

class Projects extends Component {

    componentDidMount() {
        var $logo = $(".logo");
        $logo.removeClass('hidden');
        $(function () {
            $(document).scroll(function () {
                var $nav = $(".web-navbar");
                $nav.toggleClass('bg-main', $(this).scrollTop() > $nav.height());
                $logo.removeClass('hidden');
            });
        });
    }

    render() {
        return (
            <div className="antialiased relative flex flex-col">
                <div className="bg-main p-32 flex items-center content-center justify-center" id="splash-cont">
                    <h1 className="font-bold text-5xl text-white">Mis proyectos</h1>
                </div>
                <div className="container my-16 grid grid-cols-3 mx-auto">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Projects;
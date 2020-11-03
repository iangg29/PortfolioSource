import React, {Component} from 'react';
import $ from "jquery";
import Footer from "./footer";
import {FaLocationArrow} from "react-icons/fa";
import {FiMail} from "react-icons/fi";

class Contact extends Component {

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
                <div className="bg-main p-16 md:p-24 lg:p-32 flex items-center content-center justify-center"
                     id="splash-cont">
                    <h1 className="font-bold text-5xl text-white" data-aos="fade-up"
                        data-aos-duration="1500">Contacto</h1>
                </div>
                <div className="w-full flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 flex items-center justify-center content-center">
                        <div className="px-10 py-16 relative w-4/5 mx-auto bg-gray-200 rounded-lg shadow-md"
                             data-aos="fade-right" data-aos-delay="200">
                            <h1 className="text-4xl sm:text-5xl text-gray-800  font-extrabold tracking-tight">
                                ¡Contáctame!
                            </h1>
                            <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600s mt-2">
                                Llena el formulario para iniciar una conversación
                            </p>

                            <div className="flex items-center mt-8 text-gray-700">
                                <FaLocationArrow className="text-lg"/>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    Querétaro, México
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-gray-700">
                                <FiMail className="text-lg"/>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    ian@xeroxi.com
                                </div>
                            </div>

                            <div className="flex flex-row justify-evenly mt-2 text-gray-800">

                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <form action="" className="form p-6 my-10 relative w-4/5 mx-auto">
                            <h3 className="text-2xl mb-8 text-gray-900 font-semibold" data-aos="fade-left">Platiquemos
                                un rato</h3>
                            <div className="flex space-x-5 mt-3 mb-8">
                                <input type="text" name="" id="" placeholder="Nombre"
                                       className="border px-2 py-4 rounded w-1/2" data-aos="fade-left" data-aos-delay="50"/>
                                <input type="tel" name="" id="" placeholder="Celular"
                                       className="border rounded px-2 py-4 w-1/2" data-aos="fade-left" data-aos-delay="100"/>
                            </div>
                            <input type="email" name="" id="" placeholder="Email"
                                   className="border rounded px-2 py-4 mb-8 w-full mt-3" data-aos="fade-left" data-aos-delay="150"/>
                            <textarea name="" id="" cols="10" rows="3" placeholder="Mensaje"
                                      className="border rounded p-2 mb-8 mt-3 w-full" data-aos="fade-left" data-aos-delay="200"/>
                            <p className="font-bold text-sm mt-3" data-aos="fade-left" data-aos-delay="250">Aviso de privacidad *</p>
                            <div className="flex items-baseline space-x-2 mt-2 mb-8" data-aos="fade-left" data-aos-delay="300">
                                <input type="checkbox" name="" id="" className="inline-block rounded"/>
                                <p className="text-gray-600 text-sm">Soy consciente de que esta página web almacene mis
                                    datos ingresados para contestar a mi mensaje.</p>
                            </div>
                            <input type="submit" value="Submit"
                                   className="w-full mt-6 bg-transparent border cursor-pointer border-main text-main hover:bg-main hover:text-white text-white font-semibold rounded p-3"
                                   data-aos="fade-up" data-aos-delay="350"/>

                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Contact;
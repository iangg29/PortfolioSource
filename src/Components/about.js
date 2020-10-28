import React, {Component} from 'react';
import Tec from '../assets/TecNegro.png';
import Image from "./image";

class About extends Component {
    render() {
        return (
            <div className="bg-gray-100 flex flex-col py-10" id="aboutme">
                <div className="text-center font-semibold text-3xl">
                    <h2 className="section-title">Acerca de mí</h2>
                </div>
                <div className="flex flex-row mt-10">
                    <div className="w-7/12 py-20 px-32 tracking-widest leading-loose text-justify">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque deleniti ipsum iure
                            laboriosam laborum maiores modi molestias nostrum placeat quam reprehenderit sequi,
                            similique, velit veniam. Eos libero porro suscipit. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Ad alias earum magnam neque rem unde voluptate. Dolores eveniet ex facere
                            iste maxime, mollitia, odit officia porro quaerat rem repudiandae, veritatis! Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit. Aperiam culpa debitis distinctio doloremque
                            facilis fuga ipsa ipsam, iste laboriosam laudantium magnam, odit perferendis qui quibusdam
                            repudiandae sint temporibus totam unde!</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque deleniti ipsum iure
                            laboriosam laborum maiores modi molestias nostrum placeat quam reprehenderit sequi,
                            similique, velit veniam. Eos libero porro suscipit.</p>
                    </div>
                    <div className="w-5/12 flex flex-col">
                        <div className="w-full">
                            <img src={Tec} alt="Tecnológico de Monterrey" className="mx-auto my-5"
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
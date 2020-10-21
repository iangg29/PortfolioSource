import React from 'react';
import Card from "./card";
import Image from "./image";
import Footer from "./footer";
import Navigation from "./navigation";

class Wrapper extends React.Component {
    render() {
        return (
            <div className="font-sanspro antialiased text-gray-900 leading-normal tracking-wider gradient">
                <Navigation/>
                <div className="max-w-4xl flex items-center h-auto  flex-wrap mx-auto mt-10 lg:my-0">
                    <Card/>
                    <Image/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Wrapper
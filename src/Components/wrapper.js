import React from 'react';
import Navigation from "./navigation";
import Splash from "./splash";
import Footer from "./footer";
import About from "./about";
import Top from "./top";

class Wrapper extends React.Component {
    componentDidMount() {
        //$(".lds-ellipsis").delay(1500).fadeOut("slow");
        //$(".main-container").delay(2100).fadeIn("slow");
    }

    render() {
        return (
            <div className="relative">
                <div className="font-sanspro">
                    <Navigation/>
                    <div className="bg">
                        <Splash/>
                    </div>
                    <div className="antialiased relative flex flex-col">
                        <About/>
                        <Footer/>
                    </div>
                </div>
                <Top/>
            </div>
        );
    }
}

export default Wrapper
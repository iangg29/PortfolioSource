import React from 'react';
import Splash from "./splash";
import Footer from "./footer";
import About from "./about";
import Para from "./para";
import Abilities from "./abilities";

class Wrapper extends React.Component {

    render() {
        return (
            <>
                <div className="bg relative">
                    <Splash/>
                </div>
                <div className="antialiased relative flex flex-col">
                    <About/>
                    <Para/>
                    <Abilities/>
                    <Footer/>
                </div>
            </>
        );
    }
}

export default Wrapper
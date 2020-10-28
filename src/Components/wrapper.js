import React from 'react';
import Navigation from "./navigation";
import Image from "./image";
import Splash from "./splash";

class Wrapper extends React.Component {
    componentDidMount() {
        //$(".lds-ellipsis").delay(1500).fadeOut("slow");
        //$(".main-container").delay(2100).fadeIn("slow");
    }

    render() {
        return (
            <div className="font-sanspro">
                <Navigation/>
                <div className="bg">
                    <Splash/>
                </div>
                <div className="antialiased relative">
                    <Image/>
                </div>
            </div>
        );
    }
}

export default Wrapper
import React from 'react';
import Wrapper from "../Components/wrapper";
import Projects from "../Components/projects";
import Navigation from "../Components/navigation";
import Top from "../Components/top";
import {Route, Switch} from "react-router-dom";
import Contact from "../Components/contact";

function App() {
    return (
        <div className="relative">
            <div className="font-sanspro">
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={Wrapper}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </div>
            <Top/>
        </div>
    );
}

export default App;

import './App.css';
import React from 'react';

import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Instagram from "./Instagram";
import About from "./About";
import Contact from "./Contact";
import Testimonials from "./Testimonials";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="ui container">
                <BrowserRouter>
                    <div>
                        <div className="header">
                            <div className="inner">
                                <span>Cuba</span> <span>Street<br></br>Culinary</span> <span>Tours</span>
                            </div>
                        </div>
                        <div className="nav">
                            <NavLink exact to="/">Instagram</NavLink> <NavLink to="/about">About</NavLink> <NavLink to="/testimonials">Testimonials</NavLink> <NavLink to="/contact">Contact</NavLink>
                        </div>

                        <div className="content">
                            <Route exact path="/" component={Instagram} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/testimonials" component={Testimonials} />
                            <Route exact path="/contact" component={Contact} />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
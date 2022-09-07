import React from 'react';
import './App.css';
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Woks} from "./Work/Woks";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";
import {AboutMe} from "./AboutMe/AboutMe";

function App() {
    return (
        <div className="App">
            <Main/>
            <AboutMe />
            <Skills/>
            <Woks/>
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;

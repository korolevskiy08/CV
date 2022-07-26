import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Woks} from "./Work/Woks";
import {DistantWork} from "./DistantWork/DistantWork";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Woks/>
            <DistantWork />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;

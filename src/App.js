import React, {useState} from 'react';
import Navbar from "./component/Navbar";
import GlobalStyle from "./globalStyle";
import Hero from "./component/Hero";
import {SliderData} from "./data/SliderData";
import Dropdown from "./component/Dropdown";


const App = () => {
    const [isOpen, setIsOpen] = useState(false)
    const  toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <GlobalStyle/>
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <Hero slides={SliderData}/>
        </>
    );
};

export default App;
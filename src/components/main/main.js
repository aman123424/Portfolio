import React from 'react';
import AboutMe from '../aboutMe/aboutMe';
import Education from '../aboutMe/education/education';
import ContactUs from '../contactUs/contactUs';
import PORs from '../experience/PORs/PORs';
import Home from '../home/home';
import LeftDecoration from './leftDecoration/leftDecoration';
import './main.css'
import Navbar from './navbar/navbar';
import RightDecoration from './rightDecoration/rightDecoration';
import SocialIcons from './socialIcons/socialIcons';

function Main() {
    return(

        <div className='main'>

            {/* Navbar */}
            <Navbar />

            {/* SocialIcons */}
            <SocialIcons />

            {/* Component */}
            <div className='component-container'>
                <Home />
                <AboutMe />
                <Education />
                <PORs/>
                <ContactUs/>
            </div>

            {/* Right Decoration Line */}
            <RightDecoration />

            {/* Left Decoration Line */}
            <LeftDecoration />

        </div>

    );
}

export default Main;
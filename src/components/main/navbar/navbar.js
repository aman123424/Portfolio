import React from 'react';
import Button from '../../../uiElements/Button/Button';
import './navbar.css'

function Navbar() {
    return(
        <div className='navbar-container'>

            <div className={`navbar-element home active`}>Home</div>
            <div className={`navbar-element aboutMe`}>About Me</div>
            <div className={`navbar-element projects`}>Projects</div>
            <div className={`navbar-element experience`}>Experience</div>
            <div className={`navbar-element contactMe`}>Contact Me</div>
            <a className={`resume`} target="_blank" href="https://drive.google.com/file/d/1E7XANVpTGJzGpAPpHO2Qe7kjVzZFUIQ2/view?usp=share_link">
                <Button text={"Resume"} onClick={()=>{}}/>
            </a>
        
        </div>
    );
}

export default Navbar;
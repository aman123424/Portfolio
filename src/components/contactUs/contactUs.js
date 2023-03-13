import React from 'react';
import './contactUs.css'
import Button from '../../uiElements/Button/Button';

function ContactUs() {
    return(
        <div className='contactUs-container'>
            <div className='contactUs-image-container'>
                <div className='text-1'>Want to work together?</div>
                <div className='text-2'>Let's get in touch!</div>
                <div className='img-container'>
                    <img className='img'/>
                </div>
            </div>

            <div className='form-container'>
                <div className='questions'>
                    
                    <div className='input-title name'>Name</div>
                    <input className='name input' autoFocus={true}/>

                    <div className='input-title email'>Email</div>
                    <input className='email input'/>

                    <div className='input-title message'>Message</div>
                    <textarea className='message input'/>
                
                </div>
                
                <div className='send-btn'>
                    <Button text={"Send Message"}/>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
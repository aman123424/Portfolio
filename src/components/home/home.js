import React from 'react';
import './home.css'
import bgImg from '../../assets/homeBg.svg'

function Home() {
    return(
        <div className='home-container'>
            <div className='icons-container'>
                <div class="container">
                    <div class="inner-triangle"></div>
                    <div class="outer-triangle"></div>
                </div>
            </div>
            <div className='intro-container'>
                <div className='hello'>Hello, I'm</div>
                    <div className='name'>Aman Kulwal</div>
                <div className='short-intro'>I build interactive websites and applications that run across platforms and devices</div>
                <div className='brief-intro'>My favorite thing about my work is to develop websites or mobile applications. I enjoy the journey from coming up with wild ideas to turning them into a performant product, launching and growing it afterward.</div>
            </div>

            <div className='bgImg-container'>
                <img src={bgImg}/>
            </div>
        </div>
    );
}

export default Home;
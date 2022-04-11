import React from 'react';
import reactLogo from './logo192.png'

export default function Navbar(){
    return (
        <header className='header'>
            <nav className="nav">
                <img src={reactLogo}  alt="reactLogo" width="50px" />
                <h3 className='SiteTitle'>ReactFacts</h3>
                <h4 className='SiteSubtitle'>React Course - Project 1</h4>
            </nav>
        </header>
    );
}
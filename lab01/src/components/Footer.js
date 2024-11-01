import React from 'react';
import logo from '../Images/logowsei.png';

const Footer = () => {
    return (
        <footer className="text-center mt-4">
            <p>
                <img src={logo} alt="Logo uczelni" width="200" height="50" />
            </p>
            <p>mateusz.lukaszewicz@microsoft.wsei.edu.pl</p>
        </footer>
    );
};

export default Footer;

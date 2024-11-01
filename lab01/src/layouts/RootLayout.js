import React from 'react';
import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';

const RootLayout = ({ children, items }) => {
    return (
        <div>
            <NavBarMenu items={items} />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default RootLayout;

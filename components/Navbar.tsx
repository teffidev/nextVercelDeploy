import React from "react";
import { ActiveLink } from './ActiveLink';
import styles from "./Navbar.module.css";

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

const Navbar = () => {
    return (
        <nav className={styles.containerNav}>
            {
                menuItems.map(({text, href}) => (
                    <ActiveLink key={href} text={text} href={href} />
                ))
            }
            {/* <ActiveLink text='Home' href="/" />
            <ActiveLink text='About' href="/about" />
            <ActiveLink text='Contact' href="/contact" />
            <ActiveLink text='Pricing' href="/pricing" /> */}
        </nav>
    );
};

export default Navbar;

import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import logoSrc from '../assets/logos/logoipsum-346.svg';
import SideMenu from './SideMenu';

// NOTE should I add animated icons?

function Navbar() {
    const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

    const handleMenuClick = () => {
        setIsMenuShown((prev) => !prev);
    };

    const handleCloseMenu = () => {
        setIsMenuShown(false);
    };

    return (
        <header className="bg-bg-tertiary">
            <nav className="section flex items-center py-8">
                <a href="#">
                    <img src={logoSrc} alt="Company Logo" />
                </a>
                <button className="ms-auto me-4">
                    <svg
                        className="fill-icon-primary hover:fill-icon-primary-hover aspect-square w-6 transition-colors"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M6.50488 2H17.5049C17.8196 2 18.116 2.14819 18.3049 2.4L21.0049 6V21C21.0049 21.5523 20.5572 22 20.0049 22H4.00488C3.4526 22 3.00488 21.5523 3.00488 21V6L5.70488 2.4C5.89374 2.14819 6.19013 2 6.50488 2ZM19.0049 8H5.00488V20H19.0049V8ZM18.5049 6L17.0049 4H7.00488L5.50488 6H18.5049ZM9.00488 10V12C9.00488 13.6569 10.348 15 12.0049 15C13.6617 15 15.0049 13.6569 15.0049 12V10H17.0049V12C17.0049 14.7614 14.7663 17 12.0049 17C9.24346 17 7.00488 14.7614 7.00488 12V10H9.00488Z"></path>
                    </svg>
                </button>
                <button onClick={handleMenuClick}>
                    <svg
                        className="fill-icon-primary hover:fill-icon-primary-hover aspect-square w-5 transition-colors"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
                    </svg>
                </button>
                <AnimatePresence>
                    {isMenuShown && <SideMenu onClose={handleCloseMenu} />}
                </AnimatePresence>
            </nav>
        </header>
    );
}
export default Navbar;

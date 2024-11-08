import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png'; // Update the path to your logo image

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hidden, setHidden] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            setLastScrollY(currentScrollY);
            setScrolling(currentScrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`bg-transparent p-4 ${scrolling ? 'bg-white shadow-md' : ''} ${hidden ? 'transform -translate-y-full' : 'transform translate-y-0'} transition-transform duration-300 ease-in-out`}>
            <div className="container mx-auto mt-6 flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-16 mr-3" /> {/* Logo Image */}
                </div>
                <div className="flex-grow flex justify-center space-x-6 md:space-x-10">
                    <div className="hidden md:flex">
                        <a href="#" className="text-black text-lg hover:text-red-500 transition duration-300 transform hover:scale-105 mr-6">Home</a>
                        <a href="#" className="text-black text-lg hover:text-red-500 transition duration-300 transform hover:scale-105 mr-6">About</a>
                        <a href="#" className="text-black text-lg hover:text-red-500 transition duration-300 transform hover:scale-105 mr-6">Services</a>
                        <a href="#" className="text-black text-lg hover:text-red-500 transition duration-300 transform hover:scale-105">Contact</a>
                    </div>
                    <div className="md:hidden flex justify-end w-full">
                        <button onClick={toggleMenu} className="text-black ml-auto">
                            {isOpen ? '✖' : '☰'}
                        </button>
                    </div>
                </div>
                <div>
                    <button className="hidden md:block text-white bg-gradient-to-r from-red-500 to-pink-500 px-8 py-2 rounded-full hover:bg-red-400 transition duration-300 transform hover:scale-105">
                        Get Started
                    </button>
                </div>
                <div className={`absolute top-16 left-0 w-full bg-white md:hidden ${isOpen ? 'block' : 'hidden'} rounded-lg shadow-lg p-4`}>
                    <div className="flex justify-between items-center mb-2">
                        <div className="ml-auto">
                            <button onClick={toggleMenu} className="text-black hover:text-red-300">
                                ✖
                            </button>
                        </div>
                    </div>
                    <a href="#" className="block text-black text-lg hover:text-red-300 mb-4">Home</a>
                    <a href="#" className="block text-black text-lg hover:text-red-300 mb-4">About</a>
                    <a href="#" className="block text-black text-lg hover:text-red-300 mb-4">Services</a>
                    <a href="#" className="block text-black text-lg hover:text-red-300 mb-4">Contact</a>
                    <button onClick={toggleMenu} className="block w-full text-black bg-red-300 px-4 py-2 rounded-full hover:bg-red-400 transition duration-300 transform hover:scale-105 text-lg">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 
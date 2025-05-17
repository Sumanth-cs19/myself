import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu]  = useState(false);

     return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between px-5 py-3 bg-primary dark:bg-gray-900 shadow-md transition-colors duration-500">
            <a className="font-bold text-black dark:text-white" href="#">K Sumanth</a>
            <nav className="hidden md:block">
                <ul className="flex text-white dark:text-gray-300">
                    <li><a href="/">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/#resume">Resume</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </nav>
            {toggleMenu && (
                <nav className="block md:hidden">
                    <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white dark:text-gray-300 mobile-nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            )}
            <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'>
                <Bars3Icon className='text-white dark:text-gray-300 h-5' />
            </button>
        </header>
    );
}
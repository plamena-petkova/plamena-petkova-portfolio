import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import MotionGestureContainer from '../animations/MotionGestureContainer';
import Link from 'next/link';

type NavbarProps = {
    isHome:boolean
}

const Navbar = ({ isHome }: NavbarProps) => {

    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start">
                {isHome && <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href="#skills" className="text-lg hover:text-secondary cursor-pointer">Skills</Link></li>
                        <li><Link href="#projects" className="text-lg hover:text-secondary cursor-pointer">Projects</Link></li>
                        <li><Link href="#certificates" className="text-lg hover:text-secondary">Certificates</Link></li>
                        <li><Link href="#timeline" className="text-lg hover:text-secondary cursor-pointer">Timeline</Link></li>
                    </ul>
                </div>}
                <div className="flex flex-row items-center">
                    <Link href='/' className="cursor-pointer hover:text-primary text-xl font-semibold mr-2">Plamena Petkova</Link>
                    <a href='https://github.com/plamena-petkova/plamena-petkova-portfolio' target='_blank' rel="noopener noreferrer"><FaCode className='hover:text-primary' size={24} /></a>
                </div>
            </div>
            {isHome && <div className="navbar-center hidden lg:flex">
                <ul className="flex flex-row gap-3">
                    <li><Link href='#skills' className="text-lg hover:text-secondary hover:link cursor-pointer">Skills</Link></li>
                    <li><Link href='#projects' className="text-lg hover:text-secondary hover:link cursor-pointer">Projects</Link></li>
                    <li><Link href='#certificates' className="text-lg hover:text-secondary hover:link">Certificates</Link></li>
                    <li><Link href="#timeline" className="text-lg hover:text-secondary hover:link cursor-pointer">Timeline</Link></li>


                </ul>
            </div>}

            <div className="navbar-end gap-1">
                <MotionGestureContainer><a href='https://github.com/plamena-petkova' target='_blank' rel="noopener noreferrer" className="btn btn-ghost"><FaGithub size={30} /></a></MotionGestureContainer>
                <MotionGestureContainer><a href='https://www.linkedin.com/in/plamena-petkova-a1280163/' target='_blank' rel="noopener noreferrer" className="btn btn-ghost"><FaLinkedin size={30} /></a></MotionGestureContainer>
            </div>
        </div>
    );
};

export default Navbar;
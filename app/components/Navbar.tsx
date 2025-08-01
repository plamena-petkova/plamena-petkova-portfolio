import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import MotionGestureContainer from '../animations/MotionGestureContainer';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a className="text-lg hover:text-secondary cursor-pointer">Projects</a></li>
                        <li><a className="text-lg hover:text-secondary cursor-pointer">Timeline</a></li>
                        <li><a className="text-lg hover:text-secondary cursor-pointer">Skills</a></li>
                        <li><a className="text-lg hover:text-secondary cursor-pointer">Certificates</a></li>
                    </ul>
                </div>
                <a className="cursor-pointer hover:text-primary text-xl font-semibold">Plamena Petkova</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex flex-row gap-3">
                    <li><a className="text-lg hover:text-secondary hover:link cursor-pointer">Projects</a></li>
                    <li><a className="text-lg hover:text-secondary hover:link cursor-pointer">Timeline</a></li>
                    <li><a className="text-lg hover:text-secondary hover:link cursor-pointer">Skills</a></li>
                    <li><a className="text-lg hover:text-secondary hover:link cursor-pointer">Certificates</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-1">
                <MotionGestureContainer><a href='https://github.com/plamena-petkova' target='_blank' className="btn btn-ghost"><FaGithub size={30} /></a></MotionGestureContainer>
                <MotionGestureContainer><a href='https://www.linkedin.com/in/plamena-petkova-a1280163/' target='_blank' className="btn btn-ghost"><FaLinkedin size={30} /></a></MotionGestureContainer>
            </div>
        </div>
    );
};

export default Navbar;
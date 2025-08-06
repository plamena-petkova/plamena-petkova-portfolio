import React from 'react';
import MotionContainer from '../animations/MotionContainer';
import MotionGestureContainer from '../animations/MotionGestureContainer';
import Image from 'next/image';
import ButtonDownload from './ButtonDownload';

const Hero = () => {
    return (
        <MotionContainer >
            <div className="hero bg-base-100 mt-0 lg:mt-12 md:mt-12">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h3 className="font-semibold">Hey there, I&apos;m a</h3>
                        <h1 className="text-4xl font-semibold text-primary">Frontend developer</h1>
                        <h2 className="text-xl font-semibold">with a passion for creating and refining digital products.</h2>
                        <p className='mt-3 mb-4 text-sm'> I care deeply about the details — not just making things work, but making them feel right. I&apos;m always learning, always tweaking, and always aiming to turn ideas into something clean, useful, and real.</p>
                        <ButtonDownload />
                    </div>
                    <MotionGestureContainer>
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-56 rounded-full ring-2 ring-offset-2">
                                <Image
                                    src="/plamena-petkova-profile-picture.png"
                                    width={200}
                                    height={200}
                                    alt="profile-pic"
                                    priority
                                />
                            </div>
                        </div>
                    </MotionGestureContainer>
                </div>
            </div>
        </MotionContainer>
    );
};

export default Hero;
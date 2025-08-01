import React from 'react';
import ProjectCard from './ProjectCard';
import MotionContainer from '../animations/MotionContainer';

const ProjectList = () => {
    return (
        <MotionContainer >
            <div className='mt-10'>
                <div className="flex w-full flex-col">
                    <h1 className='divider text-3xl text-primary text-center font-semibold'>Projects</h1>
                </div>
                <div className="flex justify-center ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-20">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
            </div>
        </MotionContainer>
    );
};

export default ProjectList;
'use client'
import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import MotionContainer from '../animations/MotionContainer';
import { useProjectsStore } from '@/store/projectStore';

const ProjectList = () => {


    const { projects, loading, error, fetchProjects } = useProjectsStore();

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    if (loading) return <div className="flex items-center"><span className="loading loading-ball loading-xs"></span></div>;
    if (error) return <p>Error: {error}</p>;


    return (
        <MotionContainer >
            <div id='projects' className='mt-10'>
                <div className="flex w-full flex-col">
                    <h1 className='divider text-3xl text-primary text-center font-semibold'>Projects</h1>
                </div>
                <div className="flex justify-center ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-20">
                       {projects.map((project) => {
                        return <ProjectCard key={project.id} {...project} />
                       })} 
                       
                    </div>
                </div>
            </div>
        </MotionContainer>
    );
};

export default ProjectList;
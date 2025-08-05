'use client'
import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { useProjectsStore } from '@/store/projectStore';
import LoadingSpinner from './LoadingSpinner';

const ProjectList = () => {


    const { projects, loading, error, fetchProjects } = useProjectsStore();

    useEffect(() => {
        fetchProjects()
    }, [fetchProjects]);

    if (loading) return <div className="flex items-center"><span className="loading loading-ball loading-xs"></span></div>;
    if (error) return <p>Error: {error}</p>;


    return (
        <div id='projects' className='mt-10'>
            <div className="flex w-full flex-col">
                <h1 className='divider text-3xl text-primary text-center font-semibold'>Projects</h1>
            </div>
            <div className="flex justify-center ">
                {loading && (
                    <LoadingSpinner />
                )}

                {error && (
                    <p className="text-red-500 text-center mt-4">Error: {error}</p>
                )}
                {!loading && !error && (<div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-20">
                    {projects.map((project) => {
                        return <ProjectCard key={project.id} {...project} />
                    })}

                </div>)}
            </div>
        </div>
    );
};

export default ProjectList;
'use client';

import Navbar from '@/app/components/Navbar';
import { ProjectProps, useProjectsStore } from '@/store/projectStore';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const ProjectDetails = () => {
    const { id } = useParams();
    const { projects, fetchProjects } = useProjectsStore();
    const [project, setProject] = useState<ProjectProps | null>(null);
    const [techStackArray, setTechStackArray] = useState<string[]>([]);

    useEffect(() => {
        if (projects.length === 0) {
            fetchProjects();
        }
    }, [fetchProjects, projects.length]);

    useEffect(() => {
        if (projects.length > 0 && id) {
            const foundProject = projects.find(
                (project: ProjectProps) => Number(project.id) === Number(id)
            );

            setProject(foundProject || null);

            if (foundProject?.techStack?.[0]) {
                setTechStackArray(foundProject.techStack[0].split(',').map((tech) => tech.trim()));
            } else {
                setTechStackArray([]);
            }
        }
    }, [id, projects]);

    if (!project) {
        return (
            <>
                <Navbar isHome={false} />
                <div className="text-center mt-10">Loading project...</div>
            </>
        );
    }

    return (
        <>
            <Navbar isHome={false} />
            <div className="breadcrumbs text-sm mt-10">
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/#projects'>Projects</Link></li>
                    <li>{project.title}</li>
                </ul>
            </div>

            <div className='mt-5'>
                <p className='text-3xl text-primary'>{project.title}</p>
                <p className='mt-2'>{project.description}</p>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {techStackArray.map((tech, index) => (
                        <span key={index} className='badge badge-secondary'>{tech}</span>
                    ))}
                </div>
            </div>


            <div className='mt-6 flex gap-4'>
                {project.gitRepos?.length > 0 && (
                    <div className="flex flex-col items-start">
                        <div className="mt-6 flex flex-row gap-2 items-center">
                            <FaGithub size={24} /> {project.gitRepos.map((repo, index) => (
                                <a
                                    key={index}
                                    href={repo.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link link-hover text-primary"
                                >
                                    Repo {repo.use}
                                </a>
                            ))}

                        </div>
                        <div className="mt-6 flex flex-row gap-2 items-center">
                            {project.liveDemo && <><FaLink size={24} /> <a target="_blank" rel="noopener noreferrer" className="link link-hover text-primary" href={project.liveDemo}>Live Demo</a></>}
                        </div>
                    </div>
                )}



            </div>
        </>
    );
};

export default ProjectDetails;

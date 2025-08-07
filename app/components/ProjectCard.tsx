import React from 'react';
import MotionGestureContainer from '../animations/MotionGestureContainer';
import { ProjectProps } from '@/store/projectStore';
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = (project: ProjectProps) => {

    const techStackArray = project.techStack[0].split(',');


    return (
        <MotionGestureContainer>
            <div className="card bg-base-300 w-84 h-[36rem] shadow-sm mt-10">
                <figure className="h-48 overflow-hidden">
                    <Image
                        width={200}
                        height={130}
                        className="w-full h-full object-cover"
                        src={project.picture ? project.picture : "/rocket-generic-pic.svg"}
                        alt="project-pic" />
                </figure>
                <div className="card-body w-84">
                    <div className="flex flex-col justify-between h-[20rem]">
                        <div className="flex flex-col justify-between">
                            <h2 className="card-title mt-2">{project.title}</h2>
                            <p>{project.overview}</p>
                            <div className="card-actions flex-wrap gap-1 mt-2">
                                {techStackArray.map((stack: string, index: number) => {
                                    return <p key={index} className="badge badge-outline ">{stack}</p>
                                })}

                            </div>
                        </div>
                        <div className="card-actions mt-2">
                            <Link href={`/projects/${project.id}`} className="btn btn-primary">Details</Link>
                            {project.liveDemo && <Link className='btn btn-secondary' href={project?.liveDemo} target='_blank'>Live Demo</Link>}
                        </div>
                    </div>
                </div>
            </div>
        </MotionGestureContainer>
    );
};

export default ProjectCard;
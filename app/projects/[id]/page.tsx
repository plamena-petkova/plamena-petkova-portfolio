'use client'
import { ProjectProps, useProjectsStore } from '@/store/projectStore';
import { useParams } from 'next/navigation';
import { title } from 'process';
import React, { useEffect, useState } from 'react';

const ProjectDetails = () => {

    const { id } = useParams();

    const { projects } = useProjectsStore();

    const [project, setProject] = useState<ProjectProps>();

    useEffect(() => {
        if (projects) {
            setProject(projects.find((project: ProjectProps) => Number(project.id) === Number(id)))
        }
    }, [])


    return (
        <div>
            {project?.title}
        </div>
    );
};

export default ProjectDetails;
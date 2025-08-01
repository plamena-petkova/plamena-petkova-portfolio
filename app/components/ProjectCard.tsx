import React from 'react';
import MotionGestureContainer from '../animations/MotionGestureContainer';

const ProjectCard = () => {
    return (
        <MotionGestureContainer>
            <div className="card bg-base-300 w-96 shadow-sm mt-10">
                <figure>
                    <img
                        src="/rocket-generic-pic.svg"
                        alt="project-pic" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title mt-2">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-start">
                        <p className="badge badge-outline ">Typescript</p>
                        <p className="badge badge-outline">Nextjs</p>
                        <p className="badge badge-outline">Primary</p>
                        <p className="badge badge-outline">Primary</p>
                        <p className="badge badge-outline">Primary</p>
                        <p className="badge badge-outline">Primary</p>
                        <p className="badge badge-outline">Primary</p>
                        <p className="badge badge-outline">Primary</p>
                        <p className="badge badge-outline">Primary</p>

                    </div>
                    <div className="card-actions mt-3">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </MotionGestureContainer>
    );
};

export default ProjectCard;
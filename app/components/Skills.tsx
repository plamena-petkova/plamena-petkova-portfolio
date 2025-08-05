import React from 'react';

const data = {
    languagesAndFrameworks: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Redux",
        "Zustand",
        "Socket.IO",
        "NextAuth",
        "JWT"
    ],
    stylingAndUiLibraries: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "DaisyUI",
        "Material UI"
    ],
    backendAndInfrastructure: [
        "Node.js",
        "Express",
        "REST API",
        "MongoDB",
        "Mongoose",
        "Firebase",
        "Supabase",
        "Back4App",
        "Jest",
        "Postman",
        "GitHub",
        "GitHub Actions",
        "Linux"
    ],
    toolsAndPlatforms: [
        "Jira",
        "Trello",
        "ServiceNow",
        "Sitecore"
    ]
};


const Skills = () => {
    return (
        <div id='skills' className='mt-10'>
            <div className="flex w-full flex-col">
                <h1 className='divider text-3xl text-primary text-center font-semibold'>Skills</h1>
            </div>
            <div className="tabs tabs-lift mt-4">
                <label className="tab">
                    <input type="radio" name="my_tabs_4" defaultChecked />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 me-2"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" /></svg>
                    Languages & Frontend Libraries
                </label>
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {data.languagesAndFrameworks.map((item, index) => <p key={index} className='badge badge-secondary mr-2 mt-2'>{item}</p>)}

                </div>

                <label className="tab">
                    <input type="radio" name="my_tabs_4" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 me-2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" /></svg>
                    Styling and UI Component Libraries
                </label>
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {data.stylingAndUiLibraries.map((item, index) => <p key={index} className='badge badge-secondary mr-2 mt-2'>{item}</p>)}
                </div>


                <label className="tab">
                    <input type="radio" name="my_tabs_4" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 me-2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                    Backend and Infrastructure
                </label>
                <div className="tab-content bg-base-100 border-base-300 p-6"> {data.backendAndInfrastructure.map((item, index) => <p key={index} className='badge badge-secondary mr-2 mt-2'>{item}</p>)}</div>
                <label className="tab">
                    <input type="radio" name="my_tabs_4" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4 me-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
                        />
                    </svg>

                    Tools and Platforms
                </label>
                <div className="tab-content bg-base-100 border-base-300 p-6"> {data.toolsAndPlatforms.map((item, index) => <p key={index} className='badge badge-secondary mr-2 mt-2'>{item}</p>)}</div>

            </div>
        </div>
    );
};

export default Skills;
import React from 'react';
import UsePresenceData from '../animations/MotionCarousel';

const Certificates = () => {

    const items = [
        "/certificates/NextjsCertificate.jpg",
        "/certificates/CSSCertificate.jpg",
        "/certificates/GithubActionCertificate.jpg",
        "/certificates/JestCertificate.jpg",
        "/certificates/AngularCertificate.jpeg",
        "/certificates/HTMLCSSCertificate.jpeg",
        "/certificates/JSAdvancedCertificate.jpeg",
        "/certificates/JSApplicationsCertificate.jpeg",
        "/certificates/ProgrammingBasicsCertificate.jpeg",
        "/certificates/ProgrammingFundamentalsCertificate.jpeg",
        "/certificates/ReactJS.jpeg",
        "/certificates/SitecoreCertificate.jpg",
    ]

    return (
        <div id='certificates' className='mt-12'>
            <div className="flex w-full flex-col">
                <h1 className='divider text-3xl text-primary text-center font-semibold'>Certificates</h1>
            </div>
            <UsePresenceData items={items} />
        </div>
    );
};

export default Certificates;
import React from 'react';
import {motion} from 'framer-motion'

const LoadingSpinner = () => {
    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center items-center h-48"
        >
            <span className="loading loading-ball loading-xs" />
        </motion.div>
    );
};

export default LoadingSpinner;


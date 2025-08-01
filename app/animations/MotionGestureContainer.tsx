import * as motion from "motion/react-client";
import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const MotionGestureContainer = ({ children }: Props) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2, ease: 'easeIn' }}
        >
            {children}
        </motion.div>
    );
};

export default MotionGestureContainer;

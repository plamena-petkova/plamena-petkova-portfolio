import * as motion from "motion/react-client";
import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const MotionContainer = ({ children }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            {children}
        </motion.div>
    );
};

export default MotionContainer;

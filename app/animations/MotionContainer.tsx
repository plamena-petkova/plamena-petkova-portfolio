'use client';
import * as motion from 'motion/react-client';
import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const MotionContainer = ({ children }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default MotionContainer;

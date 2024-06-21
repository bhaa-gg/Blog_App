"use client"
import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const Post_animtion = ({ children }) => {
    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={children.props.property == -600 ? { y: -600, opacity: 0 } : { x: -600, opacity: 0 }}
                    animate={children.props.property == -600 ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: children.props.delay }}
                    className="">
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default Post_animtion

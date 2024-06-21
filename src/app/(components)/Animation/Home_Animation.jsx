"use client"
import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const Home_Animation = ({ children }) => {
    return (
        <div>
            <AnimatePresence>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: children.props.delay }}
                    className="">
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Home_Animation

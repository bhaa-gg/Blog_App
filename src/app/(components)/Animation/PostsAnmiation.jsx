"use client"
import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const PostsAnmiation = ({ children }) => {
    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={{ y: -100 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="col-md-6 z-50 rounded ">
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default PostsAnmiation

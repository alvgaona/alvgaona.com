import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}


const AnimatedLayout = ({ children }: { children: React.ReactNode }) => (
    <AnimatePresence
        initial={true}
        onExitComplete={() => {
            if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
            }
        }}
    >
        <motion.div
            key="main"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            className="duration-1000 ease-in-out"
        >
            {children}
        </motion.div>
    </AnimatePresence>
)

export default AnimatedLayout

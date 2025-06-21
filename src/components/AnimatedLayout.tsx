import { AnimatePresence, motion } from 'framer-motion';

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual';
}

const AnimatedLayout = ({ children }: { children: React.ReactNode }): JSX.Element => (
    <AnimatePresence
        initial={true}
        onExitComplete={() => {
            if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 });
            }
        }}
    >
        <motion.div
            key="main"
            initial={{ opacity: 0, x: 0, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -0, y: 20 }}
            className="duration-500 ease-in-out"
        >
            {children}
        </motion.div>
    </AnimatePresence>
);

export default AnimatedLayout;

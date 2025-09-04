import { motion } from 'motion/react';

type SideMenuProps = {
    onClose: () => void;
};

function SideMenu({ onClose }: SideMenuProps) {
    const toggleDuration: number = 1;

    return (
        <div className="fixed inset-0 z-[1] bg-black/25" onClick={onClose}>
            <motion.div
                className="bg-bg-primary absolute top-0 right-0 bottom-0 flex w-3/4 flex-col p-6 pr-[calc(5%+calc(var(--spacing)*6))] md:w-1/2"
                onClick={(e) => e.stopPropagation()}
                initial={{
                    right: '-100%',
                }}
                animate={{
                    right: '-5%',
                    // transition: {
                    //     type: 'spring',
                    //     stiffness: 50,
                    // },
                }}
                exit={{
                    right: '-100%',
                    // transition: {
                    //     type: 'spring',
                    //     stiffness: 50,
                    // },
                }}
                transition={{
                    duration: toggleDuration,
                    ease: 'backInOut',
                    // damping: 20,
                }}
            >
                <div className="mb-6 text-2xl font-medium">Menu</div>
                <ul className="text-primary space-y-4 text-lg">
                    <li>
                        <a
                            href="#"
                            className="hover:text-primary-hover focus:text-primary-hover flex gap-3 transition-colors"
                        >
                            Shop all
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:text-primary-hover focus:text-primary-hover flex gap-3 transition-colors"
                        >
                            Latest arrivals
                        </a>
                    </li>
                </ul>
            </motion.div>
        </div>
    );
}

export default SideMenu;

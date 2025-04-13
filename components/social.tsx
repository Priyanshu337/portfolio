"use client"

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

export default function Social() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="fixed left-0 top-1/2 z-40 -translate-y-1/2 hidden sm:block"
        >
            <div className="flex flex-col items-center gap-3 rounded-r-lg bg-white/80 p-1.5 shadow-lg backdrop-blur-sm dark:bg-white/10 sm:gap-4 sm:p-2">
                <a
                    href="https://github.com/Priyanshu337"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-black transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-300 sm:text-xl md:text-2xl"
                    aria-label="GitHub"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.linkedin.com/in/priyanshu0209"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-black transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-300 sm:text-xl md:text-2xl"
                    aria-label="LinkedIn"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </motion.div>
    )
}


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
            className="fixed left-0 top-1/2 z-50 -translate-y-1/2"
        >
            <div className="flex flex-col items-center gap-4 rounded-r-lg bg-white/80 p-2 shadow-lg dark:bg-white/10">
                <a
                    href="https://github.com/Priyanshu337"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-black transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.linkedin.com/in/priyanshu0209"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-black transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </motion.div>
    )
}


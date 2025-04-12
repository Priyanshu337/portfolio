"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function About() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl space-y-6"
        >
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Full Stack Developer | Problem Solver | Tech Enthusiast
            </p>
          </div>
          <div className="mx-auto max-w-[700px] text-center text-neutral-500 dark:text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <p>
              I am a passionate Full Stack Developer with expertise in building scalable web applications.
              With a strong foundation in both frontend and backend technologies, I create efficient,
              user-friendly solutions that solve real-world problems.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
            >
              <Mail className="size-6 text-neutral-500 dark:text-neutral-400" />
              <div>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Email</p>
                <p className="text-sm text-neutral-900 dark:text-neutral-100">priyanshuchoudhary0104@gmail.com</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
            >
              <Phone className="size-6 text-neutral-500 dark:text-neutral-400" />
              <div>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Phone</p>
                <p className="text-sm text-neutral-900 dark:text-neutral-100">+1 (647)-937-2641</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
            >
              <MapPin className="size-6 text-neutral-500 dark:text-neutral-400" />
              <div>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Location</p>
                <p className="text-sm text-neutral-900 dark:text-neutral-100">Toronto, ON, Canada</p>
              </div>
            </motion.div>
          </div>
          <div className="flex justify-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/Priyanshu337"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              <FontAwesomeIcon icon={faGithub} className="size-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/priyanshu0209/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              <FontAwesomeIcon icon={faLinkedin} className="size-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://x.com/Priyans36323552"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              <FontAwesomeIcon icon={faTwitter} className="size-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

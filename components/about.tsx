"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Copy, Check } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"

export default function About() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
              Full-Stack Software Engineer | AI-Native Applications | SaaS Platforms
            </p>
          </div>
          <div className="mx-auto max-w-[700px] text-center text-neutral-500 dark:text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <p>
              Results-driven Full-Stack Software Engineer with 1+ year of experience building production-grade AI-native applications and scalable SaaS platforms. Strong expertise in JavaScript, TypeScript, React, Node.js, and modern AI frameworks (LangGraph, LangChain, OpenAI). Deep understanding of data structures, algorithms, design patterns, and distributed systems.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
            >
              <Mail className="size-6 shrink-0 text-neutral-500 dark:text-neutral-400" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Email</p>
                <div className="flex items-center gap-2">
                  <p className="break-all text-sm text-neutral-900 dark:text-neutral-100">priyanshuchoudhary0104@gmail.com</p>
                  <button
                    onClick={() => copyToClipboard("priyanshuchoudhary0104@gmail.com")}
                    className="rounded-full p-1 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                    aria-label="Copy email"
                    title="Copy email"
                  >
                    {copied ? (
                      <Check className="size-4 text-green-500" />
                    ) : (
                      <Copy className="size-4" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
            >
              <Phone className="size-6 text-neutral-500 dark:text-neutral-400" />
              <div>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Phone</p>
                <p className="text-sm text-neutral-900 dark:text-neutral-100">+91 9875050087</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
            >
              <MapPin className="size-6 text-neutral-500 dark:text-neutral-400" />
              <div>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Location</p>
                <p className="text-sm text-neutral-900 dark:text-neutral-100">Ahmedabad, Gujarat, India</p>
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

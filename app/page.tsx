"use client"

import Image from "next/image"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import About from "../components/about"
import EXP from "../components/Experience"
import Contact from "../components/Contact"
import Project from "@/components/Project"
import Education from "@/components/Education"
import Skills from "@/components/Skills"
import { useEffect, useState } from "react"

export default function IndexPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Add a small delay to ensure all components are properly initialized
    const timer = setTimeout(() => {
      setLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black">
        <div className="text-center">
          <div className="mb-4 h-8 w-8 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"></div>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Loading your portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white shadow-[0_0_15px_-3px_rgba(0,0,0,0.1)] dark:bg-black dark:shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)]">
      <div className="flex h-auto flex-col justify-center py-6 md:h-[90vh] md:py-0" id="home">
        <div className="container mx-auto flex flex-col items-center px-3 pt-2 md:flex-row md:items-start md:justify-between md:gap-10 md:px-4 md:pt-10">
          <section className="w-full px-0 sm:px-2 md:w-1/2 md:px-0">
            <div className="flex flex-col gap-3 text-center md:gap-4 md:text-left">
              <h1 className="text-3xl font-extrabold leading-tight tracking-tighter text-black dark:text-white sm:text-4xl md:text-4xl lg:text-[2.5rem]">
                Priyanshu Choudhary</h1>
              <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 sm:text-xl md:text-2xl">
                Full-Stack Software Engineer | AI-Native Applications | SaaS Platforms
              </h2>
              <p className="text-base font-medium leading-6 text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-7 md:max-w-[600px]">
                Results-driven Full-Stack Software Engineer with 1+ year of experience building production-grade AI-native applications and scalable SaaS platforms. Strong expertise in JavaScript, TypeScript, React, Node.js, and modern AI frameworks.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 sm:text-lg">
                Let&apos;s build something amazing together!
              </p>
              <div className="flex justify-center gap-5 md:justify-start md:gap-6">
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  title="Github Profile"
                  className="text-blue-600 transition-transform hover:scale-110 hover:text-[#147efb] focus:text-[#147efb] active:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:active:text-blue-600"
                  href="https://github.com/Priyanshu337"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    height={24}
                    width={24}
                    className="hover:text-[#147efb] sm:h-[30px] sm:w-[30px]"
                  />
                </a>
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  title="LinkedIn Profile"
                  className="text-blue-600 transition-transform hover:scale-110 hover:text-[#147efb] focus:text-[#147efb] active:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:active:text-blue-600"
                  href="https://www.linkedin.com/in/priyanshu0209/"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    height={24}
                    width={24}
                    className="hover:text-[#147efb] sm:h-[30px] sm:w-[30px]"
                  />
                </a>
                <a
                  aria-label="resume"
                  data-te-toggle="tooltip"
                  title="Resume"
                  rel="noreferrer"
                  className="text-blue-600 transition-transform hover:scale-110 hover:text-[#147efb] focus:text-[#147efb] active:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:active:text-blue-600"
                  target="_blank"
                  href="https://docs.google.com/document/d/1VXBUyVZzisyPiO-cOXJeq9I4j7v5y3ZKFrR7En6_zok/edit"
                >
                  <FontAwesomeIcon
                    icon={faFile}
                    height={24}
                    width={24}
                    className="hover:text-[#147efb] sm:h-[30px] sm:w-[30px]"
                  />
                </a>
              </div>
            </div>
          </section>
          <div className="mt-6 flex w-full justify-center sm:mt-8 md:mt-0 md:w-1/2">
            <div className="hero-img" />
          </div>
        </div>

        <div className="container mx-auto mt-8 px-3 sm:mt-10 md:mt-20 md:px-4">
          <div className="skills flex flex-col flex-wrap items-center justify-center text-center md:flex-row md:items-start md:justify-start">
            <h1 className="mb-3 flex text-lg font-extrabold text-black dark:text-white sm:mb-4 sm:text-xl md:text-2xl">Tech Stack</h1>
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:justify-start md:gap-4">
              <li className="transition-transform hover:scale-110">
                <Image
                  src="/typescript.png"
                  title="Typescript"
                  alt="program_img"
                  width={32}
                  height={32}
                  className="transition-opacity hover:opacity-80 sm:h-[38px] sm:w-[38px]"
                />
              </li>
              <li className="transition-transform hover:scale-110">
                <Image
                  src="/node-js.png"
                  title="Node Js"
                  alt="program_img"
                  width={32}
                  height={32}
                  className="transition-opacity hover:opacity-80 sm:h-[38px] sm:w-[38px]"
                />
              </li>
              <li className="transition-transform hover:scale-110">
                <Image
                  src="/react.png"
                  title="React Js"
                  alt="program_img"
                  width={32}
                  height={32}
                  className="transition-opacity hover:opacity-80 sm:h-[38px] sm:w-[38px]"
                />
              </li>
              <li className="transition-transform hover:scale-110">
                <Image
                  src="/html-5.png"
                  title="HTML 5"
                  alt="program_img"
                  width={32}
                  height={32}
                  className="transition-opacity hover:opacity-80 sm:h-[38px] sm:w-[38px]"
                />
              </li>
              <li className="transition-transform hover:scale-110">
                <Image
                  src="/css-3.png"
                  title="CSS 3"
                  alt="program_img"
                  width={32}
                  height={32}
                  className="transition-opacity hover:opacity-80 sm:h-[38px] sm:w-[38px]"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="about">
        <About />
      </div>

      <div id="experience">
        <EXP />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="education">
        <Education />
      </div>

      <div id="project">
        <Project />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </main>
  )
}

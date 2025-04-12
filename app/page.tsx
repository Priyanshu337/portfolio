import Image from "next/image"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import About from "../components/about"
import EXP from "../components/Experience"
import Contact from "../components/Contact"
import Social from "../components/Social"
import Project from "@/components/Project"
import Education from "@/components/Education"
import Skills from "@/components/Skills"

export default function IndexPage() {
  return (
    <main className="min-h-screen bg-white shadow-[0_0_15px_-3px_rgba(0,0,0,0.1)] dark:bg-black dark:shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)]">
      <div className="flex h-auto flex-col justify-center md:h-[90vh]" id="home">
        <div className="container mx-auto flex flex-row items-center justify-between gap-10 px-4 pt-10">
          <section className="w-1/2">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl font-extrabold leading-tight tracking-tighter text-black dark:text-white sm:text-3xl md:text-4xl lg:text-[2.5rem]">
                Priyanshu Choudhary</h1>
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                Fullstack Developer | NextJS | ReactJS | Node
              </h2>
              <p className="max-w-[600px] text-xl font-medium leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                Hi there, I'm a FullStack developer who builds for Web and Mobile Applications with a design-oriented approach.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Let&apos;s build something amazing together!
              </p>
              <div className="flex gap-4">
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  title="Github Profile"
                  className="text-blue-600 transition-transform hover:scale-110 hover:text-[#147efb] focus:text-[#147efb] active:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:active:text-blue-600"
                  href="https://github.com/Priyanshu337"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    height={30}
                    width={30}
                    className="hover:text-[#147efb]"
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
                    height={30}
                    width={30}
                    className="hover:text-[#147efb]"
                  />
                </a>
                <a
                  aria-label="linkedin"
                  data-te-toggle="tooltip"
                  title="Resume"
                  rel="noreferrer"
                  className="text-blue-600 transition-transform hover:scale-110 hover:text-[#147efb] focus:text-[#147efb] active:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:active:text-blue-600"
                  target="_blank"
                  href="https://docs.google.com/document/d/1VXBUyVZzisyPiO-cOXJeq9I4j7v5y3ZKFrR7En6_zok/edit"
                >
                  <FontAwesomeIcon
                    icon={faFile}
                    height={30}
                    width={30}
                    className="hover:text-[#147efb]"
                  />
                </a>
              </div>
            </div>
          </section>
          <div className="flex w-1/2 justify-center">
            <div className="hero-img" />
          </div>
        </div>

        <div className="container mx-auto mt-20 px-4">
          <div className="skills flex flex-row flex-wrap items-center justify-start text-center">
            <h1 className="mb-4 flex text-2xl font-extrabold text-black dark:text-white">Tech Stack</h1>
            <ul className="flex flex-wrap gap-4">
              <li className="transition-transform hover:scale-110">
                <Image
                  src="/typescript.png"
                  title="Typescript"
                  alt="program_img"
                  width={38}
                  height={38}
                  className="transition-opacity hover:opacity-80"
                />
              </li>
              <li className="transition-transform hover:scale-110">
                <Image
                  src="/node-js.png"
                  title="Node Js"
                  alt="program_img"
                  width={38}
                  height={38}
                  className="transition-opacity hover:opacity-80"
                />
              </li>
              <li className="transition-transform hover:scale-110">
                <Image
                  src="/react.png"
                  title="React Js"
                  alt="program_img"
                  width={38}
                  height={38}
                  className="transition-opacity hover:opacity-80"
                />
              </li>
              <li className="transition-transform hover:scale-110">
                <Image
                  src="/html-5.png"
                  title="HTML 5"
                  alt="program_img"
                  width={38}
                  height={38}
                  className="transition-opacity hover:opacity-80"
                />
              </li>
              <li className="transition-transform hover:scale-110">
                <Image
                  src="/css-3.png"
                  title="CSS 3"
                  alt="program_img"
                  width={38}
                  height={38}
                  className="transition-opacity hover:opacity-80"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="about">
        <About />
      </div>

      <div id="education">
        <Education />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="experience">
        <EXP />
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

import Image from "next/image"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import About from "../components/about"
import EXP from "../components/Experience"
import Contact from "../components/Contact"
import Social from "@/components/Social"
import Project from "@/components/Project"
import Education from "@/components/Education"
import Skills from "@/components/Skills"

export default function IndexPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="flex h-auto flex-col justify-center md:h-[90vh]" id="home">
        <div className="flex flex-row flex-wrap-reverse items-center justify-center gap-10 pt-10 sm:flex-wrap">
          <section className="container grid items-center gap-4 md:w-[70%]">
            <div className="flex flex-col items-center justify-center gap-4 text-center md:w-[70%] md:items-start md:text-start">
              <h1 className="text-5xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:text-4.5xl dark:text-white text-black">
                Priyanshu Choudhary
              </h1>
              <h2 className="text-2xl font-semibold dark:text-gray-300 text-gray-700">
                Fullstack Developer | NextJS | ReactJS | Node
              </h2>
              <p className="max-w-[500px] text-xl font-medium leading-7 dark:text-gray-400 text-gray-600 sm:text-base">
                Hi there, I'm a FullStack developer who builds for Web and Mobile Applications with a design-oriented approach.
              </p>
              <p className="text-lg dark:text-gray-300 text-gray-700">
                Let&apos;s build something amazing together!
              </p>
            </div>
            <div className="flex justify-center gap-4 md:justify-start">
              <a
                aria-label="linkedin"
                rel="noreferrer"
                target="_blank"
                title="Github Profile"
                className="hover:text-[#147efb] focus:text-[#147efb] active:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:active:text-blue-600 text-blue-600 ease-in-out transition-transform hover:scale-110"
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
                className="hover:text-[#147efb] focus:text-[#147efb] active:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:active:text-blue-600 text-blue-600 ease-in-out transition-transform hover:scale-110"
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
                className="hover:text-[#147efb] focus:text-[#147efb] active:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:active:text-blue-600 text-blue-600 ease-in-out transition-transform hover:scale-110"
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
          </section>
          <div className="hero-img" />
        </div>

        <div className="skills mt-2 flex flex-row flex-wrap items-center justify-start pl-[3rem] pt-10 text-center">
          <h1 className="mb-4 flex font-extrabold text-2xl dark:text-white text-black">Tech Stack</h1>
          <ul className="flex flex-wrap gap-4">
            <li className="transition-transform hover:scale-110">
              <Image
                src="/typescript.png"
                title="Typescript"
                alt="program_img"
                width={38}
                height={38}
                className="hover:opacity-80 transition-opacity"
              />
            </li>
            <li className="transition-transform hover:scale-110">
              <Image
                src="/node-js.png"
                title="Node Js"
                alt="program_img"
                width={38}
                height={38}
                className="hover:opacity-80 transition-opacity"
              />
            </li>
            <li className="transition-transform hover:scale-110">
              <Image
                src="/react.png"
                title="React Js"
                alt="program_img"
                width={38}
                height={38}
                className="hover:opacity-80 transition-opacity"
              />
            </li>
            <li className="transition-transform hover:scale-110">
              <Image
                src="/html-5.png"
                title="HTML 5"
                alt="program_img"
                width={38}
                height={38}
                className="hover:opacity-80 transition-opacity"
              />
            </li>
            <li className="transition-transform hover:scale-110">
              <Image
                src="/css-3.png"
                title="CSS 3"
                alt="program_img"
                width={38}
                height={38}
                className="hover:opacity-80 transition-opacity"
              />
            </li>
          </ul>
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

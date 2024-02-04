import Image from "next/image"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFile } from '@fortawesome/free-solid-svg-icons'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import About from "../components/about"
import EXP from "../components/Experience"
import Contact from "../components/Contact"




export default function IndexPage() {
  return (
    <>
    <div className="flex h-auto flex-col justify-center md:h-[90vh]" id="home">
      <div className="flex flex-row flex-wrap-reverse items-center justify-center gap-10 pt-10  sm:flex-wrap">
        <section className="container grid items-center gap-4 md:w-[70%]">
          <div className="flex flex-col items-center  justify-center gap-4 text-center md:w-[70%] md:items-start md:text-start">
            <h1 className="text-5xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
              Software Engineer 👋
            </h1>
            <p className="max-w-[500px] text-xl font-medium leading-7 text-muted-foreground sm:text-base">
              Hi, I&apos;m Priyanshu Choudhary. A passionate Fullstack Engineer based in
              Ontario, Canada.
            </p>
          </div>
          <div className="flex justify-center gap-4 md:justify-start">
            <a
              aria-label="linkedin"
              rel="noreferrer"
              target="_blank"
              title="Github Profile"
              className="hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 text-primary ease-in-out"
              href="https://github.com/manojown"
            >
              <FontAwesomeIcon
                icon={faGithub}
                height={30}
                width={30}
                className="hover:text-sky-700"
              />
            </a>
            <a
              aria-label="linkedin"
              rel="noreferrer"
              target="_blank"
              title="LinkedIn Profile"
              className="hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 text-primary ease-in-out"
              href="https://www.linkedin.com/in/priyanshu0209/"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                height={30}
                width={30}
                className="hover:text-sky-700"
              />
            </a>
            <a
              aria-label="linkedin"
              data-te-toggle="tooltip"
              title="Resume"
              rel="noreferrer"
              className="hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 text-primary ease-in-out"
              target="_blank"
              href="https://docs.google.com/document/d/1aEFPglRkq3UTaJAgBovHoAYtaGau3OmF9IITwcfKPu0/edit?usp=sharing"
            >
              <FontAwesomeIcon
                icon={faFile}
                height={30}
                width={30}
                className="hover:text-sky-700"
              />
            </a>
          </div>
        </section>
        <div className="hero-img" />
      </div>
      <div className="skills mt-2 flex flex-row flex-wrap items-center justify-start pl-[3rem] pt-10 text-center">
        <h1 className="mb-4 flex font-extrabold ">Tech Stack</h1>
        <ul>
          <li>
            <Image
              src="/typescript.png"
              title="Typescript"
              alt="program_img"
              width={38}
              height={38}
            />
          </li>
          <li>
            <Image
              src="/node-js.png"
              title="Node Js"
              alt="program_img"
              width={38}
              height={38}
            />
          </li>
          <li>
            <Image
              src="/react.png"
              title="React Js"
              alt="program_img"
              width={38}
              height={38}
            />
          </li>
          {/* <li>
            <Image
              src="/go.png"
              title="Golang"
              alt="program_img"
              width={38}
              height={38}
            />
          </li> */}
          {/* <li>
            <Image
              src="/aws.png"
              title="AWS"
              alt="program_img"
              width={38}
              height={38}
            />
          </li> */}
          <li>
            <Image
              src="/html-5.png"
              title="HTML 5"
              alt="program_img"
              width={38}
              height={38}
            />
          </li>
          <li>
            <Image
              src="/css-3.png"
              title="CSS 3"
              alt="program_img"
              width={38}
              height={38}
            />
          </li>
        </ul>
      </div>
    </div>
    <div id="about">
      <About />
    </div>
    <div id="experience">
      <EXP />
    </div>
    <div id="contact">
      <Contact />
    </div>
    </>
  )
}

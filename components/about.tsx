"use client"

import { ImageError } from "next/dist/server/image-optimizer"
import Image from "next/image"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Social from "./Social"
import { motion } from "framer-motion"

const imageStyle = {
  borderRadius: "50%",
  border: "1px solid #fff",
}

export default function About() {
  return (
    <section className="flex-column m-6 flex h-auto items-center justify-center">
      <Social />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-side flex h-fit flex-col rounded-lg ml-20 md:flex-row md:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-white/5"
      >
        <div className="flex flex-col justify-start p-6 max-w-3xl">
          <h5 className="mb-2 text-center text-xl font-extrabold dark:text-white text-black md:text-left">
            About Me
          </h5>
          <p className="max-w-[500px] text-xl font-medium leading-7 dark:text-gray-300 text-gray-700 sm:text-base mb-6">
            Experienced Full Stack Developer with around 3 years of hands-on experience building high-performance web applications. Skilled in modern JavaScript frameworks, cloud technologies, and AI integrations, specializing in E-Commerce and Business solutions. Expert in architecting complex features with top-notch performance and code quality. Proficient in Agile methodologies and cross-functional collaboration, ensuring project success and continuous innovation.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="dark:text-white text-black font-semibold">Location:</span>
              <span className="dark:text-gray-300 text-gray-700">Toronto, ON, Canada</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="dark:text-white text-black font-semibold">Email:</span>
              <a href="mailto:priyanshuchoudhary0104@gmail.com" className="dark:text-gray-300 text-gray-700 hover:underline">
                priyanshuchoudhary0104@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="dark:text-white text-black font-semibold">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/priyanshu0209" target="_blank" rel="noopener noreferrer" className="dark:text-gray-300 text-gray-700 hover:underline">
                linkedin.com/in/priyanshu0209
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      {/* <div className="img-side">
        <img
          src="https://stefantopalovicdev.vercel.app/static/media/working-emoji.c5325f52b5be329995a5.png"
          alt="emoji"
          className="work-emoji"
        />
        <Image
          src="https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp"
          alt="mee"
          className="img-side__main-img"
          height={500}
          width={500}
        />
        <span>
          <Image
            src="https://stefantopalovicdev.vercel.app/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"
            alt="text"
            height={200}
            width={200}
          />
        </span>
      </div> */}
    </section>
  )
}

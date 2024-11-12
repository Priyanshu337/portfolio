import { ImageError } from "next/dist/server/image-optimizer"
import Image from "next/image"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Social from "./Social"

const imageStyle = {
  borderRadius: "50%",
  border: "1px solid #fff",
}
export default function IndexPage() {
  return (
    <section className="flex-column m-6 flex h-auto items-center justify-center">
      <Social />
      <div
        className="text-side flex h-fit flex-col rounded-lg ml-20 md:flex-row md:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col justify-start p-6 ">
          <h5 className="mb-2 text-center text-xl  font-extrabold text-[#147efb] dark:text-neutral-50 md:text-left">
            About Me
          </h5>
          <p className="max-w-[500px] text-xl font-medium leading-7 text-muted-foreground sm:text-base">
            I am a dedicated Full-Stack Developer with a strong background in both front-end and back-end development. Specializing in JavaScript, TypeScript, and Node.js, I have successfully designed responsive user interfaces and optimized website performance. My work consistently drives user engagement and boosts sales. With a focus on high performance, security, and scalability, I excel in managing end-to-end development, ensuring every project delivers outstanding results
          </p>
        </div>
      </div>
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

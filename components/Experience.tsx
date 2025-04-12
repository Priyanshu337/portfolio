"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "CloudMate Technologies LLP",
    role: "Full Stack Developer",
    period: "January 2021 - August 2022, April 2024 - Present",
    location: "Ahmedabad, IN",
    description: "Executed agile development methodologies with focus on sprint velocity and iterative improvements. Implemented domain-driven design patterns based on business requirements.",
    link: "#",
    achievements: [
      "Designed scalable backend architectures using Node.js (MVC) and Express.js",
      "Enhanced overall application performance by 25% through frontend optimizations",
      "Successfully deployed and managed applications on AWS cloud infrastructure",
      "Implemented secure IAM roles and VPC configurations for robust security",
      "Built and integrated AI-powered features using OpenAI API and Vector Embeddings",
      "Developed responsive interfaces using component-based architecture in Next.js and React",
      "Constructed RESTful API endpoints with proper error handling and security protocols",
      "Optimized database query performance and implemented proper indexing strategies",
      "Implemented JWT authentication flows and role-based access control"
    ],
  },
  {
    company: "Outlier AI",
    role: "AI Trainee",
    period: "February 2024 - Present",
    location: "Remote",
    description: "Working on AI model training and prompt engineering.",
    link: "https://outlier.ai/",
    achievements: [
      "Crafted high-quality prompts for AI models, leveraging NLP principles",
      "Improved model accuracy by 15% through systematic testing",
      "Enhanced code generation capabilities with better context understanding",
    ],
  },
]

export default function Experience() {
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
              Work Experience
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and achievements
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Briefcase className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />
                      <h3 className="text-xl font-bold">{experience.company}</h3>
                    </div>
                    <motion.a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>Visit</span>
                    </motion.a>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
                      <span className="text-neutral-600 dark:text-neutral-300">
                        {experience.period}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
                      <span className="text-neutral-600 dark:text-neutral-300">
                        {experience.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-300">
                    {experience.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                      Key Achievements:
                    </h4>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-600 dark:text-neutral-300">
                      {experience.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const redirection = (url: string) => {
  window.open(url)
}

function GetOutlierDetails() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex-column border-1 m-6 flex h-auto items-center justify-center bg-white dark:bg-black"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onClick={() => redirection("https://outlier.ai/")}
        className="text-side flex h-fit cursor-pointer flex-col rounded-lg shadow-md dark:shadow-lg-invert md:flex-row p-5 border dark:border-neutral-800 border-neutral-200 transition duration-300 ease-in-out hover:dark:border-white/20 hover:border-black/20 hover:shadow-xl dark:hover:shadow-white/5 hover:shadow-black/5"
      >
        <div className="flex flex-col justify-start p-6" style={{ width: '100%' }}>
          <h5 className="mb-2 text-center text-xl font-extrabold dark:text-white text-black md:text-left">
            Outlier AI
          </h5>
          <p className="mb-2 truncate font-extrabold dark:text-gray-300 text-gray-700">
            AI Trainee (Feb 2024 - Present)
          </p>
          <ul className="max-w-[500px] text-xl font-medium leading-7 dark:text-gray-400 text-gray-600 list-disc pl-6 mb-4">
            <li>
              Crafted high-quality prompts for AI models, leveraging NLP principles.
            </li>
            <li>
              Conducted multilingual quality assurance across various programming languages (Python, C/C++, JavaScript, HTML, CSS).
            </li>
            <li>
              Demonstrated strong attention to detail and proficiency in identifying potential errors or inconsistencies.
            </li>
          </ul>
          <div className="stack flex flex-wrap">
            <p className="dark:bg-gray-800 bg-gray-200 dark:text-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">JavaScript</p>
            <p className="dark:bg-gray-800 bg-gray-200 dark:text-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">Java</p>
            <p className="dark:bg-gray-800 bg-gray-200 dark:text-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">Prompt Evaluation</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}


function GetLazzifyDetails() {
  return (

    <section className="flex-column border-1 m-6 flex h-auto items-center justify-center dark:shadow-lg-invert bg-white dark:bg-black">
      <div
        onClick={() => redirection("https://www.lazzify.com/")}
        className="text-side flex  h-fit cursor-pointer flex-row rounded-lg shadow-md md:flex-row p-5 border border-transparent transition duration-300 ease-in-out hover:border-[#147efb] hover:shadow-xl"
      >

        <div className="flex flex-col justify-start p-6" style={{ width: '100%' }}>
          <h5 className="mb-2 text-center text-xl font-extrabold text-[#147efb] dark:text-[#147efb] md:text-left">
            CloudMate Technologies LLP
          </h5>
          <p className="mb-2 truncate font-extrabold text-gray-700 dark:text-gray-300">
            Software Engineer (05/21 - 08/22)
          </p>
          <a className="max-w-[500px] text-l font-medium leading-7 text-gray-600 dark:text-gray-400">
            <ul className="list-disc pl-6 mb-4">
              <li>Delivered 30+ successful deployments, developed 20+ features and resolved 50+ bugs.</li>
              <li>Creating a technical solution that meets the functional requirements and Wireframes of a system.

              </li>
              <li>Transformed Wireframe and Prototype into Webpages using React.js, HTML, CSS, and JavaScript, leveraging Redux and ContextAPI for state management.

              </li>
              <li>Designed scalable backend systems with Node.js (MVC) and integrated 20+ REST APIs with Express.js.

              </li>
              <li>Integrated APIs with frontend and backend, thoroughly tested using Postman, ensuring robust security measures.
              </li>
              <li>Developed Test cases using Jest testing library

              </li>
              <li>Optimized database queries for 30% faster retrieval and enhanced app performance by 25%.

              </li>
              <li>Demonstrated excellent analytical, troubleshooting, and problem-solving skills, resolving over 50 issues in a dynamic environment.

              </li>
              <li>Participated in an Agile team, creating clean code and documenting work.
              </li>
              <li>Collaborated in Agile workflows, contributing to CI/CD pipelines and delivering well-documented, clean code.
              </li>
            </ul>
          </a>
          <div className="stack flex flex-wrap dark:text-white">
            <p className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md mr-2 mb-2">React</p>
            <p className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md mr-2 mb-2">Javascript</p>

            <p className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md mr-2 mb-2">TypeScript</p>
            <p className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md mr-2 mb-2">SQL</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { GetOutlierDetails, GetLazzifyDetails };

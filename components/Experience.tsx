"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
}

const experiences: Experience[] = [
  {
    company: "Cloudmates Technologies LLP",
    role: "FullStack Developer",
    location: "Ahmedabad, IN",
    period: "January 2021 - August 2022 / April 2024 - Present",
    responsibilities: [
      "Execute agile development methodologies with focus on sprint velocity and iterative improvements",
      "Implement domain-driven design patterns based on business requirements",
      "Develop responsive interfaces using component-based architecture and state management in Next and React JS",
      "Construct RESTful API endpoints with proper error handling, validation, and security protocols",
      "Optimize database query performance and implement proper indexing strategies",
      "Configure AWS infrastructure as code for scalable and reliable deployments",
      "Implement JWT authentication flows and role-based access control",
      "Perform systematic debugging and root cause analysis across the technology stack"
    ],
    achievements: [
      "Designed scalable backend architectures using Node.js (MVC) and Express.js",
      "Enhanced overall application performance by 25% through frontend optimizations using multiple component libraries",
      "Successfully deployed and managed applications on AWS cloud infrastructure",
      "Implemented secure IAM roles and VPC configurations for robust security",
      "Built and integrated AI-powered features using OpenAI API and Vector Embeddings"
    ]
  },
  {
    company: "Outlier AI",
    role: "AI Trainee",
    location: "Remote",
    period: "February 2024 - Present",
    responsibilities: [
      "Training models to generate appropriate responses based on user prompts",
      "Validating AI responses to ensure they meet the required problem-solving criteria",
      "Focusing particularly on generating code outputs in languages such as Java, C++, JavaScript, HTML, and CSS",
      "Participating in regular feedback sessions to enhance model accuracy and response quality"
    ],
    achievements: [
      "Improved model accuracy through systematic validation and feedback",
      "Enhanced code generation capabilities across multiple programming languages",
      "Contributed to the development of more accurate and context-aware AI responses"
    ]
  }
];

const education = [
  {
    title: "Master of Science in Computer Science",
    institution: "University of Texas at Arlington",
    location: "Arlington, TX",
    period: "August 2022 - May 2024",
    gpa: "3.8/4.0",
    description: "Specialized in Software Engineering and Database Systems. Relevant coursework includes Advanced Software Engineering, Database Systems, and Web Technologies."
  },
  {
    title: "Bachelor of Technology in Computer Science",
    institution: "Guru Gobind Singh Indraprastha University",
    location: "New Delhi, India",
    period: "August 2018 - May 2022",
    gpa: "3.6/4.0",
    description: "Focused on Software Development and Computer Systems. Key courses included Data Structures, Algorithms, and Web Development."
  }
];

export default function Experience() {
  return (
    <section className="mt-[10rem] p-6 flex flex-col justify-center items-center min-h-screen bg-gradient-to-b dark:from-neutral-950 dark:to-black from-neutral-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <h1 className="text-center font-extrabold text-4xl dark:text-white text-black mb-12">
          Experience
        </h1>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="dark:bg-neutral-900/80 bg-white/80 backdrop-blur-lg rounded-xl p-8 border dark:border-neutral-800 border-neutral-200 hover:dark:border-white/20 hover:border-black/20 transition-all duration-300 hover:shadow-xl dark:hover:shadow-white/5 hover:shadow-black/5"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold dark:text-white text-black mb-2">{exp.company}</h2>
                  <h3 className="text-xl font-semibold dark:text-neutral-400 text-neutral-600">{exp.role}</h3>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="dark:text-neutral-300 text-neutral-700">{exp.location}</p>
                  <p className="dark:text-neutral-500 text-neutral-500 text-sm">{exp.period}</p>
                </div>
              </div>

              <div className="space-y-6">
                {exp.responsibilities.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold dark:text-white text-black mb-3 border-b dark:border-neutral-800 border-neutral-200 pb-2">
                      Daily Responsibilities
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="dark:text-neutral-300 text-neutral-700 leading-relaxed pl-4 -indent-4">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.achievements.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold dark:text-white text-black mb-3 border-b dark:border-neutral-800 border-neutral-200 pb-2">
                      Key Achievements
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="dark:text-neutral-300 text-neutral-700 leading-relaxed pl-4 -indent-4">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
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
      className="flex-column border-1 m-6 flex h-auto items-center justify-center dark:bg-black bg-white"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onClick={() => redirection("https://outlier.ai/")}
        className="text-side flex h-fit cursor-pointer flex-col rounded-lg shadow-md dark:shadow-lg-invert md:flex-row p-5 border dark:border-neutral-800 border-neutral-200 transition duration-300 ease-in-out hover:dark:border-white/20 hover:border-black/20 hover:shadow-xl dark:hover:shadow-white/5 hover:shadow-black/5"
      >
        <img
          height={500}
          width={500}
          className="rounded-t-lg object-cover md:h-auto md:rounded md:rounded-l-lg"
          src="/Outlier.jpeg"
          alt="Outlier AI"
        />
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

        <img
          className="rounded-t-lg object-cover md:h-auto md:rounded md:rounded-l-lg mt-30"
          style={{
            maxWidth: '70%', maxHeight: '550px', justifyItems: 'center', alignItems: 'center'
          }}
          src="/Lazzify.png"
          alt="CloudMate Technologies LLP"
        />

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

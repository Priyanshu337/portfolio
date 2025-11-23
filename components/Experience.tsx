"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "Cloudmate Technology",
    role: "Software Engineer",
    period: "November 2024 – Present",
    location: "Ahmedabad, India",
    description: "Architecting and deploying AI-native SaaS platforms using Next.js, TypeScript, MongoDB, Redis, TimescaleDB, and AWS, supporting 1000+ active users with 99.9% uptime.",
    link: "https://www.cloudmate.tech/",
    achievements: [
      "Architected AI-native SaaS platforms using Next.js, TypeScript, MongoDB, Redis, TimescaleDB, and AWS (EC2, Lambda, S3), supporting 1000+ active users with 99.9% uptime",
      "Designed event-driven architecture using BullMQ and Kafka for asynchronous job processing, handling 10,000+ messages/day with guaranteed delivery",
      "Implemented real-time bidirectional communication using Socket.io for live chat features, supporting 500+ concurrent WebSocket connections with sub-50ms latency",
      "Built serverless Lambda functions for background processing tasks, reducing infrastructure costs by 35%",
      "Engineered monorepo architecture using Turborepo with shared TypeScript packages, improving code reusability across 5+ microservices and reducing build times by 60%",
      "Designed LangGraph-powered conversational AI agents with multi-step reasoning, context-aware memory, and automated summarization, reducing customer response time by 70%",
      "Applied design patterns (Factory, Adapter, Pub/Sub) ensuring maintainable and scalable codebase",
      "Implemented fan-out pattern using Kafka topics for parallel processing of user analytics, improving data pipeline throughput by 80%",
      "Integrated OpenAI GPT models with custom function-calling APIs to enable natural-language database queries, processing 500+ daily user interactions with 95% accuracy",
      "Optimized PostgreSQL performance using materialized views, indexed queries, and connection pooling, achieving sub-100ms query latency for complex aggregations",
      "Developed end-to-end Stripe subscription management system with multi-currency support and webhook-driven billing events, reducing manual operational overhead by 40%",
      "Implemented role-based access control (RBAC) system with granular permissions across 50+ enterprise clients, ensuring SOC 2 compliance readiness",
      "Built server-side rendered (SSR) React chat widget with code splitting and lazy loading, achieving 60% LCP reduction and Lighthouse score of 95+",
      "Integrated WhatsApp Business API with BullMQ-powered automated workflows and reminder notifications, increasing SMS-to-booking conversion rate by 45%"
    ],
  },
  {
    company: "Outlier AI",
    role: "AI Trainer",
    period: "February 2024 - October 2024",
    location: "Remote",
    description: "Trained LLMs on reasoning, code generation, and prompt optimization using one-shot and few-shot strategies.",
    link: "https://outlier.ai/",
    achievements: [
      "Trained LLMs on reasoning, code generation, and prompt optimization using one-shot and few-shot strategies",
      "Evaluated and refactored AI-generated code improving computational efficiency by 25–40%",
      "Worked with GenAI models to improve accuracy and performance across multiple domains"
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
                      <Briefcase className="size-6 text-neutral-500 dark:text-neutral-400" />
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
                      <ExternalLink className="size-5" />
                      <span>Visit</span>
                    </motion.a>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="size-5 text-neutral-500 dark:text-neutral-400" />
                      <span className="text-neutral-600 dark:text-neutral-300">
                        {experience.period}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="size-5 text-neutral-500 dark:text-neutral-400" />
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
        className="text-side flex h-fit cursor-pointer flex-col rounded-lg border border-neutral-200 p-5 shadow-md transition duration-300 ease-in-out hover:border-black/20 hover:shadow-xl hover:shadow-black/5 dark:border-neutral-800 dark:shadow-lg-invert hover:dark:border-white/20 dark:hover:shadow-white/5 md:flex-row"
      >
        <div className="flex flex-col justify-start p-6" style={{ width: '100%' }}>
          <h5 className="mb-2 text-center text-xl font-extrabold text-black dark:text-white md:text-left">
            Outlier AI
          </h5>
          <p className="mb-2 truncate font-extrabold text-gray-700 dark:text-gray-300">
            AI Trainee (Feb 2024 - Present)
          </p>
          <ul className="mb-4 max-w-[500px] list-disc pl-6 text-xl font-medium leading-7 text-gray-600 dark:text-gray-400">
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
            <p className="mb-2 mr-2 rounded-md bg-gray-200 px-2 py-1 text-gray-800 dark:bg-gray-800 dark:text-gray-200">JavaScript</p>
            <p className="mb-2 mr-2 rounded-md bg-gray-200 px-2 py-1 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Java</p>
            <p className="mb-2 mr-2 rounded-md bg-gray-200 px-2 py-1 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Prompt Evaluation</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}


function GetCloudmateDetails() {
  return (

    <section className="flex-column border-1 m-6 flex h-auto items-center justify-center bg-white dark:bg-black dark:shadow-lg-invert">
      <div
        onClick={() => redirection("https://www.lazzify.com/")}
        className="text-side flex  h-fit cursor-pointer flex-row rounded-lg border border-transparent p-5 shadow-md transition duration-300 ease-in-out hover:border-[#147efb] hover:shadow-xl md:flex-row"
      >

        <div className="flex flex-col justify-start p-6" style={{ width: '100%' }}>
          <h5 className="mb-2 text-center text-xl font-extrabold text-[#147efb] dark:text-[#147efb] md:text-left">
            CloudMate Technologies LLP
          </h5>
          <p className="mb-2 truncate font-extrabold text-gray-700 dark:text-gray-300">
            Software Engineer (05/21 - 08/22)
          </p>
          <a className="text-l max-w-[500px] font-medium leading-7 text-gray-600 dark:text-gray-400">
            <ul className="mb-4 list-disc pl-6">
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
            <p className="mb-2 mr-2 rounded-md bg-gray-200 px-2 py-1 text-gray-800 dark:bg-gray-800 dark:text-gray-200">React</p>
            <p className="mb-2 mr-2 rounded-md bg-gray-200 px-2 py-1 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Javascript</p>

            <p className="mb-2 mr-2 rounded-md bg-gray-200 px-2 py-1 text-gray-800 dark:bg-gray-800 dark:text-gray-200">TypeScript</p>
            <p className="mb-2 mr-2 rounded-md bg-gray-200 px-2 py-1 text-gray-800 dark:bg-gray-800 dark:text-gray-200">SQL</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { GetOutlierDetails, GetCloudmateDetails };

"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
    {
        title: "SpeakNova – AI Voice & Chat Agent Platform",
        description: "Multi-tenant SaaS platform enabling businesses to deploy custom AI agents with voice/text capabilities. Built with Next.js, LangGraph, OpenAI, and AWS Lambda. Features include real-time streaming responses, context-aware conversations, and analytics dashboard.",
        technologies: ["Next.js", "TypeScript", "LangGraph", "OpenAI", "AWS Lambda", "PostgreSQL", "REST APIs", "React"],
        github: "#",
        features: [
            "Real-time streaming AI responses with voice and text capabilities",
            "Context-aware conversations using LangGraph",
            "Analytics dashboard for tracking agent performance",
            "Stripe payment processing with webhook-driven events",
            "Serverless deployment using AWS Lambda",
        ],
    },
    {
        title: "Zameel AI – Court Booking System",
        description: "End-to-end sports facility reservation platform with WhatsApp integration, automated reminders, and payment processing via Stripe. Built using Node.js, Express.js, MongoDB, and BullMQ. Achieved 45% conversion rate improvement and 99.9% uptime through efficient architecture and unit testing.",
        technologies: ["Node.js", "Express.js", "MongoDB", "BullMQ", "Stripe", "WhatsApp API", "Jest"],
        github: "#",
        features: [
            "WhatsApp Business API integration for booking notifications",
            "Automated reminder system using BullMQ job queues",
            "45% improvement in SMS-to-booking conversion rate",
            "99.9% uptime with comprehensive unit testing",
        ],
    },
]

export default function Project() {
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
                            Featured Projects
                        </h2>
                        <p className="text-neutral-500 dark:text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            A showcase of my recent work and contributions
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                className="group relative overflow-hidden rounded-lg border border-neutral-200 p-6 dark:border-neutral-800"
                            >
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <p className="text-neutral-600 dark:text-neutral-300">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                whileHover={{ scale: 1.05 }}
                                                className="rounded-full bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                                            Key Features:
                                        </h4>
                                        <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-600 dark:text-neutral-300">
                                            {project.features.map((feature, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center space-x-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                                        >
                                            <Github className="size-5" />
                                            <span>GitHub</span>
                                        </motion.a>

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















// import Image from 'next/image';

// export default function IndexPage() {
//     return (
//         <>

//             <section className="mt-[10rem] p-2 flex flex-col justify-center ">
//                 <div className="border-1 border-solid border-white rounded-2xl p-3 h-200  flex flex-col align-center justify-center">
//                     <h1 className="ml-[15px] font-extrabold text-4xl">Projects</h1>
//                     <div className="border-3 border-solid border-white">
//                         <div className='d-flex border-3 border-solid border-grey-100 p-3 m-3 h-30 w-[600px] '>
//                             <div className=" ">
//                                 <h2>Figma Clone</h2>
//                                 <p>Build a clone application of Figma for collaboratoin</p>
//                             </div>
//                             {/* add the link for git proj */}

//                             <a href="https://github.com/Priyanshu337/FigmaClone">
//                                 <span className="icon">
//                                     <Image
//                                         src="/github-mark.svg"
//                                         alt="GitHub Logo"
//                                         width={100}
//                                         height={100} />
//                                 </span>
//                             </a>
//                         </div>
//                         <div className=" border-3 border-solid border-grey p-3 m-3 h-30 w-[600px]">
//                             <div className=" ">

//                                 <h2>Chatpdf</h2>
//                                 <p>User can chat with pdf using Ai and make its work easy </p>
//                             </div>
//                             {/* add the link for git proj */}

//                             <a href="">
//                                 <span className="icon">
//                                     <Image
//                                         src="/github-mark.svg"
//                                         alt="GitHub Logo"
//                                         width={100}
//                                         height={100} />
//                                 </span>
//                             </a>
//                         </div>

//                         <div className="border-3 border-solid border-grey p-3 m-3 h-30 w-[600px]">
//                             <div className=" ">

//                                 <h2>AppEaseMD</h2>
//                                 <p>Appointment Booking System</p>
//                             </div>
//                             {/* add the link for git proj */}

//                             <a href="">
//                                 <span className="icon">
//                                     <Image
//                                         src="/github-mark.svg"
//                                         alt="GitHub Logo"
//                                         width={100}
//                                         height={100} />
//                                 </span>
//                             </a>
//                         </div>

//                         <div className="border-3 border-solid border-grey p-4 m-3 h-30 w-[600px]">
//                             <div className=" ">

//                                 <h2>My Blog App</h2>
//                                 <p>Application to Read Blogs</p>
//                             </div>
//                             {/* add the link for git proj */}
//                             <a href="https://github.com/Priyanshu337/my-blog">
//                                 <span className="icon">
//                                     <Image
//                                         src="/github-mark.svg"
//                                         alt="GitHub Logo"
//                                         width={100}
//                                         height={100} />
//                                 </span>
//                             </a>
//                         </div>

//                         <div className=" border-3 border-solid border-grey p-3 m-3 h-30 w-[600px]">
//                             <div className=" ">

//                                 <h2>Health360</h2>
//                                 <p>Health and Fitness Mobile App</p>
//                             </div>
//                             {/* add the link for git proj */}

//                             <a href="">
//                                 <span className="icon">
//                                     <Image
//                                         src="/github-mark.svg"
//                                         alt="GitHub Logo"
//                                         width={100}
//                                         height={100} />
//                                 </span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </section >
//         </>
//     )
// }
"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
    {
        title: "Figma Clone",
        description: "Developed a Figma clone application for collaborative UI design and interaction. Built with Next.js and TypeScript, leveraging Liveblock for real-time collaboration. Implemented features like multi-user messaging, reaction emojis, and interactive design tools.",
        technologies: ["Next.js", "TypeScript", "Liveblock", "Tailwind CSS"],
        github: "https://github.com/Priyanshu337/FigmaClone",
        demo: "#",
        features: [
            "Real-time collaboration",
            "Multi-user messaging",
            "Reaction emojis",
            "Interactive design tools",
        ],
    },
    {
        title: "EaseAppMD",
        description: "Built a web app for scheduling doctor appointments, designing UI in Figma for React implementation. Managed backend integration using .NET and MySQL, with deployment via Azure DevOps.",
        technologies: ["React", ".NET", "MySQL", "Azure DevOps"],
        github: "#",
        demo: "#",
        features: [
            "Doctor appointment scheduling",
            "User authentication",
            "Role-based access control",
            "Responsive design",
        ],
    },
    {
        title: "Wear'e",
        description: "Developed MERN stack e-commerce project built on Redux state management library. Implemented Stripe payment feature using Stripe API. Used MongoDB for data storage.",
        technologies: ["MERN Stack", "Redux", "Stripe", "MongoDB"],
        github: "#",
        demo: "#",
        features: [
            "E-commerce functionality",
            "Stripe payment integration",
            "User authentication",
            "Product management",
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
                                            <Github className="h-5 w-5" />
                                            <span>GitHub</span>
                                        </motion.a>
                                        <motion.a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center space-x-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                                        >
                                            <ExternalLink className="h-5 w-5" />
                                            <span>Demo</span>
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
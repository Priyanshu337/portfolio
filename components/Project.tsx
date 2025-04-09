"use client"

import Image from 'next/image';
import * as HoverCard from '@radix-ui/react-hover-card';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
    title: string;
    description: string;
    githubUrl: string;
    technologies: string[];
    imageUrl?: string;
    period?: string;
}

const projects: Project[] = [
    {
        title: "Figma Clone",
        description: "Developed a Figma clone application for collaborative UI design and interaction. Built with Next.js and TypeScript, leveraging Liveblock for real-time collaboration. Implemented features like multi-user messaging, reaction emojis, and interactive design tools. Enabled users to collaboratively build and refine UI concepts in real time.",
        githubUrl: "https://github.com/Priyanshu337/FigmaClone",
        technologies: ["Next.js", "TypeScript", "Liveblock", "Tailwind CSS"],
        period: "Currently Working"
    },
    {
        title: "EaseAppMD",
        description: "Built a web app for scheduling doctor appointments, designing UI in Figma for React implementation. Managed backend integration using .NET and MySQL, with deployment via Azure DevOps. Implemented user authentication and role-based access control. Created responsive design for optimal viewing across devices.",
        githubUrl: "#",
        technologies: ["React", ".NET", "MySQL", "Azure DevOps"],
        period: "September 2023 - December 2023"
    },
    {
        title: "Wear'e",
        description: "Developed MERN stack e-commerce project built on Redux state management library. Implemented Stripe payment feature using Stripe API. Used MongoDB for data storage. Created responsive UI/UX for seamless shopping experience.",
        githubUrl: "#",
        technologies: ["MERN Stack", "Redux", "Stripe", "MongoDB"],
        period: "April 2023 - August 2023"
    }
];

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
                    Featured Projects
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <HoverCard.Root key={index} open={hoveredProject === index}>
                            <HoverCard.Trigger asChild>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    onMouseEnter={() => setHoveredProject(index)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                    className="dark:bg-white/10 bg-white/80 backdrop-blur-lg rounded-xl p-6 border dark:border-white/20 border-neutral-200 hover:dark:border-white/40 hover:border-black/40 transition-all duration-300 hover:scale-[1.02] shadow-lg dark:shadow-white/5 shadow-black/5"
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h2 className="text-2xl font-bold dark:text-white text-black">{project.title}</h2>
                                                {project.period && (
                                                    <p className="text-sm dark:text-gray-400 text-gray-600">{project.period}</p>
                                                )}
                                            </div>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:opacity-80 transition-opacity"
                                            >
                                                <Image
                                                    src="/github-mark.svg"
                                                    alt="GitHub Logo"
                                                    width={24}
                                                    height={24}
                                                    className="dark:invert"
                                                />
                                            </a>
                                        </div>

                                        <p className="dark:text-gray-300 text-gray-700 mb-4 flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 dark:bg-white/10 bg-gray-200 rounded-full text-sm dark:text-white/80 text-gray-800"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </HoverCard.Trigger>

                            <HoverCard.Portal>
                                <HoverCard.Content
                                    className="dark:bg-white/20 bg-white/80 backdrop-blur-lg rounded-lg p-4 shadow-lg dark:border-white/30 border-neutral-200"
                                    sideOffset={5}
                                >
                                    <div className="dark:text-white text-black">
                                        <h3 className="font-bold mb-2">Project Details</h3>
                                        <p className="text-sm dark:text-white/80 text-gray-700">{project.description}</p>
                                    </div>
                                    <HoverCard.Arrow className="dark:fill-white/20 fill-black/20" />
                                </HoverCard.Content>
                            </HoverCard.Portal>
                        </HoverCard.Root>
                    ))}
                </div>
            </motion.div>
        </section>
    );
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
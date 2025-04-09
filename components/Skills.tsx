"use client"

import { motion } from "framer-motion"

const technicalSkills = [
    {
        category: "Frontend",
        skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind", "ShadCN UI"]
    },
    {
        category: "Backend",
        skills: ["Node.js", "Express.js", "REST API", "GraphQL API", "MongoDB", "No-SQL", "ORM tools"]
    },
    {
        category: "Cloud & DevOps",
        skills: ["AWS EC2", "Lambda", "S3", "IAM", "VPC", "Amplify", "API Gateway", "WAF", "CloudWatch", "Dynamo DB", "Elastic Search"]
    },
    {
        category: "AI & Tools",
        skills: ["Langchain", "Vector Embeddings", "Transcriber", "Synthesizer", "PineConeDB", "OpenAI", "Docker", "Redis"]
    }
]

const secondarySkills = [
    "Agile", "Jira", "Scrum", "Sprint"
]

const designPatterns = [
    "Singleton", "Factory", "Abstract Factory", "Builder", "Prototype", "Adapter",
    "Bridge", "Composite", "Decorator", "Facade", "FlyWeight", "Proxy", "Observer"
]

export default function Skills() {
    return (
        <section className="mt-[5rem] p-6 flex flex-col justify-center items-center min-h-screen bg-gradient-to-b dark:from-neutral-950 dark:to-black from-neutral-50 to-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full max-w-6xl"
            >
                <h1 className="text-center font-extrabold text-4xl dark:text-white text-black mb-12">
                    Technical Skills
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {technicalSkills.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="dark:bg-white/10 bg-white/80 backdrop-blur-lg rounded-xl p-6 border dark:border-white/20 border-neutral-200 hover:dark:border-white/40 hover:border-black/40 transition-all duration-300 hover:scale-[1.02] shadow-lg dark:shadow-white/5 shadow-black/5"
                        >
                            <h2 className="text-2xl font-bold dark:text-white text-black mb-4">{category.category}</h2>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1 dark:bg-white/10 bg-gray-200 rounded-full text-sm dark:text-white/80 text-gray-800"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold dark:text-white text-black mb-6 text-center">Design Patterns</h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="dark:bg-white/10 bg-white/80 backdrop-blur-lg rounded-xl p-6 border dark:border-white/20 border-neutral-200 hover:dark:border-white/40 hover:border-black/40 transition-all duration-300 hover:scale-[1.02] shadow-lg dark:shadow-white/5 shadow-black/5"
                    >
                        <div className="flex flex-wrap gap-2 justify-center">
                            {designPatterns.map((pattern, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 dark:bg-white/10 bg-gray-200 rounded-full text-sm dark:text-white/80 text-gray-800"
                                >
                                    {pattern}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold dark:text-white text-black mb-6 text-center">Secondary Skills</h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="dark:bg-white/10 bg-white/80 backdrop-blur-lg rounded-xl p-6 border dark:border-white/20 border-neutral-200 hover:dark:border-white/40 hover:border-black/40 transition-all duration-300 hover:scale-[1.02] shadow-lg dark:shadow-white/5 shadow-black/5"
                    >
                        <div className="flex flex-wrap gap-2 justify-center">
                            {secondarySkills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 dark:bg-white/10 bg-gray-200 rounded-full text-sm dark:text-white/80 text-gray-800"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
} 
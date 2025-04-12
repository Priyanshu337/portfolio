"use client"
import { motion } from "framer-motion";
import { Code, Cpu, Shield } from "lucide-react";

const designPatterns = [
    { name: "Singleton", icon: "1️⃣" },
    { name: "Factory", icon: "🏭" },
    { name: "Abstract Factory", icon: "🏗️" },
    { name: "Builder", icon: "🔧" },
    { name: "Prototype", icon: "🧬" },
    { name: "Adapter", icon: "🔌" },
    { name: "Bridge", icon: "🌉" },
    { name: "Composite", icon: "🌿" },
    { name: "Decorator", icon: "✨" },
    { name: "Facade", icon: "🏠" },
    { name: "Flyweight", icon: "🪶" },
    { name: "Proxy", icon: "🛡️" },
    { name: "Observer", icon: "👀" },
];
const technicalSkills = [
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "🚀" },
    { name: "TypeScript", icon: "📘" },
    { name: "JavaScript", icon: "💻" },
    { name: "HTML", icon: "📄" },
    { name: "CSS", icon: "🎨" },
    { name: "Tailwind", icon: "💨" },
    { name: "ShadCN UI", icon: "🧩" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚏" },
    { name: "REST API", icon: "🔌" },
    { name: "GraphQL API", icon: "🕸️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "NoSQL", icon: "🧮" },
    { name: "ORM Tools", icon: "🧱" },
    { name: "AWS EC2", icon: "🖥️" },
    { name: "AWS Lambda", icon: "🧬" },
    { name: "AWS S3", icon: "🗂️" },
    { name: "AWS IAM", icon: "🛡️" },
    { name: "AWS VPC", icon: "🌐" },
    { name: "AWS Amplify", icon: "📢" },
    { name: "API Gateway", icon: "🛣️" },
    { name: "AWS WAF", icon: "🧱" },
    { name: "CloudWatch", icon: "📈" },
    { name: "DynamoDB", icon: "⚙️" },
    { name: "ElasticSearch", icon: "🔍" },
    { name: "Langchain", icon: "🧠" },
    { name: "Vector Embeddings", icon: "🧲" },
    { name: "Transcriber", icon: "🎙️" },
    { name: "Synthesizer", icon: "🎧" },
    { name: "PineConeDB", icon: "🌲" },
    { name: "OpenAI", icon: "🤖" },
    { name: "Docker", icon: "🐳" },
    { name: "Redis", icon: "🟥" },
    { name: "Git", icon: "🔧" },
    { name: "Version Controlling", icon: "📂" },
];

const secondarySkills = [
    { name: "Agile/Scrum", icon: "🔄" },
    { name: "CI/CD", icon: "⚡" },
    { name: "REST APIs", icon: "🌐" },
    { name: "GraphQL", icon: "📊" },
    { name: "Microservices", icon: "🧩" },
    { name: "Testing", icon: "✅" },
]

export default function SkillsSection() {
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
                            Skills & Expertise
                        </h2>
                        <p className="text-neutral-500 dark:text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Technologies and methodologies I work with
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Technical Skills */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800"
                        >
                            <div className="flex items-center space-x-2">
                                <Code className="size-6 text-neutral-500 dark:text-neutral-400" />
                                <h3 className="text-xl font-bold">Technical Skills</h3>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {technicalSkills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center space-x-2 rounded-md bg-neutral-100 p-2 dark:bg-neutral-800"
                                    >
                                        <span className="text-lg">{skill.icon}</span>
                                        <span className="text-sm">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Secondary Skills */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800"
                        >
                            <div className="flex items-center space-x-2">
                                <Cpu className="size-6 text-neutral-500 dark:text-neutral-400" />
                                <h3 className="text-xl font-bold">Secondary Skills</h3>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {secondarySkills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center space-x-2 rounded-md bg-neutral-100 p-2 dark:bg-neutral-800"
                                    >
                                        <span className="text-lg">{skill.icon}</span>
                                        <span className="text-sm">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Design Patterns */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800"
                        >
                            <div className="flex items-center space-x-2">
                                <Shield className="size-6 text-neutral-500 dark:text-neutral-400" />
                                <h3 className="text-xl font-bold">Design Patterns</h3>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {designPatterns.map((pattern) => (
                                    <motion.div
                                        key={pattern.name}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center space-x-2 rounded-md bg-neutral-100 p-2 dark:bg-neutral-800"
                                    >
                                        <span className="text-lg">{pattern.icon}</span>
                                        <span className="text-sm">{pattern.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}





// "use client"

// import { motion } from "framer-motion"
// import { Code, Database, Cpu, Layout, GitBranch, Shield } from "lucide-react"

// const technicalSkills = [
//     { name: "JavaScript", icon: "💻" },
//     { name: "TypeScript", icon: "📘" },
//     { name: "React", icon: "⚛️" },
//     { name: "Next.js", icon: "🚀" },
//     { name: "Node.js", icon: "🟢" },
//     { name: "SQL", icon: "🗄️" },
//     { name: "MongoDB", icon: "🍃" },
//     { name: "AWS", icon: "☁️" },
//     { name: "Docker", icon: "🐳" },
//     { name: "Git", icon: "🔧" },
// ]

// const secondarySkills = [
//     { name: "Agile/Scrum", icon: "🔄" },
//     { name: "CI/CD", icon: "⚡" },
//     { name: "REST APIs", icon: "🌐" },
//     { name: "GraphQL", icon: "📊" },
//     { name: "Microservices", icon: "🧩" },
//     { name: "Testing", icon: "✅" },
// ]

// const designPatterns = [
//     { name: "Singleton", icon: "1️⃣" },
//     { name: "Factory", icon: "🏭" },
//     { name: "Abstract Factory", icon: "🏗️" },
//     { name: "Builder", icon: "🔧" },
//     { name: "Prototype", icon: "🧬" },
//     { name: "Adapter", icon: "🔌" },
//     { name: "Bridge", icon: "🌉" },
//     { name: "Composite", icon: "🌿" },
//     { name: "Decorator", icon: "✨" },
//     { name: "Facade", icon: "🏠" },
//     { name: "Flyweight", icon: "🪶" },
//     { name: "Proxy", icon: "🛡️" },
//     { name: "Observer", icon: "👀" }
// ];

// export default function Skills() {
//     return (
//         <section className="relative w-full py-12 md:py-24 lg:py-32">
//             <div className="container px-4 md:px-6">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="mx-auto max-w-3xl space-y-6"
//                 >
//                     <div className="space-y-2 text-center">
//                         <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                             Skills & Expertise
//                         </h2>
//                         <p className="text-neutral-500 dark:text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                             Technologies and methodologies I work with
//                         </p>
//                     </div>

//                     <div className="grid gap-6 md:grid-cols-3">
//                         <motion.div
//                             whileHover={{ scale: 1.02 }}
//                             className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800"
//                         >
//                             <div className="flex items-center space-x-2">
//                                 <Code className="size-6 text-neutral-500 dark:text-neutral-400" />
//                                 <h3 className="text-xl font-bold">Technical Skills</h3>
//                             </div>
//                             <div className="mt-4 grid grid-cols-2 gap-2">
//                                 {technicalSkills.map((skill) => (
//                                     <motion.div
//                                         key={skill.name}
//                                         whileHover={{ scale: 1.05 }}
//                                         className="flex items-center space-x-2 rounded-md bg-neutral-100 p-2 dark:bg-neutral-800"
//                                     >
//                                         <span className="text-lg">{skill.icon}</span>
//                                         <span className="text-sm">{skill.name}</span>
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         </motion.div>

//                         <motion.div
//                             whileHover={{ scale: 1.02 }}
//                             className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800"
//                         >
//                             <div className="flex items-center space-x-2">
//                                 <Cpu className="size-6 text-neutral-500 dark:text-neutral-400" />
//                                 <h3 className="text-xl font-bold">Secondary Skills</h3>
//                             </div>
//                             <div className="mt-4 grid grid-cols-2 gap-2">
//                                 {secondarySkills.map((skill) => (
//                                     <motion.div
//                                         key={skill.name}
//                                         whileHover={{ scale: 1.05 }}
//                                         className="flex items-center space-x-2 rounded-md bg-neutral-100 p-2 dark:bg-neutral-800"
//                                     >
//                                         <span className="text-lg">{skill.icon}</span>
//                                         <span className="text-sm">{skill.name}</span>
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         </motion.div>

//                         <motion.div
//                             whileHover={{ scale: 1.02 }}
//                             className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800"
//                         >
//                             <div className="flex items-center space-x-2">
//                                 <Shield className="size-6 text-neutral-500 dark:text-neutral-400" />
//                                 <h3 className="text-xl font-bold">Design Patterns</h3>
//                             </div>
//                             <div className="mt-4 grid grid-cols-2 gap-2">
//                                 {designPatterns.map((pattern) => (
//                                     <motion.div
//                                         key={pattern.name}
//                                         whileHover={{ scale: 1.05 }}
//                                         className="flex items-center space-x-2 rounded-md bg-neutral-100 p-2 dark:bg-neutral-800"
//                                     >
//                                         <span className="text-lg">{pattern.icon}</span>
//                                         <span className="text-sm">{pattern.name}</span>
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     )
// } 
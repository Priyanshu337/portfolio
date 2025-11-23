"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const education = [
    {
        degree: "Post-Graduate Diploma in Mobile Solutions Development",
        institution: "Conestoga College",
        location: "Canada",
        period: "2022 - 2023",
        gpa: "3.4/4.0",
        description: "Focused on mobile and web application development with emphasis on modern technologies and cloud computing.",
        achievements: [
            "Relevant Coursework: Data Structures, Algorithms, Cloud Computing, Database Systems",
            "Developed multiple mobile and web applications using modern frameworks",
        ],
    },
    {
        degree: "Bachelor of Computer Applications",
        institution: "GLS University",
        location: "Ahmedabad, India",
        period: "2018 - 2021",
        gpa: "3.2/4.0",
        description: "Comprehensive computer science education with focus on software development fundamentals.",
        achievements: [
            "Relevant Coursework: OOP, Data Structures, Web Development, Database Management",
            "Built strong foundation in programming and software engineering principles",
        ],
    },
]

export default function Education() {
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
                            Education
                        </h2>
                        <p className="text-neutral-500 dark:text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            My academic journey and achievements
                        </p>
                    </div>

                    <div className="space-y-8">
                        {education.map((edu, index) => (
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
                                    <div className="flex items-center space-x-4">
                                        <GraduationCap className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />
                                        <h3 className="text-xl font-bold">{edu.institution}</h3>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
                                            <span className="text-neutral-600 dark:text-neutral-300">
                                                {edu.period}
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <MapPin className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
                                            <span className="text-neutral-600 dark:text-neutral-300">
                                                {edu.location}
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Award className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
                                            <span className="text-neutral-600 dark:text-neutral-300">
                                                GPA: {edu.gpa}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-neutral-600 dark:text-neutral-300">
                                        {edu.description}
                                    </p>

                                    <div>
                                        <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                                            Key Achievements:
                                        </h4>
                                        <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-600 dark:text-neutral-300">
                                            {edu.achievements.map((achievement, idx) => (
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
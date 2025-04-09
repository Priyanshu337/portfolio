"use client"

import { motion } from 'framer-motion';

const education = [
    {
        title: "Mobile Solution Development",
        institution: "Conestoga College",
        location: "Waterloo, ON",
        period: "2022 - 2024",
        description: "Specialized in mobile application development, focusing on modern web technologies and cloud solutions."
    },
    {
        title: "Bachelor in Computer Application",
        institution: "GLS University",
        location: "Ahmedabad, India",
        period: "2018 - 2021",
        description: "Focused on software development fundamentals, database management, and web technologies."
    }
];

export default function Education() {
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
                    Education
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="dark:bg-white/10 bg-white/80 backdrop-blur-lg rounded-xl p-6 border dark:border-white/20 border-neutral-200 hover:dark:border-white/40 hover:border-black/40 transition-all duration-300 hover:scale-[1.02] shadow-lg dark:shadow-white/5 shadow-black/5"
                        >
                            <h2 className="text-2xl font-bold dark:text-white text-black mb-2">{edu.institution}</h2>
                            <p className="dark:text-gray-300 text-gray-700 mb-2">{edu.location}</p>
                            <p className="dark:text-gray-400 text-gray-600 mb-4">{edu.title}</p>
                            <p className="text-sm dark:text-gray-400 text-gray-600">{edu.period}</p>
                            <p className="dark:text-gray-300 text-gray-700 mt-4">{edu.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
} 
import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import profilepic from "../assets/hilmywashil.jpg"

const WhoAmI = () => {
    return (
        <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="whoami">
            <Reveal>
                <div className="grid md:grid-cols-2 place-items-center gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full"
                    >
                        <img
                            src={profilepic}
                            alt="Profile"
                            className="w-full max-w-[400px] mx-auto rounded-lg shadow-lg"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-gray-300"
                    >
                        <h3 className="text-4xl font-semibold mb-5">Who <span className="text-purple-500">Am I?</span></h3>
                        <p className="text-justify leading-7 mb-6">
                            I am a passionate junior developer with a strong foundation in web development technologies.
                            My journey in programming started with a curiosity for creating digital solutions, and it has
                            evolved into a dedicated pursuit of building efficient and user-friendly applications.
                        </p>
                        <p className="text-justify leading-7 mb-6">
                            With expertise in both frontend and backend development, I specialize in creating responsive
                            and dynamic web applications. I'm particularly skilled in Laravel and React, and I'm always
                            eager to learn new technologies and best practices in the ever-evolving world of web development.
                        </p>
                    </motion.div>
                </div>
            </Reveal>
        </div>
    )
}

export default WhoAmI

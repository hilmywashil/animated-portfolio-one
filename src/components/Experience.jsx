import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'PT Rajakon Teknik',
        period: 'Jan 2025 - May 2025',
        description: 'Internship as a web developer, working on various projects using Laravel and React. Responsible for developing and maintaining web applications, implementing new features, and collaborating with the development team.',
    },
]
const experiences1 = [
    {
        company: 'CyberLabs',
        period: 'Sep 2025 - Now',
        description: 'Working as a WordPress Developer, Frontend Developer, and Server Administrator. Responsible for developing and customizing WordPress websites, implementing responsive and user-friendly frontend interfaces, optimizing website performance, and managing server configuration, security, and deployment.',
    },
]



const Experience = () => {
    return (
        <div className='p-8 max-w-[600px] mx-auto'>
            <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
            <motion.div
                className='space-y-8'
                initial="hidden"
                animate="visible"
            >
                {experiences1.map((experience1, index) => (
                    <Reveal>
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1 }}
                            className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                        >
                            <h2 className='text-gray-100 text-2xl font-semibold'>{experience1.company}</h2>
                            <p className='text-gray-300'>{experience1.period}</p>
                            <p className='text-gray-400 mt-4'>{experience1.description}</p>


                        </motion.div>
                    </Reveal>
                ))}

            </motion.div>

            <br />
            <motion.div
                className='space-y-8'
                initial="hidden"
                animate="visible"
            >
                {experiences.map((experience, index) => (
                    <Reveal>
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1 }}
                            className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                        >
                            <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                            <p className='text-gray-300'>{experience.period}</p>
                            <p className='text-gray-400 mt-4'>{experience.description}</p>


                        </motion.div>
                    </Reveal>
                ))}

            </motion.div>

        </div>
    )
}

export default Experience
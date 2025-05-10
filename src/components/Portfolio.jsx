import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    // {
    //   img: project1,
    //   title: "Project #1", 
    //   description: "UI for frontend development using React.",
    //   links: {
    //     site: "#",
    //     github: "#",
    //   },
    // },
    // {
    //   img: project2,
    //   title: "Project #2",
    //   description: "A fullstack application built with Node.js and MongoDB.",
    //   links: {
    //     site: "#",
    //     github: "#",
    //   },
    // },
    // {
    //   img: project4,
    //   title: "Project #3",
    //   description: "An e-commerce platform with various features.",
    //   links: {
    //     site: "#",
    //     github: "#",
    //   },
    // },
    // {
    //   img: project5,
    //   title: "Project #4",
    //   description: "A mobile-friendly application using React Native.",
    //   links: {
    //     site: "#",
    //     github: "#",
    //   },
    // },
    // {
    //   img: project6,
    //   title: "Project #5",
    //   description: "A data visualization project using D3.js and other libraries.",
    //   links: {
    //     site: "#",
    //     github: "#",
    //   },
    // },
]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        <Reveal>
          <div className='text-center text-gray-300 text-xl'>
            No projects yet
          </div>
        </Reveal>
    </div>
  )
}

export default Portfolio
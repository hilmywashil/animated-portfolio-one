import React from 'react'
import { FaFacebook, FaGithubSquare, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>Hilmy Washil</h3>
            <p className='text-gray-300'>
                Follow me on social media to stay connected and see my latest updates.
            </p>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://github.com/hilmywashil"><FaGithubSquare /></a>
                <a href="https://www.instagram.com/hilmywashil/"><FaInstagram /></a>
                <a href="https://www.facebook.com/hilmywashilz/"><FaFacebook /></a>
                <a href="https://www.twitter.com/hilmygoodboy_/"><FaTwitter /></a>
                <a href="https://www.youtube.com/@hilmywashil_"><FaYoutube /></a>
            </div>

        </div>        
    </div>
  )
}

export default Footer
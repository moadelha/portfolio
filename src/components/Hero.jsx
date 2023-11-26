import React from 'react'
import {styles} from '../styles';
import { ComputersCanvas } from './canvas';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiOutlineLinkedin, AiOutlineTwitter} from 'react-icons/ai';



const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={'${styles.paddingX } absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5' }>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>HI I'm <span className="text-[#915eff]"> Moad </span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop Web Applications, <br className='sm:block hidden'/> and design user-interfaces</p>
          <div className='socialMedia'>
          
          <div className='flex flex-center'>
          <h2 className='mt-10 text-white-100 text-xl'>Social media</h2>
          </div>
          
          <div className='flex flex-wrap gap-10 items-stretch object-center md:box-content pt-autp '>
                
            <a href="https://www.facebook.com/moad.elhanbout.5/" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook className='w-20 h-20 hover:text-violet-600 opacity-50 hover:opacity-100 focus:outline-none focus:ring rounded-full' />
            </a>
            
            <a href="https://www.github.com/moadelha" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className='w-20 h-20 hover:text-violet-600 opacity-50 hover:opacity-100 focus:outline-none focus:ring rounded-full' />
            </a>
            
            <a href="https://www.linkedin.com/in/elhanbout-moad-b641591a2/" target="_blank" rel="noopener noreferrer">
                <AiOutlineLinkedin className='w-20 h-20 hover:text-violet-600 opacity-50 hover:opacity-100 focus:outline-none focus:ring rounded-full' />
            </a>
            
            <a href="https://www.twitter.com/NftElha" target="_blank" rel="noopener noreferrer">
                <AiOutlineTwitter className='w-20 h-20 hover:text-violet-600 opacity-50 hover:opacity-100 focus:outline-none focus:ring rounded-full' />            
            </a>
          </div>
        
        </div>
        
        </div>
        
        </div>
      
        
    </section>

    
  )
}

export default Hero
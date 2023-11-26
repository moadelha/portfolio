import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {github} from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blanl")}
              className="black_gradient w-10 h-10 rounded-full items-center
                          flex justify-center cursor-pointer "
            >
              <img  src={github}
                    alt={github}
                    className="w-1/2 h-1/2 object-contain"
              />

            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>

        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-w3xl leading-[30px]"
        >
          These are projects i have worked on during the past years
          some of them are profeional project when i worked with companies
          as a freelancer and others are projects i have worked on 
          to practice web developement or programming in general. 
        </motion.p>  
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) =>(
          <ProjectCard  
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")

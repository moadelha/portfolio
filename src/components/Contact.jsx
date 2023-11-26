import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

// template id: template_mavtw54
// service_ozjhppy
// public key: PZ8RuU32seBwJwE4Y

const Contact = () => {
  const formRef = useRef(); 
  const [form, setForm] = useState({
    name: '',
    email:'',
    message: '',

  });
  const [loading, setLoading] = useState(false);

  const handleChange  = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_ozjhppy', 
      'template_mavtw54',
    {
      from_name: form.name,
      to_name:'Moad',
      to_email: 'melhanbout@gmail.com',
      message: form.message,
      
    },
    'PZ8RuU32seBwJwE4Y'
    )
    .then(() =>{
      setLoading(false);
      alert('Thank you. i will get back to you as soon as possible.')
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false)
      console.log(error);
      alert('Somthing went wrong.')
    })
  }

  return (
    <div className="xl:lt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.dev
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="what's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="what's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Send a message "
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <button type='submit'
            className="bg-tertiary py-3 px-8 outline-none w-fit 
            text-white font-bold shadow-md shadow-primary rouned-xl"
          >
            {loading ? 'Sending...' : 'send'}
          </button>
        </form>
      </motion.dev>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
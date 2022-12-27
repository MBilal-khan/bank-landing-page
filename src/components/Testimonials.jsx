import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'
const Testimonials = () =>  (
      <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
         {/* TODO */}
        <div className='absolute z-[0] w-[80%] h-[70%] -right-[50%] rounded-md blue__gradient  ' />
        <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 z-[1] '>
          <h2 className={styles.heading2}>What people are <br className='sm:block hidden ' /> saying about us</h2>
          <div className='w-[100%] md:mt-0 mt-6   '>
            <p className={`${styles.paragraph} text-left max-w-[370px] `}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
          </div>
        </div>
        {/* div for all the cards  */}
        <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]  '>

          {feedback.map((card,index)=>(
            <FeedbackCard key={card.id} {...card}  />
           
          ))}
        </div>
       

      </section>
  )


export default Testimonials
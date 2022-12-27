import React from 'react';
import { arrowUp } from '../assets';
import styles from '../style';

const GetStarted = () => ( 
 // main div 
  <div 
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer `}
>
 <div className={`${styles.flexCenter} flex-col bg-primary h-[100%] w-[100%] rounded-full`}>
  <div className={`${styles.flexStart} flex-row`}>
   <p className='font-poppins font-medium text-[18px] leading-[23px] mr-[2px]'>
   <span className='text-gradient'>Get</span>

   </p>
   <img src={arrowUp} alt="" className='w-[23px] h-[23px] object-contain' />
  </div>
  <p className='font-poppins font-medium text-[18px] leading-[23px]'></p>
   <span className='text-gradient'>Started</span>
 </div>
</div>
);

export default GetStarted;
 
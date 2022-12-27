import React from 'react';
import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-20 px-6  `}
    >
      {/* discount section  */}
      <div // div for discount section
        className={`flex items-center flow-row py-[14px] px-4 bg-discount-gradient mb-2 rounded-[10px] `}
      >
        <img src={discount} alt="discount" className="w-[32px] h-[32px" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For {''}
          <span className="text-white"> One Month</span>
        </p>
      </div>

      {/* payments text  */}
      <div className="flex flex-row items-center justify-between w-full ">
        {/* text-styling */}
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] ">
          The Next <br className=" sm:block hidden " /> {''}
          <span className="text-gradient">Generation</span> {''}
        </h1>
        {/* Get started circle section */}
        <div className=" ss:flex hidden md:mr-4 mr-0 ">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppins font-semibold  ss:text-[56px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full ">Payments Methods.</h1>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
    </div>
    {/* for the right side work ( means the hero image ) */}
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
      
      <div className=' absolute z-[0] h-[35%] w-[40%] top-0 pink__gradient first-letter:'/>
      <div className=' absolute z-[1] h-[80%] w-[80%]  bottom-40 rounded-full  white__gradient'/>
      <div className=' absolute z-[0] h-[50%] w-[50%] right-20 bottom-20 blue__gradient'/>
    </div>
    <div className={`ss:hidden ${styles.flexCenter} mt-10`}>
      <GetStarted />

    </div>
  </section>
);

export default Hero;

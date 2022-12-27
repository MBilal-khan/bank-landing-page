import styles from './style';
import React from 'react';
import {
   Navbar,
   Hero,
   GetStarted,
   Billing,
   Business,
   CallToAction,
   CardDeal,
   Footer,
   Stats,
   Testimonials,
   Clients,
} from './components';

const App = () => (
   <div className='bg-primary w-full overflow-hidden '>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
            <Navbar />
         </div>
      </div>
      {/* Hero */}
      <div className='bg-primary ${styles.flexStart}'>
         <div className='${styles.boxWidth}'>
            <Hero />
         </div>
      </div>
      {/* other components */}
      <div className={`bg-primary ${styles.paddingX} $  {styles.flexStart`}>
         <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CallToAction />
            <Footer />
         </div>
      </div>
   </div>
);
export default App;

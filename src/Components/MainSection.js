import React from 'react';
import home from '../img/home.jpg';
import { About, Description, Image, Hide, extaa } from '../style';
//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

const MainSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim} className='my-font'>
              And ALLAH INVITES
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim} className='my-font'>
              THE <span>HOME</span> OF
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim} className='my-font'>
              PLACE.
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p id='ppp' variants={fade}>
          It one of the best Islamic app with lots of Necessary information.
          Starting from Qibla to Quran, Hadith, Tafseer etc. I enjoying reading
          the verses of Quran everyday all thanks to this wonderful app.
        </motion.p>
        <motion.button variants={fade}>Learn More</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home} alt='guy with a camera' />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components

export default MainSection;

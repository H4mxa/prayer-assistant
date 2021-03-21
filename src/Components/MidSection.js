import React from 'react';

import { Scroll } from '../style';
import styled from 'styled-components';
import { scrollReveal } from '../animation';
import { useScroll } from './UseScroll';

const MidSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial='hidden'
      ref={element}
    >
      <div className='title-wrapper has-text-centered'>
        <h2 className='my-font is-2'>Prayer Assistant</h2>
        <h3 className='subtitle is-5 is-muted'>
          It's one of the best islamic app with lot of information. Starting
          from Qibla to Quran, Hadith, Tafseer etc. I enjoying reading the
          verses of Quran everyday all thanks to this wonderful app
        </h3>
        <div className='divider is-centered'></div>
      </div>
    </Services>
  );
};

const Services = styled(Scroll)``;

export default MidSection;

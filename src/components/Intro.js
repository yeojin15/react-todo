import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { keyframes } from 'styled-components';

const opacity = keyframes`
  0% {opacity: 1;}
  50% {opacity: 1;}
  100% {opacity: 0;}
`;

const IntroBox=styled.div`
  position: relative;
  width: 100%; height: 100vh; background: url(/intro.jpg) no-repeat center / cover;
  padding: 0 var(--gap-base);
  &:after {
    content: ''; position: absolute; left: 0; right: 0; top: 0; bottom: 0;
    background-color: rgba(var(--rgb-black),.4);
  }
  animation: ${opacity} 3000ms ease-in-out forwards;
`;


const Intro = () => {
  const navigate = useNavigate();

  const timeout = () => {
    setTimeout(() => {
      navigate('/main');
    }, 3000);
  };

  useEffect(() => {
    timeout();
    return () => {
      // clear 해줌
      clearTimeout(timeout);
    };
  });

  return (
    <IntroBox>
        <div className='intro-cont'>
          <h2>My Todo</h2>
          <h2>My Todo</h2>
        </div>
    </IntroBox>
  )
}

export default Intro


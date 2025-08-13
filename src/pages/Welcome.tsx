import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

const Section = styled(motion.section)`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #FF1493, #00BFFF, #FFD700);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PixelTitle = styled(motion.h1)`
  font-family: 'Press Start 2P', cursive;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 700;
  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const PixelSubtitle = styled(motion.h2)`
  font-family: 'Press Start 2P', cursive;
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 400;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Welcome: React.FC = () => {
  return (
    <>
      <Navigation />
      <Section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <PixelTitle
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Welcome to James Wu's Resume
        </PixelTitle>
        <PixelSubtitle
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Navigate to explore more content
        </PixelSubtitle>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWtnY2xodTE0MXh3am83N2xueXp2NmpjZGhtd2VxYXdibDNzMzlnbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1KtXmfi3EnjM5zpK/giphy.gif"
            alt="Animated GIF"
            style={{
              maxWidth: '300px',
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
            }}
          />
        </motion.div>
      </Section>
    </>
  );
};

export default Welcome; 
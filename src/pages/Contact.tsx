import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactNav from '../components/ContactNav';

const ContactContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #1E90FF 0%, #87CEEB 50%, #B0E0E6 100%);
  position: relative;
`;

const ContactContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem 2rem;
`;

const ContactCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  width: 100%;
  max-width: 600px;
  color: #fff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateX(10px);
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const ContactLabel = styled.strong`
  margin-right: 1rem;
  color: #fff;
  opacity: 0.9;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const ContactValue = styled.span`
  color: #fff;
  opacity: 0.8;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <ContactNav />
      <ContactContent>
        <ContactCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Contact Me</Title>
          <ContactInfo>
            <ContactItem
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactLabel>Email:</ContactLabel>
              <ContactValue>jamesaudaily2000@gmail.com</ContactValue>
            </ContactItem>
            <ContactItem
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ContactLabel>LinkedIn:</ContactLabel>
              <ContactValue>https://www.linkedin.com/in/xuanhui-wu-4836b2300/</ContactValue>
            </ContactItem>
            <ContactItem
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ContactLabel>GitHub:</ContactLabel>
              <ContactValue>github.com/StartAt2023</ContactValue>
            </ContactItem>
          </ContactInfo>
        </ContactCard>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact; 
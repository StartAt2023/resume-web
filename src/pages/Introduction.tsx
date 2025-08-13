import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

const Section = styled(motion.section)`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(motion.h1)`
  font-size: 3.2rem;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Intro = styled(motion.div)`
  background: rgba(255,255,255,0.95);
  border-radius: 20px;
  box-shadow: 0 12px 35px rgba(0,0,0,0.1);
  padding: 2.5rem 3rem;
  color: #2c3e50;
  font-size: 1.15rem;
  line-height: 1.8;
  letter-spacing: 0.01em;
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  height: fit-content;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  }

  p {
    margin-bottom: 1.3rem;
    position: relative;
  }

  strong {
    color: #667eea;
    font-weight: 700;
  }

  h3 {
    font-size: 1.8rem;
    color: #2c3e50;
    margin: 2rem 0 1rem 0;
    font-weight: 700;
    position: relative;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
    color: #555;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    font-size: 1rem;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SkillsCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  }

  h3 {
    font-size: 1.8rem;
    color: #2c3e50;
    margin-bottom: 1.5rem;
    font-weight: 700;
    position: relative;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 0.8rem;
    line-height: 1.6;
  }

  hr {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, transparent, #ddd, transparent);
    margin: 1.5rem 0;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 1);
  }
`;

const Introduction: React.FC = () => {
  return (
    <>
      <Navigation />
      <Section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Title
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Xuanhui Wu Introduction
        </Title>
        <ContentContainer>
          <Intro
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p><strong>My name is Xuanhui Wu</strong>, you can call me James. I graduated in July 2025 with a Master of Information Technology from Monash University. During my studies, I systematically learned Java, Python, MySQL, and computer fundamentals, and developed various front-end and back-end projects based on JavaScript for academic purposes. I also gained a solid understanding of cloud computing and virtualization platforms, with hands-on project experience using Firebase and AWS services.</p>

            <h3>Completed Courses</h3>
            <ul>
              <li>FIT5120 Industry Experience Studio Project</li>
              <li>FIT5122 Professional Practice</li>
              <li>FIT5225 Cloud Computing and Security</li>
              <li>FIT5046 Mobile and Distributed Computing Systems</li>
              <li>FIT5125 IT Research Methods</li>
              <li>FIT5136 Software Engineering</li>
              <li>FIT5171 System Validation and Verification, Quality and Standards</li>
              <li>FIT5032 Internet Applications Development</li>
              <li>FIT5057 Project Management</li>
              <li>FIT5137 Advanced Database Technology</li>
              <li>FIT5152 User Interface Design and Usability</li>
              <li>FIT9131 Programming Foundations in Java</li>
              <li>FIT9132 Introduction to Databases</li>
              <li>FIT9136 Algorithms and Programming Foundations in Python</li>
              <li>FIT9137 Introduction to Computer Architecture and Networks</li>
            </ul>

            <p>I am passionate about creating innovative web applications and have experience in both front-end and back-end development for two years. My technical skills include modern JavaScript frameworks, database design, and cloud deployment. I enjoy solving complex problems and continuously learning new technologies to stay current in the rapidly evolving tech industry.</p>
          </Intro>

          <SkillsContainer>
            <SkillsCard
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3>Education</h3>
              <p>Master of Information Technology</p>
              <p>Monash University</p>
              <p>2023 - 2025</p>

            </SkillsCard>

            <SkillsCard
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3>Technical Skills</h3>
              <p><strong>Frontend:</strong> React, Vue, TypeScript, HTML, CSS</p>
              <p><strong>Backend:</strong> Node.js, Python, Java</p>
              <p><strong>Database:</strong> MySQL, MongoDB</p>
              <p><strong>Cloud:</strong> Firebase, AWS</p>
              <p><strong>Tools:</strong> Git, Docker, VS Code, Cursor</p>
            </SkillsCard>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '1rem'
              }}
            >
              <img
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2dlOWttZWNzbTJ5b3phMHhheXVlM2JwdW5iM3BzczF6OWw4Znp4eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMFZDsj0AKUDYTS/giphy.gif"
                alt="Introduction GIF"
                style={{
                  maxWidth: '280px',
                  width: '100%',
                  height: 'auto',
                  borderRadius: '15px',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                  border: '3px solid rgba(255,255,255,0.1)'
                }}
              />
            </motion.div>
          </SkillsContainer>
        </ContentContainer>
      </Section>
    </>
  );
};

export default Introduction; 
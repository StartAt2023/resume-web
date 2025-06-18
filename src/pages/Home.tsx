import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SideNav from '../components/SideNav';
import Navigation from '../components/Navigation';

const Section = styled(motion.section)<{ bgColor: string }>`
  min-height: 100vh;
  padding: 2rem;
  background: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  color: #fff;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 700;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 400;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
`;

const SkillsCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
`;

const ProjectCard = styled(motion.a)`
  background: rgba(255, 255, 255, 0.9);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #333;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
`;

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState('welcome');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['welcome', 'home', 'skills', 'projects'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const offsetTop = top + window.scrollY;
          const offsetBottom = bottom + window.scrollY;

          if (scrollPosition >= offsetTop && scrollPosition <= offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navigation />
      <SideNav activeSection={activeSection} onSectionClick={scrollToSection} />
      <Section
        id="welcome"
        bgColor="linear-gradient(135deg, #FF1493, #00BFFF, #FFD700)"
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
          style={{ 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            background: 'linear-gradient(45deg, #fff, #f0f0f0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Welcome to James Wu's Resume
        </Title>
        <Subtitle
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
            color: '#fff'
          }}
        >
          Scroll down to view more content
        </Subtitle>
      </Section>

      <Section
        id="home"
        bgColor="#1a1a1a"
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
          James Wu
        </Title>
        <Subtitle
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Full Stack Developer
        </Subtitle>
      </Section>

      <Section
        id="skills"
        bgColor="linear-gradient(135deg, #f5f7fa, #c3cfe2)"
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
          style={{ color: '#333' }}
        >
          Skills & Education
        </Title>
        <SkillsContainer>
          <SkillsCard
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
            <p>Frontend: React, TypeScript, HTML, CSS</p>
            <p>Backend: Node.js, Python, Java</p>
            <p>Database: MySQL, MongoDB</p>
          </SkillsCard>
        </SkillsContainer>
      </Section>

      <Section
        id="projects"
        bgColor="linear-gradient(135deg, #a8c0ff, #3f2b96)"
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
          Projects
        </Title>
        <ProjectGrid>
          <ProjectCard
            href="https://github.com/yourusername/project1"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Project 1</h3>
            <p>A full-stack web application built with React and Node.js</p>
          </ProjectCard>
          <ProjectCard
            href="https://github.com/yourusername/project2"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3>Project 2</h3>
            <p>An e-commerce platform with payment integration</p>
          </ProjectCard>
          <ProjectCard
            href="https://github.com/yourusername/project3"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>Project 3</h3>
            <p>A real-time chat application using WebSocket</p>
          </ProjectCard>
        </ProjectGrid>
      </Section>
    </>
  );
};

export default Home; 
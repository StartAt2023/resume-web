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

const Subtitle = styled(motion.h2)`
  font-size: 1.6rem;
  color: #fff;
  margin-bottom: 2.5rem;
  text-align: center;
  font-weight: 400;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1rem;
  }
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem;
  }
`;

const ProjectCard = styled(motion.a)`
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  text-decoration: none;
  color: #333;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  h3 {
    font-size: 1.6rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  h4 {
    font-size: 1.1rem;
    color: #7f8c8d;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 1);
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GitHubLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #2c3e50;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 10px 18px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid #dee2e6;
  align-self: flex-start;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  &:hover {
    background: linear-gradient(135deg, #e9ecef, #dee2e6);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    color: #495057;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Intro = styled(motion.div)`
  max-width: 700px;
  margin: 0 auto;
  background: rgba(255,255,255,0.95);
  border-radius: 20px;
  box-shadow: 0 12px 35px rgba(0,0,0,0.1);
  padding: 2.5rem 3rem;
  color: #2c3e50;
  font-size: 1.15rem;
  line-height: 1.8;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 2rem;
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

  p {
    margin-bottom: 1.3rem;
    position: relative;
  }

  strong {
    color: #667eea;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    font-size: 1rem;
    margin: 0 1rem 2rem 1rem;
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
          Scroll down to view more content
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

      <Section
        id="home"
        bgColor="linear-gradient(135deg, #2c3e50 0%, #34495e 100%)"
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
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'flex',
            gap: '40px',
            alignItems: 'flex-start',
            justifyContent: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            flexWrap: 'wrap',
            padding: '0 20px'
          }}
        >
          <Intro
            style={{
              flex: '0 1 auto',
              maxWidth: '600px',
              margin: 0
            }}
          >
            <p><strong>My name is Xuanhui Wu</strong>, you can call me James. I will graduate in 2025 with a Master of Information Technology from Monash University. During my studies, I systematically learned Java, Python, MySQL, and computer fundamentals, and developed various front-end and back-end projects based on JavaScript for academic purposes. I have a basic understanding of cloud computing and virtualization platforms, and have hands-on project experience with Firebase and AWS. My undergraduate degree was in Accounting at a university in China, and I have passed the first 9 fundamental papers of ACCA, giving me a solid foundation in financial knowledge.</p>
            <p>Currently, I am seeking IT-related positions such as <strong>front-end development, back-end development, full-stack development, software engineering, or DevOps</strong>.</p>
          </Intro>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              flex: '0 0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px'
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
        </motion.div>
      </Section>

      <Section
        id="skills"
        bgColor="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
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
          style={{ color: '#fff' }}
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
            <hr />
            <p>Bachelor of Accounting</p>
            <p>Guangdong Polytechnic Normal University</p>
            <p>2019 - 2023</p>
          </SkillsCard>
          <SkillsCard
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>Technical Skills</h3>
            <p>Frontend: React, Vue, TypeScript, HTML, CSS</p>
            <p>Backend: Node.js, Python, Java</p>
            <p>Database: MySQL, MongoDB</p>
          </SkillsCard>
        </SkillsContainer>
      </Section>

      <Section
        id="projects"
        bgColor="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
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
          <ProjectContainer>
            <ProjectCard
              href="https://e-commerce-order-processing-system.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3>GGym Shopping Platform</h3>
              <h4>Full-Stack Web Application</h4>
              <p>A complete e-commerce solution built with React frontend, Node.js backend, and MongoDB database. Features user authentication, product management, shopping cart, and secure checkout.</p>
            </ProjectCard>
            <GitHubLink
              href="https://github.com/StartAt2023/GGym-Frontend"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Code
            </GitHubLink>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectCard
              href="https://fit5120mainprojecttp20backend.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3>Cyber Security Platform</h3>
              <h4>Backend API System</h4>
              <p>A comprehensive cybersecurity awareness platform with screen time analytics, interactive quizzes, personality tests, and student focus analysis. Built with Node.js, Express, and PostgreSQL.</p>
            </ProjectCard>
            <GitHubLink
              href="https://github.com/StartAt2023/fit5120MainProjectTP20Backend"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Code
            </GitHubLink>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectCard
              href="https://g-gym-platform.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3>GGym Training Platform</h3>
              <h4>Full-Stack Web Application</h4>
              <p>A complete training platform for GGym, including training plans, training records, and training progress tracking. Built with React, Node.js, and MongoDB.</p>
            </ProjectCard>
            <GitHubLink
              href="https://github.com/StartAt2023/GGymPlatform"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Code
            </GitHubLink>
          </ProjectContainer>
        </ProjectGrid>
      </Section>
    </>
  );
};

export default Home; 
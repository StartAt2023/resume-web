import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

const Section = styled(motion.section)`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(motion.h1)`
  font-size: 3.2rem;
  color: #fff;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.3) 100%);
    transform: translateX(-50%);
    z-index: 1;

    @media (max-width: 768px) {
      left: 2rem;
      transform: none;
    }
  }
`;

const TimelineItem = styled(motion.div)<{ isLeft: boolean }>`
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: ${props => props.isLeft ? 'flex-end' : 'flex-start'};
  width: 100%;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-left: 4rem;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: 4px solid #4facfe;

  @media (max-width: 768px) {
    left: 2rem;
    transform: translate(-50%, -50%);
  }
`;

const TimelineCard = styled(motion.div)<{ isLeft: boolean }>`
  background: rgba(255, 255, 255, 0.95);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
  width: 45%;
  max-width: 500px;
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    ${props => props.isLeft ? 'left: -15px' : 'right: -15px'};
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-${props => props.isLeft ? 'right' : 'left'}: 15px solid rgba(255, 255, 255, 0.95);
    transform: translateY(-50%);
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 1);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 2rem;

    &::before {
      left: -15px;
      border-right: 15px solid rgba(255, 255, 255, 0.95);
      border-left: none;
    }
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const ProjectSubtitle = styled.h4`
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const ProjectDate = styled.div`
  font-size: 0.9rem;
  color: #4facfe;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #4facfe;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 10px 18px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid #dee2e6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  &:hover {
    background: linear-gradient(135deg, #e9ecef, #dee2e6);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    color: #4facfe;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "GGPlatform",
      subtitle: "Full-Stack Web Application",
      date: "Dec 2024",
      description: "GGPlatform is an integrated full-stack platform for shopping and training management. It features product management, shopping cart, order checkout, training plans, and training record tracking. The frontend is built with React, the backend uses Node.js, and MongoDB is used for data storage. The platform supports user authentication and data visualization.",
      link: "https://g-gym-platform.vercel.app/",
      isLeft: true
    },
    {
      id: 2,
      title: "To Do List Web Application",
      subtitle: "Full-Stack Task Management Platform",
      date: "Nov 2024",
      description: "A full-stack To Do List application built with React and Node.js. It supports account registration and management, email reminders for tasks, and both long-term and short-term task assignment. Users can efficiently manage daily and recurring tasks, and the system automatically sends email notifications to improve task completion rates.",
      link: "https://to-do-list-web-ivory.vercel.app/login",
      isLeft: false
    },
    {
      id: 3,
      title: "E-Commerce Dashboard",
      subtitle: "React Admin Panel",
      date: "Oct 2024",
      description: "A comprehensive admin dashboard for e-commerce management built with React and TypeScript. Features include product management, order tracking, customer analytics, and inventory control. The dashboard provides real-time data visualization and responsive design for optimal user experience.",
      link: "#",
      isLeft: true
    },
    {
      id: 4,
      title: "Weather App",
      subtitle: "React Native Mobile Application",
      date: "Sep 2024",
      description: "A cross-platform weather application developed with React Native. The app provides real-time weather information, location-based forecasts, and customizable weather alerts. Features include 7-day forecasts, hourly predictions, and weather maps integration.",
      link: "#",
      isLeft: false
    }
  ];

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
          Project Timeline
        </Title>
        <TimelineContainer>
          {projects.map((project, index) => (
            <TimelineItem
              key={project.id}
              isLeft={project.isLeft}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <TimelineDot />
              <TimelineCard
                isLeft={project.isLeft}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectDate>{project.date}</ProjectDate>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectLink
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </ProjectLink>
              </TimelineCard>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Section>
    </>
  );
};

export default Projects; 
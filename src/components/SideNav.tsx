import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavContainer = styled(motion.nav)`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NavDot = styled(motion.button)<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#fff' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  padding: 0;
  position: relative;
  
  &:hover {
    background: #fff;
  }

  &::before {
    content: '';
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 2px;
    background: #fff;
    transition: width 0.3s ease;
    opacity: 0;
  }

  &:hover::before {
    width: 20px;
    opacity: 1;
  }
`;

const NavLabel = styled.span`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  font-size: 0.9rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  white-space: nowrap;
  pointer-events: none;
`;

const NavDotWrapper = styled.div`
  position: relative;
  
  &:hover ${NavLabel} {
    opacity: 1;
  }
`;

interface SideNavProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const SideNav: React.FC<SideNavProps> = ({ activeSection, onSectionClick }) => {
  const sections = [
    { id: 'welcome', label: 'Welcome' },
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' }
  ];

  return (
    <NavContainer
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {sections.map((section) => (
        <NavDotWrapper key={section.id}>
          <NavDot
            active={activeSection === section.id}
            onClick={() => onSectionClick(section.id)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          <NavLabel>{section.label}</NavLabel>
        </NavDotWrapper>
      ))}
    </NavContainer>
  );
};

export default SideNav; 
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Logo = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(motion(Link))`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const ContactNav: React.FC = () => {
  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo to="/">Xuanhui Wu</Logo>
      <NavLinks>
        <NavLink
          to="/"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Welcome
        </NavLink>
        <NavLink
          to="/introduction"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Introduction
        </NavLink>

        <NavLink
          to="/projects"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </NavLink>
      </NavLinks>
    </Nav>
  );
};

export default ContactNav; 
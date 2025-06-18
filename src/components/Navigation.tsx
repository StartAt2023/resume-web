import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
  background: transparent;
`;

const NavLink = styled(motion(Link))`
  color: #fff;
  text-decoration: none;
  margin-left: 2rem;
  font-size: 1.1rem;
  position: relative;
  font-weight: 500;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const Navigation: React.FC = () => {
  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavLink
        to="/"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Home
      </NavLink>
      <NavLink
        to="/contact"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact
      </NavLink>
    </Nav>
  );
};

export default Navigation; 
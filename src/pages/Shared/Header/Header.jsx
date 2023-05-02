import React, { useContext } from 'react';
import logo from "../../../assets/logo.png";
import moment from 'moment';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {

  return (
    <Container className='mt-4'>
      <div className='text-center'>
        <img src={logo} alt="" />
        <p><small>Journalism Without Fear or Favour</small></p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className='d-flex bg-light p-4'>
        <Button variant="danger">LAtest</Button>
        <Marquee className='text-danger' speed={100}>
          I can be a React component, multiple React components, or just some text...............
          I can be a React component, multiple React components, or just some text...............
          I can be a React component, multiple React components, or just some text...............
          I can be a React component, multiple React components, or just some text...............
        </Marquee>
      </div>
      
    </Container>
  );
};

export default Header;
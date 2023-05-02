import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'


const RightNav = () => {
    return (
        <div>
            <h2 className='mt-4'>Login With</h2>
            <Button variant="outline-primary" className='w-100 mb-2'><FaGoogle/>Login With Google</Button>
            <Button variant="outline-secondary" className='w-100'><FaGithub/>Secondary</Button>  
            <div>
                <h4 className='mt-4'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook></FaFacebook> facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter></FaTwitter> twitter </ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='text-white text-center p-4' style={{backgroundImage: `url(${bg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                <h2>Create an Amazing Newspaper</h2>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button>Learn More</button>
            </div>
        </div>
    );
};

export default RightNav;
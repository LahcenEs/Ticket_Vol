import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Import phone and envelope icons

const Footer = () => {
  return (
    <footer className="footer mt-3 py-3 bg-secondary text-dark pt-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled text-white fs-4">
              <li>
                <FaPhone /> +212659959396
              </li>
              <li>
                <FaEnvelope /> lhcensefyani12@gmail.com
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>About Us</h5>
            <p className='text-white fs-5'>
                
"Welcome to Lahcen-Travel, where wanderlust meets expertise. Let us guide you on unforgettable journeys around the globe, tailored to your dreams."
            </p>
          </div>
          <div className="col-md-4">
            <h5 >Follow Us</h5>
            <ul className="list-inline" style={{fontSize:30,color:'blue'}} >
            <FaFacebook />
            <FaInstagramSquare className='mx-3' />
            <FaTwitter className='mx-1' />
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 text-white">
        <span className="">© 2024 Lahcen-Travel</span>
      </div>
    </footer>
  );
  };


export default Footer;

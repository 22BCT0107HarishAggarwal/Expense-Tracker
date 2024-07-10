import React from 'react';
import '../styles/Home.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer text-center mt-5 py-3 text-light">
            <div className="mt-1">
              <h2 className="footer-text">
                &copy; {currentYear}. Created with &hearts; by Harish, Phanindra, and Vishruth.
              </h2>
            </div>
          </div>
  )
}

export default Footer
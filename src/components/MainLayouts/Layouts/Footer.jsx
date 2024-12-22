import React from "react";
import footerLogo from '../../../assets/logo/logo2.png';

const Footer = () => {
  return (
    <div className="bg-base-300">
      <div className="w-11/12 mx-auto">
        <footer className="footer text-base-content p-10 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
          {/* Logo Section */}
          <aside className="text-center lg:text-left">
            <img src={footerLogo} className="w-40 mx-auto lg:mx-0" alt="Footer Logo" />
            <p>
              EliteRides Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>

      
          <nav className="text-center lg:text-left">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>

         
          <nav className="text-center lg:text-left">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>

      
          <nav className="text-center lg:text-left">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

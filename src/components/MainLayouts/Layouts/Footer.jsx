import React from "react";
import footerLogo from '../../../assets/logo/logo2.png';
import { FacebookOriginal, LinkedinOriginal, TwitterOriginal } from "devicons-react";
import { div } from "framer-motion/client";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
     <div className="bg-gray-300">
      <div>
      <footer className="flex justify-between items-center text-black p-4 w-11/12 mx-auto">
  <div>
   <img src={footerLogo} className="h-40" alt="" />
    <p>
      Elite Rides Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </div>
  <div>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-6">
      <a href="https://www.linkedin.com/in/mohammad-foysal-dev/" target="_blank"><LinkedinOriginal size={30}></LinkedinOriginal></a>
      <a href="https://www.facebook.com/profile.php?id=100078182091731" target="_blank"><FacebookOriginal size={30}></FacebookOriginal></a>
      <a className="text-red-500" href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank"><SiGmail size={30} /></a>
    </div>
  </nav>
  </div>
 
</footer>
      </div>
      <div>
      <footer className="footer footer-center bg-slate-800  text-white p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
      </div>
     </div>
  );
};

export default Footer;

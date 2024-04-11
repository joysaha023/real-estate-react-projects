import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200  mt-10 text-base-content">
        <aside>
         <h2 className="text-3xl font-semibold">Haven<span className="text-[#0077be]">HQ</span></h2>
          <p>
            Real Estate Industries Ltd.
            <br />
            Providing services at since 2012
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Real Estate</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">House</a>
          <a className="link link-hover">Rent Services</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to={"/"} className="link link-hover">Home</Link>
          <Link to={"/agent"} className="link link-hover">Agents</Link>
          <Link to={"/specialEstate"} className="link link-hover">Special Estate</Link>
          <Link to={"/contact"} className="link link-hover">Contact Us</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

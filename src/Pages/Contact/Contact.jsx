import React from "react";
import { Helmet } from "react-helmet-async";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Helmet>
        <title>HavenHQ - Contact Us</title>
      </Helmet>
      <div>
        <h2 className="text-3xl font-semibold">Haven<span className="text-[#0077be]">HQ</span> RealEstate Company</h2>
        <p>Phone: +97123876898</p>
        <p>Email: havenhq@realestate.com</p>
        <p>Address: 629 12th St. Modesto, CA 95354 United States</p>
        <div>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { Helmet } from "react-helmet-async";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-2">
      <Helmet>
        <title>HavenHQ - Contact Us</title>
      </Helmet>
      <div className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold">Haven<span className="text-[#0077be]">HQ</span> RealEstate Company</h2>
        <p className="text-lg font-normal">Phone: +97123876898</p>
        <p className="text-lg font-normal">Email: havenhq@realestate.com</p>
        <p className="text-lg font-normal">Address: 629 12th St. Modesto, CA 95354 United States</p>
        <div className="flex gap-6">
          <a className="text-2xl hover:text-[#0077be]" href="#"><FaFacebookF /></a>
          <a className="text-2xl hover:text-[#0077be]" href="#"><FaTwitter /></a>
          <a className="text-2xl hover:text-[#0077be]" href="#"><FaInstagram /></a>
        </div>
        <p>HavenHQ RealEstate is a dynamic and innovative real estate company dedicated to providing exceptional service to clients seeking to buy, sell, or invest in properties. With a focus on customer satisfaction and cutting-edge technology, HavenHQ aims to redefine the real estate experience.One of the hallmarks of HavenHQ is its emphasis on technology. The company leverages the latest advancements in real estate software and digital marketing to ensure that clients have access to the most up-to-date information and resources. From virtual property tours to sophisticated data analysis, HavenHQ harnesses technology to streamline transactions and enhance the overall experience for clients.</p>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Contact;

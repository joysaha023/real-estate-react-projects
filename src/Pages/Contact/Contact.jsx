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
      <div className="space-y-3 mt-5">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Haven<span className="text-[#0077be]">HQ</span> RealEstate Company
        </h2>
        <p className="text-lg font-normal">Phone: +97123876898</p>
        <p className="text-lg font-normal">Email: havenhq@realestate.com</p>
        <p className="text-lg font-normal">
          Address: 629 12th St. Modesto, CA 95354 United States
        </p>
        <div className="flex gap-6">
          <a className="text-2xl hover:text-[#0077be]" href="#">
            <FaFacebookF />
          </a>
          <a className="text-2xl hover:text-[#0077be]" href="#">
            <FaTwitter />
          </a>
          <a className="text-2xl hover:text-[#0077be]" href="#">
            <FaInstagram />
          </a>
        </div>
        <p>
          HavenHQ RealEstate is a dynamic and innovative real estate company
          dedicated to providing exceptional service to clients seeking to buy,
          sell, or invest in properties. With a focus on customer satisfaction
          and cutting-edge technology, HavenHQ aims to redefine the real estate
          experience.One of the hallmarks of HavenHQ is its emphasis on
          technology. The company leverages the latest advancements in real
          estate software and digital marketing to ensure that clients have
          access to the most up-to-date information and resources. From virtual
          property tours to sophisticated data analysis, HavenHQ harnesses
          technology to streamline transactions and enhance the overall
          experience for clients.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row  gap-6 mt-4 md:mt-10">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-5">Frequently Asked Questions</h2>
          <div className="collapse collapse-arrow rounded-none bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
            What types of properties are available on HavenHQ?
            </div>
            <div className="collapse-content">
              <p>HavenHQ offers a wide range of properties including apartments, houses, Student housing, townhouses, and Vacation rentals properties. You can find properties for sale, rent, or lease depending on your needs.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow rounded-none bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            Are there any hidden fees when using HavenHQ's services?
            </div>
            <div className="collapse-content">
              <p>No, there are no hidden fees when using HavenHQ. Our services are completely transparent, and any applicable fees or charges will be clearly communicated to you upfront.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow rounded-none bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            Can I get assistance with financing my property purchase through HavenHQ?
            </div>
            <div className="collapse-content">
              <p>Yes, HavenHQ works with trusted financial partners who can assist you with mortgage pre-approval and financing options tailored to your needs. Contact us for more information.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow rounded-none bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            Can I trust the information provided on HavenHQ listings?
            </div>
            <div className="collapse-content">
              <p>Yes, we strive to ensure that all information displayed on our listings is accurate and up-to-date. Our team verifies the details provided by sellers and agents to maintain the integrity of our platform. If you have any concerns about a listing, please don't hesitate to contact us.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow rounded-none bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            How does HavenHQ protect my personal information and data privacy?
            </div>
            <div className="collapse-content">
              <p>At HavenHQ, we take data privacy and security seriously. We adhere to strict privacy policies and employ industry-standard encryption and security measures to safeguard your personal information. Your data is kept confidential and used only for legitimate purposes outlined in our privacy policy.</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
        
          <div className=" w-full p-6 bg-white rounded-none border shadow-none">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form action="#" method="POST">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input rounded-none input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input rounded-none input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input type="text" placeholder="Address" className="input rounded-none input-bordered" required />
        </div>
            <div className="mb-4">
                <label for="message" className="block text-gray-700 font-medium">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-none border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
            </div>
            <div className="text-right">
                <button type="submit" className="btn bg-[#0077be] rounded-none text-white hover:text-black">Submit</button>
            </div>
        </form>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

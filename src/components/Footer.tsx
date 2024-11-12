import React from 'react';
import { FaAmazon, FaApple, FaGoogle, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-gray-400">Learn more about our story, our values, and our mission to provide the best products and services to our customers.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className='flex justify-between items-center'>
                    <div className=" text-black hidden lg:flex gap-1">
                        <div className="header_top__icon_wrapper">
                            <FaAmazon />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <FaApple />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <FaGoogle />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <FaTwitter />
                        </div>
                    </div>
          </div>
        </div>
        <div className="mt-8 text-gray-500">
          &copy; {new Date().getFullYear()} Your Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

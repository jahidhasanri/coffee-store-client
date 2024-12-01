import React from 'react';
import { FaInstagramSquare, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot, FaTwitter } from 'react-icons/fa6';
import { IoLogoFacebook } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='w-11/12 mx-auto bg-pink-100 mt-20 rancho-regular grid grid-cols-2 '>
            <div className='p-6'>
                <img src="/public/images/icons/logo1 1 (1).png" alt="" />
                <h3 className='font-normal text-5xl text-[#331A15] mt-3'>Espresso Emporium</h3>
                <p className='mt-3 text-xl font-normal'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                <div className='flex gap-6 mt-5'>
                <IoLogoFacebook className='w-10 h-10' />
                <FaTwitter className='w-10 h-10' />
                <FaInstagramSquare className='w-10 h-10' />
                <FaLinkedin className='w-10 h-10' />
                </div>
                <h3 className='font-normal text-5xl mt-5'>Get in Touch</h3>
                <div className='mt-5 flex items-center gap-5'>
                <FaPhoneAlt />
                <p>+88 01533 333 333</p>
                </div>
                <div className='mt-2 flex items-center gap-5'>
                <MdEmail />
                <p>info@gmail.com</p>
                </div>
                <div className='mt-2 flex items-center gap-5'>
                <FaLocationDot />
                <p>72, Wall street, King Road, Dhaka</p>
                </div>
            </div>

            <div className='mt-32 ml-32'>
                <h3 className='font-normal text-5xl text-[#331A15] '>Connect with Us</h3>
                <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs mb-2" />
                <br />
                <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs mb-2" />
                <br />
                <input type="text" placeholder="message" className="input input-bordered w-full max-w-xs h-[80px]" />
                <br />
                <button className='btn rounded-full mt-3'>Send Message</button>
            </div>

            <div>

            </div>
        </div>
    );
};

export default Footer;
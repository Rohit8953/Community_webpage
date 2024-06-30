import React from 'react'
import { Link } from 'react-router-dom'
import { TiSocialFacebook } from "react-icons/ti";
import { FaPinterest } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const Footers = () => {
  return (
    <footer>
        <div className='w-full flex flex-row justify-center  '>
            <div className='flex mt-[3rem] mb-[3rem] flex-col sm:flex-row sm:justify-around sm:flex-auto w-[85%]'>
                <div className='flex flex-col'>
                    <h1 className='font-[700] text-[14px] mb-3'>Hobbycue</h1>
                    <Link>About Us</Link>
                    <Link>Our Services</Link>
                    <Link>Work with Us</Link>
                    <Link>FAQ</Link>
                    <Link>Contact Us</Link>
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-[700] text-[14px] mb-3'>How Do I</h1>
                    <Link>Sign Up</Link>
                    <Link>Add a Listing</Link>
                    <Link>Claim Listing</Link>
                    <Link>Post a Query</Link>
                    <Link>Add a Blog Post</Link>
                    <Link>Other Queries</Link>
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-[700] text-[14px] mb-3'>Quick Links</h1>
                    <Link>Listing</Link>
                    <Link>Blog Posts</Link>
                    <Link>Shop/Store</Link>
                    <Link>Community</Link>
                </div>

                <div className='flex flex-col'>
                   <div>
                         <div className=' mb-3'><h1 className='font-[700] text-[14px]'>Social Media</h1></div>
                                <div className='flex gap-4'>
                            
                                    <div className='p-1 rounded-full bg-gray-100'><TiSocialFacebook className='text-gray-500' /></div>

                                    <div className='p-1 rounded-full bg-gray-100'><FaPinterest className='text-gray-500'/></div>
                        
                                    <div className='p-1 rounded-full bg-gray-100'><CiInstagram className='text-gray-900' /></div>
            
                                    <div className='p-1 rounded-full bg-gray-100'><FaGooglePlusG className='text-gray-500' /></div>

                                    <div className='p-1 rounded-full bg-gray-100'><FaYoutube className='text-gray-500'/></div>

                                    <div className='p-1 rounded-full bg-gray-100'><FaTelegramPlane className='text-gray-500'/></div>

                                    <div className='p-1 rounded-full bg-gray-100'><FaXTwitter className='text-gray-500' /></div>

                                    <div className='p-1 rounded-full bg-gray-100'><MdEmail className='text-gray-500' /></div>
                                
                               </div>
                         </div>

                         <div>
                            <div><h1 className='font-[700] text-[14px] mt-8'>Invite Friends</h1></div>
                            <div className='flex flex-row mt-3 w-[19rem] h-[2.5rem] items-center justify-between border-2 rounded-r-[8px] border-[#8064A2] bg-[#F8F9FA] overflow-hidden'>
                                <input type="email" placeholder='Email ID' className=' outline-none bg-[#F8F9FA] pl-4' />
                                <div className='bg-[#8064A2] text-white w-[3rem] h-full flex  justify-center items-center'>
                                    invite
                                </div>
                            </div>
                         </div>
                   </div>
            </div>
        </div>



        <div className='bg-[#F7F5F9] w-full h-[5rem] flex justify-center items-center'>
            <p className=''>© Purple Cues Private Limited</p>
        </div>
        
    </footer>
  )
}

export default Footers
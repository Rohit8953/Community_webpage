import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { data } from '../../Data/Alldata';
import { IoIosArrowUp } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import image from './image.jpg'
 import { useDispatch, useSelector } from 'react-redux';
import { Setswithes } from '../../Redux/appSlice';
import { AiOutlineLogout } from "react-icons/ai";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [openfirstlist,setopenfirstlist]=useState(false);
    const [openSecondtlist,setopenSecondlist]=useState(false);
    const [rotate,setrotate]=useState(true);
    const [move,setmove]=useState(true);

    const dispatch=useDispatch();
    const {loginlogOut,switchs}=useSelector((state)=>state.app)
    console.log("asdfqwerefwe",switchs)
const btnHandler=()=>{
    if (switchs) {
        dispatch(Setswithes())
    }
}
  return (
    <div className='relative w-full flex flex-row justify-center'>
        <div className='w-[85%] h-[80px] flex flex-row items-center justify-between gap-2 '>
            
            <div className='flex flex-row gap-[1rem] sm:gap-[2rem] items-center'>
                <Link to='/' className=' w-[8rem] sm:w-full'>
                    <img width={293} height={80} src="https://s3-alpha-sig.figma.com/img/153c/f988/785cdcec05510cbdc9cb1b82a17b77fc?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WkmtI038NG3RySTZWr2a6BWm8LgyFJS3X7tk8qUS8YvrE8AoRaYaOFaGxjAIRpxvBQF-Agl63fRULHr7Phhh2RBtDZHY01qZibOjQLPpM~oILlM8AfS83pXbpxfOgjGnQi9r6fqfDTVlsTFhA~8WzDzTMx0MPrqlOsFEQnWS34Cziy4-DuL5KA7kDm7DVPkmPnxtsWK3MQnugE3CjE5tgYej5VW~4za1v8TBd7C148vg6xC9j9wXxr6CsJhcFGE-OWlbRP8zkvzFauvA7SJn7WSMPv43W~B5w3i1fS6KV3GY59OoNuGuhkCnKRjS3f2GmSMYxCEr-hT0U0jl5nkRYQ__" alt="" />
                </Link>
                <div className='flex flex-row w-[5rem] sm:w-[8rem] lg:w-[14rem] pr-10 h-[1.5rem] sm:h-[2.5rem] items-center justify-around border-2 rounded-l-[8px] sm:rounded-l-[0px] sm:rounded-r-[8px] border-[#8064A2] bg-[#F8F9FA] overflow-hidden'>
                    <input type="text" placeholder='Search...' className=' outline-none bg-[#F8F9FA] pl-4' />
                    <div className='bg-[#8064A2] w-[4rem] h-full flex  justify-center items-center'>
                        <IoIosSearch />
                    </div>
                </div>
            </div>

            <div className="hidden sm:flex sm:flex-row gap-[1rem] md:gap-[1.5rem] lg:gap-[3rem] items-center">
                <div onClick={()=>setopenfirstlist(!openfirstlist)} className='flex cursor-pointer  items-center gap-[6px]'>
                    <div className='rounded-full h-fit'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0.0390625C4.49875 0.0390625 0.0390625 4.49875 0.0390625 10C0.0390625 15.5013 4.49875 19.9609 10 19.9609C15.5013 19.9609 19.9609 15.5013 19.9609 10C19.9609 4.49875 15.5013 0.0390625 10 0.0390625ZM14.7405 5.83656L12.0142 11.7991C11.9706 11.8942 11.8942 11.9706 11.7991 12.0142L5.83656 14.7405C5.46953 14.9083 5.09172 14.53 5.25906 14.163L7.98531 8.20047C8.02891 8.10531 8.10531 8.02891 8.20047 7.98531L14.163 5.25906C14.53 5.09172 14.9083 5.47 14.7405 5.83656Z" fill="#8064A2"/>
                        </svg>
                    </div>
                    <div>
                        <p>Explore</p>
                    </div>
                    <div className='flex'>
                        <IoIosArrowUp className={openfirstlist?' rotate-180':'rotate-0'}/>
                    </div>
                    <div className='absolute top-[100%] w-[10rem] bg-white '>
                        <ul>
                            {openfirstlist && (
                                data.map((item) => (
                                    <div className='cursor-pointer p-3 border-b-[1px] '>
                                        <li className="inline-block whitespace-nowrap" value={item.name}>{item.name}</li>
                                       
                                    </div>
                                ))
                            )}

                        </ul>
                    </div>
                </div>

                <div onClick={()=>setopenSecondlist(!openSecondtlist)} className='flex cursor-pointer  items-center gap-[6px]'>
                    <div className='w-fit h-fit'>
                        <svg width="18"   height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 0.5L17.2272 5.25V14.75L9 19.5L0.772758 14.75V5.25L9 0.5Z" fill="#8064A2"/>
                        </svg>
                    </div>
                    <div className='flex'>
                        <p>Hobbies</p>
                    </div>
                    <div>
                        <IoIosArrowUp className={openSecondtlist?' rotate-180':'rotate-0'}/>
                    </div>
                    <div className='absolute top-[100%] w-[10rem] bg-white '>
                        <ul>
                            {openSecondtlist && (
                                data.map((item) => (
                                    <div className='cursor-pointer p-3  border-b-[1px] '>
                                        <li className="inline-block whitespace-nowrap" value={item.name}>{item.name}</li>
                                    </div>
                                ))
                            )}

                        </ul>
                    </div>
                </div>
                <Link to='/bookmark'>
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0H2C0.9 0 0 0.9 0 2V18L7 15L14 18V2C14 0.9 13.1 0 12 0Z" fill="#8064A2"/>
                    </svg>
                </Link>
                <Link to='/notification' className=' visible'>
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00005 20C9.10005 20 10.0001 19.1 10.0001 18H6.00005C6.00005 19.1 6.89005 20 8.00005 20ZM14.0001 14V9C14.0001 5.93 12.3601 3.36 9.50005 2.68V2C9.50005 1.17 8.83005 0.5 8.00005 0.5C7.17005 0.5 6.50005 1.17 6.50005 2V2.68C3.63005 3.36 2.00005 5.92 2.00005 9V14L0.710051 15.29C0.0800515 15.92 0.520051 17 1.41005 17H14.5801C15.4701 17 15.9201 15.92 15.2901 15.29L14.0001 14Z" fill="#8064A2"/>
                    </svg>
                </Link>
                <Link to='/add'>
                    <FaShoppingCart className='text-[#8064A2] ' />
                </Link>
                <div>
                    {
                       loginlogOut?(
                           <button onClick={btnHandler} className='py-2 px-5 rounded-[8px] border-2 border-[#8064A2] text-[#8064A2]'>Signin</button>
                       ):(
                           <div className='flex flex-row  gap-1 items-center'>
                              <Link to='/profile' className=''>
                                 <img src={image} className="w-10 h-10 rounded-full" alt="" />
                              </Link>
                              <div>
                                 <IoIosArrowUp onClick={()=>setmove(!move)} className={move?' rotate-180':'rotate-0'}/>
                              </div>

                              <div>
                                  {
                                     move &&(
                                         <div className='absolute right-10 top-[100%] bg-white'>
                                            <Link to='/profile' className='flex flex-row gap-2 items-center cursor-pointer p-3 border-b-[1px]'>
                                                <CgProfile className='text-purple-700'/>
                                                <p>Profile</p>
                                            </Link>
                                            <div className=' flex flex-row gap-2 items-center cursor-pointer p-3 border-b-[1px] '>
                                                <AiOutlineLogout  className='text-purple-700'/>
                                                <p>Log-out</p>
                                            </div>
                                         </div>
                                     )
                                  }
                              </div>

                           </div>
                       ) 
                    }
                </div>
            </div>

            <div className='flex sm:hidden flex-row w-full justify-between '>
                <Link to='/notification' className=' visible sm:hidden mx-auto pt-1'>
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00005 20C9.10005 20 10.0001 19.1 10.0001 18H6.00005C6.00005 19.1 6.89005 20 8.00005 20ZM14.0001 14V9C14.0001 5.93 12.3601 3.36 9.50005 2.68V2C9.50005 1.17 8.83005 0.5 8.00005 0.5C7.17005 0.5 6.50005 1.17 6.50005 2V2.68C3.63005 3.36 2.00005 5.92 2.00005 9V14L0.710051 15.29C0.0800515 15.92 0.520051 17 1.41005 17H14.5801C15.4701 17 15.9201 15.92 15.2901 15.29L14.0001 14Z" fill="#8064A2"/>
                    </svg>
                </Link>
                <div onClick={()=>setrotate(!rotate)}  className=' flex sm:hidden h-fit w-fit'>
                    {
                        rotate?(
                            <IoReorderThreeOutline className='text-3xl' />
                        ):(
                            <RxCross1 />
                        )
                    }
                </div>
            </div>
        </div>

        {/* Mobile size */}

        <div>
            {
                !rotate &&(
                    <div className='absolute top-[100%] right-0 w-[13rem] bg-white '>
                        <div className='cursor-pointer p-3 border-b-[1px] '>
                            {
                            loginlogOut?(
                                <button onClick={btnHandler} className='py-1 px-8 hover:bg-purple-300 transition-all duration-200 hover:text-white rounded-[8px] border-2 border-[#8064A2] text-[#8064A2]'>Signin</button>
                            ):(
                                <div>
                                    <Link to='/profile' className='flex flex-row  gap-3 items-center'>
                                        <div className=''>
                                            <img src={image} className="w-10 h-10 rounded-full" alt="" />
                                        </div>
                                        <div className='text-xl text-gray-700 font-semibold'>
                                            Profile
                                        </div>
                                    </Link>
                                    
                                </div>
                            ) 
                            }
                        </div>

                        <div>
                            <div onClick={()=>setopenfirstlist(!openfirstlist)} className='flex flex-col cursor-pointer p-3 border-b-[1px] '>
                                <div className='flex cursor-pointer relative items-center gap-[6px]' >
                                    <div className='rounded-full h-fit'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 0.0390625C4.49875 0.0390625 0.0390625 4.49875 0.0390625 10C0.0390625 15.5013 4.49875 19.9609 10 19.9609C15.5013 19.9609 19.9609 15.5013 19.9609 10C19.9609 4.49875 15.5013 0.0390625 10 0.0390625ZM14.7405 5.83656L12.0142 11.7991C11.9706 11.8942 11.8942 11.9706 11.7991 12.0142L5.83656 14.7405C5.46953 14.9083 5.09172 14.53 5.25906 14.163L7.98531 8.20047C8.02891 8.10531 8.10531 8.02891 8.20047 7.98531L14.163 5.25906C14.53 5.09172 14.9083 5.47 14.7405 5.83656Z" fill="#8064A2"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p>Explore</p>
                                    </div>
                                    <div className='flex'>
                                        <IoIosArrowUp className={openfirstlist?' rotate-180':'rotate-0'}/>
                                    </div>
                                </div>
                                <div className=' w-[10rem] bg-white '>
                                    <ul>
                                        {openfirstlist && (
                                            data.map((item) => (
                                                <div className='cursor-pointer p-3 border-b-[1px] '>
                                                    <li className="inline-block whitespace-nowrap" value={item.name}>{item.name}</li>
                                                
                                                </div>
                                            ))
                                        )}

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div onClick={()=>setopenSecondlist(!openSecondtlist)} className='flex flex-col cursor-pointer p-3 border-b-[1px] '>
                            <div className='flex cursor-pointer relative items-center gap-[6px]'>
                                <div className='w-fit h-fit'>
                                    <svg width="18"   height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 0.5L17.2272 5.25V14.75L9 19.5L0.772758 14.75V5.25L9 0.5Z" fill="#8064A2"/>
                                    </svg>
                                </div>
                                <div className='flex'>
                                    <p>Hobbies</p>
                                </div>
                                <div>
                                    <IoIosArrowUp className={openSecondtlist?' rotate-180':'rotate-0'}/>
                                </div>
                            </div>
                            <div className='w-[10rem] bg-white '>
                                <ul>
                                    {openSecondtlist && (
                                        data.map((item) => (
                                            <div className='cursor-pointer p-3  border-b-[1px] '>
                                                <li className="inline-block whitespace-nowrap" value={item.name}>{item.name}</li>
                                            </div>
                                        ))
                                    )}

                                </ul>
                            </div>
                        </div>

                        <Link to='/bookmark' className='flex flex-row items-center gap-2 cursor-pointer p-3 border-b-[1px] '>
                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0H2C0.9 0 0 0.9 0 2V18L7 15L14 18V2C14 0.9 13.1 0 12 0Z" fill="#8064A2"/>
                            </svg>
                            <p>Bookmark</p>
                        </Link>

                        <Link to='/add' className=' flex flex-row gap-2 items-center cursor-pointer p-3 border-b-[1px] '>
                            <FaShoppingCart className='text-[#8064A2] ' />
                            <p>Add-to-cart</p>
                        </Link>

                        <Link  className=' flex flex-row gap-2 items-center cursor-pointer p-3 border-b-[1px] '>
                            <AiOutlineLogout  className='text-purple-700'/>
                            <p>Log-out</p>
                        </Link>
                    </div>
                )
            }
        </div>

    </div>
  )
}

export default Navbar


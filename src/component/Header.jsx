import React from 'react';
import { FaSearch,FaShopify } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";

const Header = () => {
    return (
        <div className='bg-third py-3'>
             
             <div className='container mx-auto'>
                <div className='flex  items-center justify-between '>
                      {/* logo */}
                      <div className='w-[10%]' >
                          <img src="../assets/logo.png" alt=""   />
                      </div>
                       {/* logo */}
                       {/* Search */}
                      <div className='w-[40%] relative '  >
             
                        <input className='w-full py-2 px-3 outline-none font-dm text-xl ' placeholder='Search' />
                       
                         <div>
                           <FaSearch  className=' absolute  text-black text-xl  top-2/4 -translate-y-2/4 right-2.5' />
                         </div>
                       

                      </div>
                      {/* Search */}
                      {/* 3 Component  */}
                      <div className='w-[30%]'>

                        <div className='flex gap-x-8'>
                      
                        <div className='flex items-center'>
                                <FaShopify className=' text-4xl text-red-400' />
                                <div className='ml-4'>
                                        <p className='text-white text-base font-dm'>Offer</p>
                                        <p className='text-slate-200 text-xs font-dm'>Latest Offers</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <BsLightningChargeFill className=' text-4xl text-red-400' />
                                <div className='ml-4'>
                                        <p className='text-white text-base font-dm'>17th Deals</p>
                                        <p className='text-slate-200 text-xs font-dm'>Special Offers</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <IoMdPerson className=' text-4xl text-red-400' />
                                <div className='ml-4'>
                                        <p className='text-white text-base font-dm'>Offer</p>
                                        <p className='text-slate-200 text-xs font-dm'>Latest Offers</p>
                                </div>
                            </div>

                        </div>

                      </div>
                      {/* 3 Component  */}
                      <div className='w-[10%]' >
                           <button className='py-3 px-5 text-white bg-[#2256a1] font-dm'>PC Builder</button>
                      </div>
                </div>
             </div>
 
        </div>
       
    );
};

export default Header;
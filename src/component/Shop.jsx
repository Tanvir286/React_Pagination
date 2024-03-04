
import React, { useState } from 'react';
import Pagination from './Pagination';
import Selected from './Selected';


const Shop = () => {

   let [showNumber,setShowNumber] = useState(12);

   let  handleChange = (e) => {
      setShowNumber(+e.target.value); }


    return (
        <div className='container mx-auto my-10'>
              <div className='flex gap-x-4'>
                 {/* <div className=' bg-red-600'>4</div> */}
                 <div className='w-full relative '>
                    <div className='mt-3'>

                       <div className='flex py-2 border border-slate-300 shadow mb-5 justify-between items-center rounded'>   
                                              
                             <div>
                                 <h1 className='text-xl font-dm ml-3 font-bold'>HP</h1>
                             </div>
                              {/* Selected Part Start */}
                                <div className='flex items-center gap-x-4 mr-5'>
                                  
                                 {/* Show part start here  */}
                                 <div className='sm:flex items-center gap-x-3 '>
                                    <span className='font-dm font-regular text-base text-secondary inline-block'>Show:</span>

                                      <Selected  onChange={handleChange} className="md:w-[70px] border bg-slate-50 border-[#f0f0f0] text-gray-900 focus:ring-black-500 focus:border-black block  p-2.5  font-dm font-regular text-base">
                                        <option value="12" className='font-dm font-regular text-base' >12</option>
                                        <option value="24" className='font-dm font-regular text-base' >24</option>
                                        <option value="36" className='font-dm font-regular text-base' >36</option>
                                        <option value="48" className='font-dm font-regular text-base' >48</option>
                                      </Selected>                             

                                 </div> 
                                 {/* Show part  end  here  */}
                                 {/* Sort by part start here  */}
                                 <div className='sm:flex items-center gap-x-3 '>
                          
                                  <span className='font-dm font-regular text-basetext-secondary inline-block'>Sort By:</span>
 
                                  <Selected className="md:w-[210px] border bg-slate-50 border-[#f0f0f0] text-gray-900 rounded focus:ring-black-500 focus:border-black block  p-2.5  font-dm font-regular text-base">
                                   <option selected className="font-dm font-regular text-base" >Deafult</option>
                                   <option value="US" className='font-dm font-regular text-base' >Price (10000- 50000)</option>
                                   <option value="CA" className='font-dm font-regular text-base' >Price (20000- 100000)</option>
                                  </Selected>

                                 </div>  
                                 {/* Sort by part start here  */}

                               </div>
                              {/* Selected Part Start */}

                       </div>
                       
                       <Pagination itemsPerPage={showNumber} />
                    </div>
                 </div>
              </div>
        </div>
    );
};

export default Shop;
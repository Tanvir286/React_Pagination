
import React, {  useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Images } from '../Data/data'; 
import Picture from './Picture';
import { TbCurrencyTaka } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";


const items = [...Images];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
             currentItems.map((item,index) => (
                <div className='md:w-[45%] lg:w-[23%] mb-5 cursor-pointer'>
                    <Picture  key={index}  imageName={item.name}  />
                     <div className=' py-5 border border-slate px-3  text-center '>
                        <h1 className={`text-xl font-dm pb-3`}>{item.product}  </h1>
                         <hr />
                         {/* Icon with tk */}
                         <div className='flex items-center justify-center py-3 shadow'>
                           <h2 className='text-xl text-primary font-bold'>{item.price}  </h2>
                           <TbCurrencyTaka className='text-3xl text-primary font-bold' />
                          </div>
                          {/* Icon with tk */}
                          {/* Button with click */}
                          <div className='flex items-center justify-center gap-x-5 px-3 py-2 bg-blue-100 mt-5 hover:bg-secondary hover:text-white group duration-100'>                 
                             <FaCartShopping className='text-secondary text-[17px] group-hover:text-white' />
                             <a href="" className='text-secondary text-[17px] group-hover:text-white'>Buy Now</a>
                          </div>
                           
                     </div>
                </div>
              ))}
    </>
  );}


const Pagination = ({ itemsPerPage}) => {
      
    // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);


  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <> 
       <div className='md:flex md:flex-wrap gap-x-5 justify-between'>
           <Items currentItems={currentItems} />
       </div>
      <ReactPaginate
        breakLabel="..."
        previousLabel="PREV"
        nextLabel="NEXT"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4 }
        pageCount={pageCount}
        renderOnZeroPageCount={null}  
        previousLinkClassName="inline-block  py-2 px-3.5 font-dm font-semibold text-base hover:bg-primary text-black hover:text-white hover:underline"
        nextLinkClassName="inline-block  py-2 px-3.5 font-dm font-semibold text-base hover:bg-primary text-black hover:text-white hover:underline"
        containerClassName="flex flex-wrap gap-x-6 gap-y-2 mt-5  px-5 lg:px-0 items-center"
        pageLinkClassName="inline-block  border border-solid border-[#f0f0f0] py-2 px-4  font-dm font-semibold text-base hover:bg-primary text-black hover:text-white hover:underline"
      />
       <span className='font-regular text-secondary text-xl font-dm mb-0 lg:mb-3 ml-0 sm:ml-4 mt-3 lg:absolute lg:bottom-0 lg:right-0  lg:mt-0 inline-block'>Product from {itemOffset} to {itemOffset + itemsPerPage } of {items.length}  </span>
    </>
  );
};
 
export default Pagination;
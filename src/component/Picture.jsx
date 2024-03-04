import React from 'react';

const Picture = ({imageName,altText}) => {
    return (
        <div className=' py-2 border border-slate  shadow'>

            <img src={`./assets/${imageName}`} alt={altText}   className='w-full ' />
            
        </div>
    );
};

export default Picture;
import React from 'react';

const Hero = () => {
   return (
      <div className='max-w-[1640px] mx-auto p-4'>
         <div className='max-h-[500px] relative'>
            {/* OVERLAY */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/30 flex flex-col justify-center'>
               <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                  The <span className='text-orange-500'>Ultimate</span>
               </h1>
               <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                  <span className='text-orange-500'>Plant</span> Hub
               </h1>
            </div>
            {/* PEXELS OR UNSPLASH FOR IMAGES */}
            <img className='w-full max-h-[500px] object-cover' src='https://images.pexels.com/photos/4503732/pexels-photo-4503732.jpeg' alt='/' />
         </div>
      </div>
   );
};

export default Hero;

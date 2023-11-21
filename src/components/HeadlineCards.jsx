import React from 'react';

const HeadlineCards = () => {
   return (
      <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
         {/* CARD 1 */}
         <div className='rounded-xl relative'>
            {/* OVERLAY    */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
               <p className='font-bold text-2xl px-2 pt-4'>CARD #1</p>
               <p className='px-2'>subtitle</p>
               <button className='border-white bg-white text-black mx-2 absolute bottom-4'>button</button>
            </div>
            <img
               className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
               src='https://images.pexels.com/photos/4503732/pexels-photo-4503732.jpeg'
               alt='img1'
            />
         </div>
         {/* CARD 2 */}
         <div className='rounded-xl relative'>
            {/* OVERLAY    */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
               <p className='font-bold text-2xl px-2 pt-4'>CARD #2</p>
               <p className='px-2'>subtitle</p>
               <button className='border-white bg-white text-black mx-2 absolute bottom-4'>button</button>
            </div>
            <img
               className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
               src='https://images.pexels.com/photos/4503732/pexels-photo-4503732.jpeg'
               alt='img2'
            />
         </div>
         {/* CARD 3 */}
         <div className='rounded-xl relative'>
            {/* OVERLAY    */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
               <p className='font-bold text-2xl px-2 pt-4'>CARD #3</p>
               <p className='px-2'>subtitle</p>
               <button className='border-white bg-white text-black mx-2 absolute bottom-4'>button</button>
            </div>
            <img
               className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
               src='https://images.pexels.com/photos/4503732/pexels-photo-4503732.jpeg'
               alt='img3'
            />
         </div>
      </div>
   );
};

export default HeadlineCards;

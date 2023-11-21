import React from 'react';
import { categories } from '../data/data.js';

const Category = () => {
   return (
      <div className='max-w-[1640px] m-auto px-4 py-12'>
         {/* TODO - ADD GLOBAL STYLES FOR H1 etc */}
         <h1 className='text-green-600 font-bold text-4xl text-center'>Trending Plants</h1>
         {/* CATEGORIES */}
         <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
            {categories.map((plant, index) => (
               <div key={index} className='bg-gray-100 rounded-lg p-4 justify-between items-center'>
                  <h2 className='font-bold sm:text-xl'>{plant.name}</h2>
                  <img src={plant.image} alt={plant.name} className='w-20' />
               </div>
            ))}
         </div>
      </div>
   );
};

export default Category;

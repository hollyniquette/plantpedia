import React, { useState } from 'react';
import { data } from '../data/data.js';

const Plants = () => {
   const [plants, setPlants] = useState(data);

   //    FILTER TYPE foliage/flowering/etc
   const filterType = (category) => {
      setPlants(
         data.filter((plant) => {
            return plant.category === category;
         })
      );
   };

   //    ADD ADDITIONAL FILTER TAGS air-filtering, pet-safe, etc

   // Filter by maintenance
   const filterMaintenance = (maintenance) => {
      setPlants(
         data.filter((plant) => {
            return plant.maintenance === maintenance;
         })
      );
   };

   return (
      <div className='max-w-[1640px] m-auto px-4 py-12'>
         <h1 className='text-green-600 font-bold text-4xl text-center'>Plant Directory</h1>

         {/* FILTER ROW */}
         <div className='flex flex-col lg:flex-row justify-between'>
            {/* FILTER ROW */}
            <div>
               <p className='font-semibold text-gray-700'>filter by type</p>
               <div className='flex justify-between max-w-[600px] flex-wrap'>
                  <button onClick={() => setPlants(data)} className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>
                     ALL
                  </button>
                  <button onClick={() => filterType('foliage')} className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>
                     Foliage
                  </button>
                  <button onClick={() => filterType('flowering')} className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>
                     Flowering
                  </button>
                  <button
                     onClick={() => filterType('succulents')}
                     className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>
                     Succulents
                  </button>

                  <button className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>herbs</button>
                  {/* ADDITIONAL FILTER TAGS */}
                  {/* <button onClick={() => filterType('exotic')} className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>
                     Exotic
                  </button> */}
               </div>
            </div>
            {/* FILTER DIFFICULTY */}
            <div>
               <p className='font-semibold text-gray-700'>maintenance level</p>
               <div className='flex justify-between max-w-[390px] w-full'>
                  <button
                     onClick={() => filterMaintenance('minimal')}
                     className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>
                     Minimal
                  </button>
                  <button
                     onClick={() => filterMaintenance('low')}
                     className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>
                     Low
                  </button>
                  <button
                     onClick={() => filterMaintenance('moderate')}
                     className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>
                     Moderate
                  </button>
                  <button
                     onClick={() => filterMaintenance('high')}
                     className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>
                     High
                  </button>
               </div>
            </div>
         </div>

         {/* DISPLAY PLANTS */}
         <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {plants.map((plant, index) => (
               <div key={index} className='border shadow-xl rounded-lg hover:scale-105 duration-200'>
                  <img src={plant.image} alt={plant.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                  <div className='flex justify-between px-2 py-4'>
                     <p className='font-bold'>{plant.name}</p>
                     <p>
                        {plant.maintenance === 'minimal' && (
                           <span className='bg-green-500 text-white p-1 px-2 rounded-full'>{plant.maintenance}</span>
                        )}
                        {plant.maintenance === 'low' && <span className='bg-yellow-400 text-white p-1 px-2 rounded-full'>{plant.maintenance}</span>}
                        {plant.maintenance === 'moderate' && (
                           <span className='bg-orange-400 text-white p-1 px-2 rounded-full'>{plant.maintenance}</span>
                        )}
                        {plant.maintenance === 'high' && <span className='bg-red-500 text-white p-1 px-2 rounded-full'>{plant.maintenance}</span>}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Plants;

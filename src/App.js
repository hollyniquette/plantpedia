import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Plants from './components/Plants';
import Category from './components/Category';

function App() {
   return (
      <div>
         <Navbar />
         <Hero />
         <HeadlineCards />
         <Plants />
         <Category />
      </div>
   );
}

export default App;

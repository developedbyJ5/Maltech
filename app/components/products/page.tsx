"use client"
import { useState, useEffect } from 'react';
import AllData from '../data/data.json';
import Laptopdata from '../data/Laptopdata.json';
import routerData from '../data/routers.json';
import consolesData from '../data/consoles.json';
import smartphonesData from '../data/smartphones.json'
import tvData from '../data/TV.json'
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

const InitialLimit = 2;

const allItemsData = [...AllData];
const LaptopData = [...Laptopdata];
const SmartItemsData = [...smartphonesData];
const consoleItemdata = [...consolesData ]
const TV = [...tvData ];

function MyComponent() {
  
  

   const [limit, setLimit] = useState(InitialLimit);
   const handleProcedure = () => {
      setLimit(prevLimit => prevLimit + InitialLimit)
   }
   
   const [selectedOption, setSelectedOption] = useState('option1'); // Set default option value
   const [isLoading, setIsLoading] = useState(false);
 
   const handleSelectChange = (event) => {
     setIsLoading(true); // Set loading state to true when an option is selected
     setSelectedOption(event.target.value);
   };
 
   useEffect(() => {
     // Simulate loading delay
     const timeout = setTimeout(() => {
       setIsLoading(false); // Set loading state to false after delay
     }, 1000);

     return () => clearTimeout(timeout);
  }, [selectedOption]); 

   
  return (
    <div className='p-3'>
      <label className='text-xl font-bold pt-10'>Choose Device Type:</label>
      <select value={selectedOption} onChange={handleSelectChange} className='bg-gray-100 border-black border w-[90%] h-[30px] items-center mx-auto text-xs uppercase justify-center'>
        <option value="option1" selected>All</option>
        <option value="option2">SmartPhones</option>
        <option value="option3">Pc</option>
        <option value="option5">Tvs</option>
        <option value="option4">Gaming Consoles</option>

      </select>
     

      {isLoading ? (
        <div>Loading...</div> // Show loading message while isLoading is true
      ) : (
        <div>
      {selectedOption === 'option1' && 
      <div className="grid grid-cols-2 gap-4">
      {allItemsData.map(item => (
        <div key={item.id} className="bg-gray-100 p-4">
          <a href={item.image} className="block mb-4">
            <img src={item.image} alt={item.name} className="w-full h-auto" />
          </a>
          <h3 className="text-lg font-semibold">
            <a href="#" className="text-blue-500">{item.name}</a>
          </h3>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="text-sm text-gray-800">Price: ${item.price}</p>
          <p className="text-sm text-gray-800">Rating: {item.rating}</p>
        </div>
      ))}
    </div>
      
      }
      {selectedOption === 'option2' && 
      <div className="grid grid-cols-2 gap-4">
      {SmartItemsData.map(item => (
        <div key={item.id} className="bg-gray-100 p-4">
          <a href={item.image} className="block mb-4">
            <img src={item.image} alt={item.name} className="w-full h-auto" />
          </a>
          <h3 className="text-lg font-semibold">
            <a href="#" className="text-blue-500">{item.name}</a>
          </h3>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="text-sm text-gray-800">Price: ${item.price}</p>
          <p className="text-sm text-gray-800">Rating: {item.rating}</p>
        </div>
      ))}
    </div>
      
      }
      {selectedOption === 'option3' && 
      
      <div className="grid grid-cols-2 gap-4">
      {LaptopData.map(item => (
        <div key={item.id} className="bg-gray-100 p-4">
          <a href={item.image} className="block mb-4">
            <img src={item.image} alt={item.name} className="w-full h-auto" />
          </a>
          <h3 className="text-lg font-semibold">
            <a href="#" className="text-blue-500">{item.name}</a>
          </h3>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="text-sm text-gray-800">Price: ${item.price}</p>
          <p className="text-sm text-gray-800">Rating: {item.rating}</p>
        </div>
      ))}
    </div>
      }
      {selectedOption === 'option4' &&
       <div className="grid grid-cols-2 gap-4">
       {consoleItemdata.map(item => (
         <div key={item.id} className="bg-gray-100 p-4">
           <a href={item.image} className="block mb-4">
             <img src={item.image} alt={item.name} className="w-full h-auto" />
           </a>
           <h3 className="text-lg font-semibold">
             <a href="#" className="text-blue-500">{item.name}</a>
           </h3>
           <p className="text-sm text-gray-600">{item.description}</p>
           <p className="text-sm text-gray-800">Price: ${item.price}</p>
           <p className="text-sm text-gray-800">Rating: {item.rating}</p>
         </div>
       ))}
       {limit < consoleItemdata.length && (
         <Button onClick={handleProcedure}>Load More</Button>
       )}
     </div>
      }
      {selectedOption === 'option5'  && 
      <div className="grid grid-cols-2 gap-4">
      {TV.map(item => (
        <div key={item.id} className="bg-gray-100 p-4">
          <a href={item.image} className="block mb-4">
            <img src={item.image} alt={item.name} className="w-full h-auto" />
          </a>
          <h3 className="text-lg font-semibold">
            <a href="#" className="text-blue-500">{item.name}</a>
          </h3>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="text-sm text-gray-800">Price: ${item.price}</p>
          <p className="text-sm text-gray-800">Rating: {item.rating}</p>
        </div>
      ))}
      {limit < TV.length && (
        <Button onClick={handleProcedure}>Load More</Button>
      )}
    </div>
      
  } 
  </div>
  ) }
    </div>
  );
}

export default MyComponent;
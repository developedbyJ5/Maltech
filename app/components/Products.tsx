"use client"

import { useState } from 'react';

import AllData from '../data/data.json';
import { Button } from '@/components/ui/button';
import LaptopData from '../data/Laptopdata.json' 


const InitialLimit = 2;
const allTechItems = [...AllData,...LaptopData ];

function TechItemsMenu() {
  
      const [limit, setLimit] = useState(InitialLimit);

        const handleViewMore = () => {
            setLimit(prevLimit => prevLimit + InitialLimit);
              };
  

  return (
    <div >
      
      <ul className='grid grid-cols-2 gap-x-4 pb-10'>
            {allTechItems.slice(0,limit).map(item => (
                    <li key={item.id} className='pb-10 p-3'>
                         <img src={item.image}  alt={item.name} />
                       <h3>{item.name}</h3>
                      <p className='text-xs h-[60px]'>{item.description}</p>
                       <p>Price: R {item.price}</p>
                        <p className='text-yellow-500'>Rating: {item.rating}</p>
                        
                      

                        <Button className='mt-5 rounded-none bg-black  ' >Add To Cart</Button>
                        
                           </li>
                        
                         ))}
                    </ul>
                    
                    {limit < allTechItems.length &&  (
                              <Button id='view More' onClick={handleViewMore} className="border-orange-800 bg-white border py-3 px-4 mx-auto text-orange-800 rounded-md ml-[120px] uppercase  ">Load More</Button>
                                    ) } 
                                
                     
                     </div>
                     )
                        }

   export default TechItemsMenu;

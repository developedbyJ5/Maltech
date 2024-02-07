"use client"
import Link from "next/link";
import { AlignRight, Heart, Key, Search, X, ChevronsRight , ChevronRight } from 'lucide-react';
import { useState } from "react";
import { Input } from "@/components/ui/input";
import data from '../data/data.json'
import { isPagesAPIRouteMatch } from "next/dist/server/future/route-matches/pages-api-route-match";



export default function  HeaderMain (){
    const navLinks = [
          { href: '/', label: 'Home', icon:<ChevronsRight /> },
            { href: '/about', label: 'About', icon:<ChevronRight/> },
              { href: '/services', label: 'Services', icon:<ChevronRight/> },
                { href: '/contact', label: 'Contact', icon:<ChevronsRight/> },
                ];
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = ()=> {
      setOpen(!isOpen )
    };

    const [isSearchOpen, setSearchOpen] = useState(false);
    const toggleSearch = () => {
      setSearchOpen(!isSearchOpen)
    }
     
    const [searchQuery, setSearchQuery] = useState('');
  
    // Filter data based on search query
    const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Handle input change
    const handleInputChange = (e) => {
      setSearchQuery(e.target.value);
    };


    return (
        <nav className="bg-black h-15 w-full justify-center">
          <div className="flex justify-between items-center flex-wrap ">
            <Link className="font-Protest text-xl text-white p-5" href="/">Maltec</Link>
              <div className="hidden lg:flex flex-wrap ">
              <ul className="flex gap-4">
                {navLinks.map((link,index)=>(
                    <li key={index} >
                     <Link href={link.href} >
                     <h1 className="text-white">{link.label} </h1>
                     </Link>
                    </li>

                ))  }
                </ul> 
            </div>
            <div className="flex flex-wrap items-center gap-4">
                <Heart color="white" size={20}/>
            <Search onClick={toggleSearch} color="white" size={20}/>
            {isSearchOpen && <div className='bg-white rounded-md w-full h-[40px] absolute top-[65px]  left-0 items-center flex flex-wrap '>
                            <Input name="search for any product" placeholder='search for any product' className='' onChange={handleInputChange} value={searchQuery} />
                                          <Search color='white' className='bg-gray-800 py-1 px-2 rounded-md absolute left-[330px] sm:left-[750px] '/>
        
        {searchQuery && (
        <ul className="bg-white absolute w-full h-[150px] w-[90%] top-[35px] ">
        {filteredData.map(item => (
          <li key={item.id} className="flex flex-wrap">
            <img src={item.image} alt={item.name }></img>
            
            {item.name}</li>
          // You can display other item details as needed
        ))}
      </ul>
      ) }
      </div> }
            {isOpen ? (<X onClick={toggleMenu} color="white" size={30}/>) :
            (<AlignRight onClick={toggleMenu} color="white" size={30} />) 
            };
             
           </div>
            {isOpen && <div className=" absolute top-[60px] w-full h-[168px] bg-black ">
               <div className="flex flex-col">
                <ul className="gap-y-4">
                  {navLinks.map((link,index)=>(
                   <li key={index} className="pb-4 border-gray-400 brightness-40 border-b">
                    <Link href={link.href} className=""><h1 className="text-white flex flex-wrap justify-between">{link.label} <span className="pr-3 ">{link.icon} </span></h1></Link>
                   </li>
                  ))}
                 
                 
                </ul>
               </div>
              </div>}
          </div>
        </nav>
    )
}
import { Button } from "@/components/ui/button";

export default function Home(){
    return(
        <div className="bg-[url(/speakers.jpg)] bg-cover bg-center w-full h-[560px] ">
            <h1 className="text-white font-bold text-3xl pt-[90px] p-5">Empowering Your Tech Dreams</h1>
            <p className="text-white pt-10 m-5">Enter the Digital Realm: Where Innovation Meets Convenience! Explore Cutting-Edge Tech, Elevate Your Experience. Your Gateway to Technological Triumph Awaits – Dive In! Unleash the Potential of Tomorrow, Today. Elevate Your Digital Journey: Where Technology Meets Excellence</p>
            <div className="flex-wrap ">
            <Button className=" bg-orange-800 m-5">Shop Now</Button>
            <Button className="text-black bg-white ">Learn More</Button>
            </div>
        </div>
    )
}
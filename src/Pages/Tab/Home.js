import React, { useState } from 'react';
import BackgroundImage from "../../Assets/images.jpg";
import { Link } from 'react-router-dom'

 

const Home = () => {    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative w-full h-screen">
            
            <img
                src={BackgroundImage}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-4 bg-opacity-60 text-white z-20">
                <div className="flex items-center">
                    <Link to="/Main" className="text-lg font-semibold py-2 px-4 rounded border-2 focus:outline-none focus:ring-2">
                        Edit
                    </Link>
                </div>
            </nav>


            <div className="flex items-center justify-center w-full h-full absolute top-0 left-0 z-10 text-center text-white">
                <div className="p-4">
                    <h1 className="text-5xl font-bold">Welcome to Our Site</h1>
                    <p className="mt-4 text-xl">This is a demo page for more explore. Please click on Edit Button</p>
                </div>
            </div>
        </div>
        )
    };

export default Home;




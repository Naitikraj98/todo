import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BackgroundImage from "../../Assets/images.jpg";
import { TbArrowForwardUp, TbArrowBackUp } from "react-icons/tb";
import DroppableArea from "./DraggableArea";
import { useNavigate } from "react-router-dom";
import { CiMobile1 } from "react-icons/ci";
import { RiDownloadCloud2Line } from "react-icons/ri";
import { FaDesktop, FaBars, FaTimes } from "react-icons/fa";
import { mobileDimensions, desktopDimensions } from "./ItemTypes"
import image from "../../Assets/Event1.jpg";
import image1 from "../../Assets/Event3.jpg";
import image2 from "../../Assets/Event2.jpg";
import image3 from "../../Assets/Event4.jpg";

const Event = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [deviceMode, setDeviceMode] = useState('desktop');

    const [textItems, setTextItems] = useState([
        { id: 1, text: "This is my Project Snippet", left: 100, top: 100 },
        { id: 2, text: "I Created For Resturnt", left: 200, top: 150 },
        { id: 3, text: "Where we can book table for different Event", left: 150, top: 200 },
        { id: 4, text: "Like  birthday, Aniversary, Meeting and may more ", left: 250, top: 250 },
    ]);


    const [isModified, setIsModified] = useState(false);

    const navigate = useNavigate();

    const handleDrop = (id, left, top) => {
        setTextItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, left, top } : item))
        );
        setIsDragging(false);
        setIsModified(true);
    };

    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    const handleSave = () => {
        console.log("Saved items:", textItems);
        setIsModified(false);
    };

    const handleExit = () => {
        setTextItems([
            { id: 1, text: "This is my Project Snippet", left: 100, top: 100 },
            { id: 2, text: "I Created For Resturnt", left: 200, top: 150 },
            { id: 3, text: "Where we can book table for different Event", left: 150, top: 200 },
            { id: 4, text: "Like  birthday, Aniversary, Meeting and may more ", left: 250, top: 250 },
        ]);


        setIsModified(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleDownload = () => {
        const blob = new Blob([JSON.stringify(textItems, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'text-items.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
    return (
        <DndProvider backend={HTML5Backend}>
            <div className={`relative w-full h-screen ${deviceMode === 'mobile' ? 'bg-gray-100' : 'bg-white'}`}>
                <img
                    src={BackgroundImage}
                    alt="Background"
                    className={`absolute inset-0 w-full h-screen object-cover ${deviceMode === 'mobile' ? 'opacity-50' : 'opacity-100'}`}
                />

                <div className={`absolute inset-0 grid grid-cols-1 ${deviceMode === 'mobile' ? 'grid-rows-1' : 'sm:grid-cols-2 lg:grid-cols-2'} gap-4 mt-20 p-4`}>
                    <div className="relative">
                        <img src={image} alt="Image 1" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="relative">
                        <img src={image1} alt="Image 2" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="relative">
                        <img src={image2} alt="Image 3" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="relative">
                        <img src={image3} alt="Image 3" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>

                <DroppableArea
                    items={textItems}
                    onDrop={handleDrop}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                />

                <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-gray-800 text-white z-20">
                    <div className="flex items-center space-x-2">
                        <button
                            className={`text-lg font-semibold py-2 px-4 rounded border-2 ${isModified ? "bg-blue-500" : "bg-gray-500"} focus:outline-none focus:ring-2`}
                            onClick={handleSave}
                            disabled={!isModified}
                        >
                            Save
                        </button>
                        <button
                            className={`text-lg font-semibold py-2 px-4 rounded border-2 ${isModified ? "bg-blue-500" : "bg-gray-500"} focus:outline-none focus:ring-2`}
                            onClick={handleExit}
                            disabled={!isModified}
                        >
                            Exit
                        </button>
                        <button
                            className="w-8 h-8 cursor-pointer hover:text-gray-700"
                            onClick={() => navigate('/')}
                            title="Back"
                        >
                            <TbArrowBackUp className="w-8 h-8" />
                        </button>
                        <button
                            className="w-8 h-8 cursor-pointer hover:text-gray-700"
                            title="Forward"
                        >
                            <TbArrowForwardUp className="w-8 h-8" />
                        </button>
                        <button
                            className="w-8 h-8 cursor-pointer hover:text-gray-300"
                            onClick={handleDownload}
                            title="Download"
                        >
                            <RiDownloadCloud2Line className="w-8 h-8" />
                        </button>
                    </div>

                    <div className="lg:hidden flex items-center" onClick={toggleMenu}>
                        {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
                    </div>

                    <div
                        className={`flex-col lg:flex-row lg:flex items-center space-x-0 lg:space-x-4 space-y-4 lg:space-y-0 mt-4 lg:mt-0 ${isOpen ? 'flex' : 'hidden'} lg:flex ml-auto`}
                    >
                        <CiMobile1
                            className={`text-2xl cursor-pointer ${deviceMode === 'mobile' ? 'text-blue-500' : 'text-white'}`}
                            title="Mobile"
                            onClick={() => setDeviceMode('mobile')}
                        />
                        <FaDesktop
                            className={`text-2xl cursor-pointer ${deviceMode === 'desktop' ? 'text-blue-500' : 'text-white'}`}
                            title="Desktop"
                            onClick={() => setDeviceMode('desktop')}
                        />
                        <ul className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
                            <li>
                                <a href="/Event" className="block p-2 rounded-lg hover:text-gray-600 hover:bg-gray-50 text-center">
                                    Events
                                </a>
                            </li>
                            <li>
                                <a href="/OurStory" className="block p-2 rounded-lg hover:text-gray-600 hover:bg-gray-50 text-center">
                                    Our Story
                                </a>
                            </li>
                            <li>
                                <a href="/Demo" className="block p-2 rounded-lg hover:text-gray-600 hover:bg-gray-50 text-center">
                                    Menu
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </DndProvider>
    );
};

export default Event;

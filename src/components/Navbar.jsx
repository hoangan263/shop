import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";


const Navbar = () => {


    return (
        <nav className="bg-[#FFFFFF] p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-black text-2xl font-bold">
                    <Link to="/">Exclusive</Link>
                </div>
                <div className="hidden md:flex space-x-8">
                    <Link to="/" className="text-black ">Home</Link>
                    <Link to="/" className="text-black  ">Contact</Link>
                    <Link to="/" className="text-black  ">About</Link>
                    <Link to="/" className="text-black  ">Sign Up</Link>
                </div>
                <div className="hidden md:flex items-center">
                    <input className="w-full px-6 py-2 rounded-md " type="text" placeholder="What are you looking for? "/>
                    <button className="text-black text-2xl px-4 py-2 rounded-md"><IoMdHeartEmpty /></button>
                    <button className="text-black text-2xl px-4 py-2 rounded-md"><AiOutlineShoppingCart /></button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

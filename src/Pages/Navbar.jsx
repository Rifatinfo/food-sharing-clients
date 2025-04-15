import { RiMenuAddFill } from "react-icons/ri";
import { useState } from "react";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
    const Links = [
        { name: 'Home', link: '/' },
        { name: 'Our Menu', link: '/menu' },
        { name: 'Order', link: '/order/popular' },
        { name: 'Login', link: '/login' }
    ];
    
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full fixed z-10 bg-opacity-30 bg-black top-0 left-0">
            <div className="md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7">
                <div className="font-bold text-xl cursor-pointer flex items-center text-white">
                    <p className="tracking-28p">BISTRO BOSS <br/><span className="tracking-38p">Restaurant</span></p>
                </div>
                {/* React icon nav */}
                <div 
                    onClick={() => setOpen(!open)} 
                    className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
                >
                    {open ? <IoClose /> : <RiMenuAddFill />}
                </div>
                <ul 
                    className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}
                >
                    {Links.map((link, index) => (
                        <li key={index} className="md:ml-8 text-xl md:my-0 my-7">
                            <a href={link.link} className="duration-500 text-white">{link.name}</a>
                        </li>
                    ))}
                   
                </ul>
            </div>
        </div>
    );
};




export default Navbar;
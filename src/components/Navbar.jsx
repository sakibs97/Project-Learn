import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const NavbarManu = [
    {
        id: 1,
        title: "Home",
        path: "/",
    },
    {
        id: 2,
        title: "Service",
        path: "Service",
    },
    {
        id: 3,
        title: "About Us",
        path: "#",
    },
    {
        id: 4,
        title: "Our Team",
        path: "#",
    },
    {
        id: 5,
        title: "Contact Us",
        path: "#",
    },
];

const Navbar = () => {
    let [show, setShow] = useState(false);

    let handelShow = () => {
        setShow(!show);
    };

    return (
        <nav className="relative z-20">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                className="container py-10 flex justify-between items-center">
                {/* Logo section */}
                <div className="">
                    <h1 className="font-lato text-2xl">Let's Start</h1>
                </div>
                {/* Menu Part */}
                <div className=''>
                    <ul className={`lg:flex items-center lg:static gap-3 absolute lg:bg-none ${show ? "bg-light border shadow-md rounded-lg text-center top-[35px] right-2 pt-8 px-4 pb-5 ease-in-out duration-500 bg-opacity-100"
                        : "left-[-10000px] top-[140px]"}`}>
                        {NavbarManu.map((menu) => (
                            <li key={menu.id}>
                                <a href={menu.path}
                                    className="inline-block py-2 px-3 hover:text-secondary relative group font-lato text-sm font-bold"
                                >
                                    <div className="w-2 h-2 bg-secondary absolute mt-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden rounded-full"></div>
                                    {menu.title}</a>
                            </li>
                        ))}
                        <button className="primary-btn lg:mt-0 mt-3">Sign In</button>
                    </ul>
                </div>
                <div onClick={handelShow} className="lg:hidden z-20">
                    {show ? (
                        <RxCross2 className="w-8 h-8" />
                    ) : (
                        <FaBars className="w-8 h-8" />
                    )}


                </div>
            </motion.div>
        </nav>
    )
}

export default Navbar
import { motion } from "framer-motion";



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
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-3">
                        {NavbarManu.map((menu) => (
                            <li key={menu.id}>
                                <a href={menu.path}
                                    className="inline-block py-2 px-3 hover:text-secondary relative group font-lato text-sm font-bold"
                                >
                                    <div className="w-2 h-2 bg-secondary absolute mt-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden rounded-full"></div>
                                    {menu.title}</a>
                            </li>
                        ))}
                        <button className="primary-btn">Sign In</button>
                    </ul>
                </div>
            </motion.div>
        </nav>
    )
}

export default Navbar
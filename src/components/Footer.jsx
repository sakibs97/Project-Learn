import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { TbWorldWww } from "react-icons/tb"
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <footer className="py-28 bg-[#f7f7f7]">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
                    <div className="space-y-4 max-w-[300px]">
                        <h3 className="font-lato font-bold text-2xl">The Coding Journey</h3>
                        <p className="font-lato font-normal text-dark2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laboriosam molestiae culpa amet earum modi ipsum itaque expedita distinctio quo, totam ratione perferendis quis facilis ad. Similique sequi iste ab.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <h1 className="text-2xl font-bold">Courses</h1>
                            <div className="text-dark2">
                                <ul className="space-y-2 text-lg">
                                    <li className="cursor-pointer hover:text-secondary duration-300">Software Development</li>
                                    <li className="cursor-pointer hover:text-secondary duration-300">Web Development</li>
                                    <li className="cursor-pointer hover:text-secondary duration-300">App Development</li>
                                    <li className="cursor-pointer hover:text-secondary duration-300">E-learning</li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-2xl font-bold">Links</h1>
                            <div className="text-dark2">
                                <ul className="space-y-2 text-lg">
                                    <li className="cursor-pointer hover:text-secondary duration-300">Home</li>
                                    <li className="cursor-pointer hover:text-secondary duration-300">Service</li>
                                    <li className="cursor-pointer hover:text-secondary duration-300">About</li>
                                    <li className="cursor-pointer hover:text-secondary duration-300">Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 max-w-[300px]">
                        <h3 className="font-lato font-bold text-2xl">Get In Touch</h3>
                        <div className="flex items-center">
                            <input type="text" placeholder="Enter your email"
                                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2" />
                            <button className="bg-primary text-white font-lato font-semibold py-4 px-6 rounded-e-xl">Go</button>
                        </div>
                        <div className="flex space-x-6 py-3">
                            <a href="">
                                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                            </a>
                            <a href="">
                                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                            </a>
                            <a href="">
                                <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                            </a>
                            <a href="">
                                <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </footer>
    )
}

export default Footer
import React from 'react'
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { IoMdHappy } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import { motion } from 'framer-motion';

const ServiceData = [
    {
        id: 1,
        title: "Software Development",
        link: "#",
        icon: <RiComputerLine />,
        delay: 0.2,
    },
    {
        id: 2,
        title: "Web Development",
        link: "#",
        icon: <TbWorldWww />,
        delay: 0.3,
    },
    {
        id: 3,
        title: "Mobile Development",
        link: "#",
        icon: <CiMobile3 />,
        delay: 0.4,
    },
    {
        id: 4,
        title: "SEO optimization",
        link: "#",
        icon: <IoPulseOutline />,
        delay: 0.5,
    },
    {
        id: 5,
        title: "Satisfied Clients",
        link: "#",
        icon: <IoMdHappy />,
        delay: 0.6,
    },
    {
        id: 6,
        title: "24/7 support",
        link: "#",
        icon: <BiSupport />,
        delay: 0.6,
    },
];

const ServiceSlide = (delay) => {
    return {
        initial: {
            opacity: 0,
            x: 50,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                delay: delay,
                ease: "easeInOut",
            }
        }
    }
}

const Service = () => {
    return (
        <section className='bg-white'>
            <div className="container pb-14 pt-16">
                <h2 className='font-lato text-4xl font-bold text-left pb-10'>
                    Service we provide
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {ServiceData.map((service) => (
                        <>
                            <motion.div
                                variants={ServiceSlide(service.delay)}
                                initial="initial"
                                whileInView={"animate"}
                                viewport={{ once: true }}
                                className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 hover:shadow-2xl duration-500">
                                <div className="text-4xl mb-4">{service.icon}
                                </div>
                                <h5 className='font-lato font-semibold text-lg text-center px-3'>{service.title}</h5>
                            </motion.div>
                        </>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Service
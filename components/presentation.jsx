import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion';

export default function Presentation(props){
    return (
        <section className='py-12' id="about">
            
            <motion.div 
            initial = {{
                x : -100,
                y : 0,
                // scale : 0.8,
                opacity : 0,
            }}
            whileInView = {{
                x : 0,
                y : 0,
                // scale : 1,
                opacity : 1,
                transition : {duration : 2}
            }}
            className=" lg:px-20 md:px-16 xs:px-8 w-[100%] h-fit flex lg:flex-row xs:flex-col justify-center  align-center gap-12  ">
                <div
                
                 className=" flex flex-col text-center gap-6 lg:w-[60%] xs:w-full">
                    <h1 className={`section-title text-center lg:text-4xl md:text-3xl xs:text-2xl text-primaryColor font-bold mt-12  uppercase ${props.isArabic ? '' : 'tracking-[1rem] xs:tracking-[0.5rem]'} ` }>About</h1>
                    <p
                    className=' lg:text-lg xs:text-md text-black  lg:leading-[2.5] xs:leading-[2.5]  text-center ' >{props.content}</p>
                    
                </div>
                {/* <div className=' flex justify-center align-center h-[100%] lg:pt-28   '>
                    <img src="/sante.webp" alt="" className=" w-96   rounded-lg  shadow-2xl" />
                </div> */}

            </motion.div>
        </section>
    )
}
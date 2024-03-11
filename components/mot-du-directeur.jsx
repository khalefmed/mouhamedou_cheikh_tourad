import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion';

export default function MotDuDirecteur(props){
    return (
        <section className='py-12'>
            

            <motion.div 
            initial = {{
                x : 0,
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
            className=" lg:px-20 md:px-16 xs:px-8 w-[100%] h-fit flex flex-col justify-between  align-center gap-12  ">

                <h1 className={`section-title text-center lg:text-4xl md:text-3xl xs:text-2xl text-green-900 font-bold mt-12  uppercase ${props.isArabic ? '' : 'tracking-[1rem] xs:tracking-[0.5rem]'} ` }>{props.motDuDirecteur}</h1>
                <div className=' flex justify-center align-center h-[100%] '>
                    <img src={props.image_directeur} alt="" className=" w-64   rounded-lg  shadow-2xl" />
                </div>
                
                <div>
                <p className=' font-semibold lg:text-lg xs:text-md lg:leading-[2.5] xs:leading-[2.5] '>{props.welcome}</p>
                <p className=' lg:text-lg xs:text-md text-black  lg:leading-[2.5] xs:leading-[2.5]  text-justify ' >{props.content }</p>
                <p className=' text-right font-semibold lg:text-md xs:text-sm mt-10'>{props.nom_directeur}</p>
                </div>
                    
                
                

            </motion.div>
        </section>
    )
}
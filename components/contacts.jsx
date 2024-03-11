

import {BsFillTelephoneFill} from 'react-icons/bs';
import {GrMail} from 'react-icons/gr';
import {ImLocation} from 'react-icons/im';
import {MdFax} from 'react-icons/md';

import { motion, useAnimation } from 'framer-motion';


export default function Contacts(props){

    return (
        <section className=' lg:px-20 md:px-16 xs:px-5 py-12 '>
        <motion.h1
            initial = {{
                x : 200,
                y : 0,
                opacity : 0,
            }}
            whileInView = {{
                x : 0,
                y : 0,
                opacity : 1,
                transition : {duration : 2}
            }}
        
        
            className={`section-title text-center lg:text-4xl md:text-3xl xs:text-2xl text-green-900 font-bold mt-12 md:mb-20 xs:mb-10 uppercase ${props.isArabic ? '' : 'tracking-[1rem] xs:tracking-[0.5rem]'} ` }>{props.contacts}</motion.h1>
            
            <div className=' flex flex-row flex-wrap md:gap-8 xs:gap-5 justify-center align-center '>

                <motion.div
                    initial = {{
                        x : 200,
                        y : 0,
                        opacity : 0,
                    }}
                    whileInView = {{
                        x : 0,
                        y : 0,
                        opacity : 1,
                        transition : {duration : 1, delay: 0}
                    }}
                 className='flex flex-row align-center justify-start gap-3 px-5 py-4 shadow-lg rounded-lg w-96'>  
                    
                    <BsFillTelephoneFill className=' text-black  md:text-2xl xs:text-xl  h-full'/>
                    <p className=' md:text-md xs:text-sm'>+222 45 25 72 61 / +222 36 62 39 22</p>
                    
                   
                </motion.div>
                <motion.div
                initial = {{
                    x : 200,
                    y : 0,
                    opacity : 0,
                }}
                whileInView = {{
                    x : 0,
                    y : 0,
                    opacity : 1,
                    transition : {duration : 1, delay : 0.25}
                }}
                
                className='flex flex-row align-center justify-start gap-3 px-5 py-4 shadow-lg rounded-lg w-96'>  
                    
                    <MdFax className=' text-black text-2xl  h-full'/>
                    <p  className=' md:text-md xs:text-sm'>+222 45 29 29 53 </p>
                    
                   
                </motion.div>
                <motion.div
                initial = {{
                    x : 200,
                    y : 0,
                    opacity : 0,
                }}
                whileInView = {{
                    x : 0,
                    y : 0,
                    opacity : 1,
                    transition : {duration : 1, delay : 0.5}
                }}
                 className='flex flex-row align-center justify-start gap-3 px-5 py-4 shadow-lg rounded-lg w-96'>  
                    
                    <GrMail className=' text-black text-2xl  h-full'/>
                    <p  className=' md:text-md xs:text-sm'>hopitalnational1@gmail.com </p>
                    
                   
                </motion.div>
                <motion.div
                initial = {{
                    x : 200,
                    y : 0,
                    opacity : 0,
                }}
                whileInView = {{
                    x : 0,
                    y : 0,
                    opacity : 1,
                    transition : {duration : 1, delay : 0.75}
                }}
                 className='flex flex-row align-center justify-start gap-3 px-5 py-4 shadow-lg rounded-lg w-96'>  
                    
                    <ImLocation className=' text-black text-2xl  h-full'/>
                    <p  className=' md:text-md xs:text-sm'>BP : 612 NKTT / Nouakchott-Mauritanie </p>
                    
                   
                </motion.div>
                
            </div>
        </section>
    )
}
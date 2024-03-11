"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';






export default function Domains(props){

  let i = 0;
    return (
        
        <section  className=" py-12" id="domains">
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
              
              
              className={`section-title text-center lg:text-4xl md:text-3xl xs:text-2xl text-primaryColor font-bold mt-12 md:mb-20 xs:mb-10 uppercase ${props.isArabic ? '' : 'tracking-[1rem] xs:tracking-[0.5rem]'} ` }>Expertise domains</motion.h1>
            <motion.div 
              
              
             className=" animatedDiv flex  flex-row flex-wrap justify-center align-center lg:gap-8 md:gap-5 xs:gap-2 lg:px-20 md:px-10 xs:px-3">
  
                {
                  
                  
                  props.domainsList && props.domainsList.map((domain) => {
                    i++;
                    return <Link key={domain._id} href={`#`}>
                      
                    <motion.div
                    key={domain._id}
                     initial = {
                      {
                        x: 0,
                        y: 0,
                        scaleX: 0.6,
                        scaleY : 0.6,
                        opacity : 0,
                      }
                     }
                     whileInView = {
                      {
                        opacity : 1,
                        x: 0,
                        y: 0,
                        scaleX: 1,
                        scaleY : 1,
                        transition: {}
                      }
                    }
                    
                     
                     className=" service  md:py-5 md:px-2 xs:py-3 xs:px-2  justify-center align-center lg:px-8 lg:py-5 lg:min-w-[10em] md:min-w-[8em] xs:min-w-[5em] shadow-2xl rounded-lg bg-white lg:text-2xl md:text-xl  font-medium mb-8 transform duration-1000  transition-all text-center  ">{domain[`domain_name`]}</motion.div>
                    </Link>
                  })
                }   
              
                   

            </motion.div>

        </section>
    )

}







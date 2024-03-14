import Link from 'next/link'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion';

import imageUrlBuilder from '@sanity/image-url'


export default function ProjectsListComponent(props){

    function Substring(texte) {
        if (texte.length <= 80) {

          return texte;

        } else {

          const texteReduit = texte.slice(0, 80) + '...';
          return texteReduit;
          
        }
    }

    return (
        <div className=' lg:px-20 md:px-16 sm:px-3 flex flex-row justify-center align-center flex-wrap gap-5 my-16'>
            
            {props.projectsList && props.projectsList.map((project) => {
                // console.log(talk)
                return <motion.div
                key={project._id}
                initial = {{
                    x : 200,
                    y : 0,
                    opacity : 0,
                }}
                whileInView = {{
                    x : 0,
                    y : 0,
                    opacity : 1,
                    transition : {duration : 1}
                }}
                 className=' actualite shadow-2xl flex flex-col justiyf-center align-center gap-2 py-2 px-2 rounded-lg w-[21rem] '>
                    {/* <img src={urlFor(publication.image_actualite.asset._ref).url()} alt="" className=' rounded-lg w-full max-h-[12rem] box-content' /> */}
                    <div className='px-3 py-3 flex flex-col gap-2'>
                        <p className=' text-[grey] text-dm text-start'>{project.date_project}</p>
                        <h2 className='text-black font-semibold text-lg  text-start'>{project.project_title}</h2>
                        <Link href={`#`} className='text-primaryColor font-semibold text-start w-full-5 my-2 text-lg'>{props.seeMore} </Link>
                    </div>
                </motion.div>
            })}

        </div>
    )
}
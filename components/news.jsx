import Link from 'next/link';

import { motion, useAnimation } from 'framer-motion';
import imageUrlBuilder from '@sanity/image-url'

export default function News (props){

    
    const builder = imageUrlBuilder(props.client);

    function urlFor(source) {
        return builder.image(source)
    }
    

    // function Substring(texte) {
    //     if (texte.length <= 80) {
    //       // Si le texte est plus court ou égal à la longueur maximale, ne rien changer
    //       return texte;
    //     } else {
    //       // Si le texte dépasse la longueur maximale, le réduire et ajouter "..."
    //       const texteReduit = texte.slice(0, 80) + '...';
    //       return texteReduit;
    //     }
    //   }






  return (
    <section className=' py-12' id='news'>
        <motion.h1
        initial = {{
            x : -200,
            y : 0,
            opacity : 0,
        }}
        whileInView = {{
            x : 0,
            y : 0,
            opacity : 1,
            transition : {duration : 2}
        }}
        
        
        className={`section-title text-center lg:text-4xl md:text-3xl xs:text-2xl text-primaryColor font-bold mt-12 md:mb-20 xs:mb-10 uppercase ${props.isArabic ? '' : 'tracking-[1rem] xs:tracking-[0.5rem]'} ` }>News</motion.h1>
            
        <div key={5487} className=' flex flex-row flex-wrap justify-center align-center gap-8 lg:px-20 md:px-16 sm:px-2'>
            
            {props.newsList && props.newsList.map((news) => {
                return <motion.div
                key={news._id}
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
                        <p className=' text-[grey] text-dm text-start'>{news.date_new}</p>
                        <h2 className='text-black font-semibold text-lg  text-start'>{news.new_title}</h2>
                        <Link href={`#`} className='text-primaryColor font-semibold text-start w-full-5 my-2 text-lg'>{props.seeMore} </Link>
                    </div>
                </motion.div>
            })}
            
            
            
        </div>

        <motion.div
        initial = {{
            scale : 0.8,
            opacity : 0,
        }}
        whileInView = {{
            scale : 1,
            opacity : 1,
            transition : {duration : 1}
        }}
        
         className='w-full lg:px-28 md:px-16 sm:px-2 flex justify-center align-center mt-16'>
            <Link href='/#talks' className='border border-primaryColor border-1 rounded-full w-fit px-5 py-2 hover:bg-primaryColor hover:text-white transition duration-700 text-primaryColor text-lg'>
                See all talks
            </Link>
        </motion.div>
    </section>
  );
};
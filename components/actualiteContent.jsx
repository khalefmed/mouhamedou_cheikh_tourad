import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion';

export default function ActualiteContent(props){

    return (
        <main className=" py-12 lg:px-20 md:px-16 xs:px-8 w-[100%] h-fit flex lg:flex-col xs:flex-col justify-between  align-center gap-12"  >
            <motion.h1
            initial = {{
                x : 50,
                y : 0,
                opacity : 0,
            }}
            whileInView = {{
                x : 0,
                y : 0,
                opacity : 1,
                transition : {duration : 1}
            }}
             className=' text-primaryColor text-2xl font-semibold text-center' >{props.actualite[`titre_actualite_${props.i18n.language}`]}</motion.h1>
            <div className='flex justify-center align-center'>
                <motion.img
                initial = {{
                    scale : 0.98,
                    opacity : 0,
                }}
                whileInView = {{
                    scale: 1,
                    opacity : 100,
                    transition : {duration : 1}
                }}
                
                src={props.urlFor(props.actualite.image_actualite.asset).url()} className=' max-h-64 max-w-[25em] rounded-sm shadow-lg'  alt="" />
            </div>
            <motion.p
            initial = {{
                x : -25,
                y : 0,
                opacity : 0,
            }}
            whileInView = {{
                x : 0,
                y : 0,
                opacity : 1,
                transition : {duration : 1}
            }}
             className=' text-grey text-justify leading-[2]'>{props.actualite[`script_actualite_${props.i18n.language}`]}</motion.p>

        </main>
    )
}
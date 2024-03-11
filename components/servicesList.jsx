import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion';

import { useTranslation } from 'react-i18next';
  

export default function ServicesList(props){

  const { t, i18n } = useTranslation('common');

    // const services = [
    //     "Pédiatrie",
    //     "Chirurgie",
    //     "Cardiologie",
    //     "Réanimation",
    //     "Urologie",
    //     "Gastrologie",
    //     "Maternité",
    //     "ORL",
    //     "Opthalmologie",
    //     "Dermatologie",
    //     "Laboratoire",
    //     "Ana-path",
    //     "Pneumologie",
    //     "Infectiologie",
    //     "Stomatologie",
    //     "Soins-externes",
    //     "Hémodialyse",
    //     "Médecine interne",
    //     "Urgences",
    //     "Neurochirurgie",
    //     "Anesthésie",
    //     "Chirurgie Viscérale",
    //     "Imagerie médicale",
    //     "Centre d'orthopédie",
    //     "Pharmacie centrale",
    //   ];

    // console.log(props.services)



    return (
        <section  className=" py-12">
            
            <motion.div
              
             className=" animatedDiv flex  flex-row flex-wrap justify-center align-center lg:gap-8 md:gap-5 xs:gap-2 lg:px-20 md:px-10  xs:px-5">
  
                {
                  
                  
                  props.domains && props.domains.map((domain) => {
                    
                    return <Link href={`#`}>
                    
                    <motion.div
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
                    
                     
                     className=" service  md:py-5 md:px-2 xs:py-3 xs:px-2  justify-center align-center lg:px-8 lg:py-5 lg:min-w-[10em] md:min-w-[8em] xs:min-w-[5em] shadow-2xl rounded-lg bg-white lg:text-2xl md:text-xl  font-medium mb-8 transform duration-1000  transition-all text-center  ">{domain.domaine_name}</motion.div>
                    </Link>
                  })
                }   
              
                   

            </motion.div>

        </section>
    )
}
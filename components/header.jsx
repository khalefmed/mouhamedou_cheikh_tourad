import Link from 'next/link'
import Image from 'next/image'

import {useState} from 'react'

import { useTranslation } from 'next-i18next';


export default function Header(props){

    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    const [showNav, setShowNav] = useState(false);

    const toggleNavBar = () => {
        setShowNav(!showNav);

    }

    return (
        <div className=" w-full h-24 lg:px-20 md:px-16 xs:px-8 py-5  flex flex-row align-center justify-between">
            {/* {
                props.isIndex ? 
                <Image
                 src="/LOGO_CHN.png" 
                 alt="Logo CHN" 
                 className="   " 
                 width={60}
                 height={50}
                 quality={100}
                />
                :
                <Image
                 src="/../LOGO_CHN.png" 
                 alt="Logo CHN" 
                 className="   " 
                 width={60}
                 height={50}
                />
            } */}
            <button
                    className="text-primaryWhite hover:text-primaryWhite cursor-pointer text-2xl "
                    onClick={toggleNavBar}
                >
                    {showNav ? 
                    <span className='lg:hidden'>✕</span>
                    :
                    <span className='lg:hidden'>☰</span>
                    }{/* Burger icon */}
            </button>
            
            <ul className={` lg:flex lg:flex-row justify-center align-center lg:gap-10 md:gap-10 xs:gap-12 my-auto text-white lg:static xs:absolute lg:w-fit lg:h-full xs:w-[100vw] xs:h-[88vh] lg:top-0 xs:top-24  xs:left-0 lg:bg-transparent xs:bg-headerColor xs:flex-col  xs:items-center lg:text-lg md:text-2xl xs:text-2xl ${ showNav ? 'flex':'cached'} transform xs:animate-navBarAnimation` }>
                <li><Link href="/" className=' hover:text-secondaryWhite cursor-pointer font-medium'>{props.accueil}</Link></li>
                <li><Link href="/#about" className=' hover:text-secondaryWhite font-medium'>{props.aboutUs}</Link></li>
                <li><Link href="/#publications" className=' hover:text-secondaryWhite font-medium'>{props.services}</Link></li>
                <li><Link href="#talks" className=' hover:text-secondaryWhite font-medium'>{props.actualites}</Link></li>
                <li><Link href="/#projects" className=' hover:text-secondaryWhite font-medium'>{props.contacts}</Link></li>
                <li><Link href="/#domains" className=' hover:text-secondaryWhite font-medium'>{props.annonces}</Link></li>
                {/* <li className='flex lg:flex-row xs:flex-col gap-3 lg:ml-3'>
                    { i18n.language == "ar" ? 
                    <button onClick={() => changeLanguage('fr')}>Français</button> : 
                    <button onClick={() => changeLanguage('ar')}>العربية</button>
                    }
                </li> */}
            </ul>

            
            
            

        </div>
    )
}


// import Link from 'next/link'


// export default function Header(props){

//     return (
//         <div className=" w-full h-20 px-20 py-5  flex flex-row align-center justify-between">
//             {
//                 props.isIndex ? 
//                 <img src="LOGO_CHN.jpg" alt="Logo" className="  h-full flex justify-center align-center m-0 " />
//                 :
//                 <img src="../LOGO_CHN.jpg" alt="Logo" className="  h-full flex justify-center align-center m-0 " />
//             }
//             <ul className=" flex flex-row justify-center align-center gap-10 my-auto text-white ">
//                 <li><Link href="/" className=' hover:text-secondaryWhite cursor-pointer font-medium'>Acceuil</Link></li>
//                 <li><Link href="/About" className=' hover:text-secondaryWhite font-medium'>A propos</Link></li>
//                 <li><Link href="/services" className=' hover:text-secondaryWhite font-medium'>Services</Link></li>
//                 <li><Link href="/actualites" className=' hover:text-secondaryWhite font-medium'>Actualités</Link></li>
//                 <li><Link href="/contact/" className=' hover:text-secondaryWhite font-medium'>Contacts</Link></li>
//                 <li><Link href="/produits/produits" className=' hover:text-secondaryWhite font-medium'>Annonces</Link></li>
//             </ul>
            

//         </div>
//     )
// }
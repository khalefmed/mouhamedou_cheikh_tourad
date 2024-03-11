import { motion, useAnimation } from 'framer-motion';

export default function PlusInoformations(props){

    return (
        <section className=" flex lg:flex-row xs:flex-col gap-8 justify-center align-center lg:px-28 md:px-16 xs:px-1 mt-16 mx-auto w-[80%]">
            <motion.div
            initial = {{
                x : -150,
                y : 0,
                opacity : 0,
            }}
            whileInView = {{
                x : 0,
                y : 0,
                opacity : 1,
                transition : {duration : 2}
            }}
             className=" flex flex-col justify-center align-center gap-5 md:w-[30rem] xs-w-full ">
                <h1 className="text-green-900 font-semibold text-2xl lg:text-start xs:text-center">{props.pourPlusInfos}</h1>
                <p className=" text-lg lg:text-start xs:text-center ">{props.moreInfosLabel}</p>
            </motion.div>
            <motion.div
            initial = {{
                x : 150,
                y : 0,
                opacity : 0,
            }}
            whileInView = {{
                x : 0,
                y : 0,
                opacity : 1,
                transition : {duration : 2}
            }}
             className=" py-8 px-8 shadow-lg rounded-lg flex flex-col gap-4 lg:w-[30rem] md:w-[70%] mx-auto xs:w-full">
                <h2 className=" text-center text-green-900 font-bold text-xl">{props.contactUs}</h2>
                <div className="flex flex-col justify-start align-center gap-1">
                    <h4 className=" font-semibold text-md ">{props.nom}</h4>
                    <input type="text" className=" px-3 py-2 bg-[#f0f0f0] w-full  md:rounded-lg xs:rounded-md border-none outline-none text-sm" />
                </div>
                <div className="flex flex-col justify-start align-center gap-1">
                    <h4 className=" font-semibold text-md ">{props.email}</h4>
                    <input type="text" className=" px-3 py-2 bg-[#f0f0f0] w-full  md:rounded-lg xs:rounded-md border-none outline-none text-sm" />
                </div>
                <div className="flex flex-col justify-start align-center gap-1">
                    <h4 className=" font-semibold text-md ">{props.message}</h4>
                    <textarea    type="text" className=" px-3 py-2 bg-[#f0f0f0] min-h-[8rem] w-full md:rounded-lg xs:rounded-md border-none outline-none text-sm" />
                </div>
                <button className=" px-3 py-2 bg-green-900 text-white font-semibold text-md rounded-lg">{props.envoyer}</button>

            </motion.div>

        </section>

    )
}
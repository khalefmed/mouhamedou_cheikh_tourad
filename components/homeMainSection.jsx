import Link from 'next/link'

export default function HomeMainSection(props){

    return (
        <main className=" h-screen -mt-24 lg:bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8))] xs:bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8))] bg-cover text-white flex justify-start xs:text-center md:text-start align-center lg:px-28 md:px-20 xs:px-2 "  >
            <div className=" flex justify-center align-start flex-col gap-6 mt-28">
                <h1 className=" transition animate-homeAnimation delay-75 duration-700 font-bold lg:text-5xl md:text-4xl xs:text-3xl ">{props.chn}</h1>
                <p className=" transition animate-homeAnimation delay-300 duration-700  lg:text-2xl md:text-xl xs:text-lg font-regular">{props.slogan}</p>
                <div className=' flex md:justify-start xs:justify-center xs:align-center'>
                    <Link href='/#' className=' animate-homeAnimation delay-300   border border-white border-1 rounded-full w-fit px-4 py-2 hover:bg-white hover:text-black transition duration-700'>
                        {props.moreInfos}
                    </Link>
                </div>
            </div>

        </main>
    )
}

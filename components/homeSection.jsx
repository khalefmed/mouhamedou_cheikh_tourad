import Link from 'next/link'

export default function HomeSection(props){

    return (
        <main className=" h-[25em] -mt-24 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8))] bg-cover text-white flex justify-start align-center lg:px-20 md:px-16 xs:px-8  "  >
            <div className=" flex justify-center align-start flex-col gap-6 mt-48">
                <h1 className=" transition animate-homeAnimation delay-75 duration-700 font-semibold lg:text-4xl md:text-2xl xs:text-xl ">{props.titre}</h1>
            </div>
            

        </main>
    )
}
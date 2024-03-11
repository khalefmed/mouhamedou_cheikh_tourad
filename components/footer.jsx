export default function Footer(props){

    return (
        <footer className=" bg-primaryColor text-white md:font-semibold xs:font-medium flex justify-center align-center py-5">
            <p>{props.footer}</p>
        </footer>
    )
}
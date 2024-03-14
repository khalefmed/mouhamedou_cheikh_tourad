
import Header from "../../components/header"
import HomeSection from "../../components/homeSection"

import Footer from "../../components/footer.jsx"
import publicationListCompontent from "../../components/publicationsListComponent.jsx"

import Head from 'next/head'


import { createClient } from "next-sanity";
import PublicationListCompontent from "../../components/publicationsListComponent.jsx"
import ExperiencesListComponent from "@/components/experiencesListComponent"
import PublicationListComponent from "../../components/publicationsListComponent.jsx"

//... 

const client = createClient({
    projectId: "2comugs5",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
  });


export default function ({publicationsList}) {



    const isArabic = false;



    return (
        <div className={` overflow-x-hidden w-screen ${isArabic ? 'font-arabic' : 'font-sans'}`} dir={isArabic ? "rtl" : "ltr"}>
            <Head>
                <title>Publications</title>
                <meta name="description" content="Dr Mohamedou El Ghotob Cheikh Tourad" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {publicationsList && (
                <div>
                    < Header
                        isIndex={true} 
                        accueil="Home"
                        aboutUs="About"
                        services="Publications"
                        actualites="Talks"
                        contacts="Projects"
                        annonces="Domains"
                        news="News"
                        coaching="Coaching"
                        experiences="Professional Experience"
                    />
                    < HomeSection titre="Publications" />
                    < PublicationListComponent
                        seeMore="See more"
                        publicationsList={publicationsList} 
                        sanityClient={client}
                    />
                    < Footer footer=" &copy; Copyright 2024" />
                </div>
            )}
            




        </div>
    )

}


export async function getStaticProps() {
    const publicationsList = await client.fetch(`*[_type == "publication"]`);
  
    return {
      props: {
        publicationsList
      }
    };
  }



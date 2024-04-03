
import Header from "../../components/header"
import HomeSection from "../../components/homeSection"

import Footer from "../../components/footer.jsx"
import publicationListCompontent from "../../components/publicationsListComponent.jsx"

import Head from 'next/head'


import { createClient } from "next-sanity";
import PublicationListCompontent from "../../components/publicationsListComponent.jsx"
import ExperiencesListComponent from "@/components/experiencesListComponent"
import NewsListComponent from "@/components/newsListComponent"

//... 

const client = createClient({
    projectId: "2comugs5",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
  });


export default function ({newsList}) {



    const isArabic = false;



    return (
        <div className={` overflow-x-hidden w-screen ${isArabic ? 'font-arabic' : 'font-sans'}`} dir={isArabic ? "rtl" : "ltr"}>
            <Head>
                <title>News</title>
                <meta name="description" content="Dr Mohamedou El Ghotob Cheikh Tourad" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {newsList && (
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
                        coaching="Courses"
                        experiences="Professional Experience"
                    />
                    < HomeSection titre="News" />
                    < NewsListComponent
                        seeMore="See more"
                        newsList={newsList} 
                        sanityClient={client}
                    />
                    < Footer footer=" &copy; Copyright 2024" />
                </div>
            )}
            




        </div>
    )

}


export async function getStaticProps() {
    const newsList = await client.fetch(`*[_type == "new"]`);
  
    return {
      props: {
        newsList
      },
        revalidate: 60,
    };
  }



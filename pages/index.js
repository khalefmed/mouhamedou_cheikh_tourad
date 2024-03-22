"use client"

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Header from "../components/header"
import HomeMainSection from "../components/homeMainSection"
import Presentation from "../components/presentation"
import Services from "../components/services"
import Actualites from "../components/publications"
import Talks from "../components/Talks"
import PlusInformations from "../components/plusInformations"
import Contacts from "../components/contacts"
import Footer from "../components/footer"

const inter = Inter({ subsets: ['latin'] })

import { fontFamily } from '@mui/system'
import { is } from '@react-spring/shared'

import { createClient } from "next-sanity";
import ResearchProjects from '@/components/research_projects'
import News from '@/components/news'
import Experiences from '@/components/experiences'
import Teaching from '@/components/coaching'
import Coaching from './courses'
import CoachingC from '@/components/coaching'

//... 

const client = createClient({
  projectId: "2comugs5",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});


export default function Home({publicationsList, domainsList, talksList, projectsList, about, newsList, experiencesList, coachingList}) {


  return (
    <div className= {` overflow-x-hidden w-screen 'font-sans'`}>
      
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
      < HomeMainSection
       chn="Mohamedou El Ghotob Cheikh Tourad"
       slogan="Research Professor of Computer Science, CSIDS , FST, Université de Nouakchott"
       moreInfos="Download CV" 
      />
      
      < Presentation
       presentation="About" 
       enSavoirPlus="More infos" 
       isArabic={false}
       content={about[0][`about`]}
      />
      < News 
          talks="News" 
          allActualites="More News" 
          seeMore="See more"
          isArabic = {false} 
          newsList={newsList}
          client={client}
       />
       < Experiences 
          talks="Experiences" 
          allActualites="All experiences" 
          seeMore="See more"
          isArabic = {false} 
          experiencesList={experiencesList}
          client={client}
       />
       < CoachingC 
          talks="Coaching" 
          allActualites="All " 
          seeMore="See more"
          isArabic = {false} 
          coachingList={coachingList}
          client={client}
       />
      < Actualites 
          actualites="Publications"
          allActualites="All publications"
          seeMore="See more"
          isArabic = {false} 
          publicationsList={publicationsList}
          client={client}
       />
      < Talks 
          talks="Talks" 
          allActualites="All Talks" 
          seeMore="See more"
          isArabic = {false} 
          talksList={talksList}
          client={client}
       />
      < ResearchProjects 
          talks="Research Projects" 
          allActualites="All projects" 
          seeMore="See more"
          isArabic = {false} 
          projectsList={projectsList}
          client={client}
       />
      < Services services="Domains" isArabic={false} domainsList={domainsList} />
      < Footer footer="Copyright 2024" />
    </div>
  )
}



export async function getStaticProps() {
  const domainsList = await client.fetch(`*[_type == "domains"]`);
  const newsList = await client.fetch(`*[_type == "new"] | order(date_new desc) [0...3]`);
  const publicationsList = await client.fetch(`*[_type == "publication"] [0...3]`);
  const talksList = await client.fetch(`*[_type == "talk"] [0...3]`);
  const experiencesList = await client.fetch(`*[_type == "experience"] [0...3]`);
  const coachingList = await client.fetch(`*[_type == "coaching"] [0...3]`);
  const projectsList = await client.fetch(`*[_type == "research_project"]| order(date_project desc) [0...3]`);
  const about = await client.fetch(`*[_type == "about"]{about} [0...1]`);


  return {
    props: {
      newsList,
      publicationsList,
      domainsList,
      talksList,
      experiencesList,
      coachingList,
      projectsList,
      about
    }
  };
}

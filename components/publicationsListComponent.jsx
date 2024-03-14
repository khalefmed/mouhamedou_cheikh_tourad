import Link from 'next/link'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion';

import imageUrlBuilder from '@sanity/image-url'


export default function PublicationListComponent(props){

    function Substring(texte) {
        if (texte.length <= 80) {

          return texte;

        } else {

          const texteReduit = texte.slice(0, 80) + '...';
          return texteReduit;
          
        }
    }

    return (
        <div className=' lg:px-20 md:px-16 sm:px-3 flex flex-row justify-center align-center flex-wrap gap-5 my-16'>
            
            {props.publicationsList && props.publicationsList.map((publication) => {
                return <motion.div
                key={publication._id}
                initial = {{
                    x : 200,
                    y : 0,
                    opacity : 0,
                }}
                whileInView = {{
                    x : 0,
                    y : 0,
                    opacity : 1,
                    transition : {duration : 1}
                }}
                 className=' actualite shadow-2xl flex flex-col justiyf-center align-center gap-2 py-2 px-2 rounded-lg w-[21rem] '>
                    {/* <img src={urlFor(publication.image_actualite.asset._ref).url()} alt="" className=' rounded-lg w-full max-h-[12rem] box-content' /> */}
                    <div className='px-3 py-3 flex flex-col gap-2'>
                        <p className=' text-[grey] text-dm text-start'>{publication.date_publication}</p>
                        <h2 className='text-black font-semibold text-lg  text-start'>{Substring(publication[`titre_publication`])}</h2>
                        <Link href={`#`} className='text-primaryColor font-semibold text-start w-full-5 my-2 text-lg'>{props.seeMore} </Link>
                    </div>
                </motion.div>
            })}

        </div>
    )
}
























// const Liste = [
//     {
//         "date" : "27, Novembre 2020",
//         "titre" : "Visite d’une Mission d’Expert de l’OMS au CHN",
//         "contenu" : "Le Lundi 23 Novembre 2020, une Mission de l’OMS composée de huit experts a effectué une visite de deux jours. L’objectif de cette mission est de dresser un état de lieux, après avoir visité les différents niveaux de la pyramide sanitaire au pays, puis ensuite élaborer une feuille de route qui aidera la Mauritanie à mieux avancer dans sa couverture universelle.Au cours de cette visite, ces experts ont consacré la première journée de leur visite pour s’entretenir avec le Directeur et son staff administratif. Lors de cet entretien la Direction du Centre Hospitalier National (CHN) a présenté l’Hôpital National. Les discussions au cours de cette réunion ont porté sur les modes de fonctionnement et de financement du CHN Durant la deuxième journée, ces experts se sont entretenus avec les différents chefs services médico-technique du CHN et ce pour s’enquérir de la qualité des différentes prestations de soins qui constitue une condition sine qua non d’une couverture universelle.",
//         "image" : "actualité.jpg",
//     },
//     {
//         "date" : "09, Decembre 2020",
//         "titre" : "Le Premier Ministre effectue une visite d’information au centre d’hospitalisation des malades du Covid-19",
//         "contenu" : "AMI. Le Premier ministre, M. Mohamed Ould Bilal, a effectué, mercredi 09/12/2020, une visite d’information au centre d’hébergement des malades du Covid-19 au Centre Hospitalier de Nouakchott (CHN). Au cours de cette visite qui lui a permis de s’informer de l’état des malades retenus en quarantaine dans ce centre,le PM était accompagné du ministre de l’Intérieur et de la Décentralisation, de la ministre des Affaires sociales, de l’Enfance et de la Famille, du directeur de Cabinet du Premier ministre et de conseillers à la primature, ainsi que de responsables du ministère de la santé et du directeur général du CHN.Dans une déclaration faite à l’issue de cette visite,le Premier Ministre, M. Mohamed Ould Bilal, a indiqué que le pays a adhéré à l'Initiative mondiale d'acquisition de vaccin anti-covid-19, et qu’il obtiendra 20% de ses besoins de ce vaccin au début de l'année. Le PM a ensuite souligné que la priorité sera donnée aux personnels de santé, aux personnes âgées et à celles souffrant de maladies chroniques, ainsi qu’aux fonctionnaires, aux agents de sécurité et à tous ceux qui sont chargés de protéger les citoyens de la contamination au virus.Il y a un grand espoir de surmonter cette pandémie durant les prochains jours, a ajouté le Premier Ministre, qui dit compter sur le sens de responsabilité des citoyens, des jeunes en particulier pour protéger les plus faibles et les personnes âgées, et qui a insisté sur le respect des mesures de précautions.Il a rappelé que l’objectif principal de sa visite, qui intervient sur instructions de Son Excellence le Président de la République, Monsieur Mohamed Ould Cheikh El Ghazouani, est de s’enquérir de près de l’état des personnes contaminées par la maladie en vue d’améliorer leurs conditions d’hébergement.Le Premier ministre a souligné que la situation est sous contrôle, et que l'État dispose du nombre suffisant de lits dont il a besoin jusqu'à présent, indiquant que, jusqu’à hier soir, le nombre des personnes hospitalisées était de 36, dont 12 sont dans un état critique.Il a ajouté que la situation exige de la prudence et le respect des instructions des autorités sanitaires : la distanciation sociale, le port de masques, la protection des personnes âgées et des personnes atteintes de maladies chroniques, et réduction des déplacements, sauf en cas de nécessité absolue.Il a remercié les équipes de santé pour les efforts qu'ils déploient, et a souligné que le gouvernement et l'administration leur apporteront soutien et assistance. Il a également remercié les autorités administratives qui font un travail formidable de sensibilisation au niveau des commerces publics et les jeunes bénévoles et actifs qui jouent un rôle important dans la sensibilisation contre cette vague.Le Premier ministre a demandé aux étudiants de la faculté de médecine de ne pas se laisser aller aux manifestations, soulignant qu’ils doivent plutôt aider les malades dans la lutte contre la vague du covid-19 et contre les affections l’accompagnant, du fait du froid qui sévit actuellement. Il a assuré que l’Etat est informé de leurs doléances et que celles relatives à l’amélioration des conditions des études trouveront une solution prochainement. Il a invité les étudiants à comprendre la situation actuelle que traverse le pays, et rappelé que l’État compte beaucoup sur l’élément humain, en particulier de ceux qui ont reçu une formation, et qui disposent de connaissances et d’expériences..",
//         "image" : "pmchn01.jpeg",
//     },
//     {
//         "date" : "12, Septembre 2020",
//         "titre" : "L’ONG NESSIM fait don de Matériels de Protections au CHN",
//         "contenu" : "Une Cérémonie de remise de don de l’ONG NESSIM au Centre Hospitalier National (CHN) a été organisée lundi, le 12/09/2020 à 11h dans les locaux du service d’infectiologie au CHN. Ce don est composé de matériels de protection : 51 000 paires de gants et 36 000 masques de protection.Au cours de cette cérémonie, un échange de discours a eu lieu entre le président de l’ONG NESSIM,le député,EL moctar EKHLIVA et Dr. Hamahoullah Cheikh, Directeur du CHN. Le Député, El moctar EKHLIVA a indiqué dans son discours que ce don rentre dans le cadre des efforts déployés au niveau du CHN pour améliorer les mesures de protections au niveau de l’Hôpital National.A son tour, le Directeur du CHN, Dr. Hamahoullah Cheikh a remercié l’ONG pour ce don qui participera efficacement aux efforts collectifs face à la pandémie du COVID-19 et de la Fièvre de la vallée du RIFT.",
//         "image" : "actualité2.jpg",
//     },
//     {
//         "date" : "05, Decembre 2020",
//         "titre" : "Le Chef de service d’ophtalmologie du CHN de Nouakchott en Mauritanie invite ses collègues à pratiquer l’expérience réussie de la greffe amniotique pour la cornée",
//         "contenu" : "Le Lundi 23 Novembre 2020, une Mission de l’OMS composée de huit experts a effectué une visite de deux jours. L’objectif de cette mission est de dresser un état de lieux, après avoir visité les différents niveaux de la pyramide sanitaire au pays, puis ensuite élaborer une feuille de route qui aidera la Mauritanie à mieux avancer dans sa couverture universelle.Au cours de cette visite, ces experts ont consacré la première journée de leur visite pour s’entretenir avec le Directeur et son staff administratif. Lors de cet entretien la Direction du Centre Hospitalier National (CHN) a présenté l’Hôpital National. Les discussions au cours de cette réunion ont porté sur les modes de fonctionnement et de financement du CHN Durant la deuxième journée, ces experts se sont entretenus avec les différents chefs services médico-technique du CHN et ce pour s’enquérir de la qualité des différentes prestations de soins qui constitue une condition sine qua non d’une couverture universelle.",
//         "image" : "pr_sidi.png",
//     },
//     {
//         "date" : "19, Mai 2020",
//         "titre" : "Formation au niveau du CHN",
//         "contenu" : "Dans le cadre de la prise en charge de patients suspects ou atteints de coronavirus, COVID 19, le Centre Hospitalier National (CHN) de Nouakchott a commencé, ce matin,le Samedi,19 Mai 2020, au service de la Polyclinique des Urgences une formation pratique consistant à une simulation de démonstration d'habillement et de déshabillement des équipements de protection individuelle au profit des professionnels de santé (médecins, infirmiers. Garçons de salle, agents de sécurité etc). Cette formation a eu lieu en présence du Directeur du CHN Dr. Hamahoullah Cheikh, du Directeur adjoint Dr. Mohamed Aly Ould Bouna Moctar, du Gestionnaire, Mr.Cheikh Mahfoudh Maussa,des médecins infectiologues et du personnel des urgences. Il faut rappeler que cette formation durera trois jours et elle s'inscrit dans le cadre de la politique d'activités au CHN visant à améliorer la prise en charge hospitalière des maladies infectieuses d'une manière générale et en particulier du nouveau-né et de l'enfant.",
//         "image" : "actualité4.jpg",
//     },
//     {
//         "date" : "18, Novembre 2020",
//         "titre" : "Visite de Chantiers en cours de construction au CHN",
//         "contenu" : "Une visite de l’état d’avancement des travaux de construction d’un bâtiment chirurgical (futurs blocs opératoires) et d’un autre médical, au Centre Hospitalier National (CHN) , s’est déroulée le 18/11/2020 ,en présence du Directeur Général du CHN, Dr.Hamahoullah Cheikh entouré de ses proches collaborateurs et de la partie ATTM, présentée par l’architecte Moctar avec les ingénieurs génie civil qui l’accompagnent.À l'issue de cette visite, une réunion de travail s’est tenue au bureau du Directeur général du CHN pour examiner l’état d’avancement des travaux de ces deux bâtiments. A noter que par rapport au Bâtiment Chirurgical il ya eu u avancement global de 80 % des travaux de gros ouvres .Tandis que l’avancement des travaux du bâtiment médical a atteint 60 %.Au cours de cette réunion les deux parties ont discuté les différents problèmes relatifs aux réseaux d’assainissement et aux branchements en eau et en électricité au niveau de ces deux bâtiments.",
//         "image" : "actualité3.jpg",
//     },
// ]
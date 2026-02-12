"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { text } from "stream/consumers";

const projects = [
  {
    title: "Classe connectée",
    description:
      " Transformez l’enseignement à distance en une expérience fluide et engageante. Interagissez avec vos étudiants en temps réel, partagez vos contenus et maintenez le lien, où qu’ils soient. Cours, quiz, travaux collaboratifs ou échanges instantanés deviennent simples et naturels, rendant l’apprentissage à distance efficace et motivant.",
    src: "rock.jpg",
    link: "/focus-m-visual-15.jpg",
    color: "#dc2626",
    textColor: "#ffffff",
  },
  {
    title: "Classe inversée",
    description:
      " Redonnez le rôle principal à l’étudiant. Encouragez l’autonomie et la participation active. Les étudiants découvrent le cours par eux-mêmes, présentent leurs idées, échangent et construisent le savoir ensemble. Cette pédagogie transforme l’apprentissage en expérience collaborative et dynamique, stimulante pour tous.",
    src: "tree.jpg",
    link: "/Solutions/Edu/img6.png",
    color: "#ffffff",
    textColor: "#000000",
  },
  {
    title: "Hyflex",
    description:
      " Offrez une liberté totale d’apprentissage. Enseignez en présentiel, à distance ou en mode hybride, sans compromis sur l’interaction et la qualité pédagogique. Les enseignants peuvent engager tous les étudiants, où qu’ils soient, et les étudiants choisissent le mode qui correspond le mieux à leur situation, pour un apprentissage flexible et inclusif.",
    src: "water.jpg",
    link: "/Solutions/Edu/img4.png",
    color: "#dc2626",
    textColor: "#ffffff",
  },
  {
    title: "FabLab",
    description:
      "Donnez vie aux idées de vos étudiants en leur offrant un espace stimulant et collaboratif où ils peuvent concevoir, expérimenter et réaliser des projets concrets, développer leur créativité, leur pensée critique et leur capacité à résoudre des problèmes, tout en renforçant leur autonomie et leur engagement, le tout dans un FabLab équipé de machines CNC, découpe laser et imprimantes 3D qui leur permet de prototyper et matérialiser leurs idées pour un apprentissage pratique, immersif et motivant.",
    src: "house.jpg",
    link: "/Solutions/Edu/img1.png",
    color: "#ffffff",
    textColor: "#000000",
  },
  {
    title: "MOOC",
    description:
      "Produisez des contenus pédagogiques de qualité professionnelle dans un environnement pensé pour l’enseignement digital, où les enseignants peuvent enregistrer, diffuser et partager leurs cours de manière claire, engageante et accessible. Cette solution permet aux étudiants de suivre les leçons à leur rythme, de revisiter les concepts clés et de bénéficier d’un apprentissage numérique immersif qui combine interactivité, flexibilité et qualité pédagogique.",
    src: "cactus.jpg",
    link: "/Solutions/Edu/img5.png",
    color: "#dc2626",
    textColor: "#ffffff",
  },
  {
    title: "Mobilier connecté ",
    description:
      "Faites de votre salle de classe un espace intelligent et interactif, où chaque étudiant et enseignant peut capturer, partager et diffuser facilement des contenus pédagogiques. Le mobilier connecté favorise l’organisation, la participation et l’engagement dans toutes les activités de la classe, créant un environnement dynamique, motivant et parfaitement adapté aux méthodes pédagogiques modernes et collaboratives.",
    src: "house.jpg",
    link: "/focus-m-visual-2.png",
    color: "#ffffff",
    textColor: "#000000",
  },
  {
    title: "CDI / BCD",
    description:
      "Modernisez l’accès au savoir en transformant les espaces de documentation en centres interactifs et connectés, où les étudiants et les enseignants peuvent consulter, organiser et partager les ressources pédagogiques, numériser et archiver facilement les documents grâce à des solutions adaptées aux médiathèques de lycées, collèges et BCD du primaire, créant un environnement qui favorise l’apprentissage autonome, le travail collaboratif et la recherche active.",
    src: "cactus.jpg",
    link: "/focus-m-visual-4.png",
    color: "#dc2626",
    textColor: "#ffffff",
  },
  {
    title: "Radio",
    description:
      "Donnez la parole aux étudiants en créant un espace où ils peuvent produire, diffuser et partager des contenus audio, développer leurs compétences en communication et renforcer leur créativité et leur expression collective. Cette activité favorise l’engagement, le travail collaboratif et la participation active, tout en offrant une expérience motivante qui allie apprentissage, communication et expression personnelle.",
    src: "house.jpg",
    link: "/Solutions/Edu/img7.png",
    color: "#ffffff",
    textColor: "#000000",
  },
  {
    title: "Amphithéâtre et espace ludique interactif",
    description:
      " Transformez vos grands espaces en lieux d’échange dynamiques et immersifs où il est possible de diffuser des contenus, interagir avec le public et capter l’attention des participants. Ces espaces permettent de créer des expériences pédagogiques et collaboratives uniques, où les cours, conférences et ateliers deviennent plus stimulants, engageants et mémorables pour tous les utilisateurs, tout en encourageant l’interaction et la participation active.",
    src: "cactus.jpg",
    link: "/Solutions/Edu/img8.png",
    color: "#dc2626",
    textColor: "#ffffff",
  },
  {
    title: "Chromebook",
    description:
      " Équipez vos étudiants avec des outils fiables et adaptés à l’éducation, qui remplacent plusieurs cahiers et manuels tout en centralisant leur apprentissage dans un seul outil performant. Simples, robustes et efficaces, les Chromebooks leur permettent de collaborer facilement, d’accéder instantanément à tous leurs cours et ressources, et de réaliser leurs projets avec fluidité, offrant une expérience numérique motivante et moderne",
    src: "house.jpg",
    link: "/focus-m-visual-5.jpg",
    color: "#ffffff",
    textColor: "#000000",
  },
];

export default function SolutionsSolu() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main className="bg-white dark:bg-[#080c13]" ref={container}>
        <section className="w-full bg-white dark:bg-[#080c13]">
          {projects.map((project, i) => {
            const maxVisibleCards = 5;
            const stackPosition = Math.min(i, maxVisibleCards - 1);
            const targetScale = 1;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                stackPosition={stackPosition}
                url={project?.link}
                src={project?.src}
                title={project?.title}
                color={project?.color}
                textColor={project?.textColor}
                description={project?.description}
                progress={scrollYProgress}
                range={[i / projects.length, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>

        {/* Spacer to prevent last card from overlapping footer */}
        {/* <div className="h-[50vh]"></div> */}
      </main>
    </ReactLenis>
  );
}

interface CardProps {
  i: number;
  stackPosition: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  textColor: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card: React.FC<CardProps> = ({
  i,
  stackPosition,
  title,
  description,
  src,
  url,
  color,
  textColor,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Add extra zoom for last card to hide watermark
  const isLastCard = i === projects.length - 1;
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    isLastCard ? [2.5, 1.5] : [2, 1],
  );
  const scale = useTransform(progress, range, [1, targetScale]);

  // Ensure cards are fully opaque and don't show through each other
  // Removed opacity transformation to prevent transparency issues at different zoom levels

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-20 md:top-24"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${stackPosition * 0}px)`,
        }}
        className="flex flex-col relative h-[450px] w-[90%] md:w-[80%] lg:w-[70%] rounded-md overflow-hidden origin-top bg-white dark:bg-[#080c13]"
      >
        {/* Desktop layout - colored background with separate image */}
        <div
          className="hidden md:flex flex-col h-full p-6 lg:p-10 relative z-10"
          style={{
            backgroundColor: color,
            border: color === "#ffffff" ? "2px solid #000000" : "none",
            opacity: 1,
          }}
        >
          <h2
            className={`text-2xl text-center font-semibold`}
            style={{ color: textColor }}
          >
            {title}
          </h2>
          <div
            className={`flex h-full mt-5 gap-10 ${i % 2 === 0 ? "flex-row-reverse" : ""}`}
          >
            <div className="w-[40%] relative top-[10%]">
              <p className={`text-base`} style={{ color: textColor }}>
                {description}
              </p>
              {/* <span className='flex items-center gap-2 pt-2'>
                <a
                  href={'#'}
                  target='_blank'
                  className='underline cursor-pointer text-white'
                >
                  See more
                </a>
                <svg
                  width='22'
                  height='12'
                  viewBox='0 0 22 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z'
                    fill='white'
                  />
                </svg>
              </span> */}
            </div>

            <div className="relative w-[60%] h-full rounded-lg overflow-hidden">
              <motion.div
                className="w-full h-full"
                style={{ scale: imageScale }}
              >
                <Image
                  fill
                  src={url}
                  alt={title}
                  className="object-cover"
                  {...(i === 0
                    ? { priority: true }
                    : { loading: "lazy" as const })}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile layout - image as background */}
        <div className="md:hidden relative h-full w-full">
          <motion.div
            className="absolute inset-0"
            style={{ scale: imageScale }}
          >
            <Image
              fill
              src={url}
              alt={title}
              className="object-cover"
              {...(i === 0 ? { priority: true } : { loading: "lazy" as const })}
              quality={85}
              sizes="100vw"
            />
          </motion.div>

          {/* Overlay gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 z-[1]"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-6 text-white z-20">
            <h2 className="text-2xl font-semibold mb-3">{title}</h2>
            <p className="text-sm mb-4 line-clamp-3">{description}</p>
            {/* <span className='flex items-center gap-2'>
              <a
                href={'#'}
                target='_blank'
                className='underline cursor-pointer text-white'
              >
                See more
              </a>
              <svg
                width='22'
                height='12'
                viewBox='0 0 22 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z'
                  fill='white'
                />
              </svg>
            </span> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

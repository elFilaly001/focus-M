"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { text } from "stream/consumers";

const projects = [
  {
    title: "Salle de réunion interactive",
    description:
      " Optimisez vos espaces de travail en intégrant des solutions interactives conçues pour améliorer la collaboration et l’efficacité des échanges. Le partage de contenus en temps réel et l’interaction fluide permettent à vos équipes de travailler de manière plus structurée, tout en facilitant la prise de décision et la communication.",
    src: "rock.jpg",
    link: "/Solutions/Ent/img1.png",
    color: "#dc2626",
    textColor: "#ffffff",
  },
  {
    title: "Espaces de formation 3.0",
    description:
      "Modernisez vos dispositifs de formation en proposant des environnements pédagogiques connectés, adaptés aux nouveaux usages professionnels. Ces espaces favorisent l’interactivité, l’engagement des participants et la diffusion efficace des connaissances, en présentiel comme à distance.",
    src: "tree.jpg",
    link: "/Solutions/Ent/img2.png",
    color: "#ffffff",
    textColor: "#000000",
  },
  {
    title: "Hall d’accueil connecté",
    description:
      "Valorisez l’image de votre entreprise dès le premier contact en transformant votre hall d’accueil en un espace digital informatif et interactif. Diffusez des contenus dynamiques, facilitez l’orientation des visiteurs et renforcez votre identité grâce à une communication visuelle moderne.",
    src: "water.jpg",
    link: "/Solutions/Ent/img3.png",
    color: "#dc2626",
    textColor: "#ffffff",
  },
  {
    title: "Système de visioconférence",
    description:
      "Équipez vos espaces de communication à distance avec des solutions fiables garantissant une qualité audio et vidéo optimale. Facilitez les réunions à distance, les échanges avec vos partenaires et la collaboration entre sites, tout en assurant la sécurité et la stabilité des connexions.",
    src: "house.jpg",
    link: "/Solutions/Ent/img4.png",
    color: "#ffffff",
    textColor: "#000000",
  },
  {
    title: "Solution pour espace de coworking",
    description:
      "Accompagnez les nouveaux modes de travail en équipant vos espaces de coworking de solutions flexibles et connectées. Favorisez la collaboration, la productivité et le partage des ressources dans des environnements adaptés aux besoins des utilisateurs.",
    src: "cactus.jpg",
    link: "/Solutions/Ent/img5.png",
    color: "#dc2626",
    textColor: "#ffffff",
  },
  {
    title: "Espace de réalité virtuelle",
    description:
      "Intégrez des espaces dédiés à des expériences immersives pour la formation, la simulation ou la présentation de projets. La réalité virtuelle permet de reproduire des situations réelles, de tester des scénarios et d’améliorer l’apprentissage et la compréhension par l’expérience.",
    src: "house.jpg",
    link: "/Solutions/Ent/img6.png",
    color: "#ffffff",
    textColor: "#000000",
  },
  {
    title: "Solution traduction instantanée",
    description:
      "Facilitez la communication entre interlocuteurs de différentes langues grâce à des solutions de traduction en temps réel. Idéales pour les réunions internationales, conférences ou formations multilingues, elles permettent à chacun de comprendre et de participer sans contrainte linguistique.",
    src: "cactus.jpg",
    link: "/Solutions/Ent/img7.png",
    color: "#dc2626",
    textColor: "#ffffff",
  },
  {
    title: "Système de visioconférence nomade",
    description:
      "Permettez à vos équipes de rester connectées où qu’elles se trouvent grâce à des solutions de visioconférence mobiles et faciles à déployer. Adaptées aux déplacements, aux sites temporaires ou aux réunions improvisées, elles garantissent une communication fluide et efficace.",
    src: "house.jpg",
    link: "/Solutions/Ent/img8.png",
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
      <main className="bg-white" ref={container}>
        <section className="w-full bg-white">
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
    isLastCard ? [2.5, 1.5] : [2, 1]
  );
  const scale = useTransform(progress, range, [1, targetScale]);

  // Calculate opacity: only show 5 cards at a time
  const maxVisibleCards = 5;
  const opacity = useTransform(
    progress,
    [
      (i - maxVisibleCards) / projects.length,
      i / projects.length,
      (i + 1) / projects.length,
    ],
    [0, 1, 1]
  );

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-20 md:top-24"
    >
      <motion.div
        style={{
          scale,
          opacity,
          top: `calc(-5vh + ${stackPosition * 0}px)`,
        }}
        className="flex flex-col relative h-[450px] w-[90%] md:w-[80%] lg:w-[70%] rounded-md overflow-hidden origin-top"
      >
        {/* Desktop layout - colored background with separate image */}
        <div
          className="hidden md:flex flex-col h-full p-6 lg:p-10"
          style={{
            backgroundColor: color,
            border: color === "#ffffff" ? "2px solid #000000" : "none",
          }}
        >
          <h2
            className={`text-2xl text-center font-semibold`}
            style={{ color: textColor }}
          >
            {title}
          </h2>
          <div className="flex h-full mt-5 gap-10">
            <div className="w-[40%] relative top-[10%]">
              <p className={`text-sm`} style={{ color: textColor }}>
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-6 text-white z-10">
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

"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Title from "./title";
import Headline from "./headline";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import contractPhoto from "@/public/images/contract.jpg";
import indemnityPhoto from "@/public/images/indemnity.jpg";
import familyPhoto from "@/public/images/family.jpg";
import penaltyPhoto from "@/public/images/penalty.jpg";
import otherLawAreasPhoto from "@/public/images/otherLawAreas.jpg";
import { StaticImageData } from "next/image";

const OurServices = () => {
  const { t } = useTranslation();

  return (
    <div id="our-services" className="relative bg-lightBlack">
      <div
        className={`pt-[110px] absolute top-[0px] left-0 flex w-[100vw] cont:w-[100%] justify-center items-center`}
      >
        <div className="flex flex-col w-full">
          <Title
            title={t("ourServicesTitle")}
            className="text-white mb-[10px] mx-auto text-center w-full"
          />
          <Headline
            headline={t("ourServicesHeadline")}
            className={
              "text-goldBg mb-[20px] mx-auto text-center mx-aut w-full"
            }
          />
        </div>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 h-[calc(100%-150px)]">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

interface CardProps {
  card: {
    url: StaticImageData;
    title: string;
    id: number;
  };
}

const Card: React.FC<CardProps> = ({ card }) => {
  const { t } = useTranslation();

  return (
    <div
      key={card.id}
      className="group relative min-w-[80vw] w-full overflow-hidden pt-10"
    >
      <div className="flex flex-col justify-center max-w-[932px] w-full h-full px-4">
        <div className="relative max-h-[45%] mp:max-h-[55%] h-full max-w-[500px] w-full mr-0 ml-auto">
          <Image
            src={card.url}
            alt={"Contract Photo"}
            fill
            className="absoolute object-cover rounded-lg"
            sizes="(min-width: 768px) 50vw,
                        100vw"
            placeholder="blur"
            blurDataURL="../../public/images/contract.jpg"
          />
        </div>
        <div className="relative">
          <h3
            className={
              "text-white text-[32px] md:text-[36px] font-normal leading-[100%] font-['Prata'] whitespace-normal drop-shadow-lg shadow-black mb-[20px] ml-0 mr-auto w-full text-left absolute -top-[85px] px-4"
            }
          >
            {t(card.title)}
          </h3>
        </div>
        <div className="mx-auto max-w-[650px] w-full mt-[20px]">
          <p className="text-ourServicesText bg-lightBlack">
            Mauris suscipit metus eget sapien laoreet, non viverra nisi
            sagittis. Duis elit enim, maximus sit amet iaculis ut, porttitor at
            eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            tincidunt nisi eu sapien vehicula, sed cursus nunc ullamcorper. Sed
            vel mattis dolor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

const cards = [
  {
    url: contractPhoto,
    title: "ourServicesCard1Headline",
    id: 1,
  },
  {
    url: indemnityPhoto,
    title: "ourServicesCard2Headline",
    id: 2,
  },
  {
    url: familyPhoto,
    title: "ourServicesCard3Headline",
    id: 3,
  },
  {
    url: penaltyPhoto,
    title: "ourServicesCard4Headline",
    id: 4,
  },
  {
    url: otherLawAreasPhoto,
    title: "ourServicesCard5Headline",
    id: 5,
  },
];

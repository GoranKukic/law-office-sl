"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import Image from "next/image";
import aboutUsBg from "@/public/images/aboutUsBg.png";
import Title from "./title";
import Headline from "./headline";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about-us"
      className="min-h-[650px] bg-aboutUs-gradient flex justify-center items-center flex-col overflow-hidden"
    >
      <div className=" relative bg-white h-full max-w-[1172px] w-full mx-auto my-[0] px-4 z-20">
        <div
          className="aboutUsImg absolute -right-[230px] -bottom-[2px] w-[600px] z-40"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image
            src={aboutUsBg}
            alt={"About Us Backgroun Image"}
            sizes="(min-width: 768px) 50vw,
                   (min-width: 1200px) 33vw,
                  100vw"
            placeholder="blur"
            blurDataURL="@/public/images/aboutUsBg.png"
          />
        </div>
        <div
          className="relative z-30 my-[120px] mr-auto ml-0 max-w-[570px] w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Title title={t("aboutUsTitle")} className="text-goldBg mb-[10px]" />
          <Headline
            headline={t("aboutUsHeadline")}
            className={"text-black max-w-[350px] mb-[20px]"}
          />
          <p className="mb-[16px] text-gray font-sans">
            Morbi quis commodo quam. Nullam sodales mauris eget mi consectetur
            imperdiet. Nam elementum placerat tortor, quis commodo sapien
            convallis a. Vivamus arcu ante, pharetra ac sem quis, ultricies
            lobortis urna. In hendrerit vel ipsum sit amet ullamcorper. Morbi
            elementum urna ut lacinia finibus. Duis tristique rhoncus mi non
            posuere.
          </p>
          <p className="text-gray font-sans">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Morbi nec pharetra dui. Nullam dapibus lectus
            ut mauris scelerisque, ac mollis erat egestas. Praesent vitae justo
            ac est porta lobortis. Fusce vitae lacinia nibh. Vestibulum iaculis
            pretium metus, vitae pulvinar mauris. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import introBg from "@/public/images/heroBg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default function Intro() {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-sine" });
  }, []);

  const { t } = useTranslation();

  return (
    <section
      id="intro"
      className="hero-gradient h-[100vh] w-100 flex flex-row justify-center items-center overflow-hidden relative"
    >
      <div className="absolute z-10 h-full w-full bg-gradient-to-b from-black/75 to-black/75 md:text-justify text-center lg:text-justify lg:text-52" />
      <Image
        src={introBg}
        alt="Intro background"
        fill
        priority
        className=" object-cover object-top h-full"
        placeholder="blur"
        blurDataURL="/heroBg.jpg"
        sizes="100vw"
      />
      <div className="relative max-w-[1172px] w-full bg-transparent flex justify-center z-20 px-4">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="max-w-[855px] w-full flex flex-col gap-[20px]"
        >
          <h2 className="text-white mb-[10px] uppercase text-[16px] font-semibold ml-0 mr-auto my-0 leading-[155%]">
            {t("heroTitle")}
          </h2>
          <span className="max-w-[855px] w-full">
            <h2 className="heroHeadline capitalize m-0 w-full text-goldBg text-[76px] font-['Prata'] text-justify">
              Audiatur et altera pars
            </h2>
          </span>
          <span className="max-w-[570px] ml-auto mr-0">
            <p className="text-white text-[16px] font-normal text-justify leading-[155%] font-sans">
              {t("heroDescription")}
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}

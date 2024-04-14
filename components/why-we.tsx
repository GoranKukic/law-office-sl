"use client";

import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import WhyWeBg from "@/public/images/whyWeBg.jpg";
import Title from "./title";
import Headline from "./headline";
import MoneySaveImg from "@/public/images/money.png";
import TimeImg from "@/public/images/time.png";
import StressImg from "@/public/images/stress.png";

const WhyWe = () => {
  const { t } = useTranslation();
  return (
    <div
      id="why-we"
      className="relative min-h-[900px] pb-[250px] pt-[100px] w-full flex flex-row justify-center items-center overflow-hidden"
    >
      <div className="paralaxContainer">
        <Image
          src={WhyWeBg}
          alt={"Why we background image"}
          fill
          className="absolute object-cover object-top h-full"
          placeholder="blur"
          blurDataURL="../../public/images/whyWeBg.jpg"
          sizes="100vw"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="max-w-[1172px] w-full backdrop-blur-[8.5px] p-4"
      >
        <Title title={t("whyWeTitle")} className="text-goldBg text-center" />
        <Headline
          headline={t("whyWeHeadline")}
          className="mb-[40px] text-center"
        ></Headline>
        <div className="flex flex-row flex-wrap justify-center gap-[30px] z-20">
          {/* Benefit money*/}

          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="max-w-[360px] px-[34px] pt-[60px] pb-[55px] bg-white border-t-[6px] border-solid border-goldBg flex flex-col gap-[33px] items-center justify-center text-center cursor-pointer overflow-hidden transform hover:-translate-y-4 duration-500 ease-in-out">
              <Image
                src={MoneySaveImg}
                alt="Piggybank icon"
                className="max-h-[40px] h-full max-w-[40px] w-full"
              />
              <span className='text-[20px] md:text-[24px] font-normal text-goldBg font-["Prata"] leadeing-[155%]'>
                {t("whyWeCard1Headline")}
              </span>
              <p className={"text-center text-gray"}>
                {t("whyWeCard1Content")}
              </p>
            </div>
          </div>

          {/* Benefit time*/}

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="max-w-[360px] px-[34px] pt-[60px] pb-[55px] bg-white border-t-[6px] border-solid border-goldBg flex flex-col gap-[33px] items-center justify-center text-center cursor-pointer overflow-hidden transform hover:-translate-y-4 duration-500 ease-in-out">
              <Image
                src={TimeImg}
                alt="Piggybank icon"
                className="max-h-[40px] h-full max-w-[40px] w-full"
              />
              <span className='text-[20px] md:text-[24px] font-normal text-goldBg font-["Prata"] leadeing-[155%]'>
                {t("whyWeCard2Headline")}
              </span>
              <p className={"text-center text-gray"}>
                {t("whyWeCard2Content")}
              </p>
            </div>
          </div>

          {/* Benefit stress*/}

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="max-w-[360px] px-[34px] pt-[60px] pb-[55px] bg-white border-t-[6px] border-solid border-goldBg flex flex-col gap-[33px] items-center justify-center text-center cursor-pointer overflow-hidden transform hover:-translate-y-4 duration-500 ease-in-out">
              <Image
                src={StressImg}
                alt="Piggybank icon"
                className="max-h-[40px] h-full max-w-[40px] w-full"
              />
              <span className='text-[20px] md:text-[24px] font-normal text-goldBg font-["Prata"] leadeing-[155%]'>
                {t("whyWeCard3Headline")}
              </span>
              <p className={"text-center text-gray"}>
                {t("whyWeCard3Content")}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </Parallax> */}
    </div>
  );
};
export default WhyWe;

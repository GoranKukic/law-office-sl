"use client";

import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "./title";
import Headline from "./headline";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div
      id="contact"
      className={` bg-white min-h-[500px] pb-[150px] w-full flex flex-row justify-center items-center relative overflow-visible`}
    >
      <div className="clipped absolute top-0 left-0 right-0 overflow-visible"></div>
      <div
        className="h-full w-full z-20 flex flex-col mx-auto max-w-[1172px] px-4"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="mx-auto">
          <Title
            title={t("ctaTitle")}
            className="text-goldBg mb-[10px] mx-auto"
          />
        </div>
        <div className="mx-auto">
          <Headline headline={t("ctaHeadline")} className="mb-[40px]" />
        </div>
        <form
          action="https://formspree.io/f/mayzoekz"
          method="POST"
          className="max-w-[800px] w-full mx-auto"
        >
          <ul>
            {/* <li className="mb-[22px]">
              <input
                className='border border-grayBackground w-full p-[22px] leading-tight focus:outline-none focus:shadow-outline"'
                id="name"
                type="text"
                placeholder={t("ctaFormName")}
                required
              />
            </li> */}
            <li className="mb-[22px]">
              <input
                className='border border-grayBackground w-full p-[22px] leading-tight focus:outline-none focus:shadow-outline"'
                type="email"
                id="mail"
                name="email"
                placeholder={t("ctaFormEmail")}
                required
              />
            </li>
            <li className="mb-[22px]">
              <textarea
                required
                name="message"
                rows={9}
                placeholder={t("ctaFormMessage")}
                className="border border-grayBackground w-full p-[22px] leading-tight focus:outline-none focus:shadow-outline"
              />
            </li>
            <li>
              <button
                className="flex justify-center items-center h-[50px] w-[180px] mx-auto text-white text-[16px] font-sans font-semibold
            box-border border-2 border-solid border-goldBg rounded-sm leading-[155%] cursor-pointer bg-goldBg 
            transition-colors duration-700 transform hover:bg-white hover:text-goldBg active:bg-gray"
                type="submit"
                value="Submit"
              >
                {t("ctaFormButton")}
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Contact;

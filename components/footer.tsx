"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import LogoImg from "@/public/images/logo-text-v1.png";
// import LogoImg from "@/public/images/logo-text-v2.png";
import { Link } from "react-scroll/modules";
import { GrMailOption } from "react-icons/gr";
import { GrPhone } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-footer-gradient flex justify-center items-center flex-col overflow-hidden !important">
      <div className="h-full bg-lightBlack max-w-[1172px] w-full">
        <div className=" w-full mx-auto my-[55px] px-4 z-20">
          <div className="mb-[15px] flex items-left">
            <Link
              href="#"
              to="hero"
              activeClass="active"
              smooth={true}
              duration={500}
            >
              <div className="relative w-[180px] h-[55px]">
                <Image
                  src={LogoImg}
                  alt="Logo"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(min-width: 768px) 50vw,
               (min-width: 1200px) 30vw,
               100vw"
                  placeholder="blur"
                  blurDataURL="../public/images/logo2.png"
                />
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-[35px] md:gap-[0px] md:flex-row">
            <div className="flex-col max-w-[500px] w-full pr-2">
              <div className="max-w-[390px] w-full mb-[15px] md:mb-[25px]">
                <p
                  className={
                    "text-[16px] font-normal  font-sans leadeing-[155%]` text-footerText text-left"
                  }
                >
                  {t("footerText")}
                </p>
              </div>
            </div>
            <div className="max-w-[210px] w-full px-2">
              <div>
                <ul className=" flex flex-col gap-[15px] md:gap-[25px] text-[16px] font-normal text-footerText font-sans leadeing-[155%]">
                  <li>
                    <Link
                      href="#"
                      to={"about-us"}
                      className="hover:text-goldBg hover:duration-500 hover:pb-[2px] cursor-pointer w-fit"
                      smooth={true}
                      offset={-80}
                      duration={500}
                    >
                      {t("navAboutUs")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      to={"our-services"}
                      className="hover:text-goldBg hover:duration-500 hover:pb-[2px] cursor-pointer w-fit"
                      smooth={true}
                      offset={-80}
                      duration={500}
                    >
                      {t("navOurServices")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      to={"why-we"}
                      className="hover:text-goldBg hover:duration-500 hover:pb-[2px] cursor-pointer w-fit"
                      smooth={true}
                      offset={-80}
                      duration={500}
                    >
                      {t("navWhyWe")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      to={"contact"}
                      className="hover:text-goldBg hover:duration-500 hover:pb-[2px] cursor-pointer w-fit"
                      smooth={true}
                      offset={-80}
                      duration={500}
                    >
                      {t("ctaButton")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      to={"location"}
                      className="hover:text-goldBg hover:duration-500 hover:pb-[2px] cursor-pointer w-fit"
                      smooth={true}
                      offset={-80}
                      duration={500}
                    >
                      {t("navLocation")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-w-[290px] w-full px-2">
              <ul className="flex flex-col gap-[15px] md:gap-[20px] text-[16px] font-normal text-white font-sans leadeing-[135%]">
                <li className="contactListV2 transition-transform duration-500 ease-in-out w-fit hover:duration-500">
                  <a
                    href="mailto:advokatstegic@gmail.com"
                    className="cursor-pointer hover:text-goldBg hover:duration-500 overflow-hidden flex gap-[7px]"
                  >
                    <GrMailOption className="mx-auto my-auto" />
                    advokatstegic@gmail.com
                  </a>
                </li>
                <li className="contactListV2 transition-transform duration-500 ease-in-out w-fit hover:duration-500">
                  <a
                    href="tel:+381 63 591 455"
                    className="cursor-pointer hover:text-goldBg hover:duration-500 overflow-hidden flex gap-[7px] "
                  >
                    <GrPhone className="mx-auto my-auto" />
                    +381 63 591 455
                  </a>
                </li>
                <li className="contactListV2 transition-transform duration-500 ease-in-out w-fit hover:duration-500">
                  <a
                    href="tel:+381 64 90 46 966"
                    className="cursor-pointer hover:text-goldBg hover:duration-500 overflow-hidden flex gap-[7px] "
                  >
                    <GrPhone className="mx-auto my-auto" />
                    +381 64 90 46 966
                  </a>
                </li>

                <li className="contactList transition-transform duration-500 ease-in-out  w-fit hover:duration-500">
                  <a
                    href={"https://maps.app.goo.gl/WiL9YQazzr645Asa7"}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-goldBg hover:duration-500 flex gap-[7px]"
                  >
                    <IoLocationSharp className="mx-auto my-auto" />
                    Lovćenska 2/1A, 21000 Novi Sad
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-[1172px] w-full mx-auto px-4 mb-[8px] z-20">
          <div className="flex flex-col-reverse items-center md:flex-row  md:flex-nowrap justify-between text-[14px] font-normal text-footerText font-sans leadeing-[155%]">
            <div>
              <span className="text-center">
                <a
                  href={"https://gorankukic.vercel.app/"}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue hover:duration-500"
                >
                  {" "}
                  Made by Goran Kukić
                </a>{" "}
                {new Date().getFullYear()} <wbr /> &copy; | {t("footerDesc")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
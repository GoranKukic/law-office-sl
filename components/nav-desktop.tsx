import React from "react";
import { Link } from "react-scroll/modules";
import { links } from "@/lib/data";
// import LanguageSwitcher from "./language-switcher";
import { useTranslation } from "react-i18next";

type DesktopNavProps = {
  navbar: boolean;
  setNavbar: (value: boolean) => void;
};

export default function NavDesktop({ navbar, setNavbar }: DesktopNavProps) {
  const { t } = useTranslation();

  return (
    <div
      className={`hidden lg:flex w-[700px] justify-between items-center ${
        navbar ? "text-gray" : "text-white"
      } `}
    >
      {links.map((link, index) =>
        link.name !== "ctaButton" ? (
          <Link
            href="#"
            key={index}
            to={link.hash}
            activeClass="active"
            smooth={true}
            offset={-80}
            duration={500}
          >
            <p className="relative group cursor-pointer">
              <span>{t(link.name)}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-goldBg transition-all group-hover:w-full"></span>
            </p>
          </Link>
        ) : (
          <div className="hidden lg:flex items-center" key={link.hash}>
            <Link
              href="#"
              to="contact"
              activeClass="active"
              smooth={true}
              offset={-250}
              duration={500}
            >
              <button
                className={`flex justify-center items-center h-[50px] w-[180px] text-black text-[16px] font-sans font-semibold
            box-border border-2 border-solid border-goldButton rounded-sm leading-[100%] cursor-pointer bg-goldButton 
            transition-colors duration-700 transform hover:bg-white hover:text-goldButton active:bg-gray ${
              navbar ? "text-white" : "text-black"
            }`}
                type="button"
              >
                <span>{t(link.name)}</span>
              </button>
            </Link>
          </div>
        )
      )}
    </div>
  );
}

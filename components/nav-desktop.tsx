import React from "react";
import { Link } from "react-scroll/modules";
import { links } from "@/lib/data";
import LanguageSwitcher from "./language-switcher";

type DesktopNavProps = {
  navbar: boolean;
  setNavbar: (value: boolean) => void;
};

export default function NavDesktop({ navbar, setNavbar }: DesktopNavProps) {
  return (
    <div
      className={`hidden lg:flex w-[700px] justify-between items-center ${
        navbar ? "text-gray" : "text-white"
      } `}
    >
      {links.map((link) => (
        <Link key={link.hash} to={link.hash}>
          <p className="relative group cursor-pointer">
            <span>{link.name}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-goldBg transition-all group-hover:w-full"></span>
          </p>
        </Link>
      ))}

      <div className="hidden lg:flex items-center">
        {/* CTA Button */}
        <Link
          href="#"
          to="contact"
          activeClass="active"
          smooth={true}
          offset={-250}
          duration={500}
        >
          <button
            className={`flex justify-center items-center h-[50px] w-[180px] text-black text-[16px] font-['Open Sans'] font-semibold
                box-border border-2 border-solid border-goldButton rounded-sm leading-[155%] cursor-pointer bg-goldButton 
                transition-colors duration-700 transform hover:bg-white hover:text-goldButton active:bg-gray ${
                  navbar ? "text-white" : "text-black"
                }`}
            type="button"
          >
            Content
          </button>
        </Link>
      </div>
    </div>
  );
}

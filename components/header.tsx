"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import LogoImg from "@/public/logo2.png";
import { links } from "@/lib/data";
import { Link } from "react-scroll/modules";
// import CtaButton from "../UI/CtaButton";
// import Logo from "../UI/Logo";
// import NavLinks from "./NavLinks";
import MobileNav from "./nav-mobile";
// import { useRouter } from "next/router";
// import en from "../../locales/en";
// import sr from "../../locales/sr";
// import dynamic from "next/dynamic";

import LanguageSwitcher from "./language-switcher";
import NavDesktop from "./nav-desktop";

// const LanguageSwitcher = dynamic(() => import("../Navbar/LanguageSwitcher"), {
//   ssr: false,
// });

export default function Header() {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false); // state for adding background color to navbar

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const uniqueId = `language-switcher-${new Date().getTime()}`;

  //   const router = useRouter();
  //   const { locale } = router;
  //   const t = locale === "en" ? en : sr;
  //   const identifier = "language-switcher-1";

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }

  return (
    <nav
      className={`fixed z-50 inset-x-0 top-0 left-0 right-0 flex filter px-4 py-4 h-20 items-center  transition-all duration-500 ease-in-out ${
        navbar ? "bg-white shadow-md" : "bg-transparent text-gray"
      }`}
    >
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-full justify-between max-w-[1140px] mx-auto my-0 flex flex-column">
        {/* Logo */}
        <div className="flex items-center">
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

        {/* Desktop nav */}
        <NavDesktop navbar={navbar} setNavbar={setNavbar} />


        {/* Language switcher */}
        <div className="justify-center items-center hidden lg:flex">
          <LanguageSwitcher ariaId="language-switcher" id="navbar" />
        </div>

        {/* hamburger button */}
        <div className=" flex justify-end items-center lg:hidden">
          <div
            className="z-50 flex relative w-8 h-8 flex-col justify-between items-center "
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-3.5" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
                open ? "w-0 hidden" : "w-full block"
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-3.5" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

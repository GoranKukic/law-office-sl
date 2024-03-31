import React from "react";
import { Link } from "react-scroll/modules";
import { links } from "@/lib/data";
import LanguageSwitcher from "./language-switcher";
// import CtaButton from "../UI/CtaButton";
// import NavLinksMobile from "./NavLinksMobile";
// import { useRouter } from "next/router";
// import en from "../../locales/en";
// import sr from "../../locales/sr";
// import dynamic from "next/dynamic";

// const LanguageSwitcher = dynamic(() => import("../Navbar/LanguageSwitcher"), {
//   ssr: false,
// });

type MobileNavProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function MobileNav({ open, setOpen }: MobileNavProps) {
  //   const router = useRouter();
  //   const { locale } = router;
  //   const t = locale === "en" ? en : sr;

  // const uniqueId = `language-switcher-${new Date().getTime()}`;

  return (
    <div
      className={`absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-fill h-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md  text-center`}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className="flex flex-col">
        {links.map((link, index) => (
          <Link
            key={index}
            // href="#"
            to={link.hash}
            className="my-4 text-gray"
            smooth={true}
            offset={-80}
            duration={500}
            // onClick={onClick}
          >
            <p className="relative group cursor-pointer text-[18px]">
              <span>{link.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-goldBg transition-all group-hover:w-full"></span>
            </p>
          </Link>
        ))}

        <Link
          href="#"
          to="contact"
          smooth={true}
          offset={-290}
          duration={500}
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          {/* <CtaButton /> */}
        </Link>
        <div className="flex justify-center items-center  my-4">
          <LanguageSwitcher ariaId="language-switcher-mobile" id="mobile" />
        </div>
      </div>
    </div>
  );
}

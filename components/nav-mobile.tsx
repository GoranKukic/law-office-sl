import React, { useEffect } from "react";
import { Link } from "react-scroll/modules";
import { links } from "@/lib/data";
import LanguageSwitcher from "./language-switcher";
import { useTranslation } from "react-i18next";

type MobileNavProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function MobileNav({ open, setOpen }: MobileNavProps) {
  const { t } = useTranslation();

  // Hook to track window size changes
  useEffect(() => {
    const handleResize = () => {
      // Close the mobile menu if the window is wider than 1023px
      if (window.innerWidth > 1023 && open) {
        setOpen(false);
      }
    };

    // Add event listener for window size changes
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open, setOpen]);

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
        {links.map((link, index) =>
          link.name !== "ctaButton" ? (
            <Link
              href="#"
              key={index}
              to={link.hash}
              className="my-4 text-gray"
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() =>
                setTimeout(() => {
                  setOpen(!open);
                }, 100)
              }
            >
              <p className="relative group cursor-pointer text-[18px]">
                <span>{t(link.name)}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-goldBg transition-all group-hover:w-full"></span>
              </p>
            </Link>
          ) : (
            <Link
              href="#"
              to="contact"
              key={link.hash}
              smooth={true}
              offset={-290}
              duration={500}
              onClick={() =>
                setTimeout(() => {
                  setOpen(!open);
                }, 100)
              }
            >
              <button
                className="flex justify-center items-center h-[50px] w-[180px] text-black text-[16px] font-sans font-semibold
            box-border border-2 border-solid border-goldButton rounded-sm leading-[100%] cursor-pointer bg-goldButton 
            transition-colors duration-700 transform hover:bg-white hover:text-goldButton active:bg-gray"
                type="button"
              >
                <span>{t(link.name)}</span>
              </button>
            </Link>
          )
        )}
        <div className="flex justify-center items-center  my-4">
          <LanguageSwitcher ariaId="language-switcher-mobile" id="mobile" />
        </div>
      </div>
    </div>
  );
}

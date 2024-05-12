"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";

interface LanguageSwitcherProps {
  ariaId: string;
  id: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ ariaId, id }) => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e: SelectChangeEvent<string>) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div id={id}>
      <Box sx={{ minWidth: 50 }} className="relative">
        <FormControl fullWidth>
          <div className="inputWrapper relative group">
            <InputLabel id={ariaId}></InputLabel>
            <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-goldBg transition-all group-hover:w-full"></span>
            <Select
              id={id + "selectId"}
              aria-labelledby={ariaId}
              value={currentLocale}
              inputProps={{ id: id + "inputId" }}
              onChange={handleChange}
              variant="standard"
              className="text-goldBg !important"
            >
              <MenuItem value="en" className="text-gray">
                EN
              </MenuItem>
              <MenuItem value="sr" className="text-gray">
                SR
              </MenuItem>
            </Select>
          </div>
        </FormControl>
      </Box>
    </div>
  );
};

export default LanguageSwitcher;

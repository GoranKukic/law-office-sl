import React from "react";
import { useTranslation } from "react-i18next";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  const { t } = useTranslation();

  return (
    <button
      type="submit"
      className="flex justify-center items-center h-[50px] w-[180px] mx-auto text-white text-[16px] font-sans font-semibold box-border border-2 border-solid border-goldBg rounded-sm leading-[155%] cursor-pointer bg-goldBg transition-colors duration-700 transform hover:bg-white hover:text-goldBg active:bg-gray"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-black"></div>
      ) : (
        <>{t("ctaFormButton")}</>
      )}
    </button>
  );
}

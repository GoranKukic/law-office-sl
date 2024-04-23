"use client";

import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "./title";
import Headline from "./headline";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

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
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }

            toast.success(t("contact-emailSuccess"));
          }}
          // method="POST"
          className="max-w-[800px] w-full mx-auto"
        >
          <ul>
            <li className="mb-[22px]">
              <input
                className='border border-grayBackground w-full p-[22px] leading-tight focus:outline-none focus:shadow-outline"'
                type="email"
                id="mail"
                name="senderEmail"
                maxLength={50}
                placeholder={t("ctaFormEmail")}
                required
              />
            </li>
            <li className="mb-[22px]">
              <textarea
                required
                name="message"
                rows={9}
                maxLength={500}
                placeholder={t("ctaFormMessage")}
                className="border border-grayBackground w-full p-[22px] leading-tight focus:outline-none focus:shadow-outline"
              />
            </li>
            <li>
              <SubmitBtn />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Contact;

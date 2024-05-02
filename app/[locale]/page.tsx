import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

const i18nNamespaces = ["home"];

import { Toaster } from "react-hot-toast";

import Header from "@/components/header";
import Intro from "@/components/intro";
import AboutUs from "@/components/about-us";
// import OurServices from "@/components/our-services";
import OurServices from "@/components/our-serviess";
import WhyWe from "@/components/why-we";
import Contact from "@/components/contact";
import Location from "@/components/location";
import Footer from "@/components/footer";

async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="flex flex-col">
        <Header />
        <Toaster
          position="top-center"
          reverseOrder={true}
          toastOptions={{
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          }}
        />
        <Intro />
        <AboutUs />
        <OurServices />
        <WhyWe />
        <Contact />
        <Location />
        <Footer />
      </main>
    </TranslationsProvider>
  );
}

export default Home;

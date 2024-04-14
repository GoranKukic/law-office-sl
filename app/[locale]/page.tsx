import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import AboutUs from "@/components/about-us";

const i18nNamespaces = ["home"];

import Header from "@/components/header";
import Intro from "@/components/intro";
import OurServices from "@/components/our-services";
import WhyWe from "@/components/why-we";

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
        <Intro />
        <AboutUs />
        {/* <OurServices /> */}
        <WhyWe />
      </main>
    </TranslationsProvider>
  );
}

export default Home;

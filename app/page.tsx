// app/page.tsx
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import { client } from "./lib/sanity";

export default async function Home() {
  let data: any = {};

  try {
    data = (await client.fetch(`*[_type == "pageHome"][0]`)) || {};
  } catch (err) {
    console.error("FAILED TO FETCH FROM SANITY:", err);
  }

  return (
    <main>
      <Hero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        description={data.heroDescription}
      />
      <About
        heading={data.aboutHeading}
        text1={data.aboutText1}
        text2={data.aboutText2}
        points={data.aboutTrustPoints}
        bottomNote={data.aboutBottomNote}
      />
      <Services
        heading={data.servicesHeading}
        subheading={data.servicesSubheading}
        services={data.servicesList}
      />
      <WhyChooseUs />
      <Contact
        heading={data.contactHeading}
        description={data.contactDescription}
        phones={data.contactPhones}
      />
    </main>
  );
}

import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { Portfolio } from "../components/Portfolio";
import { Process } from "../components/Process";
import { Services } from "../components/Services";
import { WhyNova } from "../components/WhyNova";

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <About />
      <WhyNova />
      <Contact />
    </>
  );
}

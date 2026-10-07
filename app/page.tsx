import { AboutFrancesca } from "@/components/sections/AboutFrancesca";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { OneToOne } from "@/components/sections/OneToOne";
import { OnlineCoaching } from "@/components/sections/OnlineCoaching";
import { Process } from "@/components/sections/Process";
import { Results } from "@/components/sections/Results";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustBar } from "@/components/sections/TrustBar";

/**
 * Homepage Polaris.
 *
 * L'ordine delle sezioni segue il funnel:
 * impatto → posizionamento → problema → metodo → servizio →
 * autorevolezza → prova → dubbi → call.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Process />
      <OnlineCoaching />
      <OneToOne />
      <AboutFrancesca />
      <Results />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}

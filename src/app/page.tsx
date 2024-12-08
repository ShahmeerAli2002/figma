import Brand from "@/components/Brand";
import Ceramics from "@/components/Ceramics";
import Club from "@/components/Club";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Brand />
      <Ceramics />
      <Products />
      <Club />
      <Section
        direction={true}
        heading="From a studio in London to a global brand with over 400 outlets"
        image="/last.png"
      />
    </main>
  );
}

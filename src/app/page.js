import Image from "next/image";
import ContactForm from "@/components/contactForm";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Services></Services>
      <ContactForm></ContactForm>
    </div>
  );
}

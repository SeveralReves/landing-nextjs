import ContactForm from "@/components/contactForm";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Services></Services>
      <Testimonials></Testimonials>
      <ContactForm></ContactForm>
    </div>
  );
}

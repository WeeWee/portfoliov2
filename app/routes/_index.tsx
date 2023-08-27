import { Contact, Hero, Navbar, Projects } from "~/components";

export default function Index() {
  return (
    <div className="min-h-screen mx-8 xl:max-w-7xl xl:px-8 xl:mx-auto">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

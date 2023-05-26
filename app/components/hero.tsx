import LargeHero from "public/linked-in-profile.webp";
import SmallHero from "public/small-linked-in-profile.webp";
import { motion } from "framer-motion";
import { Skills } from ".";
export function Hero() {
  const h1text = "Hey, I'm Adam, a web developer with 2+ years of experience";
  const ptext =
    "I started the programming journey by going to LBS game development, which was fun and very influencial. But something was missing, i enjoyed the problem solving aspect of programming and the math. But i realised i didnt want to become a game developer, i wanted to make an app or a website. Which is what i focused on the last year of LBS and also a reason why i chose web development at Borås YH. During this time i hope to increase my knowledge and create a good impression as a web developer.";
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-5 lg:max-h-[31.25rem] xl:max-h-96 gap-4 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 55 }}
        animate={{
          opacity: 1,
          y: 0,

          transition: { ease: "easeInOut", duration: 1, delay: 1.4 },
        }}
        className="h-full col-span-3 rounded-xl"
      >
        <motion.div className="lg:mr-10 ">
          <Skills />
          <motion.h1 className="mt-1 mb-6 text-2xl font-semibold md:text-4xl">
            {h1text}
          </motion.h1>
          <motion.p className="dark:text-gray-300">{ptext}</motion.p>
        </motion.div>
      </motion.div>

      <motion.picture
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { ease: "easeIn", duration: 0.7, delay: 0.9 },
        }}
        className="col-span-2 rounded-xl lg:w-full sm:max-h-[31.25rem] max-h-80 xl:max-h-96  object-cover object-center"
      >
        <source media="(min-width: 600px)" srcSet={LargeHero}></source>
        <source media="(max-width: 600px)" srcSet={SmallHero}></source>
        <img
          src={LargeHero}
          alt="Hero"
          className="rounded-xl w-full sm:max-h-[31.25rem] max-h-80 xl:max-h-96  object-cover object-center"
        />
      </motion.picture>
    </div>
  );
}

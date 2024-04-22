/* import LargeHero from "public/linked-in-profile.webp";
import SmallHero from "public/small-linked-in-profile.webp"; */
import { motion } from "framer-motion";
import { Skills } from ".";
export function Hero() {
	const h1text = "Hey, I'm Adam, a web developer with 3+ years of experience";
	const ptext = `I have a passion for creating web applications that use the latest and greatest technologies. Some of the tools I love working with include Next.JS, Remix.run, TailwindCSS, and Typescript. These technologies allow me to build websites that are not only visually appealing but also highly functional.
		When it comes to web development, I truly love everything about it. From designing the user interface to writing the code that makes everything work seamlessly, I find joy in every aspect of the process. Right now, I'm actively looking for new opportunities where I can put my skills to use and contribute to innovative projects. I'm eager to take on new challenges and continue growing as a web developer. If you have an exciting project in mind, I would love to be a part of it!`;
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
				<motion.img
					src="/linkedin-picture.jpg"
					width={320}
					height={311}
					alt="Picture of Adam Kindberg"
					className="rounded-xl shadow-lg w-full sm:max-h-[31.25rem] max-h-80 xl:max-h-96  object-cover object-center"
				/>
			</motion.picture>
		</div>
	);
}

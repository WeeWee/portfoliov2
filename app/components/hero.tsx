import ImageLink from "public/linked-in-profile.jpg";
import { motion } from "framer-motion";
import { Skills } from ".";
export function Hero() {
	const h1text = "Hey, I'm Adam, a web developer with 2+ years of experience";
	const ptext =
		"I started my programming journey by going to LBS game development. I later switched from game development to web development. Which is what i focused on the last year of LBS and am now studying to Webdevelopment - React. Im working everyday to improve and learn as a web developer.";
	return (
		<div className="flex flex-col-reverse lg:grid lg:grid-cols-5 lg:max-h-[31.25rem] xl:max-h-96 gap-4 mt-10">
			<motion.div
				initial={{ opacity: 0, y: 55 }}
				animate={{
					opacity: 1,
					y: 0,

					transition: { ease: "easeInOut", duration: 1, delay: 2 },
				}}
				className="rounded-xl h-full col-span-3"
			>
				<motion.div className="lg:mr-10  ">
					<Skills />
					<motion.h1 className="font-semibold text-2xl md:text-4xl mb-6 mt-1">
						{h1text}
					</motion.h1>
					<motion.p>{ptext}</motion.p>
				</motion.div>
			</motion.div>

			<motion.img
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { ease: "easeIn", duration: 0.7, delay: 1 },
				}}
				src={ImageLink}
				className="col-span-2 rounded-xl lg:w-full sm:max-h-[31.25rem] xl:max-h-96  object-cover object-center"
			/>
		</div>
	);
}

import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";
export function Projects() {
	const projects = [
		{
			title: "testing",
			description: "testing",
			image: "/car rental image.jpg",
			technologies: ["Remix.JS", "TailwindCSS", "Framer motion"],
		},
		{
			title: "testing",
			description: "testing",
			image: "/car rental image.jpg",
			technologies: ["Remix.JS", "TailwindCSS", "Framer motion"],
		},
		{
			title: "testing",
			description: "testing",
			image: "/car rental image.jpg",
			technologies: ["Remix.JS", "TailwindCSS", "Framer motion"],
		},
	];
	return (
		<div id="works" className="  grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
			{projects.map((project, index) => (
				<motion.div
					key={`${project.title}-${index}`}
					initial={{ opacity: 0, y: 55 }}
					animate={{
						opacity: 1,
						y: 0,

						transition: { ease: "easeInOut", duration: 1, delay: 2.8 },
					}}
					className=" relative  rounded-3xl h-full   overflow-hidden "
				>
					{/* <h1 className="font-medium text-xl">Testing</h1>
						<p>{project.description}</p> */}
					<motion.div
						initial={{ scale: 1 }}
						whileHover={{
							scale: 1.02,
							transition: { duration: 0.2, ease: "easeInOut" },
						}}
					>
						<div className="absolute bottom-3 left-10 w-full text-white">
							<h3 className="text-xl font-medium capitalize">
								{project.title}
							</h3>
							<div className="flex gap-2 text-xs">
								{project.technologies.map((technology, index) => (
									<motion.p
										animate={{
											backgroundImage: [
												"linear-gradient(to right, #948afe, #ba8afe)",
												"linear-gradient(to right, #948afe, #d78afe)",
												"linear-gradient(to right, #948afe, #ba8afe)",
											],

											transition: {
												ease: "easeIn",
												repeat: Infinity,
												duration: 2.5,
											},
										}}
										className="rounded-2xl bg-gradient-to-r from-[#948afe] to-[#fe8aca]  p-1 capitalize"
										key={index}
									>
										{technology}
									</motion.p>
								))}
							</div>
						</div>
						<motion.img
							src={project.image}
							className="h-full max-h-96 w-full object-cover object-center"
						/>
						{/* <div className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white rounded-full ">
							<ArrowUpRightIcon className="w-4 h-4 text-black" />
						</div> */}
					</motion.div>
				</motion.div>
			))}
		</div>
	);
}
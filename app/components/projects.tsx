import { motion } from "framer-motion";
export function Projects() {
	const projects = [
		{
			title: "Beauty store",
			description: "",
			link: "https://beautycosmetics-store.vercel.app/",
			image: "/beauty-app.webp",
			technologies: [
				"Remix.run",
				"TailwindCSS",
				"Stripe",
				"Sanity CMS",
				"Typescript",
			],
		},
	];
	return (
		<div id="works" className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2">
			{projects.map((project, index) => (
				<motion.a
					href={project.link}
					key={`${project.title}-${index}`}
					initial={{ opacity: 0, y: 55 }}
					animate={{
						opacity: 1,
						y: 0,

						transition: { ease: "easeInOut", duration: 1, delay: 2.1 },
					}}
					className="relative h-full overflow-hidden rounded-3xl hover:cursor-pointer"
				>
					<motion.div
						initial={{ scale: 1 }}
						whileHover={{
							scale: 1.02,
							transition: { duration: 0.2, ease: "easeInOut" },
						}}
					>
						<div className="absolute text-white bottom-3 inset-x-2 md:left-10">
							<h2 className="text-xl font-semibold capitalize">
								{project.title}
							</h2>
							<div className="hidden sm:flex xs:grid grid-cols-3 gap-2 grid-flow-row text-xs">
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
										className="rounded-2xl text-center bg-gradient-to-r from-[#948afe] to-[#fe8aca] p-1 capitalize"
										key={index}
									>
										{technology}
									</motion.p>
								))}
							</div>
						</div>
						<motion.img
							src={project.image}
							alt={project.title}
							loading="lazy"
							className="object-cover object-center w-full h-full max-h-96"
						/>
					</motion.div>
				</motion.a>
			))}
		</div>
	);
}

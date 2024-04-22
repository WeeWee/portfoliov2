import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
	"NEXT JS",
	"REMIX JS",
	"TailwindCSS",
	"TypeScript",
	"HTML/CSS",
	"JavaScript",
	"SASS",
	"GraphQL",
	"SQL",
	"Hasura",
	"Backend",
	"REST",
	"CRUD",
	"i18n",
	"Prismic CMS",
	"Agil utveckling",
	"PHP",
	"Figma",
	"MongoDB",
	"Gitlab",
	"Github",
];

const animationDuration = 2;
export function Skills() {
	const [currentIndex, setCurrentIndex] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
		}, animationDuration * 1000);

		return () => clearInterval(interval);
	}, []);

	const animation = {
		hidden: {
			opacity: 0,
			y: 30,
			display: "none",
		},
		visible: {
			opacity: 1,
			y: 0,
			display: "block",
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
				duration: animationDuration,
			},
		},
		exit: {
			opacity: 0,
			y: -30,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
				duration: animationDuration,
			},
		},
	};
	return (
		<motion.p className=" tracking-wide overflow-hidden flex gap-1 min-w-[320px] max-w-[440px]">
			<span>I develop using</span>

			{skills.map((skill, index) => (
				<motion.span
					key={index}
					initial="hidden"
					animate={currentIndex === index ? "visible" : "hidden"}
					variants={animation}
					className="font-medium "
				>
					{skill}
				</motion.span>
			))}
		</motion.p>
	);
}

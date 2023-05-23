import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useState } from "react";

export function ThemeSwitch() {
	const [isOn, setIsOn] = useState(false);

	const toggleSwitch = () => setIsOn(!isOn);
	return (
		<div
			onClick={toggleSwitch}
			className={`flex-start flex items-center h-6 w-24 rounded-xl bg-zinc-100 p-2 shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${
				isOn && "place-content-end"
			}`}
		>
			<motion.div
				className="flex h-4 w-4 items-center justify-center rounded-full bg-black/90"
				layout
				transition={{ type: "spring", stiffness: 700, damping: 30 }}
			>
				<motion.div whileTap={{ rotate: 360 }}>
					{isOn ? (
						<SunIcon className="h-6 w-6 text-yellow-300" />
					) : (
						<MoonIcon className="h-6 w-6 text-slate-200" />
					)}
				</motion.div>
			</motion.div>
		</div>
	);
}

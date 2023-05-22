import type { V2_MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import { Hero, Navbar, Projects, Skills } from "~/components";

export const meta: V2_MetaFunction = () => {
	return [{ title: "Adam Kindberg Portfolio" }];
};

export default function Index() {
	return (
		<div className=" min-h-screen mx-8 xl:max-w-7xl xl:px-8 xl:mx-auto">
			<Navbar />

			<Hero />
			<Projects />
		</div>
	);
}

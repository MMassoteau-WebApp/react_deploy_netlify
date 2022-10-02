import React from "react";
import { motion } from "framer-motion";

import {
	Intro,
	Valeurs,
	Services,
	Instagram,
	Testimonial,
	Formations,
	Makeuptonbusiness,
	Newsletter,
} from "../components/accueil";
// import Ebook from "../components/formations/Ebook";

const Accueil = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Intro />
			<Valeurs />
			<Services />
			<Formations />
			<Makeuptonbusiness />
			{/* <Ebook /> */}
			<Testimonial />
			<Instagram />
			<Newsletter />
		</motion.div>
	);
};

export default Accueil;

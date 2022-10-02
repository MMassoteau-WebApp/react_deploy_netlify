import React from "react";
import { motion } from "framer-motion";
import { Intouch } from "../components/contact";

const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Intouch />
		</motion.div>
	);
};

export default Contact;

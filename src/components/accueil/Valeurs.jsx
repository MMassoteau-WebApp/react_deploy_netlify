import React from "react";

// import motion
import { motion } from "framer-motion";
// import variants
import { fadeInLeft, fadeInRight, staggerTextContainer } from "../../variants";

// import forme25 from "../../assets/visualElement/formes/forme25.png";
// import forme26 from "../../assets/visualElement/formes/forme26.png";

const Valeurs = () => {
	const valeur =
		"https://drive.google.com/uc?export=view&id=1FUKHQOc4uyW7RO_uf05CjE7OnDdvNo3V";
	return (
		<motion.div
			className="relative h-full pb-16 bg-coquilledoeuf"
			variants={staggerTextContainer}
			initial="initial"
			whileInView={"animate"}
			viewport={{ once: true, amount: 0.3 }}
		>
			<h1 className="font-modernline font-bold text-center py-28 text-4xl sm:text-6xl capitalize">
				les valeurs de beauté entre nous
			</h1>
			<div className="flex items-center px-12">
				<motion.div variants={fadeInRight} className="flex-1 ">
					<img src={valeur} alt="logo4" className="w-3/4 object-cover" />
				</motion.div>
				<motion.div
					variant={staggerTextContainer}
					className="flex-1 flex-col space-y-12 pl-12"
					initial="initial"
					whileInView={"animate"}
					viewport={{ once: true, amount: 0.3 }}
				>
					<div variant={fadeInLeft} className="flex items-center">
						<motion.div variants={fadeInRight}>
							<h1 className="uppercase font-marisa text-8xl">B</h1>
						</motion.div>
						<motion.div variants={fadeInLeft} className="">
							<h2 className="uppercase font-marisa text-4xl">ienveillance</h2>
							<p className="text-sm">La clé de la confiance et de l'harmonie</p>
						</motion.div>
					</div>

					<div className="flex items-center">
						<motion.div variants={fadeInRight}>
							<h1 className="uppercase font-marisa text-8xl">E</h1>
						</motion.div>
						<motion.div variants={fadeInLeft} className="">
							<h2 className="uppercase font-marisa text-4xl">thique</h2>
							<p className="text-sm">Réconcilier beauté et responsabilité</p>
						</motion.div>
					</div>

					<div className="flex items-center">
						<motion.div variants={fadeInRight}>
							<h1 className="uppercase font-marisa text-8xl">P</h1>
						</motion.div>
						<motion.div variants={fadeInLeft} className="">
							<h2 className="uppercase font-marisa text-4xl">assion</h2>
							<p className="text-sm">Véritable moteur de notre profession</p>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Valeurs;

import React from "react";
import { Link } from "react-router-dom";

// import motion
import { motion } from "framer-motion";
// import variants
import {
	fadeInUp,
	fadeInLeft,
	fadeInRight,
	staggerTextContainer,
} from "../../variants";

const Makeuptonbusiness = () => {
	const pexels2 =
		"https://drive.google.com/uc?export=view&id=1QJ_e0C6-y6lC3Qfu82GOZ4lhIqBIyfE6";
	return (
		<motion.div
			className="container my-24 px-6 mx-auto"
			variants={staggerTextContainer}
			initial="initial"
			whileInView={"animate"}
			viewport={{ once: true, amount: 0.3 }}
		>
			<section className="mb-32 text-gray-800">
				<div className="block rounded-lg shadow-lg bg-white">
					<div className="flex flex-wrap items-center">
						<motion.div
							variants={fadeInRight}
							className="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12"
						>
							<img
								src={pexels2}
								alt="Makeup ton business"
								className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
							/>
						</motion.div>
						<div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
							<div className="px-6 py-12 md:px-12">
								<h2 className="text-4xl sm:text-6xl font-bold font-marisa mb-4">
									Découvre MakeUp Ton Business'
								</h2>
								<motion.p
									variants={fadeInUp}
									className="uppercase text-red-600 font-bold mb-6 flex items-center"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 384 512"
										className="w-4 h-4 mr-2"
									>
										<path
											fill="currentColor"
											d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"
										/>
									</svg>
									Hot news
								</motion.p>
								<motion.p variants={fadeInLeft} className="text-gray-500 mb-6">
									Envie de transformer ta passion pour le maquillage en une
									activité rentable ? Alors tu es au bon endroit. Tu peux toi
									aussi devenir maquilleuse, atteindre tes objectifs grâce à une
									stratégie solide.
								</motion.p>
								<motion.p variants={fadeInLeft} className="text-gray-500 mb-6">
									Il est temps de te lancer et accroître ta visibilité ainsi que
									ton chiffre d'affaire !
								</motion.p>
								<motion.p variants={fadeInLeft} className="text-gray-500 mb-6">
									Apprends dès aujourd’hui à mettre ta passion au service de ton
									business et de ta vie,
								</motion.p>
								<motion.p variants={fadeInLeft} className="text-gray-500">
									La formation Makeup Ton Business, disponible prochainement.
								</motion.p>
								<motion.div
									variants={fadeInLeft}
									className="flex justify-center py-8"
								>
									<Link to="/business">
										<div
											type="button"
											className="inline-block px-6 py-2.5 justify-center bg-moutarde text-white font-medium text-xs leading-tight uppercase rounded  hover:transition ease-in-out delay-150 hover:scale-110 hover:shadow-lg"
											data-mdb-ripple="true"
											data-ripple-color="primary"
										>
											En savoir plus
										</div>
									</Link>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</motion.div>
	);
};

export default Makeuptonbusiness;

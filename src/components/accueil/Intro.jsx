import React, { useRef } from "react";
import { Link } from "react-router-dom";

// import motion
import { motion } from "framer-motion";
// import variants
import {
	// fadeInLeft,
	fadeInDown,
	fadeInRight,
	staggerTextContainer,
} from "../../variants";

import hero1 from "../../images/hero1.jpeg";
import logo1 from "../../images/LOGO_1-BLANC.png";
import lisa from "../../images/lisa.jpeg";
import marque44 from "../../images/marque44.png";

const Intro = () => {
	// const hero1 =
	// 	"https://drive.google.com/uc?export=view&id=1DNpSiy2vgCB_qs-c0Q9i0XCvnlo0IXRT";
	// const logo1 =
	// 	"https://drive.google.com/uc?export=view&id=1Ot8m-bHPLeqRiqgTddn24NVB_i9WskZX";
	// const lisa =
	// 	"https://drive.google.com/uc?export=view&id=11VYfRMaDzKDDQjMyoq2oHNjCsN7e8ycm";
	// const marque44 =
	// 	"https://drive.google.com/uc?export=view&id=1_8Ikyfv7-QDtmgSI5PscLnmQLJH9A6bg";

	const ref = useRef(null);

	const handleClick = () => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<section className="mb-24 overflow-hidden">
				<div className="relative h-[670px] overflow-hidden bg-no-repeat bg-cover bg-center">
					<img
						src={hero1}
						alt="Magnetic MakeUp"
						className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover overflow-hidden bg-fixed"
					/>
					<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-slate-900/50">
						<div className="flex justify-center items-center h-full">
							<div className=" text-center text-white px-12 md:px-24">
								<img
									src={logo1}
									alt="Beauté Entre Nous"
									className="w-[700px] object-cover"
								/>
								<div className="mt-12">
									<div
										to="/contact"
										className="inline-block px-7 py-3 mr-1.5 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
										data-mdb-ripple="true"
										data-mdb-ripple-color="light"
										role="button"
										onClick={handleClick}
									>
										Commencer
									</div>
									<Link
										to="/contact"
										className="inline-block px-7 py-3 border-2 border-transparent bg-transparent text-white font-medium text-sm leading-snug uppercase rounded-full focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
										data-mdb-ripple="true"
										data-mdb-ripple-color="light"
										href="#!"
										role="button"
									>
										En savoir plus
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<motion.div
				className="relative container mt-12 px-6 mx-auto"
				ref={ref}
				variants={staggerTextContainer}
				initial="initial"
				whileInView={"animate"}
				viewport={{ once: true, amount: 0.3 }}
			>
				<section className="mb-32 text-gray-800">
					<h1 className="font-modernline text-center pb-28 font-bold text-4xl sm:text-6xl capitalize">
						Ravie de te rencontrer !
					</h1>
					<div className="flex flex-wrap items-center mb-12">
						<div
							variants={fadeInDown}
							className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 lg:pr-6 mb-6 lg:mb-0"
						>
							<motion.div
								variants={fadeInRight}
								className="relative overflow-hidden bg-no-repeat bg-cover -rotate-2 ripple shadow-lg rounded-lg bg-center"
								data-mdb-ripple="true"
								data-mdb-ripple-color="light"
							>
								<img
									src={lisa}
									className="w-full object-cover"
									alt="Lisa Gonzalvo"
								/>
								<a href="#!">
									<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
								</a>
							</motion.div>
						</div>

						<motion.div
							className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6"
							variants={staggerTextContainer}
							initial="initial"
							whileInView={"animate"}
							viewport={{ once: true, amount: 0.3 }}
						>
							<motion.p
								variants={fadeInRight}
								className="text-gray-500 text-lg tracking-wide md:tracking-normal leading-loose mt-12 mb-6"
							>
								"Bonjour à toi ! Je suis Lisa, la fondatrice de Beauté Entre
								Nous, ta formatrice privée !
							</motion.p>
							<motion.p
								variants={fadeInRight}
								className="text-gray-500 text-lg tracking-wide md:tracking-normal leading-loose mb-6"
							>
								Ma passion dans la vie, c'est le maquillage, mais plus que tout
								c'est de t'accompagner vers un succès responsable, en alliant
								éthique & tendance.
							</motion.p>
							<motion.p
								variants={fadeInRight}
								className="text-gray-500 text-lg tracking-wide md:tracking-normal leading-loose mb-6"
							>
								Pas de temps à perdre, je te transmets les clés techniques et
								stratégiques pour que ta passion soit au service de ta vie.
							</motion.p>
							<motion.p
								variants={fadeInRight}
								className="text-gray-500 text-lg tracking-wide md:tracking-normal leading-loose mb-6"
							>
								Si j'ai réussi, tu peux le faire aussi ! Depuis 2018, j'ai formé
								plus de 3600 personnes en école et en particulier. J'aime plus
								que tout vous voir vous épanouir et vous aider à décoller vos
								business !"
							</motion.p>
							<motion.div
								transition={{
									// x: { duration: 1, yoyo: Infinity, ease: "easeInOut" },
									y: { duration: 2, yoyo: Infinity, ease: "easeInOut" },
								}}
								// animate={{ y: ["0px", "-20px"], x: ["-20px", "20px"] }}
								animate={{ y: ["0px", "-20px"] }}
								className="my-12  flex items-center justify-center"
							>
								<img
									className="h-[210px]"
									src={marque44}
									alt="beauté entre nous"
								/>
							</motion.div>
						</motion.div>
					</div>
				</section>
			</motion.div>
		</>
	);
};

export default Intro;

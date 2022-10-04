import React, { useRef } from "react";

// import motion
import { motion } from "framer-motion";
// import variants
import { fadeInRight, fadeInLeft, staggerTextContainer } from "../variants";

import { Link } from "react-router-dom";

//import images
import photo2 from "../images/photo2.jpeg";
import photo3 from "../images/photo3.jpeg";
import photo4 from "../images/texture.jpeg";
import photo8 from "../images/photo8.jpeg";
import logoSecondaire20 from "../images/logoSecondaire20.png";
import marque16 from "../images/marque16.png";
import marque34 from "../images/marque34.png";

const Formations = () => {
	// const photo2 =
	// 	"https://drive.google.com/uc?export=view&id=1bqBAsSPyobkPNTAy3pif8156eb7cTbsm";
	// const photo3 =
	// 	"https://drive.google.com/uc?export=view&id=1lTfWd1FW5u8nacg65ABm8U4qMNf52ko2";
	// const photo4 =
	// 	"https://drive.google.com/uc?export=view&id=1iLMaElPJzY85icUkLKYiaqNB80DwfN0B";
	// const photo8 =
	// 	"https://drive.google.com/uc?export=view&id=1-HfAupB7rC3py0mrsMUtt0ZYchdQWz0c";

	// const logoSecondaire20 =
	// 	"https://drive.google.com/uc?export=view&id=1iEnmglu-kCYTb_Dz9S-5Y7Mi4waL1Xmy";
	// const marque16 =
	// 	"https://drive.google.com/uc?export=view&id=1jxQBFxVfYzARnCFcnliYXlf9_PxBEi-e";
	// const marque34 =
	// 	"https://drive.google.com/uc?export=view&id=1IbyS3l1HTLw4gKX58Rr17KHz9fy8Hvvr";

	const ref = useRef(null);
	const handleClick = () => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<section className="mb-40 overflow-hidden">
				<div className="relative h-[670px] overflow-hidden bg-no-repeat bg-cover bg-center">
					<img
						src={photo4}
						alt="formation"
						className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover overflow-hidden bg-fixed"
					/>
					<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-slate-900/50">
						<div className="flex justify-center items-center h-full">
							<div className="text-center text-white px-6 md:px-12">
								<h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
									Une formation
									<br />
									pour tous
								</h1>
								<div
									// to="/contact"
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
									role="button"
								>
									En savoir plus
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="container mt-24 px-6 mx-auto" ref={ref}>
				<section className="mb-32 text-gray-800">
					<div className="flex flex-wrap items-center mb-12">
						<motion.div
							variants={staggerTextContainer}
							initial="initial"
							whileInView={"animate"}
							viewport={{ once: true, amount: 0.3 }}
							className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0"
						>
							<motion.div
								variants={fadeInRight}
								className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg bg-center"
								data-mdb-ripple="true"
								data-mdb-ripple-color="light"
							>
								<img
									src={photo2}
									className="w-full object-cover"
									alt="Maquillage tendance et responsable"
								/>
								<a href="#!">
									<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
								</a>
							</motion.div>
						</motion.div>

						<div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
							<h3 className="text-4xl font-modernline font-bold my-12">
								Révélation Make Up
							</h3>
							<motion.div
								variants={staggerTextContainer}
								initial="initial"
								whileInView={"animate"}
								viewport={{ once: true, amount: 0.3 }}
							>
								<motion.p variants={fadeInRight} className="text-gray-500 mb-6">
									3 étapes pour apprendre à sublimer les femmes avec éthique.
								</motion.p>
								<motion.p variants={fadeInRight} className="text-gray-500">
									La formation pour les passionné(e)s de maquillage et sensibles
									à une beauté plus saine, qui souhaitent connaitre toutes les
									secrets de make up artist !
								</motion.p>
								<motion.p variants={fadeInRight} className="text-gray-500">
									La technique de maquillage est la première étape pour des
									clientes satisfaites qui te recommandent.
								</motion.p>
								<motion.ul variants={fadeInRight}>
									<ol className="list-inside my-4">
										<li className="mb-4 flex items-center">
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="check"
												className="text-green-600 mr-2"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												width="16px"
												height="16px"
											>
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											Formation de 21 heures
										</li>
										<li className="mb-4 flex items-center">
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="check"
												className="text-green-600 mr-2"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												width="16px"
												height="16px"
											>
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											Répartie sur 3 jours
										</li>
										<li className="mb-4 flex items-center">
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="check"
												className="text-green-600 mr-2"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												width="16px"
												height="16px"
											>
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											7 heures de formation en présentiel
										</li>
									</ol>
								</motion.ul>
								<motion.div variants={fadeInRight} className="mt-5">
									<Link
										to="/formations/revelation"
										className="inline-block px-7 py-3 mr-1.5 border-2 border-moutarde text-moutarde font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
										data-mdb-ripple="true"
										data-mdb-ripple-color="light"
										role="button"
									>
										En savoir plus
									</Link>
									<Link
										to="/contact"
										className="inline-block px-7 py-3 border-2 border-transparent bg-transparent text-moutarde font-medium text-sm leading-snug uppercase rounded-full focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
									>
										Brochure
									</Link>
								</motion.div>
							</motion.div>
						</div>
					</div>

					<motion.div
						transition={{
							// x: { duration: 1, yoyo: Infinity, ease: "easeInOut" },
							y: { duration: 2, yoyo: Infinity, ease: "easeInOut" },
						}}
						// animate={{ y: ["0px", "-20px"], x: ["-20px", "20px"] }}
						animate={{ y: ["0px", "-20px"] }}
						className="my-24  flex items-center justify-center"
					>
						<img
							className="h-[210px]"
							src={logoSecondaire20}
							alt="beauté entre nous"
						/>
					</motion.div>

					<div className="flex flex-wrap items-center lg:flex-row-reverse mb-12">
						<motion.div
							variants={staggerTextContainer}
							initial="initial"
							whileInView={"animate"}
							viewport={{ once: true, amount: 0.3 }}
							className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0"
						>
							<motion.div
								variants={fadeInLeft}
								className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg bg-center"
								data-mdb-ripple="true"
								data-mdb-ripple-color="light"
							>
								<img
									src={photo3}
									className="w-full object-cover"
									alt="Entreprendre son succès"
								/>
								<a href="#!">
									<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
								</a>
							</motion.div>
						</motion.div>

						<div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
							<h3 className="text-4xl font-modernline font-bold my-12">
								Make Up Boost
							</h3>
							<motion.div
								variants={staggerTextContainer}
								initial="initial"
								whileInView={"animate"}
								viewport={{ once: true, amount: 0.3 }}
							>
								<motion.p variants={fadeInLeft} className="text-gray-500 mb-6">
									Devenir l'experte d'une technique de maquillage en 1 journée.
								</motion.p>
								<motion.p variants={fadeInLeft} className="text-gray-500">
									Tu souhaites apprendre une technique de maquillage en
									particulier et compléter ton expertise, alors bienvenue à toi.
								</motion.p>
								<motion.p variants={fadeInLeft} className="text-gray-500">
									À toi de choisir ton combo gagnant et créer ton maquillage
									idéal à reproduire sur tes clientes !
								</motion.p>
								<motion.ul variants={fadeInLeft}>
									<ol className="list-inside my-4">
										<li className="mb-4 flex items-center">
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="check"
												className="text-green-600 mr-2"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												width="16px"
												height="16px"
											>
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											Une journée pour adopter la technique de ton choix
										</li>
										<li className="mb-4 flex items-center">
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="check"
												className="text-green-600 mr-2"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												width="16px"
												height="16px"
											>
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											Programme sur mesure
										</li>
										<li className="mb-4 flex items-center">
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="check"
												className="text-green-600 mr-2"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												width="16px"
												height="16px"
											>
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											Formation disponible à Paris et en Occitanie
										</li>
									</ol>
								</motion.ul>
								<motion.div variants={fadeInLeft} className="mt-5">
									<Link
										to="/formations/boost"
										className="inline-block px-7 py-3 mr-1.5 border-2 border-camel text-camel font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
										data-mdb-ripple="true"
										data-mdb-ripple-color="light"
										role="button"
									>
										En savoir plus
									</Link>
									<Link
										to="/contact"
										className="inline-block px-7 py-3 border-2 border-transparent bg-transparent text-camel font-medium text-sm leading-snug uppercase rounded-full focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
									>
										Brochure
									</Link>
								</motion.div>
							</motion.div>
						</div>
					</div>

					<motion.div
						transition={{
							// x: { duration: 1, yoyo: Infinity, ease: "easeInOut" },
							y: { duration: 2, yoyo: Infinity, ease: "easeInOut" },
						}}
						// animate={{ y: ["0px", "-20px"], x: ["-20px", "20px"] }}
						animate={{ y: ["0px", "-20px"] }}
						className="my-24  flex items-center justify-center"
					>
						<img className="h-[70px]" src={marque16} alt="beauté entre nous" />
					</motion.div>

					<div className="flex flex-wrap items-center mb-12">
						<motion.div
							variants={staggerTextContainer}
							initial="initial"
							whileInView={"animate"}
							viewport={{ once: true, amount: 0.3 }}
							className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0"
						>
							<div
								className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg bg-center"
								data-mdb-ripple="true"
								data-mdb-ripple-color="light"
							>
								<img
									src={photo8}
									className="w-full object-cover"
									alt="Shine Make Up"
								/>
								<a href="#!">
									<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
								</a>
							</div>
						</motion.div>

						<div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
							<h3 className="text-4xl font-modernline font-bold my-12">
								Shine Make Up
							</h3>
							<motion.div
								variants={staggerTextContainer}
								initial="initial"
								whileInView={"animate"}
								viewport={{ once: true, amount: 0.3 }}
							>
								<motion.p variants={fadeInRight} className="text-gray-500 mb-6">
									Cours d'auto-maquillage pour apprendre les techniques qui te
									ressemblent.
								</motion.p>
								<motion.p variants={fadeInRight} className="text-gray-500">
									Tu souhaites apprendre à te maquiller avec des techniques
									accessibles pour le quotidien ou pour un évènement en
									particulier !
								</motion.p>
								<motion.p variants={fadeInRight} className="text-gray-500">
									Beauté Entre Nous te guide en alliant tes envies et tes
									besoins, avec un conseil précis de ta morphologie à ta
									colorimétrie en passant par une technique personnalisée.
								</motion.p>
								<motion.ul variants={fadeInRight}>
									<ol className="list-inside my-4">
										<li className="mb-4 flex items-center">
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="check"
												className="text-green-600 mr-2"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												width="16px"
												height="16px"
											>
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											2 heures pour devenir une artiste reponsable
										</li>
										<li className="mb-4 flex items-center">
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="check"
												className="text-green-600 mr-2"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												width="16px"
												height="16px"
											>
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											Formation personnalisée à Paris ou en Occitanie
										</li>
									</ol>
								</motion.ul>
								<motion.div variants={fadeInRight} className="mt-5">
									<Link
										to="/formations/shine"
										className="inline-block px-7 py-3 mr-1.5 border-2 border-moutarde text-moutarde font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
										data-mdb-ripple="true"
										data-mdb-ripple-color="light"
										role="button"
									>
										En savoir plus
									</Link>
									<Link
										to="/contact"
										className="inline-block px-7 py-3 border-2 border-transparent bg-transparent text-moutarde font-medium text-sm leading-snug uppercase rounded-full focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
									>
										Brochure
									</Link>
								</motion.div>
							</motion.div>
						</div>
					</div>

					<motion.div
						transition={{
							// x: { duration: 1, yoyo: Infinity, ease: "easeInOut" },
							y: { duration: 2, yoyo: Infinity, ease: "easeInOut" },
						}}
						// animate={{ y: ["0px", "-20px"], x: ["-20px", "20px"] }}
						animate={{ y: ["-20px", "0px"] }}
						className="mt-24  flex items-center justify-center"
					>
						<img className="h-[120px]" src={marque34} alt="beauté entre nous" />
					</motion.div>
				</section>
			</div>

			<div className="container my-24 px-6 mx-auto">
				<section className="mb-32 text-gray-800 text-center lg:text-left">
					<div className="flex flex-wrap justify-center">
						<div className="grow-0 shrink-0 basis-auto w-full lg:w-10/12 px-3">
							<div className="grid lg:grid-cols-2 gap-x-6 items-center">
								<div className="mb-10 lg:mb-0">
									<h2 className="text-3xl font-bold">
										Envie de conseils d'experts,{" "}
										<u className="text-brique">travaillons ensemble !</u>
									</h2>
								</div>

								<div className="mb-6 md:mb-0">
									<div className="md:flex items-center justify-center flex-row">
										{/* <input
											type="text"
											className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											placeholder="Entrer votre email"
										/> */}

										<Link
											to="/contact"
											className="inline-block px-7 py-3 mr-1.5 border-2 border-pourpre text-pourpre font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
											data-mdb-ripple="true"
											data-mdb-ripple-color="light"
											href="#!"
											role="button"
										>
											Prendre contact
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</motion.div>
	);
};

export default Formations;

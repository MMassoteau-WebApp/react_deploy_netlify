import React, { useRef } from "react";
import { Link } from "react-router-dom";

// import motion
import { motion } from "framer-motion";
// import variants
import { fadeInRight, fadeInLeft, staggerTextContainer } from "../variants";

const Magnetic = () => {
	const magneticMakeUp =
		"https://drive.google.com/uc?export=view&id=1b9FmOkDJjXWRXIgNHZYQKCF5HSsHA4QM";
	const model32 =
		"https://drive.google.com/uc?export=view&id=1DQStPvqneM7n-ZDQG21kIJleb1hxfL-u";
	const lisa4 =
		"https://drive.google.com/uc?export=view&id=17oqc6Zy5c-giirDNv93ydakc_rWrEPN4";
	const lisa10 =
		"https://drive.google.com/uc?export=view&id=1fm5H-gT7Uc7JeJAitBRKdYjQGYzWOYuz";

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
			<section className="mb-32 overflow-hidden">
				<div className="relative h-[670px] overflow-hidden bg-no-repeat bg-cover bg-center">
					<img
						src={magneticMakeUp}
						alt="Magnetic MakeUp"
						className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover overflow-hidden bg-fixed"
					/>
					<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-slate-900/50">
						<div className="flex justify-center items-center h-full">
							<div className=" text-center text-white px-12 md:px-24">
								<h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
									Magnetic MakeUp
								</h1>
								<p className="font-bold text-xl">
									35 heures pour maitriser ta technique & vivre de ton activité
								</p>
								<div className="mt-12">
									<div
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

			<div className="container mt-12 px-6 mx-auto" ref={ref}>
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
									src={lisa10}
									className="w-full object-cover"
									alt="Maquillage tendance et responsable"
								/>
								<a href="#!">
									<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
								</a>
							</motion.div>
						</motion.div>

						<motion.div
							variants={staggerTextContainer}
							initial="initial"
							whileInView={"animate"}
							viewport={{ once: true, amount: 0.3 }}
							className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6"
						>
							<h3 className="text-4xl font-modernline font-bold my-12">
								Pourquoi choisir cette formation ?
							</h3>
							<motion.p variants={fadeInRight} className="text-gray-500 mb-6">
								Tu souhaites que le maquillage soit plus qu'une passion et
								devienne ton activité au quotidien.
							</motion.p>
							<motion.p variants={fadeInRight} className="text-gray-500">
								Tu as déjà les techniques de base du maquillage & tu as besoin
								d'approfondir sur des techniques tendances, avancées et
								spécifiques afin de maitriser à la perfection l'art du
								maquillage.
							</motion.p>
							<motion.p variants={fadeInRight} className="text-gray-500">
								En seulement 5 jours modulables à souhait, adopte ces nouvelles
								compétences, et optimise une stratégie en 1:1 avec Lisa afin
								d'attirer (vraiment) des clientes au quotidien, en respectant
								tes valeurs éthiques.
							</motion.p>
							<motion.p variants={fadeInRight} className="text-gray-500">
								La formation est disponible sur Paris & en Occitanie. Deux
								options de formation sont disponibles.
							</motion.p>
							<motion.ul variants={fadeInRight}>
								<ol className="list-inside my-12">
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
										Durée 35 heures
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
										4 journées de 7 heures de formation maquillage (à la suite
										ou espacées)
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
										8 heures stratégiques sur 8 semaines en visio sur zoom
									</li>
								</ol>
							</motion.ul>
							<motion.div variants={fadeInRight} className="mt-5">
								<Link
									to="/contact"
									className="inline-block px-7 py-3 mr-1.5 border-2 border-moutarde text-moutarde font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
									data-mdb-ripple="true"
									data-mdb-ripple-color="light"
									role="button"
								>
									En savoir plus
								</Link>
							</motion.div>
						</motion.div>
					</div>
				</section>
			</div>

			<div className="container mt-12 px-6 mx-auto">
				<section className="mb-24 text-gray-800">
					<h1 className="font-modernline text-center py-12 text-6xl capitalize">
						Ravie de te rencontrer !
					</h1>
					<div className="flex flex-wrap items-center mb-12">
						<motion.div
							variants={staggerTextContainer}
							initial="initial"
							whileInView={"animate"}
							viewport={{ once: true, amount: 0.3 }}
							className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 lg:pr-6 mb-6 lg:mb-0"
						>
							<motion.div
								variants={fadeInRight}
								className="relative overflow-hidden bg-no-repeat bg-cover -rotate-2 ripple shadow-lg rounded-lg bg-center"
								data-mdb-ripple="true"
								data-mdb-ripple-color="light"
							>
								<img
									src={model32}
									className="w-full object-cover"
									alt="Lisa Gonzalvo"
								/>
								<a href="#!">
									<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
								</a>
							</motion.div>
						</motion.div>

						<motion.div
							variants={staggerTextContainer}
							initial="initial"
							whileInView={"animate"}
							viewport={{ once: true, amount: 0.3 }}
							className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6"
						>
							<h3 className="text-4xl font-marisa font-bold my-12">
								Es-tu prete À révéler ta passion & briller ?
							</h3>
							<motion.p
								variants={fadeInRight}
								className="text-gray-500 text-lg tracking-wide md:tracking-normal leading-loose mb-6"
							>
								"Une si belle passion se doit d'être au service de ta propre
								vie, je forme les futures professionnelles de la beauté à
								transformer leur passion en une activité rentable et alignée à
								des valeurs responsables."
							</motion.p>
						</motion.div>
					</div>
				</section>
			</div>

			<div className="container my-12 px-6 mx-auto">
				<section className="mb-24 text-gray-800">
					<div className="flex flex-wrap items-center">
						<motion.div
							variants={staggerTextContainer}
							initial="initial"
							whileInView={"animate"}
							viewport={{ once: true, amount: 0.3 }}
							className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-6 md:mb-0 px-3"
						>
							<motion.h2
								variants={fadeInLeft}
								className="text-3xl font-bold mb-6"
							>
								Tu es dans <u className="text-vieuxrose">cette situation...</u>
							</motion.h2>
						</motion.div>

						<div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 mb-6 mb-md-0 px-3">
							<div className="flex flex-wrap">
								<div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
									<motion.div
										variants={staggerTextContainer}
										initial="initial"
										whileInView={"animate"}
										viewport={{ once: true, amount: 0.3 }}
										className="flex"
									>
										<motion.div variants={fadeInLeft} className="shrink-0 mt-1">
											<svg
												className="w-4 h-4 text-aubergine"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
											>
												<path
													fill="currentColor"
													d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
												></path>
											</svg>
										</motion.div>
										<motion.div
											variants={staggerTextContainer}
											initial="initial"
											whileInView={"animate"}
											viewport={{ once: true, amount: 0.3 }}
											className="grow mx-4"
										>
											<motion.p variants={fadeInLeft} className="text-gray-500">
												Je n'ose pas vraiment me lancer par peur d'échouer et ne
												pas gagner assez d'argent pour en vivre.
											</motion.p>
										</motion.div>
									</motion.div>
								</div>

								<div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
									<motion.div
										variants={staggerTextContainer}
										initial="initial"
										whileInView={"animate"}
										viewport={{ once: true, amount: 0.3 }}
										className="flex"
									>
										<motion.div variants={fadeInLeft} className="shrink-0 mt-1">
											<svg
												className="w-4 h-4 text-pourpre"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
											>
												<path
													fill="currentColor"
													d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
												></path>
											</svg>
										</motion.div>
										<motion.div
											variants={staggerTextContainer}
											initial="initial"
											whileInView={"animate"}
											viewport={{ once: true, amount: 0.3 }}
											className="grow mx-4"
										>
											<motion.p variants={fadeInLeft} className="text-gray-500">
												Je souhaite proposer plein de prestations et j'accepte
												tous les projets en espérant attirer plus de clientes.
											</motion.p>
										</motion.div>
									</motion.div>
								</div>

								<div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
									<motion.div
										variants={staggerTextContainer}
										initial="initial"
										whileInView={"animate"}
										viewport={{ once: true, amount: 0.3 }}
										className="flex"
									>
										<motion.div variants={fadeInLeft} className="shrink-0 mt-1">
											<svg
												className="w-4 h-4 text-brique"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
											>
												<path
													fill="currentColor"
													d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
												></path>
											</svg>
										</motion.div>
										<motion.div
											variants={staggerTextContainer}
											initial="initial"
											whileInView={"animate"}
											viewport={{ once: true, amount: 0.3 }}
											className="grow mx-4"
										>
											<motion.p variants={fadeInLeft} className="text-gray-500">
												Je me compare au niveau des autres maquilleuses et j'ai
												peur de ne pas avoir le niveau, donc je baisse mes prix.
											</motion.p>
										</motion.div>
									</motion.div>
								</div>

								<div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
									<motion.div
										variants={staggerTextContainer}
										initial="initial"
										whileInView={"animate"}
										viewport={{ once: true, amount: 0.3 }}
										className="flex"
									>
										<motion.div variants={fadeInLeft} className="shrink-0 mt-1">
											<svg
												className="w-4 h-4 text-camel"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
											>
												<path
													fill="currentColor"
													d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
												></path>
											</svg>
										</motion.div>
										<motion.div
											variants={staggerTextContainer}
											initial="initial"
											whileInView={"animate"}
											viewport={{ once: true, amount: 0.3 }}
											className="grow mx-4"
										>
											<motion.p variants={fadeInLeft} className="text-gray-500">
												J'ai terminé mes études et je ne sais pas comment me
												démarquer et faire face à la concurrence.
											</motion.p>
										</motion.div>
									</motion.div>
								</div>

								<div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
									<motion.div
										variants={staggerTextContainer}
										initial="initial"
										whileInView={"animate"}
										viewport={{ once: true, amount: 0.3 }}
										className="flex"
									>
										<motion.div variants={fadeInLeft} className="shrink-0 mt-1">
											<svg
												className="w-4 h-4 text-vieuxrose"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
											>
												<path
													fill="currentColor"
													d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
												></path>
											</svg>
										</motion.div>
										<motion.div
											variants={staggerTextContainer}
											initial="initial"
											whileInView={"animate"}
											viewport={{ once: true, amount: 0.3 }}
											className="grow mx-4"
										>
											<motion.p variants={fadeInLeft} className="text-gray-500">
												Je suis passionnée de maquillage mais j'ai l'impression
												de ne pas pouvoir favoriser la composition des produits
												pour avoir un bon résultat.
											</motion.p>
										</motion.div>
									</motion.div>
								</div>

								<div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
									<motion.div
										variants={staggerTextContainer}
										initial="initial"
										whileInView={"animate"}
										viewport={{ once: true, amount: 0.3 }}
										className="flex"
									>
										<motion.div variants={fadeInLeft} className="shrink-0 mt-1">
											<svg
												className="w-4 h-4 text-moutarde"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
											>
												<path
													fill="currentColor"
													d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
												></path>
											</svg>
										</motion.div>
										<motion.div
											variants={staggerTextContainer}
											initial="initial"
											whileInView={"animate"}
											viewport={{ once: true, amount: 0.3 }}
											className="grow mx-4"
										>
											<motion.p variants={fadeInLeft} className="text-gray-500">
												Ma plus grande peur est de devoir (re)devenir salarié et
												donner raison à mes proches qui pensent que c'est mal vu
												d'être auto-entrepreneur et trop risqué.
											</motion.p>
										</motion.div>
									</motion.div>
								</div>

								<div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
									<motion.div
										variants={staggerTextContainer}
										initial="initial"
										whileInView={"animate"}
										viewport={{ once: true, amount: 0.3 }}
										className="flex"
									>
										<motion.div variants={fadeInLeft} className="shrink-0 mt-1">
											<svg
												className="w-4 h-4 text-pourpre"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
											>
												<path
													fill="currentColor"
													d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
												></path>
											</svg>
										</motion.div>
										<motion.div
											variants={staggerTextContainer}
											initial="initial"
											whileInView={"animate"}
											viewport={{ once: true, amount: 0.3 }}
											className="grow mx-4"
										>
											<motion.p variants={fadeInLeft} className="text-gray-500">
												J'ai trop de pression avant de maquiller une cliente de
												peur de me rater.
											</motion.p>
										</motion.div>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="container my-12 px-6 mx-auto">
				<section className="mb-12 flex flex-col items-center text-gray-800">
					<h1 className="font-modernline text-center py-12 text-6xl capitalize">
						Mon intention
					</h1>
					<p className="text-center text-xl text-gray-500 tracking-wider md:tracking-wide mb-12	">
						Dévoiler la maquilleuse qui est en toi avec une technique
						irréprochable et une stratégie en béton pour entreprendre ton succès
						!
					</p>

					<ol className="border-l-2 border-pourpre">
						<li>
							<div className="md:flex flex-start">
								<div className="bg-pourpre w-6 h-6 flex items-center justify-center rounded-full -ml-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										className="text-white w-6 h-6"
										viewBox="0 0 16 16"
									>
										<path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
									</svg>
								</div>
								<div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
									<div className="flex justify-between mb-4">
										<a
											href="#!"
											className="font-gill text-pourpre text-center hover:text-pourpre focus:text-camel duration-300 transition ease-in-out text-sm"
										>
											<span className="text-2xl">Tendance et Maquillage</span>
										</a>
									</div>
									<p className="text-gray-700 mb-6">
										Découvre les dernières tendances maquillages et adopte les
										pour sublimer tes clientes au quotidien !
									</p>
									<button
										type="button"
										className="inline-block px-4 py-1.5 bg-brique text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-camel hover:shadow-lg focus:bg-camel focus:shadow-lg focus:outline-none focus:ring-0 active:bg-camel active:shadow-lg transition duration-150 ease-in-out"
										data-mdb-ripple="true"
									>
										En savoir plus
									</button>
								</div>
							</div>
						</li>
						<li>
							<div className="md:flex flex-start">
								<div className="bg-pourpre w-6 h-6 flex items-center justify-center rounded-full -ml-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										className="text-white w-6 h-6"
										viewBox="0 0 16 16"
									>
										<path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z" />
									</svg>
								</div>
								<div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
									<div className="flex justify-between mb-4">
										<a
											href="#!"
											className="font-gill text-pourpre text-center hover:text-pourpre focus:text-camel duration-300 transition ease-in-out text-sm"
										>
											<span className="text-2xl">Techniques Avancées</span>
										</a>
									</div>
									<p className="text-gray-700 mb-6">
										Du glamour, des paillettes (biodégradables), et de la
										passion ! À toi les maquillages de soirée qui vont faire
										briller les yeux de tes clientes !
									</p>
									<button
										type="button"
										className="inline-block px-4 py-1.5 bg-brique text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-camel hover:shadow-lg focus:bg-camel focus:shadow-lg focus:outline-none focus:ring-0 active:bg-camel active:shadow-lg transition duration-150 ease-in-out"
										data-mdb-ripple="true"
									>
										En savoir plus
									</button>
								</div>
							</div>
						</li>
						<li>
							<div className="md:flex flex-start">
								<div className="bg-pourpre w-6 h-6 flex items-center justify-center rounded-full -ml-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										className="text-white w-6 h-6"
										viewBox="0 0 16 16"
									>
										<path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z" />
										<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z" />
									</svg>
								</div>
								<div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
									<div className="flex justify-between mb-4">
										<a
											href="#!"
											className="font-gill text-pourpre text-center hover:text-pourpre focus:text-camel duration-300 transition ease-in-out text-sm"
										>
											<span className="text-2xl">Maquillage Mariée</span>
										</a>
									</div>
									<p className="text-gray-700 mb-6">
										La prestation la plus consommée des femmes, le cours
										d'automaquillage, apprend à partager tes techniques à tes
										clientes qui rêvent de devenir leur propre make up artist !
									</p>
									<button
										type="button"
										className="inline-block px-4 py-1.5 bg-brique text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-camel hover:shadow-lg focus:bg-camel focus:shadow-lg focus:outline-none focus:ring-0 active:bg-camel active:shadow-lg transition duration-150 ease-in-out"
										data-mdb-ripple="true"
									>
										En savoir plus
									</button>
								</div>
							</div>
						</li>

						<li>
							<div className="md:flex flex-start">
								<div className="bg-pourpre w-6 h-6 flex items-center justify-center rounded-full -ml-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										className="text-white w-6 h-6"
										viewBox="0 0 16 16"
									>
										<path d="M7.519 5.057c.22-.352.439-.703.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z" />
										<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z" />
									</svg>
								</div>
								<div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
									<div className="flex justify-between mb-4">
										<a
											href="#!"
											className="font-gill text-pourpre text-center hover:text-pourpre focus:text-camel duration-300 transition ease-in-out text-sm"
										>
											<span className="text-2xl">Maquillage Spécifique</span>
										</a>
									</div>
									<p className="text-gray-700 mb-6">
										Savoir s'adapter à tout type de peau est la base du
										maquillage, alors découvre tous les secrets de maquilleuse
										pour faire plaisir à toutes tes clientes.
									</p>
									<button
										type="button"
										className="inline-block px-4 py-1.5 bg-brique text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-camel hover:shadow-lg focus:bg-camel focus:shadow-lg focus:outline-none focus:ring-0 active:bg-camel active:shadow-lg transition duration-150 ease-in-out"
										data-mdb-ripple="true"
									>
										En savoir plus
									</button>
								</div>
							</div>
						</li>

						<li>
							<div className="md:flex flex-start">
								<div className="bg-pourpre w-6 h-6 flex items-center justify-center rounded-full -ml-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										className="text-white w-6 h-6"
										viewBox="0 0 16 16"
									>
										<path d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm15 0A8 8 0 1 0 0 8a8 8 0 0 0 16 0Zm-8.006 4.158c-1.57 0-2.654-.902-2.719-2.115h1.237c.14.72.832 1.031 1.529 1.031.791 0 1.57-.597 1.57-1.681 0-.967-.732-1.57-1.582-1.57-.767 0-1.242.45-1.435.808H5.445L5.791 4h4.705v1.103H6.875l-.193 2.343h.064c.17-.258.715-.68 1.611-.68 1.383 0 2.561.944 2.561 2.585 0 1.687-1.184 2.806-2.924 2.806Z" />
									</svg>
								</div>
								<div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
									<div className="flex justify-between mb-4">
										<a
											href="#!"
											className="font-gill text-pourpre text-center hover:text-pourpre focus:text-camel duration-300 transition ease-in-out text-sm"
										>
											<span className="text-2xl">Coaching Stratégique</span>
										</a>
									</div>
									<p className="text-gray-700 mb-6">
										8 semaines pour attirer tes premières clientes & faire
										décoller ton business. Je serai là pour t'accompagner dans
										ta prise de décision, et te guider dans le cheminement de la
										meilleure version de toi même. Ensemble, nous allons
										construire une stratégie solide et qui te ressemble. Je te
										partagerai toutes mes clés et toute ma bienveillance pour
										faire de toi une professionnelle unique & magnétique.
									</p>
									<button
										type="button"
										className="inline-block px-4 py-1.5 bg-brique text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-camel hover:shadow-lg focus:bg-camel focus:shadow-lg focus:outline-none focus:ring-0 active:bg-camel active:shadow-lg transition duration-150 ease-in-out"
										data-mdb-ripple="true"
									>
										En savoir plus
									</button>
								</div>
							</div>
						</li>
					</ol>
				</section>
			</div>

			<div className="container mt-12 px-6 mx-auto">
				<section className="mb-32 text-gray-800">
					<h1 className="font-modernline text-center py-28 text-6xl capitalize">
						Coaching Stratégique
					</h1>
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
									src={lisa4}
									className="w-full object-cover"
									alt="Maquillage tendance et responsable"
								/>
								<a href="#!">
									<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
								</a>
							</motion.div>
						</motion.div>

						<div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
							<motion.div
								variants={staggerTextContainer}
								initial="initial"
								whileInView={"animate"}
								viewport={{ once: true, amount: 0.3 }}
							>
								<motion.h3 className="text-4xl font-modernline font-bold my-12">
									Construire les fondations
								</motion.h3>
								<motion.p variants={fadeInRight} className="text-gray-500 mb-6">
									Décrypter et poser les bases de ton activité afin de partir
									sur des fondations solides et alignées à tes valeurs.
								</motion.p>
							</motion.div>

							<motion.div
								variants={staggerTextContainer}
								initial="initial"
								whileInView={"animate"}
								viewport={{ once: true, amount: 0.3 }}
							>
								<motion.h3 className="text-4xl font-modernline font-bold my-12">
									Attirer les clients
								</motion.h3>
								<motion.p variants={fadeInRight} className="text-gray-500 mb-6">
									Attirer tes client(e)s grâce à une promesse forte et une
									promotion qui te correspond
								</motion.p>
							</motion.div>

							<motion.div
								variants={staggerTextContainer}
								initial="initial"
								whileInView={"animate"}
								viewport={{ once: true, amount: 0.3 }}
							>
								<motion.h3 className="text-4xl font-modernline font-bold my-12">
									Booster ton mindset
								</motion.h3>
								<motion.p variants={fadeInRight} className="text-gray-500 mb-6">
									Incarner ta passion avec confiance et déconstruire les
									croyances négatives pour un état d'esprit de girl boss.
								</motion.p>
							</motion.div>

							<motion.div
								variants={staggerTextContainer}
								initial="initial"
								whileInView={"animate"}
								viewport={{ once: true, amount: 0.3 }}
							>
								<motion.h3 className="text-4xl font-modernline font-bold my-12">
									Déterminer une offre claire
								</motion.h3>
								<motion.p variants={fadeInRight} className="text-gray-500 mb-6">
									Proposer une offre cohérente qui répond véritablement aux
									besoins de ta clientèle.
								</motion.p>
							</motion.div>

							<motion.div
								variants={staggerTextContainer}
								initial="initial"
								whileInView={"animate"}
								viewport={{ once: true, amount: 0.3 }}
							>
								<motion.h3 className="text-4xl font-modernline font-bold my-12">
									Poser tes objectifs
								</motion.h3>
								<motion.p variants={fadeInRight} className="text-gray-500 mb-6">
									Formuler des objectifs atténiables et challengeant en
									direction de ton propre succès.
								</motion.p>
							</motion.div>

							<motion.div
								variants={staggerTextContainer}
								initial="initial"
								whileInView={"animate"}
								viewport={{ once: true, amount: 0.3 }}
							>
								<motion.h3 className="text-4xl font-modernline font-bold my-12">
									Vendre ton activité
								</motion.h3>
								<motion.p variants={fadeInRight} className="text-gray-500 mb-6">
									Vendre ton activité grâce à ton expertise et ton histoire.
								</motion.p>
							</motion.div>
						</div>
					</div>
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
										<u className="text-vieuxrose">travaillons ensemble !</u>
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

export default Magnetic;

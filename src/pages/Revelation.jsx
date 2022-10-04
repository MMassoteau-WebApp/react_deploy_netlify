import React, { useRef } from "react";
import { Link } from "react-router-dom";

// import motion
import { motion } from "framer-motion";
// import variants
import { fadeInRight, fadeInLeft, staggerTextContainer } from "../variants";

import revelationHero from "../images/revelationHero.jpeg";
import model28 from "../images/model28.jpeg";
import model31 from "../images/model31.jpeg";
import photo7 from "../images/photo7.jpeg";
import icone11 from "../images/icone11.png";
import icone7 from "../images/icone7.png";
import icone2 from "../images/icone2.png";
import icone16 from "../images/icone16.png";

const Revelation = () => {
	// const revelationHero =
	// 	"https://drive.google.com/uc?export=view&id=1p54aqzSBzCr1A768vlOBm5oa9ti3ASkl";
	// const model28 =
	// 	"https://drive.google.com/uc?export=view&id=1meEWjSUDH62w8ZSvVurT6fs_FF_vh8tQ";
	// const model31 =
	// 	"https://drive.google.com/uc?export=view&id=19Es1SENwuoa4iq4ltFmWdqht-RAedkQk";
	// const photo7 =
	// 	"https://drive.google.com/uc?export=view&id=1eRvKu_L2xHXszH_5zy0I391JDkq59FEr";
	// const icone11 =
	// 	"https://drive.google.com/uc?export=view&id=1Fz2Ze7LUdfMbSJU4g4CgFbz97iwJdh6Y";
	// const icone7 =
	// 	"https://drive.google.com/uc?export=view&id=11SBfl-EoTRYROiedU7yYEp4JyyVnvKP0";
	// const icone2 =
	// 	"https://drive.google.com/uc?export=view&id=1YczfB7pb18j2nuOCV5OkUBuqjpH80_90";
	// const icone16 =
	// 	"https://drive.google.com/uc?export=view&id=1gtjm_Ls-v5NfMNGz0ckrrln_zQeDAoWC";
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
						src={revelationHero}
						alt="Makeup ton business"
						className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover overflow-hidden bg-fixed"
					/>
					<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-slate-900/50">
						<div className="flex justify-center items-center h-full">
							<div className="text-center text-white px-6 md:px-12">
								<h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
									Révélation Make Up
								</h1>
								<p className="text-center text-xl text-white tracking-wider px-6 md:px-12 pb-12">
									3 étapes pour apprendre à sublimer les femmes avec éthique.
								</p>
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
									role="button"
								>
									En savoir plus
								</Link>
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
									src={model31}
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
							<motion.h3
								variants={fadeInRight}
								className="text-4xl font-modernline font-bold my-12"
							>
								Pourquoi choisir cette formation ?
							</motion.h3>
							<motion.p variants={fadeInRight} className="text-gray-500 mb-6">
								La formation pour les passionnées de maquillage et sensible à
								une beauté plus saine, qui souhaitent connaitre toutes les
								secrets de make up artist !
							</motion.p>
							<motion.p variants={fadeInRight} className="text-gray-500">
								La technique de maquillage est la première étape pour des
								clientes satisfaites qui te recommandent.
							</motion.p>
							<motion.p variants={fadeInRight} className="text-gray-500">
								En seulement 3 journées intensives modulables à souhait, deviens
								la reine du maquillage tendance et responsable !
							</motion.p>
							<motion.p variants={fadeInRight} className="text-gray-500">
								La formation est disponible à Paris et en région Occitanie.
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
										Durée 21 heures
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
										3 journées de 7 heures de formation maquillage en présentiel
										(à la suite ou espacées)
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
				<section className="mb-32 text-gray-800">
					<h1 className="font-modernline text-center py-28 text-6xl capitalize">
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
								variants={fadeInLeft}
								className="relative overflow-hidden bg-no-repeat bg-cover -rotate-2 ripple shadow-lg rounded-lg bg-center"
								data-mdb-ripple="true"
								data-mdb-ripple-color="light"
							>
								<img
									src={model28}
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
								Es-tu prête À révéler ta passion?
							</h3>
							<motion.p
								variants={fadeInLeft}
								className="text-gray-500 text-lg tracking-wide md:tracking-normal leading-loose mb-6"
							>
								"Ta passion peut te donner la voie vers une vie épanouie, et
								connaitre les bases du maquillage c'est la porte d'entrée vers
								une vie alignée et sereine."
							</motion.p>
						</motion.div>
					</div>
				</section>
			</div>

			<div className="container my-12 px-6 mx-auto">
				<section className="mb-12 text-gray-800">
					<div className="flex flex-wrap items-center">
						<motion.div
							variants={staggerTextContainer}
							initial="initial"
							whileInView={"animate"}
							viewport={{ once: true, amount: 0.3 }}
							className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-6 md:mb-0 px-3"
						>
							<motion.h2
								variants={fadeInRight}
								className="text-3xl font-bold mb-6"
							>
								Tu es dans <u className="text-brique">cette situation...</u>
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
										<motion.div
											variants={fadeInRight}
											className="shrink-0 mt-1"
										>
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
										<div className="grow mx-4">
											<p className="text-gray-500">
												Je suis passionnée de maquillage mais je ne connais pas
												les techniques professionnelles, j'ai que quelques
												bases.
											</p>
										</div>
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
										<motion.div
											variants={fadeInRight}
											className="shrink-0 mt-1"
										>
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
										<motion.div variants={fadeInRight} className="grow mx-4">
											<p className="text-gray-500">
												Je travaille dans le milieu de la beauté mais je ne sais
												pas maquiller.
											</p>
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
										<motion.div
											variants={fadeInRight}
											className="shrink-0 mt-1"
										>
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
										<motion.div variants={fadeInRight} className="grow mx-4">
											<p className="text-gray-500">
												J'ai appris seule à maquiller mais j'ai besoin de
												connaitre les techniques professionnelles.
											</p>
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
										<motion.div
											variants={fadeInRight}
											className="shrink-0 mt-1"
										>
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
										<motion.div variants={fadeInRight} className="grow mx-4">
											<p className="text-gray-500">
												Je ne sais pas conseiller mes clientes quand elles me
												posent des questions sur le maquillage.
											</p>
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
										<motion.div
											variants={fadeInRight}
											className="shrink-0 mt-1"
										>
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
										<motion.div variants={fadeInRight} className="grow mx-4">
											<p className="text-gray-500">
												Je souhaite me lancer et apprendre à maquiller mais je
												n'ai pas le temps de faire une école de maquillage.
											</p>
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
										<motion.div
											variants={fadeInRight}
											className="shrink-0 mt-1"
										>
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
										<motion.div variants={fadeInRight} className="grow mx-4">
											<p className="text-gray-500">
												Je souhaite vivre de ma passion pour le maquillage mais
												je veux utiliser que des produits responsables.
											</p>
										</motion.div>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="container my-12 px-6 mx-auto">
				<section className="mb-32 flex flex-col items-center text-gray-800">
					<h1 className="font-modernline text-center py-12 text-6xl capitalize">
						Mon intention
					</h1>
					<p className="text-center text-xl text-gray-500 tracking-wider md:tracking-wide mb-12	">
						Te donner toutes les clés techniques du maquillage et faire de toi
						la reine des pinceaux.
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
											<span className="text-2xl">Les bases du maquillage</span>
										</a>
									</div>
									<p className="text-gray-700 mb-6">
										Découvre les fondations du maquillage, avec toute l'étape de
										préparation et les outils indispensables à avoir. Apprend à
										manier les couleurs avec goût. Pratique tes premiers
										maquillages naturels sur modèles.
									</p>
									<button
										type="button"
										className="inline-block px-4 py-1.5 bg-brique text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-camel hover:shadow-lg focus:bg-camel focus:shadow-lg focus:outline-none focus:ring-0 active:bg-camel active:shadow-lg transition duration-150 ease-in-out"
										data-mdb-ripple="true"
										href="/contact"
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
											<span className="text-2xl">Glamour & intensité</span>
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
										href="/contact"
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
											<span className="text-2xl">
												Le cours d'automaquillage
											</span>
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
										href="/contact"
									>
										En savoir plus
									</button>
								</div>
							</div>
						</li>
					</ol>
				</section>
			</div>

			<div className="container my-24 px-6 mx-auto">
				<section className="mb-32 text-gray-800">
					<h2 className="text-7xl font-modernline mb-32 mt-18 text-center">
						Avec révélation make up
					</h2>

					<div className="flex flex-wrap items-center">
						<motion.div
							variants={staggerTextContainer}
							initial="initial"
							whileInView={"animate"}
							viewport={{ once: true, amount: 0.3 }}
							className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 md:px-6"
						>
							<motion.div
								variants={fadeInLeft}
								className="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg"
								data-mdb-ripple="true"
								data-mdb-ripple-color="light"
								// style={{ backgroundPosition: 50 % }}
							>
								<img src={photo7} className="w-full" alt="texture" />
								<a href="#!">
									<div
										className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
										// style={{ backgroundColor: rgba(0, 0, 0, 0.4) }}
									></div>
									<div className="relative overflow-hidden bg-no-repeat bg-cover">
										<div
											className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
											// style={{ backgroundColor: rgba(251, 251, 251, 0.2) }}
										></div>
									</div>
								</a>
							</motion.div>
						</motion.div>

						<div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:px-6">
							<motion.div
								variants={staggerTextContainer}
								initial="initial"
								whileInView={"animate"}
								viewport={{ once: true, amount: 0.3 }}
								className="flex items-center mb-12"
							>
								<motion.div variants={fadeInLeft} className="shrink-0">
									<div
										className="rounded-md shadow-lg bg-pourpre"
										// style={{ backgroundColor: hsl(204, 30 %, 20 %) }}
									>
										<img
											src={icone11}
											alt="icone11"
											className="h-[75px] w-[75px]"
										/>
									</div>
								</motion.div>
								<motion.div variants={fadeInLeft} className="grow ml-4">
									<p className="text-gray-500">
										Ton dossier de fiches techniques pour chaque thème, ainsi
										que tes cours théoriques.
									</p>
								</motion.div>
							</motion.div>

							<motion.div
								variants={staggerTextContainer}
								initial="initial"
								whileInView={"animate"}
								viewport={{ once: true, amount: 0.3 }}
								className="flex items-center mb-12"
							>
								<motion.div variants={fadeInLeft} className="shrink-0">
									<div
										className="rounded-md shadow-lg bg-brique"
										// style={{ backgroundColor: hsl(204, 30 %, 20 %) }}
									>
										<img
											src={icone16}
											alt="icone16"
											className="h-[75px] w-[75px]"
										/>
									</div>
								</motion.div>
								<motion.div variants={fadeInLeft} className="grow ml-4">
									<p className="text-gray-500">
										Des surprises qui t'aideront dans ton quotidien de
										passionnée !
									</p>
								</motion.div>
							</motion.div>

							<div className="flex items-center mb-12">
								<motion.div
									variants={staggerTextContainer}
									initial="initial"
									whileInView={"animate"}
									viewport={{ once: true, amount: 0.3 }}
									className="shrink-0"
								>
									<motion.div
										variants={fadeInLeft}
										className="rounded-md shadow-lg bg-camel"
										// style={{ backgroundColor: hsl(204, 30 %, 20 %) }}
									>
										<img
											src={icone2}
											alt="icone2"
											className="h-[75px] w-[75px]"
										/>
									</motion.div>
								</motion.div>
								<motion.div
									variants={staggerTextContainer}
									initial="initial"
									whileInView={"animate"}
									viewport={{ once: true, amount: 0.3 }}
									className="grow ml-4"
								>
									<motion.p variants={fadeInLeft} className="text-gray-500">
										Des femmes modèles pour pratiquer au maximum et optimiser ta
										technique.
									</motion.p>
								</motion.div>
							</div>

							<div className="flex items-center">
								<motion.div
									variants={staggerTextContainer}
									initial="initial"
									whileInView={"animate"}
									viewport={{ once: true, amount: 0.3 }}
									className="shrink-0"
								>
									<motion.div
										variants={fadeInLeft}
										className="p-[5px] rounded-md shadow-lg bg-moutarde"
										// style={{ backgroundColor: hsl(204, 30 %, 20 %) }}
									>
										<img
											src={icone7}
											alt="icone7"
											className="h-[70px] w-[70px]"
										/>
									</motion.div>
								</motion.div>
								<motion.div
									variants={staggerTextContainer}
									initial="initial"
									whileInView={"animate"}
									viewport={{ once: true, amount: 0.3 }}
									className="grow ml-4"
								>
									<motion.p variants={fadeInLeft} className="text-gray-500">
										Des photos et vidéos de ta formation à partager à ta
										communauté !
									</motion.p>
								</motion.div>
							</div>
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

export default Revelation;

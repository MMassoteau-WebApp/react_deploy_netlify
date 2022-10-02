import React, { useRef } from "react";
import { Link } from "react-router-dom";

// import motion
import { motion } from "framer-motion";
// import variants
import { fadeInRight, fadeInLeft, staggerTextContainer } from "../variants";

const Boost = () => {
	const makeuptonbusiness =
		"https://drive.google.com/uc?export=view&id=1BuS7D-0SrMJKkSyKflrJtMOlnmFmCizg";
	const model48 =
		"https://drive.google.com/uc?export=view&id=1za_0foy2lV1l0YMWsBBSpzeqA_ifBZPN";
	const lisa6 =
		"https://drive.google.com/uc?export=view&id=1Tss-J42yS83DHFS9KXAQJdBW-cbU5Aor";
	const choixmultiple =
		"https://drive.google.com/uc?export=view&id=134i1_ShMYjlOXxEy4pF2TNamIPUQPR_D";
	const photo7 =
		"https://drive.google.com/uc?export=view&id=123wk-ctXoVesByuzdGL1sIoenFm7OtUY";
	const icone2 =
		"https://drive.google.com/uc?export=view&id=1YczfB7pb18j2nuOCV5OkUBuqjpH80_90";
	const icone7 =
		"https://drive.google.com/uc?export=view&id=11SBfl-EoTRYROiedU7yYEp4JyyVnvKP0";
	const icone11 =
		"https://drive.google.com/uc?export=view&id=1Fz2Ze7LUdfMbSJU4g4CgFbz97iwJdh6Y";

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
						src={makeuptonbusiness}
						alt="Makeup ton business"
						className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover overflow-hidden bg-fixed"
					/>
					<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-slate-900/50">
						<div className="flex justify-center items-center h-full">
							<div className="text-center text-white px-6 md:px-12">
								<h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
									Make Up Boost
								</h1>
								<p className="text-center text-xl text-white tracking-wider px-6 md:px-12 pb-12">
									Deviens l'experte d'une technique de maquillage en 1 journée
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
									href="#!"
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
									src={lisa6}
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
								Tu souhaites apprendre une technique de maquillage en
								particulier et compléter ton expertise, alors bienvenue à toi.
							</motion.p>
							<motion.p variants={fadeInRight} className="text-gray-500">
								À toi de choisir ton combo gagnant et créer ton maquillage idéal
								à reproduire sur tes clientes !
							</motion.p>
							<motion.p variants={fadeInRight} className="text-gray-500">
								En seulement 1 journée adopte la technique de ton choix, à la
								carte et gagne en confiance et en professionnalisme.
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
										La formation est disponible à Paris ou en Occitanie.
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

			<div className="container px-6 mx-auto">
				<section className="mb-32 text-gray-800">
					<h1 className="font-modernline text-center pb-28 text-6xl capitalize">
						Ravie de te rencontrer !
					</h1>
					<div
						variants={fadeInLeft}
						className="flex flex-wrap items-center mb-12"
					>
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
									src={model48}
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
								Es-tu prete À rÉvÉler ta passion?
							</h3>
							<motion.p
								variants={fadeInLeft}
								className="text-gray-500 text-lg tracking-wide md:tracking-normal leading-loose mb-6"
							>
								"Grâce à un perfectionnement dans une technique de maquillage en
								particulier, tu pourras élargir ton offre et apporter de la
								valeur ajoutée à tes clientes grâce à ton expertise."
							</motion.p>
						</motion.div>
					</div>
				</section>
			</div>

			<div className="container my-12 px-6 mx-auto">
				<section className="mb-22 text-gray-800">
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
										<motion.div variants={fadeInRight} className="grow mx-4">
											<p className="text-gray-500">
												Quand une cliente me demande une technique de
												maquillage, je n'ose pas accepter car j'ai l'impression
												que je ne vais pas y arriver.
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
												Une technique de maquillage me plait, elle est tendance,
												et j'ai besoin d'apprendre pour la maitriser.
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
												J'ai l'habitude de travailler avec des produits
												classiques mais j'aimerais apprendre une technique avec
												des produits plus responsables.
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
												J'ai appris toutes les techniques de maquillage mais
												j'ai besoin de me perfectionner sur une seule en
												particulier.
											</p>
										</motion.div>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<motion.div
				variants={staggerTextContainer}
				initial="initial"
				whileInView={"animate"}
				viewport={{ once: true, amount: 0.3 }}
				className="container mb-12 px-6 mx-auto"
			>
				<section className="mb-32 flex flex-col items-center text-gray-800">
					<h1 className="font-modernline text-center pb-12 text-6xl capitalize">
						Mon intention
					</h1>
					<motion.p
						variants={fadeInLeft}
						className="text-center text-xl text-gray-500 tracking-wider md:tracking-wide mb-12	"
					>
						Faire de toi l'experte de la technique qui fera TA différence.
					</motion.p>
					<motion.p
						variants={fadeInLeft}
						className="text-center text-xl text-gray-500 tracking-wider md:tracking-wide mb-12	"
					>
						À toi de choisir ta combinaison idéale.
					</motion.p>

					<img src={choixmultiple} alt="formation sur-mesure" />
				</section>
			</motion.div>

			<div className="container my-24 px-6 mx-auto">
				<section className="mb-32 text-gray-800">
					<h2 className="text-7xl font-modernline mb-32 mt-18 text-center">
						Avec make up Boost
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
								variants={fadeInRight}
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
							<div className="flex items-center mb-12">
								<motion.div
									variants={staggerTextContainer}
									initial="initial"
									whileInView={"animate"}
									viewport={{ once: true, amount: 0.3 }}
									className="shrink-0"
								>
									<motion.div
										variants={fadeInRight}
										className="rounded-md shadow-lg bg-pourpre"
										// style={{ backgroundColor: hsl(204, 30 %, 20 %) }}
									>
										<img
											src={icone11}
											alt="icone11"
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
									<motion.p variants={fadeInRight} className="text-gray-500">
										Ton dossier de fiches techniques pour chaque thème, ainsi
										que tes cours théoriques.
									</motion.p>
								</motion.div>
							</div>

							<div className="flex items-center mb-12">
								<motion.div
									variants={staggerTextContainer}
									initial="initial"
									whileInView={"animate"}
									viewport={{ once: true, amount: 0.3 }}
									className="shrink-0"
								>
									<motion.div
										variants={fadeInRight}
										className="rounded-md shadow-lg bg-brique"
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
									<motion.p variants={fadeInRight} className="text-gray-500">
										Des femmes modèles pour pratiquer au maximum et optimiser ta
										technique.
									</motion.p>
								</motion.div>
							</div>

							<div className="flex items-center mb-12">
								<motion.div
									variants={staggerTextContainer}
									initial="initial"
									whileInView={"animate"}
									viewport={{ once: true, amount: 0.3 }}
									className="shrink-0"
								>
									<motion.div
										variants={fadeInRight}
										className="p-[5px] rounded-md shadow-lg bg-camel"
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
									<motion.p variants={fadeInRight} className="text-gray-500">
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

export default Boost;

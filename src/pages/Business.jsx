import React, { useRef } from "react";
import { Link } from "react-router-dom";

// import motion
import { motion } from "framer-motion";
// import variants
import { fadeInRight, fadeInLeft, staggerTextContainer } from "../variants";

const Business = () => {
	const makeuptonbusiness =
		"https://drive.google.com/uc?export=view&id=1AKQzVKzGrJb-gj3AiOp04uvzzQ2tbqVC";
	const makeuptonbusiness2 =
		"https://drive.google.com/uc?export=view&id=1r6gqiPXDFLtLiIMZXPcfTbYoTiJF8OVc";
	const photo3 =
		"https://drive.google.com/uc?export=view&id=1cJe1S3HyhrnxGHcFgu-ZoMiDuYkohDIJ";
	const photo7 =
		"https://drive.google.com/uc?export=view&id=1k__NgiHmCNSRJVvjTPS5unSAj6c4zBhc";
	const icone2 =
		"https://drive.google.com/uc?export=view&id=1YczfB7pb18j2nuOCV5OkUBuqjpH80_90";
	const icone7 =
		"https://drive.google.com/uc?export=view&id=11SBfl-EoTRYROiedU7yYEp4JyyVnvKP0";
	const icone10 =
		"https://drive.google.com/uc?export=view&id=1eti5Rh0q2xTb_Od__kOJMN8c2YiNkaF8";
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
			<section className="mb-24 overflow-hidden">
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
									Make Up Ton Business
								</h1>
								<p className="text-center text-xl text-white tracking-wider px-6 md:px-12 pb-12">
									2 mois pour transformer ta passion en une activité rentable et
									responsable
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
									src={makeuptonbusiness2}
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
								Pourquoi lancer son business ?
							</h3>
							<motion.p variants={fadeInRight} className="text-gray-500 mb-6">
								La formation pour les (futures) entrepreneures beautés
								ambitieuses, qui souhaitent lancer leur business, le voir
								briller et se positionner en tant qu'experte de son marché.
							</motion.p>
							<motion.p variants={fadeInRight} className="text-gray-500">
								Toi aussi tu peux attirer les clientes et vivre ta vie
								professionnelle grâce à ta passion !
							</motion.p>
							<motion.p variants={fadeInRight} className="text-gray-500">
								Ton business ne dépend que de toi et de ta gestion de 3 facteurs
								indispensables :
							</motion.p>
							<motion.ul variants={fadeInRight}>
								<ol className="list-inside my-4">
									<li className="mb-4 flex items-center">
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="check"
											className="text-green-600 w-4 h-4 mr-2"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
										>
											<path
												fill="currentColor"
												d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
											></path>
										</svg>
										Préparer
									</li>
									<li className="mb-4 flex items-center">
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="check"
											className="text-green-600 w-4 h-4 mr-2"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
										>
											<path
												fill="currentColor"
												d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
											></path>
										</svg>
										Promouvoir
									</li>
									<li className="mb-4 flex items-center">
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="check"
											className="text-green-600 w-4 h-4 mr-2"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
										>
											<path
												fill="currentColor"
												d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
											></path>
										</svg>
										Péréniser
									</li>
								</ol>
							</motion.ul>
							<motion.div className="mt-5">
								<Link
									to="/contact"
									className="inline-block px-7 py-3 mr-1.5 border-2 border-moutarde text-moutarde font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
									data-mdb-ripple="true"
									data-mdb-ripple-color="light"
									role="button"
								>
									Prendre contact
								</Link>
							</motion.div>
						</motion.div>
					</div>

					<div className="flex flex-wrap items-center lg:flex-row-reverse mb-12">
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
									src={photo3}
									className="w-full object-cover"
									alt="Entreprendre son succès"
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
							className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6"
						>
							<h3 className="text-4xl font-modernline font-bold my-12">
								Qu'est-ce que je vais apprendre ?
							</h3>
							<motion.p variants={fadeInRight} className="text-gray-500 mb-6">
								Tu as tout intérêt à entreprendre une bonne stratégie dès le
								départ, et obtenir de nombreux avantages.
							</motion.p>
							<motion.p variants={fadeInRight} className="text-gray-500">
								Une stratégie te permet d'être unique et devenir la référence
								cible.
							</motion.p>
							<motion.p variants={fadeInRight} className="text-gray-500">
								Découvre la méthode qui m'a permis de vivre de ma passion ainsi
								que cell de mes élèves
							</motion.p>
							<motion.ul variants={fadeInRight}>
								<ol className="list-inside my-4">
									<li className="mb-4 flex items-center">
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="check"
											className="text-green-600 w-4 h-4 mr-2"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
										>
											<path
												fill="currentColor"
												d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
											></path>
										</svg>
										Te démarquer de la concurrence et en faire un allié
									</li>
									<li className="mb-4 flex items-center">
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="check"
											className="text-green-600 w-4 h-4 mr-2"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
										>
											<path
												fill="currentColor"
												d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
											></path>
										</svg>
										Gagner en visibilité et attirer des prospects
									</li>
									<li className="mb-4 flex items-center">
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="check"
											className="text-green-600 w-4 h-4 mr-2"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
										>
											<path
												fill="currentColor"
												d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
											></path>
										</svg>
										Transformer tes prospects en clientes fidèles
									</li>
									<li className="mb-4 flex items-center">
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="check"
											className="text-green-600 w-4 h-4 mr-2"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
										>
											<path
												fill="currentColor"
												d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
											></path>
										</svg>
										Attirer les personnes qui te ressemblent
									</li>
									<li className="mb-4 flex items-center">
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="check"
											className="text-green-600 w-4 h-4 mr-2"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
										>
											<path
												fill="currentColor"
												d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
											></path>
										</svg>
										Une motivation et une confiance en toi sans faille
									</li>
									<li className="mb-4 flex items-center">
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="check"
											className="text-green-600 w-4 h-4 mr-2"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
										>
											<path
												fill="currentColor"
												d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
											></path>
										</svg>
										Sécuriser l'avenir de ton entreprise
									</li>
								</ol>
							</motion.ul>
							<motion.div variants={fadeInRight} className="mt-5">
								<Link
									to="/contact"
									className="inline-block px-7 py-3 mr-1.5 border-2 border-camel text-camel font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
									data-mdb-ripple="true"
									data-mdb-ripple-color="light"
									role="button"
								>
									Prendre contact
								</Link>
							</motion.div>
						</motion.div>
					</div>
				</section>
			</div>

			<div className="container my-16 px-6 mx-auto">
				<section className="mb-18 text-gray-800">
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
								Tu es dans <u className="text-camel">cette situation...</u>
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
										className="flex items-center"
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
										className="flex items-center"
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
										className="flex items-center"
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
												Je propose des prix bas pour commencer.
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
										className="flex items-center"
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
												Je ne sais pas faire face à la concurrence.
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
										className="flex items-center"
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
												Ma plus grande peur est de devoir (re)devenir salarié et
												donner raison à mes proches qui pensent que c'est mal vu
												d'être auto-entrepreneur et trop risqué.
											</motion.p>
										</motion.div>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="container my-16 px-6 mx-auto">
				<section className="mb-18 text-gray-800">
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
								Imagine <u className="text-camel">si tu pouvais...</u>
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
										className="flex items-center"
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
										<motion.div
											variants={staggerTextContainer}
											initial="initial"
											whileInView={"animate"}
											viewport={{ once: true, amount: 0.3 }}
											className="grow mx-4"
										>
											<motion.p
												variants={fadeInRight}
												className="text-gray-500"
											>
												Attirer tes premières clientes grâce à une bonne
												stratégie et ton expertise
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
										className="flex items-center"
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
										<motion.div
											variants={staggerTextContainer}
											initial="initial"
											whileInView={"animate"}
											viewport={{ once: true, amount: 0.3 }}
											className="grow mx-4"
										>
											<motion.p
												variants={fadeInRight}
												className="text-gray-500"
											>
												Vendre tes services ou produits chaque jours
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
										className="flex items-center"
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
										<motion.div
											variants={staggerTextContainer}
											initial="initial"
											whileInView={"animate"}
											viewport={{ once: true, amount: 0.3 }}
											className="grow mx-4"
										>
											<motion.p
												variants={fadeInRight}
												className="text-gray-500"
											>
												Attirer des nouveaux prospects chaque jour.
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
										className="flex items-center"
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
										<motion.div
											variants={staggerTextContainer}
											initial="initial"
											whileInView={"animate"}
											viewport={{ once: true, amount: 0.3 }}
											className="grow mx-4"
										>
											<motion.p
												variants={fadeInRight}
												className="text-gray-500"
											>
												Gagner confiance en toi et quitter le syndrome de
												l'imposteur
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
										className="flex items-center"
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
										<motion.div
											variants={staggerTextContainer}
											initial="initial"
											whileInView={"animate"}
											viewport={{ once: true, amount: 0.3 }}
											className="grow mx-4"
										>
											<motion.p
												variants={fadeInRight}
												className="text-gray-500"
											>
												Être épanouie dans ton activité.
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
										className="flex items-center"
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
										<motion.div
											variants={staggerTextContainer}
											initial="initial"
											whileInView={"animate"}
											viewport={{ once: true, amount: 0.3 }}
											className="grow mx-4"
										>
											<motion.p
												variants={fadeInRight}
												className="text-gray-500"
											>
												Être organisée au quotidien et autonome dans ta gestion.
											</motion.p>
										</motion.div>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="container my-24 px-6 mx-auto">
				<section className="mb-32 text-gray-800">
					<h2 className="text-7xl font-modernline mb-32 mt-18 text-center">
						Avec Make Up Ton Business
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
							>
								<img src={photo7} className="w-full" alt="texture" />
								<a href="#!">
									<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
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
								<motion.div variants={fadeInRight} className="shrink-0">
									<div
										className="rounded-md shadow-lg bg-pourpre"
										// style={{ backgroundColor: hsl(204, 30 %, 20 %) }}
									>
										<img
											src={icone2}
											alt="icone2"
											className="h-[75px] w-[75px]"
										/>
									</div>
								</motion.div>
								<motion.div variants={fadeInRight} className="grow ml-4">
									<p className="text-gray-500">
										Un accès à ta formation en ligne à ton rythme. Accès complet
										à la platerforme dès le départ.
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
								<motion.div variants={fadeInRight} className="shrink-0">
									<div
										className="rounded-md shadow-lg bg-brique"
										// style={{ backgroundColor: hsl(204, 30 %, 20 %) }}
									>
										<img
											src={icone11}
											alt="icone11"
											className="h-[75px] w-[75px]"
										/>
									</div>
								</motion.div>
								<motion.div variants={fadeInRight} className="grow ml-4">
									<p className="text-gray-500">
										Tes workbook d'exercice afin de progresser et passer à
										l'action pour un résultat immédiat.
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
								<motion.div variants={fadeInRight} className="shrink-0">
									<div
										className="rounded-md shadow-lg bg-camel"
										// style={{ backgroundColor: hsl(204, 30 %, 20 %) }}
									>
										<img
											src={icone10}
											alt="icone10"
											className="h-[75px] w-[75px]"
										/>
									</div>
								</motion.div>
								<motion.div variants={fadeInRight} className="grow ml-4">
									<p className="text-gray-500">
										Accès au groupe Facebook de Beauty Artist passionnées.
									</p>
								</motion.div>
							</motion.div>

							<motion.div
								variants={staggerTextContainer}
								initial="initial"
								whileInView={"animate"}
								viewport={{ once: true, amount: 0.3 }}
								className="flex items-center"
							>
								<motion.div variants={fadeInRight} className="shrink-0">
									<div
										className="p-[5px] rounded-md shadow-lg bg-moutarde"
										// style={{ backgroundColor: hsl(204, 30 %, 20 %) }}
									>
										<img
											src={icone7}
											alt="icone7"
											className="h-[70px] w-[70px]"
										/>
									</div>
								</motion.div>
								<motion.div variants={fadeInRight} className="grow ml-4">
									<p className="text-gray-500">
										Un appel visio de 30 minutes avec Lisa dans les 3 mois après
										ton inscription.
									</p>
								</motion.div>
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
										Décolle ton business et rejoins la formation,{" "}
										<u className="text-pourpre">
											ton succès ne dépend que de toi !
										</u>
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

export default Business;

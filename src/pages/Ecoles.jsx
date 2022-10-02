import React, { useRef } from "react";
import { Link } from "react-router-dom";

// import motion
import { motion } from "framer-motion";
// import variants
import { fadeInRight, fadeInLeft, staggerTextContainer } from "../variants";

const Ecoles = () => {
	const cours =
		"https://drive.google.com/uc?export=view&id=1YmY4Bd3R3_w-veBByjebTk0hR8vf0UE2";
	const photo2 =
		"https://drive.google.com/uc?export=view&id=1dPi9tj9YXHuSVi4TPwaCccK81R8xAXRx";
	const photo3 =
		"https://drive.google.com/uc?export=view&id=1wtXAvZGfadfVn4BcJQ3L6AKZyfF1adxU";
	const photo4 =
		"https://drive.google.com/uc?export=view&id=1wtXAvZGfadfVn4BcJQ3L6AKZyfF1adxU";

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
						src={cours}
						alt="Makeup ton business"
						className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover overflow-hidden bg-fixed"
					/>
					<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-slate-900/50">
						<div className="flex justify-center items-center h-full">
							<div className="text-center text-white px-6 md:px-12">
								<h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
									Formations destinées aux <br /> écoles
								</h1>
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
									src={photo2}
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
								Maquillage Tendance & Responsable
							</h3>
							<motion.p variants={fadeInRight} className="text-gray-500 mb-6">
								La formation destinée aux étudiant(e)s en école d'esthétique et
								de maquillage professionnel.
							</motion.p>
							<motion.p variants={fadeInRight} className="text-gray-500">
								Apprendre à maquiller en toute conscience éthique, en obtenant
								des résultats dignes de Make Up Artist des tapis rouges, c'est
								aujourd'hui possible pour nos futures beauty artist, qui
								détiennent l'avenir de la beauté entre leurs mains !
							</motion.p>
							<motion.p variants={fadeInRight} className="text-gray-500">
								Les élèves découvrent le monde d'une beauté saine et
								responsable, son histoire et lors d'une démonstration de
								maquillage, les bases & techniques professionnelles
								responsables, de la tendance actuelle, lors d'un moment de
								partage, d'animations & d'étoiles dans les yeux !
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
										Savoir réaliser un maquillage tendance en respectant des
										valeurs éthiques.
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
										Sensibiliser une beauté plus saine et écologique.
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
									Brochure
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

						<motion.div
							variants={staggerTextContainer}
							initial="initial"
							whileInView={"animate"}
							viewport={{ once: true, amount: 0.3 }}
							className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6"
						>
							<h3 className="text-4xl font-modernline font-bold my-12">
								Entreprendre son succès
							</h3>
							<motion.p variants={fadeInLeft} className="text-gray-500 mb-6">
								La formation destinée aux étudiant(e)s en école d'esthétique et
								de maquillage professionnel.
							</motion.p>
							<motion.p variants={fadeInLeft} className="text-gray-500">
								Afin de mettre à profit tout son apprentissage dès la fin de son
								cursus étudiant, et entrer dans le milieu professionnel sans
								attendre, la formation "Entreprendre son succès" grâce à la
								méthode P3, les élèves obtiennent les clés du succès des
								entrepreneures beautés, qui demandent rigueur et persévérance et
								assurent d'un avenir aligné à ses propres valeurs
								professionnelles.
							</motion.p>
							<motion.p variants={fadeInLeft} className="text-gray-500">
								Une si belle passion que la beauté se doit d'être au service de
								sa vie, sans attendre !
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
										Préparer les fondations de son activité
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
										Promouvoir son expertise
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
										Pérenniser son image
									</li>
								</ol>
							</motion.ul>
							<motion.div variants={fadeInLeft} className="mt-5">
								<Link
									to="/contact"
									className="inline-block px-7 py-3 mr-1.5 border-2 border-camel text-camel font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
									data-mdb-ripple="true"
									data-mdb-ripple-color="light"
									role="button"
								>
									Brochure
								</Link>
							</motion.div>
						</motion.div>
					</div>

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
									src={photo4}
									className="w-full object-cover"
									alt="Tendance de la saison"
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
								Tendance de la saison
							</h3>
							<motion.p variants={fadeInRight} className="text-gray-500 mb-6">
								La formation destinée aux professeurs des écoles d'esthétiques.
							</motion.p>
							<motion.p variants={fadeInRight} className="text-gray-500">
								Les tendances de maquillage évoluent chaque année, et les
								techniques vont de pair. Afin de transmettre la pointe du
								maquillage à vos élèves, les professeurs ont besoin des mises à
								jour des maquillages de saison afin d'optimiser leur programme.
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
										Découvrir les techniques de la saison en cours et/ou à venir
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
										Apprendre les techniques de maquillages tendances.
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
									Brochure
								</Link>
							</motion.div>
						</motion.div>
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
										<u className="text-pourpre">travaillons ensemble !</u>
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

export default Ecoles;

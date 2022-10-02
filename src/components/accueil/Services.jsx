import React from "react";
import { Link } from "react-router-dom";

// import motion
import { motion } from "framer-motion";
// import variants
import { fadeInRight, staggerTextContainer } from "../../variants";

const Services = () => {
	const icone2 =
		"https://drive.google.com/uc?export=view&id=1YczfB7pb18j2nuOCV5OkUBuqjpH80_90";
	const icone11 =
		"https://drive.google.com/uc?export=view&id=1Fz2Ze7LUdfMbSJU4g4CgFbz97iwJdh6Y";
	const icone7 =
		"https://drive.google.com/uc?export=view&id=11SBfl-EoTRYROiedU7yYEp4JyyVnvKP0";

	return (
		<>
			<div className="container relative my-24 px-12 mx-auto">
				<section className=" first-letter:mb-32 text-gray-800">
					{/* <img src={texture} alt="texture" className="absolute object-cover" /> */}
					<h2 className="font-bold text-4xl sm:text-6xl capitalize font-modernline text-center mb-40">
						Mes services
					</h2>

					<div className=" grid lg:grid-cols-3 gap-6 lg:gap-x-12">
						<motion.div
							variants={staggerTextContainer}
							initial="initial"
							whileInView={"animate"}
							viewport={{ once: true, amount: 0.3 }}
							className="mb-16 lg:mb-0"
						>
							<motion.div
								variants={fadeInRight}
								className="relative block rounded-lg shadow-lg bg-white h-full"
							>
								<div className="absolute text-4xl text-center rounded-full border bg-vieuxrose bg-opacity-50 text-white top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
									<img
										src={icone2}
										alt="icone11"
										className="h-[75px] w-[75px]"
									/>
								</div>
								<div className="p-12 border-b border-gray-300 text-center">
									<p className="uppercase mb-4 text-3xl font-marisa font-medium">
										<strong>Formations</strong>
									</p>
									{/* <h3 className="text-2xl mb-6">
									<strong>299 EUR</strong>
									<small className="text-gray-500 text-sm">/year</small>
								</h3> */}
									<Link to="/formations">
										<div
											className="inline-block px-6 py-2.5 bg-vieuxrose text-white font-medium text-xs leading-tight uppercase rounded  hover:transition ease-in-out delay-150 hover:scale-110 hover:shadow-lg"
											data-mdb-ripple="true"
											data-ripple-color="primary"
										>
											En savoir plus
										</div>
									</Link>
								</div>
								<div className="p-6">
									<ol className="list-inside">
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
											Formations intensives
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
											Cours particuliers
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
											En présentiel
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
											Dates et horaires modulables
										</li>
									</ol>
								</div>
							</motion.div>
						</motion.div>
						{/* end here */}

						<motion.div
							variants={staggerTextContainer}
							initial="initial"
							whileInView={"animate"}
							viewport={{ once: true, amount: 0.3 }}
							className="mb-16 lg:mb-0"
						>
							<motion.div
								variants={fadeInRight}
								className="relative block rounded-lg shadow-lg bg-white h-full"
							>
								<div className="absolute text-4xl text-center rounded-full border bg-moutarde bg-opacity-50 text-white top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
									<img
										src={icone11}
										alt="icone11"
										className="h-[75px] w-[75px]"
									/>
								</div>
								<div className="p-12 border-b border-gray-300 text-center">
									<p className="uppercase mb-4 text-3xl font-marisa font-medium">
										<strong>Coaching</strong>
									</p>
									{/* <h3 className="text-2xl mb-6">
									<strong>299 EUR</strong>
									<small className="text-gray-500 text-sm">/year</small>
								</h3> */}
									<Link to="/formations">
										<div
											className="inline-block px-6 py-2.5 bg-moutarde text-white font-medium text-xs leading-tight uppercase rounded  hover:transition ease-in-out delay-150 hover:scale-110 hover:shadow-lg"
											data-mdb-ripple="true"
											data-ripple-color="primary"
										>
											En savoir plus
										</div>
									</Link>
								</div>
								<div className="p-6">
									<ol className="list-inside">
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
											Sur mesure
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
											Stratégie personnalisée
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
											Accès en ligne
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
											Service premium
										</li>
									</ol>
								</div>
							</motion.div>
						</motion.div>

						<motion.div
							variants={staggerTextContainer}
							initial="initial"
							whileInView={"animate"}
							viewport={{ once: true, amount: 0.3 }}
							className="mb-16 lg:mb-0"
						>
							<motion.div
								variants={fadeInRight}
								className="relative block rounded-lg shadow-lg bg-white h-full"
							>
								<div className="absolute text-4xl text-center rounded-full border bg-camel bg-opacity-50 text-white top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
									<img
										src={icone7}
										alt="icone7"
										className="h-[70px] w-[70px] p-[5px]"
									/>
								</div>
								<div className="p-12 border-b border-gray-300 text-center">
									<p className="uppercase mb-4 text-3xl font-marisa font-medium">
										<strong>Ecole</strong>
									</p>
									{/* <h3 className="text-2xl mb-6">
									<strong>499 EUR</strong>
									<small className="text-gray-500 text-sm">/year</small>
								</h3> */}
									<Link to="/ecoles">
										<div
											className="inline-block px-6 py-2.5 bg-camel text-white font-medium text-xs leading-tight uppercase rounded  hover:transition ease-in-out delay-150 hover:scale-110 hover:shadow-lg"
											data-mdb-ripple="true"
											data-ripple-color="primary"
										>
											En savoir plus
										</div>
									</Link>
								</div>
								<div className="p-6">
									<ol className="list-inside">
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
											Sur site
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
											Techniques avancées
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
											Stratégie professionnelle
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
											Sur mesure
										</li>
									</ol>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Services;

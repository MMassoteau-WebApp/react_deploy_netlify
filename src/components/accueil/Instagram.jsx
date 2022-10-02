import React from "react";

// import motion
import { motion } from "framer-motion";
// import variants
import { fadeInRight, staggerTextContainer } from "../../variants";

const Instagram = () => {
	const lisa33 =
		"https://drive.google.com/uc?export=view&id=1AQwxUVGMVppftYZa-xx_FiZRHFNgrFFp";
	const model41 =
		"https://drive.google.com/uc?export=view&id=1ew_5PTVlcuT61tfwct3F39l2h3--jRcn";
	const produit23 =
		"https://drive.google.com/uc?export=view&id=1rK99ukFTYLLBjKTxWSTPhGq9gcmmCDoO";
	const lisa29 =
		"https://drive.google.com/uc?export=view&id=1MCKjxDXVwreGyoOvNcLVLw3CEUlCtSc-";
	const lisa19 =
		"https://drive.google.com/uc?export=view&id=1eTZ3KOP_96FskQlOKcIqdG_WfOIzuq7x";
	const model51 =
		"https://drive.google.com/uc?export=view&id=1nP1sPS2L_jT98jT6v7lcuVYIS9KTcQ3z";

	return (
		<motion.div
			className="container mb-24 px-6 mx-auto"
			variants={staggerTextContainer}
			initial="initial"
			whileInView={"animate"}
			viewport={{ once: true, amount: 0.3 }}
		>
			<section className="mb-32 text-gray-800">
				<h2 className="text-4xl sm:text-6xl font-modernline font-bold mb-32 text-center">
					Instagram
				</h2>

				<div className="grid lg:grid-cols-3 gap-6">
					<motion.div
						variants={staggerTextContainer}
						initial="initial"
						whileInView={"animate"}
						viewport={{ once: true, amount: 0.3 }}
					>
						<motion.div
							variants={fadeInRight}
							className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
							data-mdb-ripple="true"
							data-mdb-ripple-color="dark"
						>
							<img
								src={lisa33}
								className="w-full transition duration-300 ease-linear h-[270px] object-cover align-middle"
								alt="Lisa Gonzalvo"
							/>
							<a href="https://www.instagram.com/beaute_entrenous/">
								<div
									className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
									// style="background-color: rgba(0, 0, 0, 0.3)"
								>
									<div className="flex justify-start items-end h-full">
										{/* <h5 className="text-lg font-bold text-white m-6">
										Hollywood exhibition
									</h5> */}
									</div>
								</div>
								<div className="hover-overlay">
									<div
										className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
										// style="background-color: rgba(253, 253, 253, 0.15)"
									></div>
								</div>
							</a>
						</motion.div>
					</motion.div>
					<motion.div
						variants={staggerTextContainer}
						initial="initial"
						whileInView={"animate"}
						viewport={{ once: true, amount: 0.3 }}
					>
						<motion.div
							variants={fadeInRight}
							className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
							// style="background-position: 50%;"
							data-mdb-ripple="true"
							data-mdb-ripple-color="dark"
						>
							<img
								src={model41}
								className="w-full transition duration-300 ease-linear h-[270px] object-cover align-middle"
								alt="Lisa Gonzalvo"
							/>
							<a href="https://www.instagram.com/beaute_entrenous/">
								<div
									className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
									// style="background-color: rgba(0, 0, 0, 0.3)"
								>
									<div className="flex justify-start items-end h-full">
										{/* <h5 className="text-lg font-bold text-white m-6">
										Genius Loci
									</h5> */}
									</div>
								</div>
								<div className="hover-overlay">
									<div
										className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
										// style="background-color: rgba(253, 253, 253, 0.15)"
									></div>
								</div>
							</a>
						</motion.div>
					</motion.div>
					<motion.div
						variants={staggerTextContainer}
						initial="initial"
						whileInView={"animate"}
						viewport={{ once: true, amount: 0.3 }}
					>
						<motion.div
							variants={fadeInRight}
							className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
							// style="background-position: 50%;"
							data-mdb-ripple="true"
							data-mdb-ripple-color="dark"
						>
							<img
								src={produit23}
								className="w-full transition duration-300 ease-linear h-[270px] object-cover align-middle"
								alt="Lisa Gonzalvo"
							/>
							<a href="https://www.instagram.com/beaute_entrenous/">
								<div
									className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
									// style="background-color: rgba(0, 0, 0, 0.3)"
								>
									<div className="flex justify-start items-end h-full">
										{/* <h5 className="text-lg font-bold text-white m-6">
										Big Apple
									</h5> */}
									</div>
								</div>
								<div className="hover-overlay">
									<div
										className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
										// style="background-color: rgba(253, 253, 253, 0.15)"
									></div>
								</div>
							</a>
						</motion.div>
					</motion.div>
					<motion.div
						variants={staggerTextContainer}
						initial="initial"
						whileInView={"animate"}
						viewport={{ once: true, amount: 0.3 }}
					>
						<motion.div
							variants={fadeInRight}
							className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
							// style="background-position: 50%;"
							data-mdb-ripple="true"
							data-mdb-ripple-color="dark"
						>
							<img
								src={lisa29}
								className="w-full transition duration-300 ease-linear h-[270px] object-cover align-middle"
								alt="Lisa Gonzalvo"
							/>
							<a href="https://www.instagram.com/beaute_entrenous/">
								<div
									className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
									// style="background-color: rgba(0, 0, 0, 0.3)"
								>
									<div className="flex justify-start items-end h-full">
										{/* <h5 className="text-lg font-bold text-white m-6">Sun City</h5> */}
									</div>
								</div>
								<div className="hover-overlay">
									<div
										className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
										// style="background-color: rgba(253, 253, 253, 0.15)"
									></div>
								</div>
							</a>
						</motion.div>
					</motion.div>
					<motion.div
						variants={staggerTextContainer}
						initial="initial"
						whileInView={"animate"}
						viewport={{ once: true, amount: 0.3 }}
					>
						<motion.div
							variants={fadeInRight}
							className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
							// style="background-position: 50%;"
							data-mdb-ripple="true"
							data-mdb-ripple-color="dark"
						>
							<img
								src={lisa19}
								className="w-full transition duration-300 ease-linear h-[270px] object-cover align-middle"
								alt="Lisa Gonzalvo"
							/>
							<a href="https://www.instagram.com/beaute_entrenous/">
								<div
									className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
									// style="background-color: rgba(0, 0, 0, 0.3)"
								>
									<div className="flex justify-start items-end h-full">
										{/* <h5 className="text-lg font-bold text-white m-6">
										Paris flavor
									</h5> */}
									</div>
								</div>
								<div className="hover-overlay">
									<div
										className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
										// style="background-color: rgba(253, 253, 253, 0.15)"
									></div>
								</div>
							</a>
						</motion.div>
					</motion.div>
					<motion.div
						variants={staggerTextContainer}
						initial="initial"
						whileInView={"animate"}
						viewport={{ once: true, amount: 0.3 }}
					>
						<motion.div
							variants={fadeInRight}
							className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
							// style="background-position: 50%;"
							data-mdb-ripple="true"
							data-mdb-ripple-color="dark"
						>
							<img
								src={model51}
								className="w-full transition duration-300 ease-linear h-[270px] object-cover align-middle"
								alt="img5"
							/>
							<a href="https://www.instagram.com/beaute_entrenous/">
								<div
									className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
									// style="background-color: rgba(0, 0, 0, 0.3)"
								>
									<div className="flex justify-start items-end h-full">
										{/* <h5 className="text-lg font-bold text-white m-6">
										Sky is the limit
									</h5> */}
									</div>
								</div>
								<div className="hover-overlay">
									<div
										className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
										// style="background-color: rgba(253, 253, 253, 0.15)"
									></div>
								</div>
							</a>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</motion.div>
	);
};

export default Instagram;

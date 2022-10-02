import React from "react";

// import { Link } from "react-router-dom";

// import motion
import { motion } from "framer-motion";
// import variants
import { fadeInRight, fadeInLeft, staggerTextContainer } from "../../variants";

const Formations = () => {
	const texture =
		"https://drive.google.com/uc?export=view&id=1BsHMoCAMrP83ZavsD0mFUQF46yEZDycn";

	const icone3 =
		"https://drive.google.com/uc?export=view&id=1U61_FxTeVpYm45KX19s50DcSKKl6fZSl";
	const icone13 =
		"https://drive.google.com/uc?export=view&id=1dskUReesXzOs9_qcgjKDdZZSlu2ddNgi";
	const icone16 =
		"https://drive.google.com/uc?export=view&id=1gtjm_Ls-v5NfMNGz0ckrrln_zQeDAoWC";
	const icone17 =
		"https://drive.google.com/uc?export=view&id=1X2p9OxOAFo7VTrBqw8gcYAqy5OlVfDk6";
	const marque6 =
		"https://drive.google.com/uc?export=view&id=1-xGToix2s-GHJol4i3BRd9NYgVA9NM1b";
	const marque34 =
		"https://drive.google.com/uc?export=view&id=1IbyS3l1HTLw4gKX58Rr17KHz9fy8Hvvr";

	return (
		<>
			<motion.div
				className="container my-24 px-6 mx-auto"
				variants={staggerTextContainer}
				initial="initial"
				whileInView={"animate"}
				viewport={{ once: true, amount: 0.3 }}
			>
				<section className="mb-32 text-gray-800">
					<h2 className="font-bold text-4xl sm:text-6xl font-modernline mb-32 mt-18 text-center">
						Mes formations
					</h2>

					<div className="flex flex-wrap items-center">
						<div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 md:px-6">
							<motion.div
								variants={fadeInRight}
								className="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg"
								data-mdb-ripple="true"
								data-mdb-ripple-color="light"
								// style={{ backgroundPosition: 50 % }}
							>
								<img src={texture} className="w-full" alt="texture" />
							</motion.div>
						</div>

						<motion.div
							className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:px-6"
							variants={staggerTextContainer}
							initial="initial"
							whileInView={"animate"}
							viewport={{ once: true, amount: 0.3 }}
						>
							<motion.div variants={fadeInLeft} className="flex mb-12">
								<div className="shrink-0">
									<div
										className=" rounded-md shadow-lg bg-pourpre"
										// style={{ backgroundColor: hsl(204, 30 %, 20 %) }}
									>
										<img
											src={icone17}
											alt="icone17"
											className="h-[75px] w-[75px]"
										/>
									</div>
								</div>
								<div className="grow ml-4">
									<p className="font-marisa text-xl mb-1">Magnetic MakeUp</p>
									<p className="text-gray-500">
										35 heures pour maîtriser ta technique & vivre de ton
										activité.
									</p>
								</div>
							</motion.div>

							<motion.div variants={fadeInLeft} className="flex mb-12">
								<div className="shrink-0">
									<div
										className=" rounded-md shadow-lg bg-brique"
										// style={{ backgroundColor: hsl(204, 30 %, 20 %) }}
									>
										<img
											src={icone3}
											alt="icone3"
											className="h-[75px] w-[75px]"
										/>
									</div>
								</div>
								<div className="grow ml-4">
									<p className="font-marisa text-xl mb-1">Révélation MakeUp</p>
									<p className="text-gray-500">
										3 étapes pour apprendre à sublimer les femmes avec éthique.
									</p>
								</div>
							</motion.div>

							<motion.div variants={fadeInLeft} className="flex mb-12">
								<div className="shrink-0">
									<div
										className="rounded-md shadow-lg bg-camel"
										// style={{ backgroundColor: hsl(204, 30 %, 20 %) }}
									>
										<img
											src={icone13}
											alt="icone13"
											className="h-[75px] w-[75px]"
										/>
									</div>
								</div>
								<div className="grow ml-4">
									<p className="font-marisa text-xl mb-1">MakeUp Boost</p>
									<p className="text-gray-500">
										Devenir l'experte d'une technique de maquillage en 1
										journée.
									</p>
								</div>
							</motion.div>

							<motion.div variants={fadeInLeft} className="flex">
								<div className="shrink-0">
									<div
										className="rounded-md shadow-lg bg-moutarde"
										// style={{ backgroundColor: hsl(204, 30 %, 20 %) }}
									>
										<img
											src={icone16}
											alt="icone16"
											className="h-[75px] w-[75px]"
										/>
									</div>
								</div>
								<div className="grow ml-4">
									<p className="font-marisa text-xl mb-1">Shine MakeUp</p>
									<p className="text-gray-500">
										Cours d'auto-maquillage pour apprendre les techniques qui te
										ressemblent.
									</p>
								</div>
								`
							</motion.div>
						</motion.div>
					</div>
				</section>
			</motion.div>
			<div className="invisible sm:visible sm:flex sm:justify-around sm:items-center">
				<motion.div
					transition={{
						// x: { duration: 1, yoyo: Infinity, ease: "easeInOut" },
						y: { duration: 2, yoyo: Infinity, ease: "easeInOut" },
					}}
					// animate={{ y: ["0px", "-20px"], x: ["-20px", "20px"] }}
					animate={{ y: ["0px", "-20px"] }}
					className=""
				>
					<img
						className="invisible sm:visible sm:h-[75px] sm:ml-24"
						src={marque6}
						alt="beauté entre nous"
					/>
				</motion.div>
				<motion.div
					transition={{
						y: { duration: 2, yoyo: Infinity, ease: "easeInOut" },
					}}
					animate={{ y: ["0px", "-20px"] }}
					className=""
				>
					<img
						className="invisible sm:visible sm:h-[130px] sm:mr-24"
						src={marque34}
						alt="beauté entre nous"
					/>
				</motion.div>
			</div>
		</>
	);
};

export default Formations;

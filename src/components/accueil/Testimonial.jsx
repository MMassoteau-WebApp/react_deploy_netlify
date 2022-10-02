import React from "react";

// import motion
import { motion } from "framer-motion";
// import variants
import { fadeInRight, staggerTextContainer } from "../../variants";

//import image
import tiphaine from "../../images/Tiphaine.jpeg";
import fanny from "../../images/Fanny.jpeg";
import camille from "../../images/Camille.jpeg";

const Testimonial = () => {
	// const tiphaine =
	// 	"https://drive.google.com/uc?export=view&id=1tabuQfJGt1DLogRhu_Q97YkzNVMwLQsI";
	// const fanny =
	// 	"https://drive.google.com/uc?export=view&id=1lVgq71qSEEz0dmjn9z6xeNuQMShhhQOT";
	// const camille =
	// 	"https://drive.google.com/uc?export=view&id=15UXw6uW90mPeVZc3uSftH6cGnfNsiNHe";
	return (
		<motion.div
			className="container my-24 px-6 mx-auto"
			variants={staggerTextContainer}
			initial="initial"
			whileInView={"animate"}
			viewport={{ once: true, amount: 0.6 }}
		>
			<section className="mb-32 text-gray-800 text-center">
				<h2 className="text-4xl sm:text-6xl font-bold font-modernline mb-32">
					Testimonials
				</h2>

				<div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
					<motion.div
						variants={staggerTextContainer}
						initial="initial"
						whileInView={"animate"}
						viewport={{ once: true, amount: 0.3 }}
					>
						<motion.div variants={fadeInRight} className="mb-12 md:mb-0">
							<div className="flex justify-center mb-6">
								<img
									src={tiphaine}
									className="rounded-full shadow-lg w-32 h-32"
									alt="Tiphaine"
								/>
							</div>
							<h5 className="text-lg font-bold mb-4">Tiphaine</h5>
							{/* <h6 className="font-medium text-pourpre mb-4">
							Responsable de centre de formation
						</h6> */}
							<p className="mb-4">
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="quote-left"
									className="w-6 pr-2 inline-block"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
								>
									<path
										fill="currentColor"
										d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
									></path>
								</svg>
								J'ai passé une formation perfectionnement avec Beauté entre
								nous, Lisa est passionnante, pédagogue et bienveillante. Elle
								nous transmet sa passion et en sortant de formation on n'a
								qu'une seule envie c'est pratiquer. Merci encore, grâce à toi
								j'ai bien sûr appris de nouvelles techniques mais pas seulement
								j'ai également gagné en confiance.
							</p>
							<ul className="flex justify-center mb-0">
								<li>
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="star"
										className="w-4 text-yellow-500"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 576 512"
									>
										<path
											fill="currentColor"
											d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
										></path>
									</svg>
								</li>
								<li>
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="star"
										className="w-4 text-yellow-500"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 576 512"
									>
										<path
											fill="currentColor"
											d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
										></path>
									</svg>
								</li>
								<li>
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="star"
										className="w-4 text-yellow-500"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 576 512"
									>
										<path
											fill="currentColor"
											d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
										></path>
									</svg>
								</li>
								<li>
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="star"
										className="w-4 text-yellow-500"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 576 512"
									>
										<path
											fill="currentColor"
											d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
										></path>
									</svg>
								</li>
								<li>
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="star-half-alt"
										className="w-4 text-yellow-500"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 536 512"
									>
										<path
											fill="currentColor"
											d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
										></path>
									</svg>
								</li>
							</ul>
						</motion.div>
					</motion.div>

					<motion.div
						variants={staggerTextContainer}
						initial="initial"
						whileInView={"animate"}
						viewport={{ once: true, amount: 0.3 }}
					>
						<motion.div variants={fadeInRight} className="mb-12 md:mb-0">
							<div className="flex justify-center mb-6">
								<img
									src={fanny}
									className="rounded-full shadow-lg w-32 h-32"
									alt="Fanny"
								/>
							</div>
							<h5 className="text-lg font-bold mb-4">Fanny</h5>
							{/* <h6 className="font-medium text-pourpre mb-4">Graphic Designer</h6> */}
							<p className="mb-4">
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="quote-left"
									className="w-6 pr-2 inline-block"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
								>
									<path
										fill="currentColor"
										d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
									></path>
								</svg>
								J'ai bcp appris en terme de technique et de produits à utiliser.
								Lisa est une femme douce, bienveillante, patiente et qui nous
								met à l'aise tout de suite. Son lieu de formation est super
								sympa et on se sent tout de suite bien accueilli. Lisa est une
								maquilleuse très professionnelle et qui connait bien son métier
								mais surtout il est évident qu'elle aime transmettre sa passion.
								Je recommande cette formation à n'importe qui qui souhaiterait
								apprendre à maquiller ou se maquiller soi même. Merci encore
								Lisa pour tout ce que tu m'as apporté.
							</p>
							<ul className="flex justify-center mb-0">
								<li>
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="star"
										className="w-4 text-yellow-500"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 576 512"
									>
										<path
											fill="currentColor"
											d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
										></path>
									</svg>
								</li>
								<li>
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="star"
										className="w-4 text-yellow-500"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 576 512"
									>
										<path
											fill="currentColor"
											d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
										></path>
									</svg>
								</li>
								<li>
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="star"
										className="w-4 text-yellow-500"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 576 512"
									>
										<path
											fill="currentColor"
											d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
										></path>
									</svg>
								</li>
								<li>
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="star"
										className="w-4 text-yellow-500"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 576 512"
									>
										<path
											fill="currentColor"
											d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
										></path>
									</svg>
								</li>
								<li>
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="star"
										className="w-4 text-yellow-500"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 576 512"
									>
										<path
											fill="currentColor"
											d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
										></path>
									</svg>
								</li>
							</ul>
						</motion.div>
					</motion.div>

					<motion.div
						variants={staggerTextContainer}
						initial="initial"
						whileInView={"animate"}
						viewport={{ once: true, amount: 0.3 }}
					>
						<motion.div variants={fadeInRight} className="mb-12 md:mb-0">
							<div className="flex justify-center mb-6">
								<img
									src={camille}
									className="rounded-full object-cover shadow-lg w-32 h-32"
									alt="camille"
								/>
							</div>
							<h5 className="text-lg font-bold mb-4">Camille</h5>
							{/* <h6 className="font-medium text-pourpre mb-4">Graphic Designer</h6> */}
							<p className="mb-4">
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="quote-left"
									className="w-6 pr-2 inline-block"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
								>
									<path
										fill="currentColor"
										d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
									></path>
								</svg>
								Je tiens à te dire encore une fois un grand merci ! Tu m’as été
								d’un soutien et d’une aide immense 🙌🏻 Tu as su m’épauler et me
								guider dans la bonne direction, tu as su trouver les bons mots
								pour me faire prendre confiance et me permettre d’évoluer dans
								mon business ! Aujourd’hui mon agenda se remplit et je sais que
								c’est en partie grâce à toi et tout ce que tu m’as apporté !
								Lisa, merci. Au delà d’être une formatrice exceptionnelle tu es
								une femme incroyable, je suis heureuse et fière d’avoir pu
								travailler à tes côtés ❤️
							</p>
							<ul className="flex justify-center mb-0">
								<li>
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="star"
										className="w-4 text-yellow-500"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 576 512"
									>
										<path
											fill="currentColor"
											d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
										></path>
									</svg>
								</li>
								<li>
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="star"
										className="w-4 text-yellow-500"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 576 512"
									>
										<path
											fill="currentColor"
											d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
										></path>
									</svg>
								</li>
								<li>
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="star"
										className="w-4 text-yellow-500"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 576 512"
									>
										<path
											fill="currentColor"
											d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
										></path>
									</svg>
								</li>
								<li>
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="star"
										className="w-4 text-yellow-500"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 576 512"
									>
										<path
											fill="currentColor"
											d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
										></path>
									</svg>
								</li>
								<li>
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="star"
										className="w-4 text-yellow-500"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 576 512"
									>
										<path
											fill="currentColor"
											d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
										></path>
									</svg>
								</li>
							</ul>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</motion.div>
	);
};

export default Testimonial;

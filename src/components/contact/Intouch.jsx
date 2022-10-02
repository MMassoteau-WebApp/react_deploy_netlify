import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Intouch = () => {
	const logoSecondaire14 =
		"https://drive.google.com/uc?export=view&id=1-iblsluCbkU5DWCCQdghIr5lzAU819fC";

	const form = useRef();
	const [showModal, setShowModal] = useState(false);
	const [isDisable, setIsDisable] = useState(true);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const onChange = (e) => {
		if (e.target.value.length >= 4 && e.target.value.includes("@")) {
			setIsDisable(false);
		} else {
			setIsDisable(true);
		}
	};

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				process.env.REACT_APP_EMAIL_SERVICE_ID,
				process.env.REACT_APP_EMAIL_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_EMAIL_PUBLIC_KEY
			)
			.then(
				(result) => {
					// console.log(result.text);
					e.target.reset();
				},
				(error) => {
					// console.log(error.text);
				}
			);
		setIsDisable(true);
	};

	return (
		<>
			<div className="container my-24 px-6 mx-auto">
				<section className="mb-32 text-gray-800">
					<motion.div
						transition={{
							// x: { duration: 1, yoyo: Infinity, ease: "easeInOut" },
							y: { duration: 2, yoyo: Infinity, ease: "easeInOut" },
						}}
						// animate={{ y: ["0px", "-20px"], x: ["-20px", "20px"] }}
						animate={{ y: ["0px", "-20px"] }}
						className="my-12  flex items-center justify-center"
					>
						<img
							className="h-[150px]"
							src={logoSecondaire14}
							alt="beauté entre nous"
						/>
					</motion.div>
					<div className="flex flex-wrap">
						<div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-7/12 px-3 lg:px-6">
							<h2 className="text-3xl font-bold mb-6">
								Questions fréquemment posées
							</h2>
							<p className="font-bold mb-2">
								Pendant combien de temps ai-je accès à la formation ?
							</p>
							<p className="text-gray-500 mb-6">
								Tu as accès à vie, ainsi qu'aux mises à jour.
							</p>
							<p className="font-bold mb-2">À qui s'adresse la formation ?</p>
							<p className="text-gray-500 mb-6">
								Aux (futures) professionnelles de la beauté indépendantes
							</p>
							<p className="font-bold mb-2">
								Peut-on payer en plusieurs fois ?
							</p>
							<p className="text-gray-500 mb-6">
								Oui il est possible de payer en 3 fois.
							</p>

							<p className="font-bold mb-2">
								La formation est-elle remboursable ?
							</p>
							<p className="text-gray-500">
								Non elle ne l'est pas, car tu as accès à l'intégralité du
								contenu dès ton achat. N'hésites pas à me contacter pour toute
								question.
							</p>
						</div>
						<div className="grow-0 shrink-0 basis-auto w-full md:w-5/12 px-3 lg:px-6">
							<p className="font-bold mb-6">
								Vous n'avez pas trouvé votre réponse dans la FAQ ou vous voulez
								être contacté ?
							</p>
							<p className="text-gray-500 mb-6">
								Vous pouvez m'appeler au 07.78.38.59.68, me joindre à l'adresse
								email contact@lisa-gonzalvo.com ou encore m'envoyer un message
								en utilisant le formulaire :
							</p>
							<form ref={form} onSubmit={sendEmail}>
								<div className="form-group mb-6">
									<input
										type="text"
										className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										id="exampleInput7"
										placeholder="Nom et Prénom"
										name="user_name"
									/>
								</div>
								<div className="form-group mb-6">
									<input
										type="email"
										className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										id="exampleInput8"
										placeholder="Email"
										name="reply_to"
										onChange={onChange}
									/>
								</div>
								<div className="form-group mb-6">
									<input
										type="text"
										className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										id="exampleInput9"
										placeholder="Téléphone"
										name="phone_number"
									/>
								</div>
								<div className="form-group mb-6">
									<textarea
										className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										id="exampleFormControlTextarea13"
										rows="3"
										placeholder="Message"
										name="message"
									></textarea>
								</div>
								<button
									type="submit"
									value="Send"
									className={
										isDisable
											? "w-full px-6 py-2.5 bg-pourpre bg-opacity-60 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:scale-110 transition duration-150 ease-in-out cursor-not-allowed"
											: "w-full px-6 py-2.5 bg-pourpre text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:scale-110 transition duration-150 ease-in-out"
									}
									data-bs-toggle="modal"
									data-bs-target="#exampleModal"
									onClick={toggleModal}
									disabled={isDisable}
								>
									Envoyer
								</button>
							</form>
						</div>
					</div>
				</section>
			</div>

			{showModal && (
				<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
					<div className="w-[600px] flex flex-col">
						<button
							className="text-white text-xl place-self-end"
							onClick={toggleModal}
						>
							X
						</button>
						<div className="bg-white p-12 rounded-xl">
							<div className="grow-0 shrink-0 basis-auto w-full text-center">
								<h3 className="text-3xl font-modernline font-bold mb-6">
									Merci pour ton message
								</h3>
								<p className="text-gray-500">
									je te réponds dans les plus bref délais
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Intouch;

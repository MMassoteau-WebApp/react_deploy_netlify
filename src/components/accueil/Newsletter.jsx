import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Newsletter = () => {
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
				process.env.REACT_APP_NEWSLETTER_TEMPLATE_ID,
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
				<section className="mb-32 text-gray-800 text-center lg:text-left">
					<div className="flex flex-wrap justify-center">
						<div className="grow-0 shrink-0 basis-auto w-full lg:w-10/12 px-3">
							<div className="grid lg:grid-cols-2 gap-x-6 items-center">
								<div className="mb-10 lg:mb-0">
									<h2 className="text-3xl font-bold">
										Ne manquez aucun update.
										<br />
										<span className="text-pourpre">
											S'abonner à la newsletter
										</span>
									</h2>
								</div>

								<div className="mb-6 md:mb-0">
									<div className="md:flex flex-row">
										<form ref={form} onSubmit={sendEmail}>
											<input
												type="text"
												className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												placeholder="Entrer votre email"
												name="reply_to_newsletter"
												onChange={onChange}
											/>
											<button
												type="submit"
												className={
													isDisable
														? "inline-block px-7 py-3 bg-camel bg-opacity-70 text-white font-medium text-sm leading-snug uppercase rounded shadow-md  hover:transition ease-in-out delay-150 hover:scale-110 hover:shadow-lg cursor-not-allowed"
														: "inline-block px-7 py-3 bg-camel text-white font-medium text-sm leading-snug uppercase rounded shadow-md  hover:transition ease-in-out delay-150 hover:scale-110 hover:shadow-lg"
												}
												data-mdb-ripple="true"
												data-mdb-ripple-color="light"
												onClick={toggleModal}
												disabled={isDisable}
											>
												S'abonner
											</button>
										</form>
									</div>
								</div>
							</div>
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
									Merci pour ta demande de Newsletter
								</h3>
								<p className="text-gray-500">
									Tu peux m'envoyer stop à tout moment à l'adresse email de la
									newsletter
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Newsletter;

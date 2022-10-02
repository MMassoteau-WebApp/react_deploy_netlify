import React from "react";

const Signin = () => {
	const logo =
		"https://drive.google.com/uc?export=view&id=150e-nT6b4qwaNz4w9wqlEgOkeawoMvYF";
	return (
		<section className="h-full flex justify-center items-center gradient-form bg-gray-200 ">
			<div className="container py-12 px-6 h-full">
				<div className="h-full g-6 text-gray-800">
					<div className="xl:w-10/12">
						<div className="block bg-white shadow-lg rounded-lg">
							<div className="lg:flex  g-0">
								<div className="lg:w-6/12 px-4 md:px-0">
									<div className="md:p-12 md:mx-6">
										<div className="text-center">
											<img
												className="mx-auto w-48 pb-12"
												src={logo}
												alt="logo"
											/>
											{/* <h4 className="text-xl font-semibold mt-1 mb-12 pt-12 pb-1">
												Nous sommes Beauté Entre Nous
											</h4> */}
										</div>
										<form>
											<p className="mb-4">Merci de vous connecter</p>
											<div className="mb-4">
												<input
													type="text"
													className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
													id="exampleFormControlInput1"
													placeholder="Username"
												/>
											</div>
											<div className="mb-4">
												<input
													type="password"
													className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
													id="exampleFormControlInput1"
													placeholder="Password"
												/>
											</div>
											<div className="text-center pt-1 mb-12 pb-1">
												<div
													className="gradient-beaute-entre-nous inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md w-full mb-3"
													// type="button"
												>
													Se connecter
												</div>
												<a className="text-gray-500" href="#!">
													Mot de passe oublié?
												</a>
											</div>
											<div className="flex items-center justify-between pb-6">
												<p className="mb-0 mr-2">Pas encore inscrit?</p>
												<button
													type="button"
													className="inline-block px-6 py-2 border-2 border-zinc-600 text-zinc-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
													data-mdb-ripple="true"
													data-mdb-ripple-color="light"
												>
													Créer un compte
												</button>
											</div>
										</form>
									</div>
								</div>
								<div className="gradient-beaute-entre-nous lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
									<div className="text-white px-4 py-6 md:p-12 md:mx-6">
										<h4 className="text-xl font-semibold mb-6">
											Nous sommes plus qu'une simple entreprise
										</h4>
										<p className="text-sm">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Signin;

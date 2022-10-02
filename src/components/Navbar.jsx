import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
// import motion
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = React.useState(false);

	return (
		<nav className="w-full bg-white flex md:justify-center justify-between items-center p-4 sticky top-0 z-50">
			<ul className="font-marisa font-bold text-2xl md:flex justify-center items-center hidden list-none flex-row">
				<Link to="/">
					<li className="mx-10 text-center cursor-pointer transition ease-in-out delay-80 hover:scale-110">
						Accueil
					</li>
				</Link>
				<Link to="/formations">
					<li className="mx-10 text- text-center cursor-pointer transition ease-in-out delay-80 hover:scale-110">
						Formations
					</li>
				</Link>
				<Link to="/magnetic">
					<li className="mx-10 text-center cursor-pointer transition ease-in-out delay-80 hover:scale-110">
						Magnetic Makeup
					</li>
				</Link>
				<Link to="/business">
					<li className="mx-10 text-center cursor-pointer transition ease-in-out delay-80 hover:scale-110">
						Makeup Ton Business
					</li>
				</Link>
				<Link to="/ecoles">
					<li className="mx-10 text-center cursor-pointer transition ease-in-out delay-80 hover:scale-110">
						Écoles
					</li>
				</Link>
				<Link to="/contact">
					<li className="mx-10 text-center cursor-pointer transition ease-in-out delay-80 hover:scale-110">
						Contact
					</li>
				</Link>
				{/* <Link to="/signin">
					<li className="mx-10 text-center cursor-pointer transition ease-in-out delay-80 hover:scale-110 border-2 border-pourpre rounded-full p-3">
						<FaUserAlt />
					</li>
				</Link> */}
			</ul>

			<div className="flex relative">
				{!toggleMenu && (
					<HiMenuAlt4
						fontSize={28}
						className="md:hidden mr-10 cursor-pointer"
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{/* {toggleMenu && (
					<AiOutlineClose
						fontSize={28}
						className="md:hidden cursor-pointer"
						onClick={() => setToggleMenu(false)}
					/>
				)} */}
				{toggleMenu && (
					<>
						<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm h-screen w-full"></div>
						<motion.ul
							initial={{ x: 100 }}
							animate={{ x: 0 }}
							transition={{ type: "tween", duration: 0.2 }}
							className="z-10 font-marisa cursor-pointer text-xl text-white fixed -top-0 -right-2 p-3 w-[80vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md gradient-beaute-entre-nous duration-300"
						>
							<li className="text-xl w-full my-2">
								<AiOutlineClose onClick={() => setToggleMenu(false)} />
							</li>
							<Link to="/">
								<li
									onClick={() => setToggleMenu(false)}
									className="mx-10 cursor-pointer transition ease-in-out delay-80 hover:scale-110 hover:shadow-2xl my-6"
								>
									Accueil
								</li>
							</Link>
							<Link to="/formations">
								<li
									onClick={() => setToggleMenu(false)}
									className="mx-10 cursor-pointer transition ease-in-out delay-80 hover:scale-110 hover:shadow-2xl my-6"
								>
									Formations
								</li>
							</Link>
							<Link to="/magnetic">
								<li
									onClick={() => setToggleMenu(false)}
									className="mx-10 cursor-pointer transition ease-in-out delay-80 hover:scale-110 hover:shadow-2xl my-6"
								>
									Magnetic MakeUp
								</li>
							</Link>
							<Link to="/business">
								<li
									onClick={() => setToggleMenu(false)}
									className="mx-10 cursor-pointer transition ease-in-out delay-80 hover:scale-110 hover:shadow-2xl my-6"
								>
									MakeUp Ton Business
								</li>
							</Link>
							<Link to="/ecoles">
								<li
									onClick={() => setToggleMenu(false)}
									className="mx-10 cursor-pointer transition ease-in-out delay-80 hover:scale-110 hover:shadow-2xl my-6"
								>
									Écoles
								</li>
							</Link>
							<Link to="/contact">
								<li
									onClick={() => setToggleMenu(false)}
									className="mx-10 cursor-pointer transition ease-in-out delay-80 hover:scale-110 hover:shadow-2xl my-6"
								>
									Contact
								</li>
							</Link>
						</motion.ul>
					</>
				)}
			</div>
		</nav>
	);
};

export default Navbar;

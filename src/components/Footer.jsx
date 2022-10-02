import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
// import logo from "../assets/logo/logo.png";

const Footer = () => {
	const openInNewTab = (url) => {
		window.open(url, "_blank", "noopener,noreferrer");
	};
	return (
		<div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer text-white">
			<div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
				{/* <Link to="/">
					<div className="flex flex-[0.5] justify items-center">
						<img src={logo} alt="logo" className="w-32" />
					</div>
				</Link> */}
				<div className="font-marisa flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
					<Link to="/formations">
						<p className="text-base text-center mx-2 cursor-pointer">
							Formation
						</p>
					</Link>
					<Link to="/magnetic">
						<p className="text-base text-center mx-2 cursor-pointer">
							Magnetic Makeup
						</p>
					</Link>
					<Link to="/business">
						<p className="text-base text-center mx-2 cursor-pointer">
							Makeup Ton Business
						</p>
					</Link>
					<Link to="/ecoles">
						<p className="text-base text-center mx-2 cursor-pointer">École</p>
					</Link>
					<Link to="/contact">
						<p className="text-base text-center mx-2 cursor-pointer">Contact</p>
					</Link>
				</div>
			</div>

			<div className="flex justify-center items-center flex-col mt-5">
				<p className="font-modernline text-xl text-center">
					Venez Nous Suivre Sur Les Réseaux & MakeUp Ton Business
				</p>
				<div className="flex text-4xl text-coquilledoeuf">
					<div
						className="hover:scale-110 p-4 cursor-pointer"
						onClick={() =>
							openInNewTab("https://www.instagram.com/beaute_entrenous/")
						}
					>
						<FaInstagram />
					</div>
					{/* <div
						className="hover:scale-110 p-4 cursor-pointer"
						onClick={() => openInNewTab("https://www.youtube.com")}
					>
						<FaYoutube />
					</div> */}
					<div
						className="hover:scale-110 p-4 cursor-pointer"
						onClick={() =>
							openInNewTab(
								"https://www.linkedin.com/in/lisa-gonzalvo-93bab565/?originalSubdomain=fr"
							)
						}
					>
						<FaLinkedin />
					</div>
					<div
						className="hover:scale-110 p-4 cursor-pointer"
						onClick={() =>
							openInNewTab("https://www.facebook.com/lisa.gonzalvo.9")
						}
					>
						<FaFacebook />
					</div>
				</div>
			</div>

			<div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

			<div className="font-gill sm:w-[90%] w-full flex justify-between items-center mt-3">
				<p className="text-left text-xs">www.beauteentrenous.com</p>
				<p className="text-right text-xs">Tous droits réservés ©</p>
			</div>
		</div>
	);
};

export default Footer;

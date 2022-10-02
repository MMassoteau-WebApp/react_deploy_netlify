import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import {
	Accueil,
	Business,
	Contact,
	Ecoles,
	Formations,
	Magnetic,
	Boost,
	Revelation,
	Shine,
	Error,
	Test,
} from "./pages";

import { AnimatePresence } from "framer-motion";

import { Navbar, Footer } from "./components";

const App = () => {
	const location = useLocation();
	return (
		<div className="">
			<Navbar />
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Accueil />} />

					<Route path="/formations" element={<Formations />} />
					<Route path="/formations/revelation" element={<Revelation />} />
					<Route path="/formations/boost" element={<Boost />} />
					<Route path="/formations/shine" element={<Shine />} />

					<Route path="/magnetic" element={<Magnetic />} />

					<Route path="/business" element={<Business />} />

					<Route path="/ecoles" element={<Ecoles />} />

					<Route path="/contact" element={<Contact />} />
					<Route path="/test" element={<Test />} />

					<Route path="/*" element={<Error />} />
				</Routes>
			</AnimatePresence>
			<Footer />
		</div>
	);
};

export default App;

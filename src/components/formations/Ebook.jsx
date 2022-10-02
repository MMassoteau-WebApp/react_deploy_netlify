import React from "react";

import supports from "../../assets/image/supports.png";

const Ebook = () => {
	return (
		<div className="relative h-full pb-16 bg-camel bg-opacity-80">
			<div className=""></div>
			<h1 className="font-marisa text-center py-20 text-6xl capitalize">
				50 conseils & astuces pour t'aider à vivre de ta passion
			</h1>
			<div className="flex items-center px-12">
				<div className="flex-1 justify-center">
					<img src={supports} alt="supports" className="w-full object-cover" />
				</div>
				<div className="flex-1 flex-col pl-12">
					<div className="items-center space-y-5">
						<h1 className="uppercase text-2xl py-2 font-marisa">
							GUIDE OFFERT : 50 CONSEILS POUR UNE ENTREPRENEURE BEAUTÉ
							PASSIONNÉE
						</h1>

						<p className="py-2 text-justify ">
							Ce guide regroupe les conseils, astuces, stratégies et outils que
							j'aurais aimé avoir lors de mes premières années en tant que
							maquilleuse. De quoi refaire une beauté à ton bizz' et rencontrer
							le succès tant espéré !
						</p>
						<div className="py-2">
							<input
								type="text"
								className="w-full pl-4 py-2"
								placeholder="Prénom"
							/>
						</div>
						<div className="py-2">
							<input
								type="email"
								className="w-full pl-4 py-2"
								placeholder="Adresse Mail"
							/>
						</div>
						<div className="px-4 py-2 my-2 text-white bold rounded-2xl bg-pourpre text-center transition ease-in-out delay-150 hover:scale-110 hover:shadow-lg hover:shadow-camel">
							<span>Télécharge ton guide offert !</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ebook;

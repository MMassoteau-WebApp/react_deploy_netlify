/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				modernline: ["modernline"],
				marisa: ["marisa"],
				gill: ["gill"],
			},
			colors: {
				aubergine: "#3d1536",
				pourpre: "#955257",
				brique: "#c37864",
				camel: "#c48e75",
				vieuxrose: "#cf92a3",
				moutarde: "#e7aa55",
				coquilledoeuf: "#f7ddd0",
			},
			rotate: {
				2: "2deg",
			},
		},
	},
	plugins: [],
};

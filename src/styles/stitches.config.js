import { createStitches, globalCss } from "@stitches/core"
import { violet, slate } from "@radix-ui/colors"

export const { styled, css } = createStitches({
	media: {
		bp1: "(min-width: 640px)",
		bp2: "(min-width: 768px)",
		bp3: "(min-width: 1024px)",
	},
	theme: {
		colors: {
			bg: "#f8f5f4",
			bgCard: "#fff",
			bgHeader: " #ebebeb ",
			component: "#fff",
			theme: "#d4f8ff",
			btn: "ButtonCSS",
			...slate,
			...violet,
		},
		space: {
			m: "4px",
			1: "6px",
			2: "12px",
			3: "18px",
			4: "24px",
			5: "30px",
			6: "36px",
			7: "42px",
			8: "48px",
			9: "54px",
			8: "60px",
		},
		size: {
			1: "6px",
			2: "12px",
			3: "18px",
			4: "24px",
			5: "30px",
			6: "36px",
			7: "42px",
			8: "48px",
			9: "54px",
			8: "60px",
		},
		radii: {
			round: "9999px",
			1: "6px",
			2: "12px",
			3: "18px",
			4: "24px",
			5: "30px",
			6: "36px",
		},
		fonts: {
			default: "'Open Sans', sans-serif",
			title: "'Bebas Neue', cursive",
		},
		fontSizes: {
			sm: ".8rem",
			1: "1rem",
			2: "1.2rem",
			3: "1.4rem",
			4: "1.5rem",
			5: "1.7rem",
			6: "2rem",
		},
	},
	utils: {
		paddingX: (value) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		marginX: (value) => ({
			marginLeft: value,
			marginRight: value,
		}),
		paddingY: (value) => ({
			paddingTop: value,
			paddingBottom: value,
		}),
		marginY: (value) => ({
			marginTop: value,
			marginBottom: value,
		}),
		bRadiusBase: (value) => ({
			borderBottomLeftRadius: value,
			borderBottomRightRadius: value,
		}),
		bRadiusTop: (value) => ({
			borderTopLeftRadius: value,
			borderTopRightRadius: value,
		}),

		linearGradient: (value) => ({
			brackgroundImage: `linear-gradient(${value})`,
		}),
	},
})

export const globalStyles = globalCss({
	"html, body": {
		padding: 0,
		margin: 0,
		fontFamily: "$fonts$default",
	},

	"h1, h2, h3, h4, h5, h6": {
		fontFamily: "$fonts$title",
	},

	a: {
		color: "inherit",
		textDecoration: "none",
	},

	"*": { boxSizing: "border-box" },

	body: {
		width: "100vw",
		height: "100vh",
		backgroundColor: "$bg",
	},
})

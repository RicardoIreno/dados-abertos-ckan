import { useState, InputHTMLAttributes, useEffect } from "react"
import { css } from "../styles/stitches.config"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	selected: boolean
}

export default function TagSelectable({ name, selected, ...rest }: Props) {
	const [isSelected, setIsSelected] = useState(false)

	useEffect(() => {
		setIsSelected(true)
	}, [selected])

	return (
		<span className={TagSelectableCSS()}>
			<label className="label">
				<input type="checkbox" id={name} name={name} {...rest} />
				{name}
			</label>
		</span>
	)
}

const TagSelectableCSS = css("div", {
	margin: "8px 6px",

	label: {
		backgroundColor: "$theme",
		borderRadius: "$2",
		boxShadow: "0 2px 5px 1px rgba(64, 60, 67, 0.16)",
		fontFamily: "'IBM Plex Sans', sans-serif",
		padding: ".25rem .50rem",
		cursor: "pointer",
		transition: "all .3s ease",
	},

	input: {
		display: "none",
	},

	".label:hover": {
		backgroundColor: "$red",
	},

	".label:has(input:checked)": {
		backgroundColor: "$red",
	},

	// [`& .header`]: {
	// 	backgroundColor: "$component",
	// 	display: "flex",
	// 	flexDirection: "row",
	// 	justifyContent: "space-between",
	// 	alignItems: "center",
	// 	width: "100%",
	// 	height: "2rem",
	// 	paddingX: "$2",
	// 	bRadiusTop: "$3",
	// },
})

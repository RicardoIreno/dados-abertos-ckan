import { useState, InputHTMLAttributes, useEffect } from "react"
import { css } from "../styles/stitches.config"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	selected: boolean
}

export default function TagSelectable({ name, selected, ...rest }: Props) {
	const [isSelected, setIsSelected] = useState(selected)

	useEffect(() => {
		setIsSelected(selected)
	}, [selected])

	return (
		<>
			<label className={TagSelectableCSS()}>
				<input type="checkbox" id={name} name={name} {...rest} />
				{name}
			</label>
		</>
	)
}

const TagSelectableCSS = css("div", {
	backgroundColor: "$theme",
	borderRadius: "$2",
	boxShadow: "0 2px 5px 1px rgba(64, 60, 67, 0.16)",
	fontFamily: "'IBM Plex Sans', sans-serif",
	margin: ".25rem",
	padding: ".25rem .50rem",
	cursor: "pointer",

	[`& .header`]: {
		backgroundColor: "$component",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		height: "2rem",
		paddingX: "$2",
		bRadiusTop: "$3",
	},
})

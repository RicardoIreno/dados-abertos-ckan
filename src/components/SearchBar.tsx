import { InputHTMLAttributes } from "react"
import { css } from "../styles/stitches.config"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	value: string
}

const SearchBar = ({ value, ...rest }: Props) => {
	return (
		<div>
			<input
				className={SearchBarCSS()}
				type="search"
				id="SearchBar"
				value={value}
				placeholder="Pesquise por datasets ou palavras chave"
				{...rest}
			></input>
		</div>
	)
}

export default SearchBar

const SearchBarCSS = css("div", {
	color: "#c7c7c7",
	backgroundColor: "#fff",
	borderRadius: "$3",
	boxShadow: "0 2px 5px 1px rgba(64, 60, 67, 0.16)",
	fontSize: "$3",
	height: "3rem",
	marginY: "$3",
	outline: "0",
	padding: "0 1.6rem",
	width: "100%",
})

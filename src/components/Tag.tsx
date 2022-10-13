import { ReactNode } from "react"
import { css } from "../styles/stitches.config"

type Props = {
	children: ReactNode
}

const Tag = ({ children }: Props) => {
	return <span className={TagCSS()}>{children}</span>
}

export default Tag

const TagCSS = css("span", {
	width: "fit-content",
	fontFamily: "'IBM Plex Sans', sans-serif",
	fontSize: "$1",
	fontWeight: 500,
	padding: "$m $2",
	margin: "$m",
	borderRadius: "$2",
	backgroundColor: "$tag",
	boxShadow: "0 2px 0 1px rgba(0,0,0,0.08)",
})

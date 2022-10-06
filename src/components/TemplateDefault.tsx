import React, { ReactNode } from "react"
import { SiteHeader, SiteFooter } from "components"
import { css } from "../styles/stitches.config"

type Props = {
	children: ReactNode
}

export default function TemplateDefault({ children }: Props) {
	return (
		<>
			<SiteHeader />
			<div className={TemplateDefaultCSS()}>{children}</div>
			<SiteFooter />
		</>
	)
}

const TemplateDefaultCSS = css({
	width: "100%",
	height: "100%",
	paddingX: "$2",
	transition: "all .3s ease-in-out",

	"@bp1": {
		paddingX: "$4",
	},
	"@bp2": {
		paddingX: "$8",
	},
})

import React from "react"
import Link from "next/link"
import { css } from "../styles/stitches.config"
import Logo from "/public/logo_da.svg"
import Image from "next/image"

export default function SiteHeader() {
	return (
		<div className={Container()}>
			<Link href={"/"}>
				<h1>
					<Image src={Logo} layout="intrinsic" />
				</h1>
			</Link>
		</div>
	)
}

const Container = css({
	top: "0",
	left: "0",
	right: "0",
	width: "100%",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	backgroundColor: "$bg",
	boxShadow: "0px -6px 10px 0px #000000",
	marginBottom: "$3",
	padding: "0 $8",

	["& .title"]: {
		letterSpacing: ".4rem",
	},
})

const Nav = css("nav", {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	a: {
		marginInline: "$3",
		fontFamily: "$default",
		fontSize: "$2",
	},
})

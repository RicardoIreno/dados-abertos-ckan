import React from "react"
import Link from "next/link"
import { css } from "../styles/stitches.config"

export default function SiteHeader() {
	return (
		<div className={Container()}>
			<Link href={"/"}>
				<h1>
					<a className="title">Dados Abertos ❏</a>
				</h1>
			</Link>

			{/* <nav className={Nav()}>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/test">
					<a>Testes</a>
				</Link>
			</nav> */}
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
	padding: "0 $5",

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

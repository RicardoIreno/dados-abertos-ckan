import React from "react"
import Link from "next/link"
import { Tag } from "."
import { Dataset, Group } from "types"
import { css } from "../styles/stitches.config"
import { ButtonCSS } from "styles/ButtonCSS"
type Props = {
	dataset: Dataset
}

function Groups(g: Group[]) {
	switch (g.length) {
		case 0:
			return ""
		case 1:
			return (
				<p>
					<b>Grupo: </b>
					{g[0].title}
				</p>
			)

		default:
			return (
				<p>
					<b>Grupos: </b>
					{g.map((g) => {
						;<span>{g.title} </span>
					})}
				</p>
			)
	}
}

export default function DatasetCard({ dataset }: Props) {
	return (
		<div className={DatasetCardCSS()}>
			<Link href={`/datasets/${dataset.name}`}>
				<a>
					<h4 className={Title()}>{dataset.title}</h4>
				</a>
			</Link>

			<p>{dataset.notes}</p>

			{Groups(dataset.groups)}

			<p className="recurso">
				{dataset.num_resources}
				{dataset.num_resources == 1 ? " recurso" : " recursos"}
			</p>

			<div className="tagbox">
				{dataset.tags.map((t) => (
					<Tag key={t.id}> {t.display_name} </Tag>
				))}
			</div>

			{dataset.groups.map((g) => {
				;<img src={g.image_display_url} />
			})}

			<div className={BtnPlace()}>
				<a
					className={ButtonCSS()}
					href={`http://dadosabertos.unifesp.br/dataset/${dataset.name}`}
					target="blank"
				>
					Acessar
				</a>
			</div>
		</div>
	)
}

const DatasetCardCSS = css("div", {
	width: "100%",
	backgroundColor: "$bgCard",
	borderRadius: "$3",
	padding: "$2",
	marginBottom: "$2",

	"@bp1": {
		paddingX: "$3",
	},
	"@bp2": {
		paddingX: "$4",
	},

	[`& .recurso`]: {
		fontSize: "$3",
		fontFamily: "$title",
		color: "$subtitles",
	},
	[`& .tagbox`]: {
		display: "flex",
		flexWrap: "wrap",
	},
})

const Title = css({
	fontSize: "$4",
	color: "$titles",
	letterSpacing: ".08rem",
})

const BtnPlace = css("div", {
	display: "flex",
	justifyContent: "flex-end",
})

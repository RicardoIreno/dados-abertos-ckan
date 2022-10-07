import React, { useState, useEffect } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import TagSelectable from "./TagSelectable"
import { useQueryClient } from "react-query"
import { css } from "../styles/stitches.config"

type Props = {
	open?: boolean
	title: string
	tagArr?: string[]
}

export default function Collapsible({ open, title, tagArr }: Props) {
	const queryClient = useQueryClient()
	const [isOpen, setIsOpen] = useState(open)
	const [lastSelected, setLastSelect] = useState<string>("")
	const [tagsSelected, setTagsSelected] = useState<string[]>([])

	const handleFilterOpening = () => {
		setIsOpen((prev) => !prev)
	}

	function select(boo: boolean, str: string) {
		if (boo) setTagsSelected([...tagsSelected, str])
		else {
			const newArr = tagsSelected.filter((s) => s !== str)
			setTagsSelected(newArr)
		}
		setLastSelect(str)
	}

	useEffect(() => {
		queryClient.setQueryData("tags", tagsSelected)
	}, [tagsSelected])

	return (
		<div className={CollapsibleCSS()}>
			<div className="header">
				<h5 className="title">{title}</h5>
				<button className="btn" type="button" onClick={handleFilterOpening}>
					{!isOpen ? <FaChevronDown /> : <FaChevronUp />}
				</button>
			</div>

			<div className="body">
				{isOpen &&
					tagArr.map((t) => (
						<TagSelectable
							key={t}
							name={t}
							id={t}
							selected={false}
							onChange={(e) => {
								select(e.currentTarget.checked, e.currentTarget.name)
							}}
						/>
					))}
			</div>
		</div>
	)
}

const CollapsibleCSS = css("div", {
	width: "20rem",
	boxShadow: "0 2px 5px 1px rgba(64, 60, 67, 0.16)",
	borderRadius: "$3",
	marginBottom: "$1",

	["& .title"]: {
		fontSize: "1.1rem",
		letterSpacing: ".2rem",
	},

	[`& .header`]: {
		backgroundColor: "$component",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		height: "2.5rem",
		paddingX: "$2",
		bRadiusTop: "$3",
	},
	[`& .body`]: {
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap",
		padding: "$3 $1 $1 $1",
	},

	[`& .btn`]: {
		backgroundColor: "$component",
		border: "none",
	},
})

import { useEffect, useState } from "react"
import { useQuery, useQueryClient, useMutation } from "react-query"
import { DatasetCard } from "."
import { DatasetsFound } from "types"
import { css } from "../styles/stitches.config"

export default function DatasetsShowcase() {
	const queryClient = useQueryClient()
	const datasetQuery = useQuery<DatasetsFound>("datasets", { retry: false })

	const [datasetsFound, setDatasetsFound] = useState<DatasetsFound>(null)

	useEffect(() => {
		mutationDatasets.mutate()
	}, [datasetQuery.data])

	const mutationDatasets = useMutation("datasets", async () =>
		setDatasetsFound(queryClient.getQueryData("datasets"))
	)

	return (
		<div className={Container()}>
			{/* { datasetsFound == null ? <span></span> : 
        <h3>{datasetsFound.count} datasets encontrados</h3> } */}

			{datasetsFound == null ? (
				<span></span>
			) : (
				datasetsFound.results.map((d) => (
					<DatasetCard key={d.name} dataset={d} />
				))
			)}
		</div>
	)
}

const Container = css("div", {
	paddingBlock: "$2",
	marginLeft: "$1",
})

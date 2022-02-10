// import styled from 'styled-components'
// import { useEffect, useState } from 'react'
// import { Dataset, DatasetsFound } from '../../types/Types' 
// import { Wrapper } from '../atoms'
// import { DatasetCard } from '../molecules'

// const MyWrapper = styled(Wrapper)`
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `


// export default function DatasetsShowcase (d: DatasetsFound) {
//   const [datasets, setdatasets] = useState<Dataset[]>([])

//   return (
//     <MyWrapper>

//     { !countResults ? <span></span> : 
//       <h3>{countResults} datasets encontrados</h3> }

//     { !datasets ? <p>Pesquise por datasets</p> :
//         datasets.map( d => 
//           <DatasetCard key={d.name} dataset={d} /> ) }

//     </MyWrapper>
//   )
// }
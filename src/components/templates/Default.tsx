import styled from 'styled-components'
import React, { ReactNode, useState } from 'react'
import {MainSearchBar, Wrapper} from '../atoms/'
import {SiteHeader, SiteFooter} from '../organisms'
import { getAllDatasets } from '../../libs/datasetLib'
import {dehydrate, DehydratedState, QueryClient, useQuery} from 'react-query'


const MyWrapper = styled(Wrapper)`
	min-height: 100vh;
  align-items: center;
  font-size: 1.2rem;
  padding: 2rem;

`

type Props = {
  children: ReactNode
	dehydratedState?: DehydratedState
}


export async function getServerSideProps() {
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery('myData', getAllDatasets )

   return {
     props: {
       dehydratedState: dehydrate(queryClient),
     },
   }
}

function someFunction(t: string): string {
	return (t)
}

// useEffect( () => {
// 	if (value)
// }, [] )

export default function Default({children, dehydratedState}: Props ) {
	const [word, setWord] = useState('')

	return (
		<>
			<SiteHeader />
			
			<MyWrapper>
				<MainSearchBar 
					value={word}
					onChange={ (search: string) => setWord(search) }
				>
				</MainSearchBar>

					
					{children}
				{/* onChange={(e) => {setTime(e.target.value) }} */}

			</MyWrapper>

			<SiteFooter />
		</>
	)
}


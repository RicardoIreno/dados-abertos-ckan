import styled from 'styled-components'
import React, { ReactNode } from 'react'
import {MainSearchBar, Wrapper} from '../atoms/'
import {SiteHeader, SiteFooter} from '../organisms'
import { getAllDatasets } from '../../libs/datasetLib'
import {dehydrate, QueryClient, useQuery} from 'react-query'


const MyWrapper = styled(Wrapper)`
	min-height: 100vh;
  align-items: center;
  font-size: 1.2rem;
  padding: 2rem;

`

type Props = {
  children: ReactNode
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


export default function Default({children}: Props ) {
	const { data } = useQuery('myData', getAllDatasets)
	return (
		<>
			<SiteHeader />
			
			<MyWrapper>
				<MainSearchBar>
				</MainSearchBar>

					{children}
				{/* onChange={(e) => {setTime(e.target.value) }} */}

			</MyWrapper>

			<SiteFooter />
		</>
	)
}


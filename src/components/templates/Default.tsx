import React, { ReactNode } from 'react'
import {MainSearchBar, Wrapper} from '../atoms/'
import {SiteHeader, SiteFooter} from '../organisms'
import styled from 'styled-components'



const MyWrapper = styled(Wrapper)`
	min-height: 100vh;
  align-items: center;
  font-size: 1.2rem;
  padding: 2rem;

`


type Props = {
  children: ReactNode
}

export default function Default({children}: Props ) {
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


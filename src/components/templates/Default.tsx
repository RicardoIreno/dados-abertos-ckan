import styled from 'styled-components'
import React, { ReactNode } from 'react'
import {Wrapper} from 'components/atoms/'
import {SiteHeader, SiteFooter} from 'components/organisms'

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
			
						{children}

				</MyWrapper>
			<SiteFooter />
		</>
	)
}


import styled from 'styled-components'
import React, { ReactNode } from 'react'
import {
	AtomWrapper,
	OrgSiteHeader,
	OrgSiteFooter
} from 'components'


const MyWrapper = styled(AtomWrapper)`
	min-height: 100vh;
  align-items: center;
  font-size: 1.2rem;
  padding: 2rem;

`

type Props = {
  children: ReactNode
}


export default function TemplateDefault({children}: Props ) {
	return (
		<>
			<OrgSiteHeader />	

			<MyWrapper>
				{children}
			</MyWrapper>

			<OrgSiteFooter />
		</>
	)
}


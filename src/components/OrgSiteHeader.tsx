import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import {MolMenuHeader} from 'components'

const MyWrapper = styled.header`
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.headerbg};
  box-shadow: 0px -6px 10px 0px #000000;
  
  @media ${props => props.theme.breakpoint.mdUp} {
    flex-direction: row;
    justify-content: space-between;
    padding: .6rem 2rem;
  } 
  `

const SiteTitle = styled.span`
  font-size: ${props => props.theme.sizes.sitetitle};
  color: ${props => props.theme.colors.headings};
  font-family: ${props => props.theme.tipography.special};
  font-size: ${props => props.theme.sizes.special};
`

const OrgSiteHeader = () => {
	return (

		<MyWrapper>

			<Link href={'/'}>
				<a>
					<SiteTitle>Dados Abertos</SiteTitle>
				</a>
			</Link>

			<MolMenuHeader />
			
		</MyWrapper>
	)
}

export default OrgSiteHeader



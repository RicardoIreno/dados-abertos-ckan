import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import {configs, theme, breakpoint} from '../../configs' 
import {MenuHeader} from '../molecules'


// const TomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;

const MyWrapper = styled.header`
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.headerbg};
  box-shadow: 0px -6px 10px 0px #000000;
  
  @media ${breakpoint.mdUp} {
    flex-direction: row;
    justify-content: space-between;
    padding: .6rem 2rem;
  } 
  `

const SiteTitle = styled.span`
  font-size: ${theme.sizes.sitetitle};
  color: ${theme.colors.headings};
  font-family: ${theme.tipography.special};
  font-size: ${theme.sizes.special};
`

const SiteHeader = () => {
	return (

		<MyWrapper>

			<Link href={'/'}>
				<a>
					<SiteTitle>{configs.site.name}</SiteTitle>
				</a>
			</Link>

			<MenuHeader />
			
		</MyWrapper>
	)
}

export default SiteHeader



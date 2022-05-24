import React from 'react'
import Link from 'next/link'
import { SiteHeaderCSS, TemplateDefaultCSS } from 'styles'

export default function SiteHeader() {
	return (
		<div className={SiteHeaderCSS()}>
			<div className={TemplateDefaultCSS()}>
				<Link href={'/'}>
					<h1><a>
						Dados Abertos
					</a></h1>
				</Link>
				
				<nav>
					<Link href='/'>
						<a>Home</a>
					</Link>{' | '}
					<Link href='/test'>
						<a>Testes</a>
					</Link>
      	</nav>
			</div>
		</div>
	)
}

// const div = styled.header`
//   top: 0;
//   left: 0;
//   right: 0;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: ${props => props.theme.colors.headerbg};
//   box-shadow: 0px -6px 10px 0px #000000;
  
//   @media ${props => props.theme.breakpoint.mdUp} {
//     flex-direction: row;
//     justify-content: space-between;
//     padding: .6rem 2rem;
//   } 
//   `
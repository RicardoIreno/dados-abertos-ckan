import React from 'react'
import Link from 'next/link' 
import styled from 'styled-components'

const MyWrapper = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

`

const Nav = styled.nav`
  font-size: ${props => props.theme.sizes.h2};
  color: ${props => props.theme.colors.menus};
  font-family: ${props => props.theme.tipography.special};
  font-size: ${props => props.theme.sizes.special};
`



const MenuHeader = () => {
	return (

		<MyWrapper>
      <Nav>
        <Link href='/'>
          <a>Home</a>
        </Link>{' | '}
        <Link href='/test'>
          <a>Teste 1</a>
        </Link>{' | '}
        <Link href='/test2'>
          <a>Teste 2</a>
        </Link>{' | '}
        <Link href='/datasets'>
          <a>Datasets</a>
        </Link>
      </Nav>

		</MyWrapper>
	)
}

export default MenuHeader
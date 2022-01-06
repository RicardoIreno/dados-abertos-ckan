import React from 'react'
import Link from 'next/link' 
import styled from 'styled-components'
import {theme} from '../../configs'

const MyWrapper = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

`

const Nav = styled.nav`
  font-size: ${theme.sizes.h2};
  color: ${theme.colors.menus};
  font-family: ${theme.tipography.special};
  font-size: ${theme.sizes.special};
`



const MenuHeader = () => {
	return (

		<MyWrapper>
      <Nav>
        <Link href='/'>
          <a>Home</a>
        </Link>{' | '}
        <Link href='/datasets'>
          <a>Datasets</a>
        </Link>{' | '}
        <Link href='/about'>
          <a>About</a>
        </Link>
      </Nav>

		</MyWrapper>
	)
}

export default MenuHeader
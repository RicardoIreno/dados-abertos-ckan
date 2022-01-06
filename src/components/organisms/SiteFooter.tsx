import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'


const MyWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: .8rem;
  background-color: #575757;
  color: #fff;
`



const SiteFooter = () => {
	return (

		<MyWrapper>

			<span>Oi, eu sou o Footer</span>
      <Link href={'https://github.com/RicardoIreno'}>
        <a>Github</a>
      </Link>

		</MyWrapper>
	)
}

export default SiteFooter
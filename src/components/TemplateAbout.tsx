import React, {  ReactNode } from 'react'
import {
	AtomWrapper,
	TemplateDefault
} from 'components'
import styled from 'styled-components'

const MyWrapper = styled(AtomWrapper)`
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  padding: 2rem;

`


type Props = {
  children: ReactNode
}


export default function TemplateAbout({children}: Props )  {
	return (

		<TemplateDefault>

			<MyWrapper>

				{children}

			</MyWrapper>

		</TemplateDefault>
	)
}



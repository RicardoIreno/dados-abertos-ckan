import React, {  ReactNode } from 'react'
import Default from './Default'
import styled from 'styled-components'
import {Wrapper} from '../atoms/'

const MyWrapper = styled(Wrapper)`
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  padding: 2rem;

`


type Props = {
  children: ReactNode
}


export default function About({children}: Props )  {
	return (

		<Default>

			<MyWrapper>

				{children}

			</MyWrapper>

		</Default>
	)
}



import { ReactNode, useState } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const Wrapper = styled.span`
  width: fit-content;
  font-family: "'IBM Plex Sans', sans-serif";
  font-size: 1rem;
  font-weight: 600;
  padding: .25rem .50rem;
  margin: .25rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
`


const Tag = ({children}: Props) => {

  return (
    <Wrapper>
      {children}
    </Wrapper>

  )
}

export default Tag

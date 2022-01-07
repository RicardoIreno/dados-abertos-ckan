import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const Wrapper = styled.span`
  font-size: .9rem;
  padding: .25rem .50rem;
  margin: 3rem .25rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
`

const TagComponent = ({children}: Props) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>

  )
}

export default TagComponent

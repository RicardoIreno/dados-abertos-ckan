import { ReactNode, useState } from 'react'
import styled from 'styled-components'

export type TagCheckProps = {
  children: ReactNode
  selected?: boolean
}

const Wrapper = styled.span<TagCheckProps>`
  width: fit-content;
  font-family: "'IBM Plex Sans', sans-serif";
  font-size: 1rem;
  font-weight: 600;
  padding: .25rem .50rem;
  margin: .25rem;
  border-radius: 10px;
  background-color: #fff;
  color: ${props => props.selected ? '#000' : '#818181'};
  box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
  cursor: pointer;
`


const TagCheck = ({children, ...rest}: TagCheckProps) => {
  const [selected, setSelected] = useState(false)

  function handleChange(){
    setSelected(!selected)
    console.log(`selected: ${selected}`)
  }

  return (
    <Wrapper onClick={handleChange} selected={selected}>
      {children}
    </Wrapper>

  )
}

export default TagCheck

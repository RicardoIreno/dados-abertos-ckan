import React, { SelectHTMLAttributes, useState} from 'react'
import Checkbox from '../atoms/Checkbox'
import styled from 'styled-components'
import { CheckSelect } from '.'


const Me = styled.div`
    display: flex;
    width: 200px;
    min-height: 38px;
    flex-wrap: wrap;
    border: 1px black solid;
`

type ItemProps = {
  display?: boolean
}

const List = styled.ul<ItemProps>`
  display: ${props => props.display ? 'flex' : 'none'};
  flex-direction: column;
  width: 100%;
`


type Props = {
  name?: string
  options?: string[]
}


const FilterSelector = ({name, options, ...rest }: Props ) => {
  const [opened, setOpened] = useState(false)
  const [selection, setSelection] = useState([])

  function handleClick() {
    setOpened(!open)
    console.log(open)

  }

  function isItemInSelection(item: string) {
    if (selection.some(current => current === item )) {
      return true;
    }
    return false;
  }


  return (
    <Me onClick={() => handleClick}>

      <p>{name}</p>

      <List display={true}>
        {options.map( item => (
          <Checkbox name='item'/>
        ))}
      </List>

    </Me>

  )
}
export default FilterSelector
import { ChangeEventHandler, InputHTMLAttributes, ReactNode, useState } from 'react'
import styled from 'styled-components'
import Wrapper from '../atoms/Wrapper'

const Me = styled.input.attrs({type: 'checkbox'})`
  
`

type LabelProps = {
  checked?: boolean
}
const Label = styled.label<LabelProps>`
  font-weight: ${props => props.checked ? 400 : 600};
`

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Checkbox = ( {value, ...rest}: Props ) => {
  const [checked, setChecked] = useState(false);
   
   function handleCheckboxChange(){
      setChecked(!checked);
   }

  return(
    <Label checked={checked} onClick={handleCheckboxChange}><Me/>
      {value}
    </Label>
  )
}


export default Checkbox

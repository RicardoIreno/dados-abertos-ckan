import { ChangeEventHandler, InputHTMLAttributes, ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import Wrapper from '../atoms/Wrapper'

const Me = styled.input.attrs({type: 'checkbox'})`
  
`

type LabelProps = {
  checked?: boolean
}
const Label = styled.label<LabelProps>`
  font-weight: ${props => props.checked ? 600 : 400};
`

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Checkbox = ( {name, ...rest}: Props ) => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(name)
   
   function handleCheckboxChange(){
      setChecked(!checked);
   }

   useEffect( ()=>{
     if (checked) {

     }
   },[checked])



  return(
    <Label checked={checked} onClick={handleCheckboxChange}><Me/>
      {name}
    </Label>
  )
}


export default Checkbox

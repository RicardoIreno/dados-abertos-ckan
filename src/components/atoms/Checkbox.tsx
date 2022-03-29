import { ChangeEventHandler, InputHTMLAttributes, ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import Wrapper from '../atoms/Wrapper'

const Me = styled.input.attrs({type: 'checkbox'})`
  width: 1.4em;
  height: 1.4em;
  border: 1px solid #aaa;
  background: #FFF;
  border-radius: .2em;
  box-shadow: inset 0 1px 3px rgba(0,0,0, .1), 0 0 0 rgba(203, 34, 237, .2);
  -webkit-transition: all .275s;
  transition: all .275s;

`

type LabelProps = {
  checked?: boolean
}
const Label = styled.label<LabelProps>`
  font-weight: ${props => props.checked ? 600 : 400};
  margin: 3px;
  display: flex;
  align-content: center;

`

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  value: string
}

const Checkbox = ( {name, ...rest}: Props ) => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(name)
   
   function handleCheckboxChange(){
      setChecked(!checked)
      console.log('disparou!')
   }

   useEffect( ()=>{
     if (checked) {

     }
   },[checked])



  return(
    <Label onClick={handleCheckboxChange}>
      <Me 
        name={name} 
        value={value}
        checked={checked}
      />

      {name}
    </Label>
  )
}


export default Checkbox

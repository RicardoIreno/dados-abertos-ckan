import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import {AtomWrapper} from 'components'



const radios = '20px'

const MyWrapper = styled(AtomWrapper)`
  align-items: center;
  `
const Input = styled.input`
    width: 100%;
    height: 3rem;
    margin-top: 0.8rem;
    border-radius: ${radios};
    background-color: #fff;
    box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
    outline: 0;
    padding: 0 1.6rem;
    color: '#c7c7c7';
    font-size: 1.3rem;
`

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string
}


const MolMainSearchBar = ( {value, ...rest}: Props) => {
  return (

    <MyWrapper>
      <Input 
        type="search" 
        id="MolMainSearchBar"  
        value={value} 
        {...rest}
      >
          
      </Input>
  </MyWrapper>
  )
}


export default MolMainSearchBar
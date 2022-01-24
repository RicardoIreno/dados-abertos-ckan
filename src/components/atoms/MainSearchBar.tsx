import { ChangeEventHandler, ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import Wrapper from '../atoms/Wrapper'
import useDebounce from '../../libs/useDebounce'


const radios = '20px'

const MyWrapper = styled(Wrapper)`
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

type handleChange = (e: React.ChangeEvent<HTMLInputElement>) => void  
type eventType = ChangeEventHandler<HTMLInputElement>
// type eventType = React.ChangeEvent<HTMLInputElement>

type Props = {
  value: string
  change: handleChange
}

const MainSearchBar = ( {value, change}: Props) => {
  const [displayValue, setDisplayValue] = useState(value)
  const debounceChange = useDebounce(change, 500)

  function handleEvent( e: eventType ) {
    setDisplayValue( e. )
    debounceChange( ) 
   }    
  

  return (
    <MyWrapper>
    <Input 
      type="search" 
      id="MainSearchBar"  
      value={displayValue} 
      onChange={handleEvent}>
        
    </Input>
  </MyWrapper>
  )
}


export default MainSearchBar
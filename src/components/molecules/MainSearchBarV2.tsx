import { ChangeEventHandler, ReactNode, useState } from 'react'
import styled from 'styled-components'
import Wrapper from '../atoms/Wrapper'

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

// type eventType = React.ChangeEvent<HTMLInputElement>
type handleChange = (e: React.ChangeEvent<HTMLInputElement>) => void  

type Props = {
  value: string
}

const MainSearchBarV2 = ( {value,  }: Props) => {
  const [displayValue, setDisplayValue] = useState(value);

  function handleSearch( value: string ) {
    setDisplayValue(value);
  }


  return (

    <MyWrapper>
      {/* <form onSubmit={ event }>
        <Input 
          type="search" 
          id="MainSearchBarV2"  
          value={displayValue}
        >   
        </Input>

        <button type='submit'></button>
      </form> */}

  </MyWrapper>
  )
}


export default MainSearchBarV2
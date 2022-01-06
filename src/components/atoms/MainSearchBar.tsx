import { ReactNode } from 'react'
import styled from 'styled-components'
import Wrapper from '../atoms/Wrapper'

const radios = '20px'

const MyWrapper = styled(Wrapper)`
  align-items: center;
`

const Input = styled.input`
    width: 100%;
    height: 4rem;
    margin-top: 0.8rem;
    border-radius: ${radios};
    background-color: #fff;
    box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
    outline: 0;
    padding: 0 1.6rem;
    color: '#c7c7c7';
    font-size: 1.3rem;
`

type Props = {
  children: ReactNode
}

const MainSearchBar = ({children, ...rest}: Props) => {
  return (
    <MyWrapper>
    <Input className="input" type="text" id="MainSearchBar" {...rest}></Input>
  </MyWrapper>
  )
}


export default MainSearchBar
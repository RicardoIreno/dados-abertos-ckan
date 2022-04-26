import { ReactNode, useState, InputHTMLAttributes, useEffect } from 'react'
import styled from 'styled-components'


const Label = styled.label`
  background-color: #d8fbff;
  border-radius: 10px;
  box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
  font-family: "'IBM Plex Sans', sans-serif";
  margin: 3px;
  padding: 5px 10px;
  cursor: pointer;
`;


interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  selected: boolean
}

const AtomTagSelectable = ({ name, selected, ...rest }: Props) => {
  const [isSelected, setIsSelected] = useState(selected)

  useEffect( () => {
    setIsSelected(selected)
  },[selected] )

  return (
    <>
      <Label>  
        <input type="checkbox" id={name} name={name} {...rest} />
        {name}
      </Label>
    </>
  );
};

export default AtomTagSelectable;

import { ReactNode, useState, InputHTMLAttributes } from 'react'
import styled from 'styled-components'


type LabelProps = {
  htmlfor: string;
  checked?: boolean; 

};

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 0;
  opacity: 0;
`

const Label = styled.label<LabelProps>`
  background-color: #d8fbff;
  border-radius: 10px;
  box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
  font-family: "'IBM Plex Sans', sans-serif";
  font-weight: ${(props) => (props.checked ? 600 : 400)};
  margin: 3px;
  padding: 5px 10px;
  cursor: pointer;
`;


interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  value: string;
  // checked?: boolean;
}

const TagSelectable = ({ name, id, ...rest }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [value] = useState(name);

  // const [ arrTest, setArrTest ] = useStase([])
  


  function handleChecked() {
    setIsChecked(!isChecked);
    console.log(`toggle disparado | checked: ${isChecked}`)

  }

  return (
    <>
      <Checkbox 
        id={id} 
        name={name} 
        value={value} 
        defaultChecked={isChecked}
      ></Checkbox>

      <Label 
        htmlfor={id} 
        checked={isChecked} 
        onClick={handleChecked} >
        {value}
      </Label>
    </>
  );
};

export default TagSelectable;

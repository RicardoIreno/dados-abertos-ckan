import { useState, InputHTMLAttributes, useEffect } from 'react'
import { TagSelectableCSS } from 'styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  selected: boolean
}

export default function TagSelectable ({ name, selected, ...rest }: Props) {
  const [isSelected, setIsSelected] = useState(selected)

  useEffect( () => {
    setIsSelected(selected)
  },[selected] )

  return (
    <>
      <label className={TagSelectableCSS()}>  
        <input type="checkbox" id={name} name={name} {...rest} />
        {name}
      </label>
    </>
  );
};


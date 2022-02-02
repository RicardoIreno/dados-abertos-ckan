import React, { SelectHTMLAttributes, useState} from 'react'
import Checkbox from '../atoms/Checkbox'


interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  options: string[]
}

const CheckSelect = ({name, options, ...rest }: SelectProps ) => {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])


  return (
    <select className="select" name={name} {...rest}>
      <option value="" disabled hidden>Tags</option>
      <option value="test">Tags</option>

      {options.map( item => {
        <option key={item} >
          {item}
          <Checkbox key={item} name={item} /> 
        </option> 
        })}
    </select>

    // <option 
    // key={option.value} 
    // value={option.value}>
    // {option.value}
    // </option>

  )
}
export default CheckSelect
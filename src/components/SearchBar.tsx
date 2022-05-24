import { InputHTMLAttributes } from 'react'
import { SearchBarCSS } from 'styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string
}
 
const SearchBar = ( {value, ...rest}: Props) => {
  return (
    <div>
      <input className={SearchBarCSS()} 
        type="search" 
        id="SearchBar"  
        value={value} 
        placeholder="Pesquise por datasets ou palavras chave"
        {...rest}
      >         
      </input>
  </div>
  )
}


export default SearchBar
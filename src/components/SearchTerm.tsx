import { useQueryClient } from 'react-query'
import { useEffect, useState } from 'react'
import { SearchBar } from 'components'
import useDebounce from 'utils/useDebounce'

export default function SearchTerm() {
  const queryClient = useQueryClient()
  const [term, setTerm] = useState('')
  const [displayValue, setDisplayValue ] = useState('')
  const debouncedChange = useDebounce( (str) => setTerm(str), 1000 )

  useEffect( () => {
    if (term === '') queryClient.resetQueries('datasets')
    queryClient.setQueryData('term', term )
    console.log(`useEffect do SearchTerm - term: ${term}`)
  
  },[term] )

  function changeHandler( str: string) {
    setDisplayValue(str)
    debouncedChange(str)
  }

  return (
    <>
      <SearchBar 
				value={displayValue}
				onChange={ e => changeHandler(e.target.value) }
			>
  		</SearchBar>
    </>
  )
}

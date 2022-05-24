import React, { useState, useEffect } from "react"
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'
import TagSelectable from "./TagSelectable"
import {useQuery, useQueryClient, useMutation} from 'react-query'
import {CollapsibleCSS} from 'styles'

type Props = {
  open?: boolean;
  title: string;
  tagArr?: string[]
}

export default function Collapsible({ open, title, tagArr }: Props ) {
  const queryClient = useQueryClient()
  const [isOpen, setIsOpen] = useState(open)
  const [lastSelected, setLastSelect] = useState<string>('')
  const [tagsSelected, setTagsSelected] = useState<string[]>([])

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev)
  };

  function select(boo: boolean, str: string ) { 

    if (boo) setTagsSelected([...tagsSelected, str])
    else {
      const newArr = tagsSelected.filter( (s) => s !== str )
      setTagsSelected(newArr)
    }
    setLastSelect(str)
  }

  useEffect( () => {
    queryClient.setQueryData('tags', tagsSelected )

  },[tagsSelected] )
  
  
  return (
    <div className={CollapsibleCSS()}>
        <div className="header">
          <h6>{title}</h6>
          <button className="btn" type="button" onClick={handleFilterOpening}>
            {!isOpen ? ( <FaChevronDown /> ) : (
              <FaChevronUp />)}
          </button>
        </div>

      <div className="body">
        {isOpen && tagArr.map( t =>
          <TagSelectable key={t} name={t} id={t} selected={false}            
            onChange={ (e) => { 
              select(
                e.currentTarget.checked, 
                e.currentTarget.name) 
            }}
          />
        )}


      </div>
    </div>
  )
}




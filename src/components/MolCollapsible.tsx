import React, { useState } from "react"
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'
import styled from 'styled-components'
import AtomTagSelectable from "./AtomTagSelectable"
import {useQuery, useQueryClient, useMutation} from 'react-query'

const Wrapper = styled.div`
  width: 20rem;
  height: 5rem;
`
const Header = styled.div`
  width: 20rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  padding: .25rem .7rem;
  align-items: center;
  box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
  border-radius: 20px;
  margin-bottom: .5rem;
`

const Body = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0.25rem;
`
const Btn = styled.button`
  background-color: #fff;
  border: none;
`

type Props = {
  open?: boolean;
  title: string;
  tagArr?: string[]
}

const MolCollapsible = ({ open, title, tagArr }: Props ) => {
  const [isOpen, setIsOpen] = useState(open)
  const queryClient = useQueryClient()
  const {data} = useQuery('tags-used')

  const [tagsSelected, setTagselected] = useState<string[]>([])


  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev)
  };

  function select(boo: boolean, str: string ) {
    if (boo) 
      setTagselected([...tagsSelected, str])
    
    else {
      const newArr = tagsSelected.filter( (s) => s !== str )
      setTagselected(newArr)
    }
    console.log(`arr: ${tagsSelected} `)
  }
  
  
  return (
    <Wrapper>
        <Header>
          <h6>{title}</h6>
          <Btn type="button" onClick={handleFilterOpening}>
            {!isOpen ? ( <FaChevronDown /> ) : (
              <FaChevronUp />)}
          </Btn>
        </Header>

      <Body>
        {isOpen && tagArr.map( t =>
          <AtomTagSelectable key={t} name={t} id={t} selected={false}
            onChange={ (e) => { 
              select(
                e.currentTarget.checked, 
                e.currentTarget.name) 
              }}
          />
        )}


      </Body>
    </Wrapper>
  )
}

export default MolCollapsible;



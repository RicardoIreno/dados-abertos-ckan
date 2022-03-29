import React, {ChangeEvent, Children, useState } from "react"
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'
import styled from 'styled-components'
import TagSelectable from "components/atoms/TagSelectable"
import {Tag} from 'types'
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
  children?: React.ReactNode
  title: string;
  tagArr?: Tag[]
}

const Collapsible = ({ open, children, title, tagArr }: Props ) => {
  const [isOpen, setIsOpen] = useState(open)
  const queryClient = useQueryClient()
  const {data} = useQuery('tags-used')
  const [tagsSelected, setTagselected] = useState<string[]>([])
  const [allTags, setAllTags] = useState()

  


  // const arrayChildren = Children.toArray(children);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev)
  };

  function select( e:any ){
    setTagselected([ ...tagsSelected, e.target.event ])
    console.log(`select disparado | str: ${tagsSelected} `)
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

        {tagsSelected.map( t =>
          <p>t</p>
        )}
        
        {isOpen && tagArr.map( t =>

          <TagSelectable 
            key={t.name}
            ref={t.name}
            name={t.display_name}
            value={t.name}
            id={t.id}
            onChange={ select }
          />
        )}


      </Body>
    </Wrapper>
  )
}

export default Collapsible;



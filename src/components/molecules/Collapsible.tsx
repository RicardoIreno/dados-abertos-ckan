import React, {Children, useState } from "react"
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'
import styled from 'styled-components'
import TagCheck, {TagCheckProps} from "components/atoms/TagCheck"
import {Tag} from 'types'
import {useQuery, useQueryClient, useMutation} from 'react-query'

const CWrapper = styled.div`
  width: 20rem;
  height: 5rem;
`
const CHeader = styled.div`
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
const CSelected = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`

const CBody = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0.25rem;
  
`
const CBtn = styled.button`
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
  const [tagsSelected, setTagselected] = useState<Tag[]>([])
  const [allTags, setAllTags] = useState()


  // const arrayChildren = Children.toArray(children);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev)
  };

  return (
    <CWrapper>
        <CHeader>
          <h6>{title}</h6>
          <CBtn type="button" onClick={handleFilterOpening}>
            {!isOpen ? ( <FaChevronDown /> ) : (
              <FaChevronUp />)}
          </CBtn>
        </CHeader>

      <CBody>
        {tagsSelected.map( t =>
          <TagCheck key={t.name}>
              {t.display_name}
          </TagCheck>  )}
        
        {isOpen && tagArr.map( t =>

          <TagCheck key={t.name}>
              {t.display_name}
          </TagCheck>  

        )}


      </CBody>
    </CWrapper>
  )
}

export default Collapsible;



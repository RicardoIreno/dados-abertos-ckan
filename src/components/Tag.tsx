import { ReactNode, useState } from 'react'
import { TagCSS } from 'styles'

type Props = {
  children: ReactNode
}

const Tag = ({children}: Props) => {

  return (
    <span className={TagCSS()}>
      {children}
    </span>

  )
}

export default Tag
import React, { ReactNode } from 'react'
import {
	SiteHeader,
	SiteFooter
} from 'components'
import { TemplateDefaultCSS } from 'styles'

type Props = {
  children: ReactNode
}

export default function TemplateDefault({children}: Props ) {
	return (
		<>
			<SiteHeader />	
			<div className={TemplateDefaultCSS()}>
					{children}
			</div>
			<SiteFooter />
		</>
	)
}


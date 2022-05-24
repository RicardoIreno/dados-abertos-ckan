import React, {  ReactNode } from 'react'
import {
	TemplateDefault
} from 'components'

type Props = {
  children: ReactNode
}

export default function TemplateAbout({children}: Props )  {
	return (
		<TemplateDefault>
			<div>
				{children}
			</div>
		</TemplateDefault>
	)
}



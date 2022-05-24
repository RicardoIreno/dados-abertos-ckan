import { styled, css } from "./stitches.config";

export const CollapsibleCSS = css('div', {
  width: '16rem',
  boxShadow: '0 2px 5px 1px rgba(64, 60, 67, 0.16)',
  borderRadius: '$3',
  marginBottom: '$1',
  
  [`& .header`]: {
    backgroundColor: '$component',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '2rem',
    paddingX: '$2',
    bRadiusTop: '$3'
  },
  [`& .body`]: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    padding: '$3 $1 $1 $1',
  },

  [`& .btn`]: {
    backgroundColor: '$component',
    border: 'none',
  },


})

import { css } from "./stitches.config";

export const TagSelectableCSS = css('div', {
  backgroundColor: '$theme',
  borderRadius: '$2',
  boxShadow: '0 2px 5px 1px rgba(64, 60, 67, 0.16)',
  fontFamily: "'IBM Plex Sans', sans-serif",
  margin: '.25rem',
  padding: '.25rem .50rem',
  cursor: 'pointer',
  
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
})
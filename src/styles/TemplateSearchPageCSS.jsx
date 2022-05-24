import { css } from "./stitches.config";

export const TemplateSearchPageCSS = css('div', {
  width: '100%',

  [`& .grid`]: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    // gridTemplateColumns: '300px 1fr 1fr',
    // gridTemplateAreas: "left right right",  
  },
  
  [`& .left`]: {
    width: '300px',
    marginRight: '$4'
  
  },

  [`& .right`]: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },

})
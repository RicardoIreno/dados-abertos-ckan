import { styled, css } from "./stitches.config";

export const DatasetCardCSS = css('div', {
  width: '100%',
  backgroundColor:"$bgCard",
  borderRadius: '$3',
  padding: '$2',
  marginY: '$2',

  '@bp1': {
    paddingX: "$3",
  },
  '@bp2': {
    paddingX: "$4",
  },

  [`& .recurso`]: {
    fontSize: '$3',
  },

})


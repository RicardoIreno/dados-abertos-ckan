import { styled, css } from "./stitches.config";

export const TemplateDefaultCSS = css({
  width: '100%',
  height: '100%',
  paddingX: "$2",
  transition: "all .3s ease-in-out",

  '@bp1': {
    paddingX: "$4",
  },
  '@bp2': {
    paddingX: "$8",
  }
 
})



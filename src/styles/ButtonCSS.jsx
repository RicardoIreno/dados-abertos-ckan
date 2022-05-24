import { styled } from "./stitches.config";
import { css } from "@stitches/core";

export const ButtonCSS = css({
  backgroundColor: "$baseGray",
  borderRadius: "$round",
  fontSize: "$3",
  paddingX: "$2",

  '&:hover': {
    backgroundColor: "$slate4",
  },

  variants: {
    size: {
      1: {
        height: '$4',
        fontsize: '$1',
      },
      2: {
        height: '$8',
        fontSize: '$3',
      }
    },
    myColor: {
      violet: {
        backgroundColor: "$violet7",
        color: 'white',
        '&:hover': {
          backgroundColor: "$violet8",
        },
      },
      gray: {
        backgroundColor: "$slate3",
        '&:hover': {
          backgroundColor: "$slate4",
        },
      },
    },

    outlined: {
      true: {
        border: '2px solid ',
        backgroundColor: 'transparent',
      }
    },

    
  }, // variants
  
  compoundVariants: [{
    myColor: 'gray',
    outlined: true,
    css: {
      borderColor: "$slate7",
    }
  },{
    myColor: 'violet',
    outlined: true,
    css: {
      borderColor: "$violet7",
      color: "$violet7",
      '&:hover': {
        color: 'White',
      }
    }
  }
],

  defaultVariants: {
    myColor: 'gray',
    size: '1',
  }

})

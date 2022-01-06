type sizesProps = {
  sm: number
  md: number
  bg: number
  gg: number
}

const sizes: sizesProps = {
  sm: 425,
  md: 1024,
  bg: 1440,
  gg: 2560
}

const breakpoint = {
  sm:   `(max-width: ${sizes.sm}px)`,
  smUp: `(min-width: ${sizes.sm + 1}px)`,
  md:   `(max-width: ${sizes.md}px)`,
  mdUp: `(min-width: ${sizes.md + 1}px)`,
  bg:   `(max-width: ${sizes.bg}px)`,
  bgUp: `(min-width: ${sizes.bg + 1}px)`,
};


export default breakpoint
//   @media ${breakpoint.smUp} {...}
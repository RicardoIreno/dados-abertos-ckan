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


const theme = {
  colors: {
    body: '#fafafa',
    background: '#fff',
    text: '#000',
    heading1: '#474747',
    headings: '#474747',
    menus: '#6b6b6b',
    DatasetCardTitle: '#000',
    headerbg: '#fff',

  },
  sizes: {
    h1: '2rem',
    h2: '1.7rem',
    h3: '1.4rem',
    h4: '1.2rem',
    sitetitle: '1.4',
    special:'1.1rem',
    hmbottom: '1.2rem' ,
    DatasetCardTitle: '1.5rem',

  },
  tipography: {
    h1: "'Oswald', sans-serif",
    headings: "'Oswald', sans-serif",
    text: "'IBM Plex Sans', sans-serif",
    special: "'Oswald', sans-serif",
  },
  breakpoint: {
    sm:   `(max-width: ${sizes.sm}px)`,
    smUp: `(min-width: ${sizes.sm + 1}px)`,
    md:   `(max-width: ${sizes.md}px)`,
    mdUp: `(min-width: ${sizes.md + 1}px)`,
    bg:   `(max-width: ${sizes.bg}px)`,
    bgUp: `(min-width: ${sizes.bg + 1}px)`,
  }
}
//   @media ${breakpoint.smUp} {...}

export default theme
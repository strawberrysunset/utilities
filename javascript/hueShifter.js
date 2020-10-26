const  convert = require('color-convert')
const hues = {
  purple: 252, 
  blue: 218, 
  pink: 307, 
  green: 144, 
  orange: 37
}

const neutralShades = {
  'dark' : {
    '100': '#0c0c0c',
    '200': '#0e0e0e',
    '300': '#101010',
    '400': '#121212',
    '500': '#141414',
    '600': '#161616',
    '700': '#2A1D2A',
    '800': '#1a1a1a',
    '900': '#1c1c1c',
    '1000': '#1e1e1e',
    '1100': '#202020',
    '1200': '#8b8b8b',
    '1300': '#a2a2a2',
    '1400': '#b9b9b9',
    '1500': '#d1d1d1',
    '1600': '#e8e8e8'
  }
}

const colors = {
  red : '#c65960',
  green : '#3aaa69'
}


function createColorPalette (neutralShades, targetHue, colors) {
  let palette = {}
  palette['neutral']  = {}
  
  for (const num in neutralShades) {
    const shadeHSL = convert.hex.hsl(neutralShades[num])
    palette['neutral'][num] = `#${convert.hsl.hex([targetHue, shadeHSL[1], shadeHSL[2]])}`
  }
  for (const color in colors) {
    const hsl = convert.hex.hsl(colors[color])
    palette[color] = {}
    palette[color][100] = `#${convert.hsl.hex([hsl[0] + (0.1 * (targetHue - hsl[0])), hsl[1], hsl[2]])}`
  }
  return palette;
}

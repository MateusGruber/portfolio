const colors = {
    background: '#130731',
    pallet: {
        black: '#130731',
        darkPurple: '#2F195B',
        purple: '#562C80',
        lightBlue: '#42C8F9',
        lightPurple: '#C54BF8',
        blue: "#286CC6"
    }
}
  
const breakpoints = {
    small: 768,
    large: 1120,
}

const gutters = {
    small: 12,
    medium: 18,
    large: 24,
    extraLarge: 30,
}

const radius = {
    medium: 43,
}

const queries = {
    small: `@media (max-width: ${breakpoints.small}px)`,
    medium: `@media (min-width: ${breakpoints.small + 1}px)`,
    large: `@media (min-width: ${breakpoints.large}px)`,
}

export default { colors, breakpoints, gutters, radius, queries }
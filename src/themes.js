
import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  trello: {
    appBarHeight: '48px',
    boardBarHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
        // Add other palette properties heree
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
        // Add other palette properties here
      }
    }
  }

})
export default theme
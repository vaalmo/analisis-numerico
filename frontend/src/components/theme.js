import { extendTheme } from '@chakra-ui/react'
import { buttonTheme } from './components/button'

export const theme = extendTheme({
  components: { Button: buttonTheme },
})
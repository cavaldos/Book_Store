import SimpleBar from 'simplebar-react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './helpers'
import Cover from './Cover'
import Main from './Main'

export default function UserProfile() {
    return (
        <SimpleBar style={{ maxHeight: '100vh' }}>
            <ChakraProvider theme={theme}>
              <Cover/>
              <Main/>
            </ChakraProvider>
        </SimpleBar>
      
    )
}


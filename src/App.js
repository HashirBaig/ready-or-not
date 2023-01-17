// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { ChakraProvider, theme } from "@chakra-ui/react"
import Header from "./components/layout/Header"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  )
}

export default App

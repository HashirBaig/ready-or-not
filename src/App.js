// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { ChakraProvider, theme } from "@chakra-ui/react"
import Header from "./components/layout/Header"
import Main from "./components/layout/Main"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Main>
        <p>Main</p>
      </Main>
    </ChakraProvider>
  )
}

export default App

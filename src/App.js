// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { ChakraProvider, theme } from "@chakra-ui/react"
import Header from "./components/layout/Header"
import Main from "./components/layout/Main"
import Board from "./components/Board"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Main>
        <Board />
      </Main>
    </ChakraProvider>
  )
}

export default App

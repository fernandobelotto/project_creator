import { ChakraProvider, ColorModeScript, extendTheme, ThemeConfig } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"

import './index.css'

ReactDOM.render(
  <>
    <React.StrictMode>
      <ChakraProvider >
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </>
  ,
  document.getElementById("root"),
)
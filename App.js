import React from "react";
import {StylesProvider} from '@material-ui/styles'
import {CssBaseline} from '@material-ui/core'
import globalstyle from "./commons/styles/global-style";
import main from '../containers/main'

function App() {
  return (
    <StylesProvider injectFirst>
    <CssBaseline />
    <globalstyle />
    <main />
    </StylesProvider>
  );
}

export default App;

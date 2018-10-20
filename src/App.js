import React from "react";
import {Route} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import {createMuiTheme} from '@material-ui/core/styles';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import HomePage from "./HomePage";
// import PermanentDrawer from "./PermanentDrawer"
import MailTemplatesPage from "./MailTemplatesPage";
import CarBrands from "./CarBrands";

const theme = createMuiTheme({
    palette: {
        primary: {main: '#039be5'},
        secondary: {main: '#0091ea'},
    },
});

const App = () => (
    <MuiThemeProvider theme={theme}>
        <React.Fragment>
            <CssBaseline />
            <Route path="/" exact component={HomePage}/>
            <Route path="/mailTemplates" exact component={MailTemplatesPage}/>
            <Route path="/carBrands" exact component={CarBrands}/>
        </React.Fragment>
    </MuiThemeProvider>
);

export default App;

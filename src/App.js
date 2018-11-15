import React from "react";
import {Route} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import {createMuiTheme} from '@material-ui/core/styles';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import HomePage from "./HomePage";
// import PermanentDrawer from "./PermanentDrawer"
import AppPage from "./AppPage";
import LoginPage from './LoginPage';
import {restSession} from "./rest2/RestSession";

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
            <Route path="/login" component={LoginPage}/>
            <Route path="/app" exact component={AppPage} />
            <Route path="/app" component={AppPage} />
        </React.Fragment>
    </MuiThemeProvider>
);

export default App;

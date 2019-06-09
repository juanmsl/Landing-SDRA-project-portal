import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages';
import { WebsiteContainer } from "./components";


class App extends React.Component {

    renderHome = (props) => {
        return <HomePage {...props} {...this.state} />
    };

    renderRoutes = () => {
        return (
            <WebsiteContainer logout={this.logout}>
                <Switch>
                    <Route exact path="/~CIS1830CP02" render={this.renderHome} />
                    <Redirect to="/~CIS1830CP02" />
                </Switch>
            </WebsiteContainer>
        );
    };

    render() {
        return (
            <BrowserRouter>
                {this.renderRoutes()}
            </BrowserRouter>
        );
    }
}

export default App;

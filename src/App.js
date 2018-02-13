import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ClientListPage from './pages/ClientListPage';
import ClientFormPage from './pages/ClientFormPage';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">
            Client list
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/clients/new">
            New client
          </NavLink>
        </div>
        <Route exact path="/" component={ClientListPage}/>
        <Route path="/clients/new" component={ClientFormPage}/>
        <Route path="/clients/edit/:_id" component={ClientFormPage}/>
      </Container>
    );
  }
}

export default App;

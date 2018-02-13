import React, { Component} from 'react';
import { connect } from 'react-redux';
import ClientList from '../components/ClientList';
import { fetchClients, deleteClient } from '../actions/clientActions';

class ClientListPage extends Component {

  componentDidMount() {
    this.props.fetchClients();
  }

  render() {
    return (
      <div>
        <h1>List of clients</h1>
        <ClientList clients={this.props.clients} deleteClient={this.props.deleteClient}/>
      </div>
    )
  }
}

// Make contacts  array available in  props
function mapStateToProps(state) {
  return {
    clients : state.clientStore.clients
  }
}

export default connect(mapStateToProps, {fetchClients, deleteClient})(ClientListPage);

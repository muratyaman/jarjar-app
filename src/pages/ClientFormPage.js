import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newClient, saveClient, fetchClient, updateClient } from '../actions/clientActions';
import ClientForm from '../components/ClientForm';


class ClientFormPage extends Component {

  state = {
    redirect: false
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if(id){
      this.props.fetchClient(id)
    } else {
      this.props.newClient();
    }
  }

  submit = (client) => {
    if(!client.id) {
      return this.props.saveClient(client)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
          throw new SubmissionError(this.props.errors)
        })
    } else {
      return this.props.updateClient(client)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
          throw new SubmissionError(this.props.errors)
        })
    }
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ?
            <Redirect to="/" /> :
            <ClientForm client={this.props.client} loading={this.props.loading} onSubmit={this.submit} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    client: state.clientStore.client,
    errors: state.clientStore.errors
  }
}

export default connect(mapStateToProps, {newClient, saveClient, fetchClient, updateClient})(ClientFormPage);

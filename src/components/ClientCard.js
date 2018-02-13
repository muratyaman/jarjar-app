import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button, Icon } from 'semantic-ui-react';

export default function ClientCard({client, deleteClient}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name='user outline'/> {client.first_name} {client.last_name}
        </Card.Header>
        <Card.Description>
          <p><Icon name='phone'/> {client.phone}</p>
          <p><Icon name='mail outline'/> {client.email}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link to={`/clients/edit/${client.id}`} className="ui basic button green">Edit</Link>
          <Button basic color="red" onClick={() => deleteClient(client.id)} >Delete</Button>
        </div>
      </Card.Content>
    </Card>
  )
}

ClientCard.propTypes = {
  client: PropTypes.object.isRequired
}

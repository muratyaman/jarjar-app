import React from 'react';
import { Card } from 'semantic-ui-react';
import ClientCard from './ClientCard';

export default function ClientList({ clients, deleteClient }){

  const cards = () => {
    return clients.map(client => {
      return (
        <ClientCard key={client.id} client={client} deleteClient={deleteClient}/>
      )
    })
  }

  return (
    <Card.Group>
      { cards() }
    </Card.Group>
  )
}

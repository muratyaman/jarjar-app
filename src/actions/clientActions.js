//import { clients } from '../clientsData';//used during dev to mock some data
import { api } from './';

const url = '/clients';

export function fetchClients(){
  return dispatch => {
    dispatch({
      type: 'FETCH_CLIENTS',
      payload: api.get(url)
    })
  }
}

export function newClient() {
  return dispatch => {
    dispatch({
      type: 'NEW_CLIENT'
    })
  }
}

export function saveClient(client) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_CLIENT',
      payload: api.post(url, client)
    })
  }
}


export function fetchClient(id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_CLIENT',
      payload: api.get(`${url}/${id}`)
    })
  }
}

export function updateClient(client) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_CLIENT',
      payload: api.put(`${url}/${client.id}`, client)
    })
  }
}

export function deleteClient(id) {
  return dispatch => {
    return dispatch({
      type: 'DELETE_CLIENT',
      payload: api.delete(`${url}/${id}`)
    })
  }
}


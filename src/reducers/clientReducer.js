const defaultState = {
  clients: [],
  client: {},
  loading: false,
  errors: {}
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_CLIENTS': {
      return {
        ...state,
        clients: action.payload
      }
    }
    case 'FETCH_CLIENTS_FULFILLED': {
      console.log('FETCH_CLIENTS_FULFILLED', action.payload);
      return {
        ...state,
        clients: action.payload.data.data // 1st data from axios, 2nd data from API
      }
    }

    case 'NEW_CLIENT': {
      return {
        ...state,
        client: {name:{}}
      }
    }

    case 'SAVE_CLIENT_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'SAVE_CLIENT_FULFILLED': {
      return {
        ...state,
        clients: [...state.clients, action.payload.data],
        errors: {},
        loading: false
      }
    }

    case 'SAVE_CLIENT_REJECTED': {
      const data = action.payload.response.data;
      // convert feathers error formatting to match client-side error formatting
      const { first_name, last_name, phone, email, address, town, city, county, country, postcode } = data.errors;
      const errors = { global: data.message, first_name, last_name, phone, email, address, town, city, county, country, postcode };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    case 'FETCH_CLIENT_PENDING': {
      return {
        ...state,
        loading: true,
        client: {}
      }
    }

    case 'FETCH_CLIENT_FULFILLED': {
      return {
        ...state,
        client: action.payload.data,
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_CLIENT_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'UPDATE_CLIENT_FULFILLED': {
      const client = action.payload.data;
      return {
        ...state,
        clients: state.clients.map(item => item.id === client.id ? client : item),
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_CLIENT_REJECTED': {
      const data = action.payload.response.data;
      const { first_name, last_name, phone, email, address, town, city, county, country, postcode } = data.errors;
      const errors = { global: data.message, first_name, last_name, phone, email, address, town, city, county, country, postcode };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    case 'DELETE_CLIENT_FULFILLED': {
      const id = action.payload.data.id;
      return {
        ...state,
        clients: state.clients.filter(item => item.id !== id)
      }
    }
    
    default:
      return state;
  }
}

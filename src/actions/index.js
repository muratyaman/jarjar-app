import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jarjar-api.muratyaman.co.uk',
  headers: {
    'Content-Type': 'application/json'
  }
})

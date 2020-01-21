import axios from 'axios'

const apiClient = axios.create({
  // single API instance for the entire app so I don't have to make multiple calls throughout different components
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  }
}

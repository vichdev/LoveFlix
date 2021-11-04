import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-loveflix.herokuapp.com/'
})

export default api
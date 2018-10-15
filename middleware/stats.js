import axios from 'axios'

export default function ({ route }) {
  return axios.get('https://jsonplaceholder.typicode.com/posts', {
    url: route.fullPath
  })
}
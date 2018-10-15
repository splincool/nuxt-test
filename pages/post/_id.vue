<template>
  <div>
    <h1>{{post.title}}</h1>
    <p>{{post.body}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  asyncData ({ params }) {
    return axios.get('https://jsonplaceholder.typicode.com/posts/' + params.id)
    .then((res) => {
      return { 
        post: res.data
      }
    })
    .catch((e) => {
      console.log(e)
    })
  }
}
</script>


<template>
  <div>
    <h1>{{post.title}}</h1>
    <p>{{post.body}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData ({ params }) {
    let { data }  = await axios.get('https://jsonplaceholder.typicode.com/posts/' + params.id)
    return { post: data }
  }
}
</script>


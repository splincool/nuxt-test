<template>
  <div class="posts-container">
    <div v-for="post in posts" 
      :key="post.id"
      class="post-box">
      <h1>{{post.title}}</h1>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData ({ params }) {
    let { data }  = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(data)
    return { posts: data }
  }
}
</script>

<style>
.posts-container{
  width: 1000px;
  margin: 0 auto;
}
.post-box {
  margin-bottom: 10px;
}
</style>

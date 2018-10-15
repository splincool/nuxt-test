<template>
  <div class="posts-container">
    <div v-for="post in posts" 
      :key="post.id"
      class="post-box">
      <h1>
        <nuxt-link :to="'/post/' + post.id">{{post.title}}</nuxt-link>
      </h1>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData ({ params }) {
    let { data }  = await axios.get('https://jsonplaceholder.typicode.com/posts')
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

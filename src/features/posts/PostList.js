import {useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'

import React from 'react'

const PostList = () => {
//   const posts = useSelector(state => state.posts)
  const posts = useSelector(selectAllPosts)
//   console.log(posts)

  const renderedPosts = posts != null && posts.map( post => (
    <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
    </article>
  ))

  return (
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostList
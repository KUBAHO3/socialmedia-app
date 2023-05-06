import React from 'react'
import Post from './post/post'
import useStyles from './Style'

function Posts() {
  
  const classes = useStyles();

  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  )
}

export default Posts
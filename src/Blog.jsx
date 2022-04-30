import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from './firebase-config'
import './blog.css'
import CreatePost from './CreatePost'

function Blog() {
  const [postsLists, setPostsLists] = useState([])

  const postsCollectionRef = collection(db, "posts")

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef)
      setPostsLists(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };
    getPosts()
  }, [])

  console.log(postsLists)
  return (
    <div className='blog'>
      <CreatePost />
      Blog
    
    </div>
  )
}

export default Blog
import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from './firebase-config'
import './blog.css'
import CreatePost from './CreatePost'
import { HiOutlinePencilAlt } from "react-icons/hi";

function Blog() {
  const [postsLists, setPostsLists] = useState([])
  const [hide, setHide] = useState(false)
  const postsCollectionRef = collection(db, "posts")

  const handlePost = e => {
    !hide ? setHide(true) : setHide(false)
  }
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
      {hide && (
        <div className='createPostModal'>
            <CreatePost />
        </div>
      )}
      <div className='addPost'>
        <HiOutlinePencilAlt onClick={handlePost} className='postIcon' />
      </div>
      {postsLists.map((post) => {
        <>
          <div>{post.title}</div>
          <div>{}</div>
        </>
      })}
      Blog
    
    </div>
  )
}

export default Blog
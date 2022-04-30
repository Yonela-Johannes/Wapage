import React, { useState } from 'react'
import { addDoc, collection } from "firebase/firestore"
import { db, auth } from './firebase-config'
import { useNavigate } from 'react-router-dom'
import './createpost.css'

function CreatePost() {
  let navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [postImage, setPostImage] = useState('')
  const [postText, setPostText] = useState("")
  let [like, setLike] = useState(0)

  
  const likePost = () => {
    
    console.log(like++)

  }

  likePost()
  const postsCollectionRef = collection(db, 'posts')
  const submit = async () => {
    await addDoc(postsCollectionRef, {
      author: {name: auth.currentUser.displayName,
         id: auth.currentUser.uid},
      title,
      postImage,
      postText,
    });
    navigate('/blog')
  }
  return (
    <div className='createPost'>
      <div className="createPostContainer">
        <div className='inputGroup'>
          {/* <label>Title:</label> */}
          <input className="titleInput" placeholder='enter title' value={title} onChange={e => setTitle(e.target.value)} /><br />
          <label>Image:</label>
          <input type='file' placeholder='...image'  value={postImage} onChange={e => setPostImage(e.target.value)} /><brr />
          <textarea placeholder='post...' value={postText} onChange={e => setPostText(e.target.value)} />
          <button onClick={submit}>Submit Post</button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
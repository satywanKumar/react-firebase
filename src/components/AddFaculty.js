import React, { useState } from 'react'
import {collection,addDoc,getFirestore} from 'firebase/firestore'
import {app} from '../Firebase'

const AddFaculty = () => {
 const [name,setName] = useState('')
 const [phone,setPhone] = useState(null)
  
  const submitHandler = async (event)=>{
    event.preventDefault();
    console.log(name,phone)
    const db = getFirestore(app)
    const docRef = await addDoc(collection(db,'faculty'),{
        facultyName:name,
        phoneNumber:phone
    })
    console.log(docRef,docRef.id)
  }
  return (
    <div>
      <h1>add faculty</h1>
      <form onSubmit={submitHandler}>
        <input onChange={(e)=>setName(e.target.value)} placeholder='full name'/>
        <input onChange={(e)=>setPhone(e.target.value)} placeholder='phone number' />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default AddFaculty

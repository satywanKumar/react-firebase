import React, { useEffect, useState } from 'react'
import {app} from '../Firebase'
import {collection,deleteDoc,doc,getDocs,getFirestore} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const FacultyList = () => {
 const [facultyData,setFacultydata] = useState([])
 const navigate = useNavigate()
  useEffect(()=>{
    getData()
  },[])

  const getData =async ()=>{
    const db = getFirestore(app)
    const docRef = collection(db,'faculty')
    const docSnap = await getDocs(docRef)
    const data = docSnap.docs.map(doc=>({
        id:doc.id,
        ...doc.data()
    }))
    console.log(data)
    setFacultydata(data)
  }

  const deleteData = async(id)=>{
    const db = getFirestore(app)
    const dataRef = doc(db,'faculty',id)
    try{
        await deleteDoc(dataRef)
        getData()
    }
    catch(err)
    {
        console.log(err)
    }
  }

  return (
    <div>
      <h1>faculty list</h1>
      {facultyData.map(faculty=>{
        return (
            <div key={faculty.id}>
                <p>{faculty.facultyName}  {faculty.phoneNumber}</p>
                <button onClick={()=>{deleteData(faculty.id)}}>delete</button>
                <button onClick={()=>{navigate('/updateFaculty',{state:faculty})}}>Update</button>
            </div>
        )
      })}
    </div>
  )
}

export default FacultyList

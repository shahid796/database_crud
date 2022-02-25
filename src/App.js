import logo from './logo.svg';
import './App.css';
import {db} from './firebase-config'
import {collection,getDocs,addDoc,updateDoc,deleteDoc,docs,doc} from 'firebase/firestore'
import { useEffect, useState } from 'react';

function App() {
  const [newname,setnewname]=useState('')
  const [newage,setnewage]=useState('')
  const [users,setusers]=useState([])

  const userscollectionRef = collection(db,"users")

  const createuser=async()=>{
    await addDoc(userscollectionRef,{name:newname,age:Number(newage)})
    alert("new user created successfully")
  }
  const deleteuser=async(id)=>{
    const userdoc = doc(db,"users",id)
    await deleteDoc(userdoc)
    alert("deleted is succssfull please refresh your page")
  }
  const updateuserage1=async(id,age)=>{
    const newdoc = doc(db,"users",id)
    const newfield= {age : age +1}
    await updateDoc(newdoc,newfield)
    alert("updated is succssfull please refresh your page")
  }
  const updateuserage2=async(id,age)=>{
    const newdoc = doc(db,"users",id)
    const newfield= {age : age - 1}
    await updateDoc(newdoc,newfield)
    alert("updated is succssfull please refresh your page")
  }


  useEffect(()=>{
    const getusers=async()=>{
      const data = await getDocs(userscollectionRef)
      setusers(data.docs.map((doc)=>({...doc.data(),id: doc.id})))

    };
    getusers();
  },[])
  const refreshpage=async()=>{
    const data = await getDocs(userscollectionRef)
    setusers(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
  }

  return (
    <div className="App">
    <h1>ADD DETAILS</h1>
    <input type="text" placeholder='username' value={newname} onChange={(e)=>{setnewname(e.target.value)}} />
    <input type="number" placeholder='enter your age' value={newage} onChange={(e)=>{setnewage(e.target.value)}} />
    <button onClick={createuser}>submit</button><br/>
    <button onClick={refreshpage}>refresh list</button>
  <div>
    {
      users.map((user)=>{
        return(
          <div>
             <h3>name:{user.name}</h3>
          <h3>age:{user.age}</h3>
          <button onClick={()=>{updateuserage1(user.id,user.age)}}>increase age</button>
          <button onClick={()=>{updateuserage2(user.id,user.age)}}>decrease age</button>
          <button onClick={()=>{deleteuser(user.id)}}>delete user</button>
          </div>
         
        )
      })
    }
  </div>
    </div>
  );
}

export default App;

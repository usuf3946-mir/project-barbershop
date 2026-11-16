import axios from 'axios'
import React,{useEffect, useState} from 'react'
import './App.css'

type User = {
    id: number
    name: string
}

 const App = () => {
 const api = 'http://localhost:3000/data'
 const [data,setData] = useState<User[]>([])
 const [triger,setTriger]=useState(true)
 const [name,setName] = useState("")
 const [editId,setEditId] = useState(0)

    async function get() {
        try {
            const {data} = await axios.get(api)
             setData(data)
             console.log(data);
             
        } catch (error) {
            console.log(error);
            
        }
    }

useEffect(()=>{
    get()
},[triger])


    async function addUser() {
        if (!name) return
        try {
            if (editId !== 0) {
                await axios.put(`${api}/${editId}`, { name: name })
                setEditId(0)
            } else {
                await axios.post(api, { name: name })
            }
            setName("")
            get()
        } catch (error) {
            console.log(error);
        }
    }

     async function delUser(id: number) {
        try {
            await axios.delete(`${api}/${id}`)
            get()
        } catch (error) {
            console.log(error);
        }
    }

    function editUser(el: User) {
        setName(el.name)
        setEditId(el.id)
    }


  return (
    <div>
        <button onClick={()=>setTriger(prev=>!prev)}>click</button>

        <div>
            <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={addUser}>{editId !== 0 ? "Save" : "Add"}</button>
        </div>

        {
            data.map((el)=>{
                return <div key={el.id}>
                    <h1>{el.name}</h1>
                    <button onClick={()=>editUser(el)}>Edit</button>
                    <button onClick={()=>delUser(el.id)}>Delete</button>
                </div>
            })
        }
    </div>
  ) 
}
export default App;
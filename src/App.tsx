import './App.css'
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table"

export const App = () => {
    const [data, setData] = useState([
        { id: 1, name: "Yusuf", age: 15,job:"Student"},
        { id: 2, name: "Yusuf", age: 16,job:"Student"},
        {id: 3, name: "Salmon", age: 25,job:"Backend"},
        {id: 4, name: "Abubakr", age: 28,job:"Frontend"}
    ])

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [editId, setEditId] = useState(0)

    function addUser() {
        if (editId !== 0) {
           setData(data.map(el=>
            el.id===editId?{...el,name:name,age:Number(age)}:el
            ))

            setEditId(0)
        } else {
            setData([...data, {

              
                id: Date.now(),name: name,age: Number(age)
            }])
        }

        setName("")
        setAge("")
    }

    function deleteUser(id: number) {
        setData(data.filter(el => el.id !== id))
    }

    function editUser(el){
        setName(el.name)
        setAge(String(el.age))
        setEditId(el.id)
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">YUSUF</h1>

            <div className="flex gap-2 mb-6">
                <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <Input placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
                <Button onClick={addUser}>{editId !== 0 ? "Save" : "Add"}</Button>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Age</TableHead>
                            <TableHead>Job</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {data.map(el => (
                            <TableRow key={el.id}>
                                <TableCell>{el.name}</TableCell>
                                <TableCell>{el.age}</TableCell>
                                <TableCell>{el.job}</TableCell>
                                <TableCell className="flex gap-2">
                                    <Button variant="outline" size="sm" onClick={() => editUser(el)}>Edit</Button>
                                    <Button variant="destructive" size="sm" onClick={() => deleteUser(el.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
  )    
} 


export default App
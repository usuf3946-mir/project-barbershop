
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
    const api = 'https://to-dos-api.softclub.tj/api/to-dos'

    const [data, setData] = useState<any[]>([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [images, setImages] = useState('')
    const [editId, setEditId] = useState<number | null>(null)

    async function getTodos() {
        try {
            const res = await axios.get(api)
            setData(res.data.data)
        } catch (error: any) {
            console.log(error)
        }
    }

async function addTodo() {
    try {
        const formData = new FormData()

        formData.append('Name', name)
        formData.append('Description', description)
        formData.append('Images', images)

        const res = await axios.post(api, formData)

        console.log('SUCCESS:', res.data)

        await getTodos()
        clearForm()

    } catch (error: any) {
        console.log('ADD ERROR:', error.response?.data)
    }
}

    async function editTodo() {
        try {
            await axios.put(api, {
                id: editId,
                name: name,
                description: description
            })

            getTodos()
            clearForm()
        } catch (error: any) {
            console.log(error)
        }
    }

    async function deleteTodo(id: number) {
        try {
            await axios.delete(api, {
                params: {
                    id: id
                }
            })

            getTodos()
        } catch (error: any) {
            console.log('DELETE ERROR:', error.response?.data || error.message)
        }
    }

    function startEdit(el: any) {
        setEditId(el.id)
        setName(el.name)
        setDescription(el.description)
    }

    function clearForm() {
        setName('')
        setDescription('')
        setImages('')
        setEditId(null)
    }

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div>
            <h1>Todo CRUD</h1>

            <div>
                <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                {editId === null && (
                    <input
                        placeholder="Image URL"
                        value={images}
                        onChange={(e) => setImages(e.target.value)}
                    />
                )}

                {editId === null ? (
                    <button onClick={addTodo}>
                        Add
                    </button>
                ) : (
                    <button onClick={editTodo}>
                        Save
                    </button>
                )}

                <button onClick={clearForm}>
                    Clear
                </button>
            </div>

            <hr />

            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Images</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((el: any) => (
                        <tr key={el.id}>
                            <td>{el.id}</td>
                            <td>{el.name}</td>
                            <td>{el.description}</td>

                            <td>
                                {el.images?.map((img: any, i: number) => (
                                    <div key={i}>
                                        {typeof img === 'string'
                                            ? img
                                            : img.imageName}
                                    </div>
                                ))}
                            </td>

                            <td>
                                <button onClick={() => startEdit(el)}>
                                    Edit
                                </button>

                                <button onClick={() => deleteTodo(el.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default App


import { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

type TodoForm = {
    name: string
    description: string
    images: string
}

const Crud = () => {
    const api = 'https://to-dos-api.softclub.tj/api/to-dos'

    const [data, setData] = useState<any[]>([])
    const [editId, setEditId] = useState<number | null>(null)

    const { register, handleSubmit, reset } = useForm<TodoForm>({
        defaultValues: {
            name: '',
            description: '',
            images: ''
        }
    })

    async function getTodos() {
        try {
            const res = await axios.get(api)
            setData(res.data.data)
        } catch (error: any) {
            console.log(error)
        }
    }

    async function addTodo(values: TodoForm) {
        try {
            const formData = new FormData()

            formData.append('Name', values.name)
            formData.append('Description', values.description)
            formData.append('Images', values.images)

            await axios.post(api, formData)

            getTodos()
            reset()
        } catch (error: any) {
            console.log(error)
        }
    }

    async function editTodo(values: TodoForm) {
        try {
            await axios.put(api, {
                id: editId,
                name: values.name,
                description: values.description
            })

            getTodos()
            reset()
            setEditId(null)
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
            console.log(error)
        }
    }

    function startEdit(el: any) {
        setEditId(el.id)

        reset({
            name: el.name,
            description: el.description,
            images: ''
        })
    }

    function clearForm() {
        reset()
        setEditId(null)
    }

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div>
            <h1>Todo CRUD</h1>

            <form onSubmit={handleSubmit(editId === null ? addTodo : editTodo)}>

                <input
                    placeholder="Name"
                    {...register('name')}
                />

                <input
                    placeholder="Description"
                    {...register('description')}
                />

                {editId === null && (
                    <input
                        placeholder="Image URL"
                        {...register('images')}
                    />
                )}

                <button type="submit">
                    {editId === null ? 'Add' : 'Save'}
                </button>

                <button type="button" onClick={clearForm}>
                    Clear
                </button>

            </form>

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
                                <button
                                    type="button"
                                    onClick={() => startEdit(el)}
                                >
                                    Edit
                                </button>

                                <button
                                    type="button"
                                    onClick={() => deleteTodo(el.id)}
                                >
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

export default Crud

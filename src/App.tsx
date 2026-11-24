
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'

const App = () => {
    const api = 'https://to-dos-api.softclub.tj/api/to-dos'

    const [data, setData] = useState<any[]>([])
    const [editId, setEditId] = useState<number | null>(null)

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            images: ''
        },

        onSubmit: async (values, { resetForm }) => {
            try {
                if (editId === null) {
                    const formData = new FormData()

                    formData.append('Name', values.name)
                    formData.append('Description', values.description)
                    formData.append('Images', values.images)

                    await axios.post(api, formData)
                } else {
                    await axios.put(api, {
                        id: editId,
                        name: values.name,
                        description: values.description
                    })
                }

                getTodos()
                resetForm()
                setEditId(null)

            } catch (error: any) {
                console.log(error)
            }
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

        formik.setValues({
            name: el.name,
            description: el.description,
            images: ''
        })
    }

    function clearForm() {
        formik.resetForm()
        setEditId(null)
    }

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div>
            <h1>Todo CRUD</h1>

            <form onSubmit={formik.handleSubmit}>

                <input
                    name="name"
                    placeholder="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />

                <input
                    name="description"
                    placeholder="Description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                />

                {editId === null && (
                    <input
                        name="images"
                        placeholder="Image URL"
                        value={formik.values.images}
                        onChange={formik.handleChange}
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

export default App

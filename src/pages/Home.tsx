
import { useEffect, useState } from 'react'
import axios from 'axios'

import Table2 from '../components/table2'
import type { Todo } from '../components/types'

const Home = () => {
    const api = 'https://to-dos-api.softclub.tj/api/to-dos'

    const [data, setData] = useState<Todo[]>([])

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

            await getTodos()
        } catch (error: any) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div>
            <h1>Get Delete Page</h1>

            <Table2
                data={data}
                deleteTodo={deleteTodo}
            />
        </div>
    )
}

export default Home

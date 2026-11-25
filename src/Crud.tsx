
import { useEffect, useState } from 'react'
import axios from 'axios'

import Add from './components/ui/add'
import Edit from './components/ui/edit'
import TodoTable from './components/ui/table1'

import type { Todo, TodoForm } from './components/types'

import { Input } from '@/components/ui/input'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'

const Crud = () => {
    const api: string = 'https://to-dos-api.softclub.tj/api/to-dos'

    const [data, setData] = useState<Todo[]>([])
    const [search, setSearch] = useState<string>('')
    const [filter, setFilter] = useState<string>('all')
    const [edit, setEdit] = useState<Todo | null>(null)

    async function getTodos(): Promise<void> {
        try {
            const res = await axios.get<{ data: Todo[] }>(api)
            setData(res.data.data)
        } catch (error: unknown) {
            console.log(error)
        }
    }

    async function addTodo(values: TodoForm): Promise<void> {
        try {
            const formData = new FormData()

            formData.append('Name', values.name)
            formData.append('Description', values.description)
            formData.append('Images', values.images)

            await axios.post(api, formData)

            await getTodos()
        } catch (error: unknown) {
            console.log(error)
        }
    }

    async function saveTodo(values: TodoForm): Promise<void> {
        try {
            await axios.put(api, {
                id: edit?.id,
                name: values.name,
                description: values.description
            })

            await getTodos()
            setEdit(null)
        } catch (error: unknown) {
            console.log(error)
        }
    }

    async function deleteTodo(id: number): Promise<void> {
        try {
            await axios.delete(api, {
                params: {
                    id: id
                }
            })

            await getTodos()

            if (edit?.id === id) {
                setEdit(null)
            }
        } catch (error: unknown) {
            console.log(error)
        }
    }

    const filteredData: Todo[] = data.filter((el: Todo) => {
        const text: string = search.toLowerCase()

        const matchesSearch: boolean =
            el.name?.toLowerCase().includes(text) ||
            el.description?.toLowerCase().includes(text) ||
            false

        const hasImages: boolean = Array.isArray(el.images)
            ? el.images.length > 0
            : Boolean(el.images)

        const matchesFilter: boolean =
            filter === 'all' ||
            (filter === 'withImages' && hasImages) ||
            (filter === 'withoutImages' && !hasImages)

        return matchesSearch && matchesFilter
    })

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div className="container mx-auto p-6 space-y-6">

            <h1 className="text-3xl font-bold">
                Todo CRUD
            </h1>

            {edit === null ? (
                <Add addTodo={addTodo} />
            ) : (
                <Edit
                    todo={edit}
                    saveTodo={saveTodo}
                    cancelEdit={() => setEdit(null)}
                />
            )}

            <div className="flex flex-wrap gap-3">

                <Input
                    placeholder="Search todos..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="max-w-sm"
                />

                <Select
                    value={filter}
                    onValueChange={(value) => {
                  if (value !== null) {
    setFilter(value);
  }
}}
                >
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Filter" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="all">
                            All Todos
                        </SelectItem>

                        <SelectItem value="withImages">
                            With Images
                        </SelectItem>

                        <SelectItem value="withoutImages">
                            Without Images
                        </SelectItem>
                    </SelectContent>
                </Select>

            </div>

            <p className="text-sm text-muted-foreground">
                Total: {filteredData.length} Todos
            </p>

            <TodoTable
                data={filteredData}
                editTodo={setEdit}
                deleteTodo={deleteTodo}
            />

        </div>
    )
}

export default Crud

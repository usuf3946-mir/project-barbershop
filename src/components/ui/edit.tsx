
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import type { Todo, TodoForm } from '../types'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type Props = {
    todo: Todo
    saveTodo: (values: TodoForm) => Promise<void>
    cancelEdit: () => void
}

const Edit = ({ todo, saveTodo, cancelEdit }: Props) => {
    const { register, handleSubmit, reset } = useForm<TodoForm>({
        defaultValues: {
            name: todo.name,
            description: todo.description,
            images: ''
        }
    })

    useEffect(() => {
        reset({
            name: todo.name,
            description: todo.description,
            images: ''
        })
    }, [todo, reset])

    return (
        <form onSubmit={handleSubmit(saveTodo)} className="flex flex-wrap gap-3">
            <Input
                placeholder="Todo name"
                {...register('name')}
            />

            <Input
                placeholder="Description"
                {...register('description')}
            />

            <Button type="submit">
                Save
            </Button>

            <Button type="button" variant="outline" onClick={cancelEdit}>
                Cancel
            </Button>
        </form>
    )
}

export default Edit

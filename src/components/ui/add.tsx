
import { useForm } from 'react-hook-form'
import type { TodoForm } from '../types'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type Props = {
    addTodo: (values: TodoForm) => Promise<boolean>
}

const Add = ({ addTodo }: Props) => {
    const { register, handleSubmit, reset } = useForm<TodoForm>({
        defaultValues: {
            name: '',
            description: '',
            images: ''
        }
    })

    async function submit(values: TodoForm) {
        const success = await addTodo(values)

        if (success) {
            reset()
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap gap-3">
            <Input
                placeholder="Todo name"
                {...register('name', { required: true })}
            />

            <Input
                placeholder="Description"
                {...register('description', { required: true })}
            />

            <Button type="submit">
                Add Todo
            </Button>
        </form>
    )
}

export default Add

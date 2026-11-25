
import { useForm } from 'react-hook-form'
import type { TodoForm } from '../types'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type Props = {
    addTodo: (values: TodoForm) => Promise<void>
}

const Add = ({ addTodo }: Props) => {
    const { register, handleSubmit, reset } = useForm<TodoForm>({
        defaultValues: {
            name: '',
            description: '',
            images: ''
        }
    })

    async function submit(values: TodoForm): Promise<void> {
        await addTodo(values)
        reset()
    }

    return (
        <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-wrap gap-3"
        >
            <Input
                placeholder="Name"
                {...register('name', { required: true })}
            />

            <Input
                placeholder="Description"
                {...register('description', { required: true })}
            />

            <Input
                placeholder="Image URL"
                {...register('images')}
            />

            <Button type="submit">
                Add
            </Button>
        </form>
    )
}

export default Add


import type { Todo } from './types'

import { Button } from '@/components/ui/button'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table'

type Props = {
    data: Todo[]
    deleteTodo: (id: number) => void
}

const TodoTable = ({ data, deleteTodo }: Props) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Images</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {data.map((el) => (
                    <TableRow key={el.id}>
                        <TableCell>{el.id}</TableCell>

                        <TableCell>{el.name}</TableCell>

                        <TableCell>{el.description}</TableCell>

                        <TableCell>
                            {el.images?.map((img: any, i: number) => (
                                <div key={i}>
                                    {typeof img === 'string'
                                        ? img
                                        : img.imageName}
                                </div>
                            ))}
                        </TableCell>

                        <TableCell>
                            <Button
                                variant="destructive"
                                onClick={() => deleteTodo(el.id)}
                            >
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default TodoTable

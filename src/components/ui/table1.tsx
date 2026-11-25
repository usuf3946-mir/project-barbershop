
import type { Todo } from '../types'

import { Button } from '@/components/ui/button'
const imageApi = 'https://to-dos-api.softclub.tj/images/'

import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from '@/components/ui/table'

type Props = {
    data: Todo[]
    editTodo: (todo: Todo) => void
    deleteTodo: (id: number) => void
}

const TodoTable = ({ data, editTodo, deleteTodo }: Props) => {
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
                           {el.images?.map(img => (
                                    <img src={imageApi + img.imageName} width={90} />
                                ))}
                         
                        </TableCell>

                        <TableCell className="flex gap-2">
                            <Button variant="outline"onClick={() => editTodo(el)}> Edit </Button>

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

export type TodoForm = {
    name: string
    description: string
    images: string
}

export type Todo = {
    id: number
    name: string
    description: string
    images?: any[]
}
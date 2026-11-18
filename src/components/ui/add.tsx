
import React, { useState } from 'react'
import {Dialog,DialogClose,DialogContent,DialogHeader,DialogTitle,DialogTrigger} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Add = ({ addUser }: any) => {
    const [name, setName] = useState("")

    function submit() {
        if (name.trim() === "") return

        addUser(name)
        setName("")
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add user</DialogTitle>
                </DialogHeader>

                <Input
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <DialogClose asChild>
                    <Button onClick={submit}>Add</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}

export default Add

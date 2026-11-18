
import React, { useState } from 'react'
import {Dialog,DialogClose,DialogContent,DialogHeader,DialogTitle,DialogTrigger} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Edit = ({ el, saveUser }: any) => {
    const [name, setName] = useState(el.name)

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Edit</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit user</DialogTitle>
                </DialogHeader>

                <Input
                    placeholder="Name"
                    value={name} onChange={e => setName(e.target.value)}
                />

                <DialogClose asChild>
                    <Button
                        onClick={() => {
                            if (name !== "") {
                                saveUser(el.id, name)
                            }
                        }}
                    >
                        Save
                    </Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}

export default Edit

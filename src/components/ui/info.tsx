import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

const Info = ({ el }: any) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Info</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>User info</DialogTitle>
                </DialogHeader>
                <p>ID: {el.id}</p>
                <p>Name: {el.name}</p>
                <p>Status: {el.checked ? "Checked" : "Unchecked"}</p>
            </DialogContent>
        </Dialog>
    )
}

export default Info
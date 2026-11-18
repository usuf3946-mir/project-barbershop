
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Add from './components/ui/add'
import Table from './components/ui/table1'

const App = () => {
    const api = 'https://6ab6577ec4c7bb67b918bd93.mockapi.io/a/data1'

    const [data, setData] = useState<any[]>([])
    const [search, setSearch] = useState("")
    const [select, setSelect] = useState("all")

    async function get() {
        try {
            const { data } = await axios.get(api)
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    async function addUser(name: string) {
        try {
            await axios.post(api, {
                name: name,
                checked: false
            })
            get()
        } catch (error) {
            console.log(error)
        }
    }

    async function saveUser(id: number, name: string) {
        try {
            await axios.patch(`${api}/${id}`, {
                name: name
            })
            get()
        } catch (error) {
            console.log(error)
        }
    }

    async function checkUser(id: number, checked: boolean) {
        try {
            await axios.patch(`${api}/${id}`, {
                checked: checked
            })
            get()
        } catch (error) {
            console.log(error)
        }
    }

    async function delUser(id: number) {
        try {
            await axios.delete(`${api}/${id}`)
            get()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        get()
    }, [])

    const filtered = data
        .filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
        .filter(el =>
            select === "all"
                ? true
                : select === "checked"
                    ? el.checked === true
                    : el.checked === false
        )

    return (
        <div>
            <div>
                <input
                    placeholder="Search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                <select
                    value={select}
                    onChange={e => setSelect(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="checked">Checked</option>
                    <option value="unchecked">Unchecked</option>
                </select>

                <Add addUser={addUser} />
            </div>

            <Table
                data={filtered}
                checkUser={checkUser}
                delUser={delUser}
                saveUser={saveUser}
            />
        </div>
    )
}

export default App

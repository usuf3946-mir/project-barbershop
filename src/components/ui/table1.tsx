import React from 'react'
import Edit from './edit'
import Info from './info'

const Table = ({ data, checkUser, delUser, saveUser }: any) => {
    return (
        <table border={1} cellPadding={8}>
            <thead>
                <tr>
                    <th>Check</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((el: any) => {
                        return <tr key={el.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={!!el.checked}
                                    onChange={e => checkUser(el.id, e.target.checked)}
                                />
                            </td>
                            <td> <img src={el.avatar} alt="avatar" width="50" height="50" style={{ borderRadius: "50%" }}/></td>
                            <td>{el.id}</td>
                            <td style={{ textDecoration: el.checked ? "line-through" : "none" }}>{el.name}</td>
                            <td>
                                <button onClick={() => delUser(el.id)}>Delete</button>
                                <Edit el={el} saveUser={saveUser} />
                                <Info el={el} />
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default Table
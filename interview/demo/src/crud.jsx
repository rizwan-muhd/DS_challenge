import React, { useState } from 'react'
import { Button, Table, TableHead, TableRow, TableCell, TableBody, Card, CardContent, Input } from '@mui/material';

const CrudApp = () => {
    const [items, setItems] = useState([])
    const [formData, setFormData] = useState({ name: "", email: "" })
    const [editIndex, setEditIndex] = useState(null)


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (editIndex !== null) {
            const updatedItems = [...items]
            updatedItems[editIndex] = formData
            setItems(updatedItems)
            setEditIndex(null)
        } else {
            setItems([...items, formData])
        }

    }

    const handleEditIndex = (index) => {
        setEditIndex(index)
        setFormData(items[index])
    }

    const handleDelete = (index) => {
        setItems(items.filter((_, i) => i !== index))
    }

    console.log(items)
    return (
        <div className='p-4'>
            <Card className='mb-4'>
                <CardContent>
                    <h2>CRUD APP</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            placeholder="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <Input
                            placeholder='Name'
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <Input
                            placeholder='Email'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <Button type='submit' variant='contained'>{editIndex !== null ? "update" : "Add"}</Button>
                    </form>
                </CardContent>

            </Card>

        </div>
    )
}
export default CrudApp
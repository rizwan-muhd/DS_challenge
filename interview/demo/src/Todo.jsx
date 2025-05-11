import React, { useState } from "react";
import { Button, Table, TableHead, TableRow, TableCell, TableBody, Card, CardContent, Input } from '@mui/material';


const CrudApp = () => {
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [editIndex, setEditIndex] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            const updatedItems = [...items];
            updatedItems[editIndex] = formData;
            setItems(updatedItems);
            setEditIndex(null);
        } else {
            setItems([...items, formData]);
        }
        setFormData({ name: "", email: "" });
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setFormData(items[index]);
    };

    const handleDelete = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div className="p-4">
            <Card className="mb-4">
                <CardContent>
                    <h2 className="text-xl font-bold mb-4">CRUD App</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        <Input
                            placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                        <Input
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <Button type="submit" variant="default">
                            {editIndex !== null ? "Update" : "Add"} Item
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <h2 className="text-xl font-bold mb-4">Items List</h2>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>
                                        <Button
                                            onClick={() => handleEdit(index)}
                                            variant="secondary"
                                            className="mr-2"
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            onClick={() => handleDelete(index)}
                                            variant="destructive"
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default CrudApp;

import React, { useEffect, useState } from "react";

function Table() {
    const [users, setUsers] = useState([]);
    const [editUserId, setEditUserId] = useState(null);
    const [editForm, setEditForm] = useState({});

    const handleDelete = async (id) => {
        await fetch(`http://localhost:4000/users/${id}`, {
            method: "DELETE",
        });
        setUsers(users.filter((item) => item.id !== id));
    };

    
    useEffect(() => {
        fetch("http://localhost:4000/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    
    const handleEdit = (user) => {
        setEditUserId(user.id);
        setEditForm(user);  
    };

 
    const handleSave = async () => {
        await fetch(`http://localhost:4000/users/${editUserId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editForm),
        });

        setUsers(
            users.map((u) => (u.id === editUserId ? editForm : u))
        );

        setEditUserId(null);  
    };

    return (
        <div className="mt-20 mb-20 px-10">
            <h2 className="text-4xl font-bold text-center text-[#832C2C] mb-10 mt-[100px]">
                Cafe Feedback 📝
            </h2>

            <table className="border border-black border-collapse w-full text-center" cellPadding="10">
                <thead>
                    <tr>
                        <th className="border bg-[#a6492a] text-white p-2">ID</th>
                        <th className="border bg-[#a6492a] text-white p-2">Name</th>
                        <th className="border bg-[#a6492a] text-white p-2">Phone</th>
                        <th className="border bg-[#a6492a] text-white p-2">Message</th>
                        <th className="border bg-[#a6492a] text-white p-2">Email</th>
                        <th className="border bg-[#a6492a] text-white p-2">Date</th>
                        <th className="border bg-[#a6492a] text-white p-2">Time</th>
                        <th className="border bg-[#a6492a] text-white p-2">Edit</th>
                        <th className="border bg-[#a6492a] text-white p-2">Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((u) => (
                        <tr key={u.id}>
                            <td className="border p-2">{u.id}</td>

                            <td className="border p-2">
                                {editUserId === u.id ? (
                                    <input
                                        className="bg-gray-200 p-1 w-full"
                                        value={editForm.firstName}
                                        onChange={(e) =>
                                            setEditForm({
                                                ...editForm,
                                                firstName: e.target.value,
                                            })
                                        }
                                    />
                                ) : (
                                    `${u.firstName} ${u.lastName}`
                                )}
                            </td>

                            <td className="border p-2">
                                {editUserId === u.id ? (
                                    <input
                                        className="border p-1 w-full"
                                        value={editForm.phone}
                                        onChange={(e) =>
                                            setEditForm({
                                                ...editForm,phone: e.target.value, })
                                        }
                                    />
                                ) : (
                                    <a href={`tel:${u.phone}`}>{u.phone}</a> )}
                        </td>

                        <td className ="border w-[300px] p-2" >
                            { editUserId === u.id ? (
                            <textarea
                                className="border p-1 w-full"
                                value={editForm.message}
                                onChange={(e) =>
                                    setEditForm({
                                        ...editForm,
                                        message: e.target.value,
                                    })
                                }
                            />
                        ) : (
                            u.message
                        )}
                </td>

                <td className="border p-2">
                    {editUserId === u.id ? (
                        <input
                            className="border p-1 w-full"
                            value={editForm.email}
                            onChange={(e) =>
                                setEditForm({
                                    ...editForm,
                                    email: e.target.value,
                                })
                            }
                        />
                    ) : (
                        <a href={`mailto:${u.email}`}>{u.email}</a>
                    )}
                </td>

                <td className="border p-2">{u.date}</td>
                <td className="border p-2">{u.time}</td>

                <td className="border p-2">
                    {editUserId === u.id ? (
                        <button
                            onClick={handleSave}
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            onClick={() => handleEdit(u)}
                            className="bg-green-500 text-white px-3 py-1 rounded"
                        >
                            Edit
                        </button>
                    )}
                </td>

                
                <td className="border p-2">
                    <button
                        className="bg-red-500 text-white px-3 py-1 rounded"
                        onClick={() => handleDelete(u.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
                    ))}
        </tbody>
            </table >
        </div >
    );
}

export default Table;

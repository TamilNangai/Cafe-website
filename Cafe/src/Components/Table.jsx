// import { useNavigate } from "react-router-dom";
// import React, { useEffect, useState } from "react";

// function Table() {
//     const [users, setUsers] = useState([]);
//     const [editUser, setEditUser] = useState(null);

//     const handleDelete = async (id) => {
//         await fetch(`http://localhost:4000/users/${id}`, {
//             method: "DELETE",
//         });

//         // remove from UI
//         setUsers(users.filter((item) => item.id !== id));
//     };

// const navigate = useNavigate();

//     useEffect(() => {
//         fetch("http://localhost:4000/users")
//             .then((res) => res.json())
//             .then((data) => setUsers(data));
//     }, []);

//     return (
//         <div className="mt-20 mb-20 px-10">
//             <h2 className="text-4xl font-bold text-center text-[#832C2C] mb-10 mt-[100px]">  Cafe Feedback 📝</h2>

//             <table className="border border-black border-collapse w-full text-center" cellPadding="10">
//                 <thead>
//                     <tr>
//                         <th className="border border-black bg-[#a6492a] text-white p-2">ID</th>
//                         <th className="border border-black bg-[#a6492a] text-white p-2">Name</th>
//                         <th className="border border-black bg-[#a6492a] text-white p-2">Phone</th>
//                         <th className="border border-black bg-[#a6492a] text-white p-2">Message</th>
//                         <th className="border border-black bg-[#a6492a] text-white p-2">Email</th>
//                         <th className="border border-black bg-[#a6492a] text-white p-2">Date</th>
//                         <th className="border border-black bg-[#a6492a] text-white p-2">Time</th>
//                         <th className="border border-black bg-[#a6492a] text-white p-2">Edit</th>
//                         <th className="border border-black bg-[#a6492a] text-white p-2">Delete</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {users.map((u) => (
//                         <tr key={u.id}>
//                             <td className="border border-black p-2">{u.id}</td>
//                             <td className="border border-black p-2">{u.firstName} {u.lastName}</td>
//                             <td className="border border-black p-2"><a href={`tel:${u.phone}`}>{u.phone}</a></td>
//                             <td className="border border-black  max-w-[200px] p-2">{u.message}</td>
//                             <td className="border border-black p-2"><a href={`mailto:${u.email}`}>{u.email}</a></td>
//                             <td className="border border-black p-2">{u.date}</td>
//                             <td className="border border-black p-2">{u.time}</td>
//                             <td className="border border-black p-2">
//                                 <button
//                                     onClick={() => navigate(`/edit/${u.id}`)}
//                                     className="bg-green-500 text-white px-2 py-1 rounded mr-2"
//                                 >
//                                     Edit
//                                 </button>
//                             </td>

//                             <td className="border border-black p-2">
//                                 <button
//                                     className="bg-red-500 text-white px-3 py-1 rounded"
//                                     onClick={() => handleDelete(u.id)}
//                                 >
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default Table;

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

    // Load user data
    useEffect(() => {
        fetch("http://localhost:4000/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    // Start editing
    const handleEdit = (user) => {
        setEditUserId(user.id);
        setEditForm(user);  // fill input fields with current values
    };

    // Save after edit
    const handleSave = async () => {
        await fetch(`http://localhost:4000/users/${editUserId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editForm),
        });

        setUsers(
            users.map((u) => (u.id === editUserId ? editForm : u))
        );

        setEditUserId(null);  // exit edit mode
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

                            {/* Name */}
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

                            {/* Phone */}
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

                            {/* Message */ }
                        < td className = "border w-[300px] p-2" >
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

                {/* Email */}
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

                {/* Edit / Save Button */}
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

                {/* Delete */}
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

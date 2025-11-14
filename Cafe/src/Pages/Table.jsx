import { useState, useEffect } from 'react';
const Table = () => {
    const [tableData, setTableData] = useState([]);
    const [searchDate, setSearchDate] = useState("");
    const [searchMonth, setSearchMonth] = useState("");
    const [searchYear, setSearchYear] = useState("");
    const [searchTime, setSearchTime] = useState("");

    const fetchData = async () => {
        const response = await fetch('http://localhost:5000/customer');
        const jsonData = await response.json();
        setTableData(jsonData);
    }
    useEffect(() => {
        fetchData();
    }, []);

    const [expandedRows, setExpandedRows] = useState({});

    const toggleExpanded = (id) => {
        setExpandedRows(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    const needsShowMore = (message, maxLength = 30) => {
        return message.length > maxLength;
    };
    const handleEmailClick = (email) => {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
        window.open(gmailUrl, "_blank");
    };
    const handlePhoneClick = (phoneNumber) => {
        window.location.href = `tel:${phoneNumber}`;
    };
    const handleDelete = async (id) => {
        await fetch(`http://localhost:5000/customer/${id}`, {
            method: "DELETE",
        });

        if (confirm("Are you sure you want to delete this customer feedback?")) {
            alert("Deleted successfully.");
        } else {
            return;
        }
        setTableData(tableData.filter((item) => item.id !== id));
    };

    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({});

    const handleEdit = (item) => {
        setEditingId(item.id);
        setEditForm({ ...item });
    };

    const handleSave = () => {
        setTableData(tableData.map(item =>
            item.id === editingId ? { ...editForm } : item
        ));
        alert("Edited successfully.");
        setEditingId(null);
        setEditForm({});
    };

    const handleCancel = () => {
        setEditingId(null);
        setEditForm({});
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        alert("You have logged out!");
        window.location.href = "/Loginpage"; 
    };

   

   
    const filtered = tableData.filter((item) => {
        const [day, month, year] = (item?.Date || "").split("/");
        const dateMatch = !searchDate || (item.Date || "").includes(searchDate);
        const monthMatch = !searchMonth || month === searchMonth;
        const yearMatch = !searchYear || year === searchYear;
        const timeMatch = !searchTime || (item.Time || "").toLowerCase().includes(searchTime.toLowerCase());
        return dateMatch && monthMatch && yearMatch && timeMatch;
    });

  
    const uniqueMonths = [
        ...new Set(tableData
            .map((f) => (f.Date ? f.Date.split("/")[1] : ""))
            .filter(Boolean))
    ];

    const uniqueYears = [
        ...new Set(tableData
            .map((f) => (f.Date ? f.Date.split("/")[2] : ""))
            .filter(Boolean))
    ];




    return (

        <div className=" p-4 md:p-8">
            {/* Table */}
            <div className=' w-full mt-24'>
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-amber-900 mb-2">Feedback Records</h1>                    
                </div>
                <div className="flex flex-col md:flex-row md:justify-between items-center mb-4">
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Date"
                        value={searchDate}
                        onChange={(e) => setSearchDate(e.target.value)}
                            className="border border-amber-500 rounded-lg  focus:outline-amber-600 p-2 w-48"
                    />

                    <select
                        value={searchMonth}
                        onChange={(e) => setSearchMonth(e.target.value)}
                            className="border border-amber-500 rounded-lg  focus:outline-amber-600  p-2 w-40"
                    >
                        <option value="">All Months</option>
                        {uniqueMonths.map((m) => (
                            <option key={m} value={m}>
                                Month {m}
                            </option>
                        ))}
                    </select>

                    <select
                        value={searchYear}
                        onChange={(e) => setSearchYear(e.target.value)}
                            className="border border-amber-500 rounded-lg  focus:outline-amber-600  p-2 w-40"
                    >
                        <option value="">All Years</option>
                        {uniqueYears.map((y) => (
                            <option key={y} value={y}>
                                {y}
                            </option>
                        ))}
                    </select>

                    <input
                        type="text"
                        placeholder="Time (e.g. 09:54)"
                        value={searchTime}
                        onChange={(e) => setSearchTime(e.target.value)}
                            className="border border-amber-500 rounded-lg  focus:outline-amber-600  p-2 w-48"
                    />
                    
                </div>
                <div className='flex justify-end mb-4 '>
                    <button
                        onClick={handleLogout}
                        className='px-5 py-3 bg-amber-700 text-white border-none rounded-xl cursor-pointer '
                    >
                        Logout
                    </button>
                </div>
                </div>
                
                
                <table className='w-full shadow-xl shadow-orange-300 border-collapse mb-10 border-amber-300 rounded-3xl overflow-hidden  border-spacing-0 mx-auto  '>
                    <thead className='text-white  border bg-amber-700   border-amber-300  '>
                        <tr className='flex-row'>
                            {/* <th className='w-1/12 border border-amber-300 p-3 '>First Name</th>
                                <th className='w-1/12 border border-amber-300 p-3 '>Last Name</th> */}
                            <th className='w-2/12 border border-amber-300 p-3 '>Name</th>
                            <th className='w-2/12 border border-amber-300 p-3 '>Email</th>
                            <th className='w-1/12 border border-amber-300 p-3 '>Phone</th>
                            <th className='w-3/12 border border-amber-300 p-3 '>Message</th>
                            <th className='w-1/12 border border-amber-300 p-3 '>Submitted Date</th>
                            <th className='w-1/12 border border-amber-300 p-3 '>Submitted Time</th>
                            <th className='w-1/12 border border-amber-300 p-3 '>Buttons</th>
                        </tr>
                    </thead>
                    <tbody className='text-center grid-rows-6 place-items-center border-amber-300 '>
                        {/* {tableData.map((item) => ( */}
                        {filtered.length > 0 ? (
                            filtered.map((item) => (
                            <tr key={item.id} className="hover:bg-amber-50 transition-colors">
                                {/* <td className='border border-t-0 border-amber-300  p-4 overflow-hidden w-1/12 '>{item.firstName}</td>
                                    <td className='border border-t-0 border-amber-300  p-4 overflow-hidden w-1/12 '>{item.lastName}</td> */}
                                <td className='border border-t-0 border-amber-300 p-4 overflow-hidden w-2/12 '>
                                    {editingId === item.id ? (
                                        <div className="row g-2">
                                            <div className="col">
                                                <input
                                                    className='h-auto w-full focus:outline-amber-600 p-1 '
                                                    type="text"
                                                    name="firstName"
                                                    value={editForm.firstName || ''}
                                                    onChange={handleInputChange}
                                                    placeholder="First Name"
                                                />
                                            </div>
                                            <div className="col">
                                                <input
                                                    className='h-auto w-full focus:outline-amber-600 p-1 '
                                                    type="text"
                                                    name="lastName"
                                                    value={editForm.lastName || ''}
                                                    onChange={handleInputChange}
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <>{item.firstName}{item.lastName}</>
                                    )}
                                </td>
                                <td className='border border-t-0 border-amber-300 p-4 overflow-hidden w-2/12 '>
                                    {editingId === item.id ? (
                                        <input
                                            className='h-auto w-full focus:outline-amber-600 p-1 '
                                            type="email"
                                            name="email"
                                            value={editForm.email || ''}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                            <span className='cursor-pointer hover:text-amber-700  hover:underline' onClick={() => handleEmailClick(item.email)}>{item.email}</span>
                                    )}
                                </td>
                                <td className='border border-t-0 border-amber-300  p-4 overflow-hidden w-1/12 '>
                                    {editingId === item.id ? (
                                        <input
                                            className='h-auto w-full focus:outline-amber-600 p-1 '
                                            type="text"
                                            name="phone"
                                            value={editForm.phone || ''}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        <span className='cursor-pointer hover:text-amber-700  hover:underline' onClick={() => handlePhoneClick(item.phone)}>{item.phone}</span>
                                    )}
                                </td>
                                <td className="border border-t-0 border-amber-300  p-4 overflow-hidden w-3/12 text-left">
                                    <div className="text-sm text-gray-700">
                                        {editingId === item.id ? (
                                            <input
                                            className='h-auto w-full focus:outline-amber-600 p-1 '
                                                type="text"
                                                name="message"
                                                value={editForm.message || ''}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                           <>
                                                <p className={expandedRows[item.id] ? "" : "line-clamp-2"}>
                                                    {expandedRows[item.id] ? item.message : truncateText(item.message, 55)}
                                                </p>
                                                {needsShowMore(item.message) && (
                                                  <button onClick={() => toggleExpanded(item.id)} className="mt-2 underline text-xs font-medium text-amber-700 hover:text-amber-900 ">                                                  
                                                  {expandedRows[item.id] ? "Show Less" : "Show More"}
                                                  </button>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </td>
                                <td className='border border-t-0 border-amber-300  p-4 overflow-hidden w-1/12 '>{item.Date}</td>
                                <td className='border border-t-0 border-amber-300  p-4 overflow-hidden w-1/12 '>{item.Time}</td>
                                <td className='border border-t-0 border-amber-300  p-4 overflow-hidden w-1/12 '>
                                    <div>
                                        {editingId === item.id ? (
                                            <>
                                                <button
                                                    onClick={handleSave}
                                                    className="bg-amber-600 text-white py-1 px-1 m-1 rounded"
                                                >Save</button>
                                                <button
                                                    onClick={handleCancel}
                                                    className="bg-amber-600 text-white py-1 px-1 m-1 rounded"
                                                >Cancel</button>
                                            </>
                                        ) : (
                                            <button
                                                onClick={() => handleEdit(item)}
                                                    className="bg-amber-600 text-white py-1 px-3 m-1 rounded"
                                            >Edit</button>
                                        )}
                                    </div>
                                    <button onClick={() => handleDelete(item.id)} className="bg-amber-700 text-white py-1 px-5 m-1 rounded">Delete</button>
                                </td>
                            </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="p-4 text-gray-500">
                                    No records found
                                </td>
                            </tr>
                        )}
                        {/* ))} */}
                    </tbody>
                </table>
            </div>
        </div>

    );
};
export default Table;
import  { useState, useEffect } from 'react';
const Table = () => {
    const [tableData, setTableData] = useState([]);
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
    

    return (
        
        <div className=" p-4 md:p-8">            
                {/* Table */}
                <div className=' w-full mt-24'>
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-amber-900 mb-2">Feedback Records</h1>
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
                                <th className='w-2/12 border border-amber-300 p-3 '>Buttons</th>
                            </tr>
                        </thead>
                        <tbody className='text-center grid-rows-6 place-items-center border-amber-300 '>
                            {tableData.map((item) => (
                                <tr key={item.id} className="hover:bg-amber-50 transition-colors">
                                    {/* <td className='border border-t-0 border-amber-300  p-4 overflow-hidden w-1/12 '>{item.firstName}</td>
                                    <td className='border border-t-0 border-amber-300  p-4 overflow-hidden w-1/12 '>{item.lastName}</td> */}
                                    <td className='border border-t-0 border-amber-300 p-4 overflow-hidden w-2/12 '>{item.firstName} {item.lastName}</td>
                                    <td className='border border-t-0 border-amber-300 p-4 overflow-hidden w-2/12 cursor-pointer hover:text-amber-700  hover:underline' onClick={() => handleEmailClick(item.email)}>{item.email}</td>
                                    <td className='border border-t-0 border-amber-300  p-4 overflow-hidden w-1/12 cursor-pointer hover:text-amber-700 hover:underline' onClick={() => handlePhoneClick(item.phone)}>{item.phone}</td>
                                    <td className="border border-t-0 border-amber-300  p-4 overflow-hidden w-3/12 text-left">
                                        <div className="text-sm text-gray-700">
                                            <p className={expandedRows[item.id] ? "" : "line-clamp-2"}>
                                                {expandedRows[item.id] ? item.message : truncateText(item.message, 50)}
                                            </p>
                                            {needsShowMore(item.message) && (
                                                <button
                                                    onClick={() => toggleExpanded(item.id)}
                                                    className="mt-2 underline text-xs font-medium text-amber-700 hover:text-amber-900 "
                                                >
                                                    {expandedRows[item.id] ? "Show Less" : "Show More"}
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                    <td className='border border-t-0 border-amber-300  p-4 overflow-hidden w-1/12 '>{item.Date}</td>
                                    <td className='border border-t-0 border-amber-300  p-4 overflow-hidden w-1/12 '>{item.Time}</td>
                                    <td className='border border-t-0 border-amber-300  p-4 overflow-hidden w-2/12 '>
                                        <button className="bg-amber-600 text-white py-1 px-5 m-1 rounded">Edit</button>
                                        <button onClick={() => handleDelete(item.id)} className="bg-amber-700 text-white py-1 px-5 m-1 rounded">Delete</button>                                        
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> 
        </div>

    );
};
export default  Table;
 
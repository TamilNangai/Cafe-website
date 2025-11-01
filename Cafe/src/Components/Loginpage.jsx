import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Loginpage() {
  const USERNAME = "admin";
  const PASSWORD = "12345";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === USERNAME && password === PASSWORD) {
      setError("");
      alert("Login Successful!");
      navigate("/Table"); 
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <div className='bg-amber-50 w-full h-screen flex flex-col justify-center items-center '>
      
      <form onSubmit={handleLogin}  className='w-1/5 bg-amber-700 flex flex-col justify-center items-center rounded-3xl'>
        <span className='text-white text-3xl font-bold mb-8 mt-3'>Login Page</span>
        <input className="1/2 h-[30px] md:h-[35px] text-lg bg-transparent outline-none placeholder:text-white text-white border-b-2 p-3 m-3 border-white focus:rounded-lg  focus:outline-none focus:ring-2 focus:ring-amber-400" type="text" placeholder="Username" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="1/2 h-[30px] md:h-[35px] text-lg bg-transparent outline-none placeholder:text-white text-white border-b-2 p-3 m-3 border-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" type="password" placeholder="Password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-amber-600 text-white px-4 py-2 m-3 rounded-md hover:bg-amber-400 transition-colors" type="submit">Login</button>
        {error && (
          <p className="text-white text-center font-medium m-3">{error}</p>
        )}
      </form>
    </div>
  )
}

export default Loginpage;
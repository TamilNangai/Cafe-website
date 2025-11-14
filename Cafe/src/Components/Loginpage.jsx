import { useState } from "react";
import { useNavigate } from "react-router-dom";
import coffee from "../assets/Contact/coffee.png"
import line from "../assets/Hero_sectionimage/heroline.png"
function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if ("admin" === username && "12345" === password) {
      setError("");
      alert("Login Successful!");
      navigate("/Table"); 
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <div className='bg-amber-50 w-full h-screen flex flex-col justify-center items-center '>
      <div className="h-auto w-10 relative "><img className='absolute -bottom-32  -rotate-90' src={line} alt="line" /></div>
      <form onSubmit={handleLogin} className='w-80 bg-amber-700 flex flex-col justify-center items-center rounded-3xl'>
        <span className='text-white text-3xl font-bold mb-8 mt-3 '>Login Page</span>
        <input className={`1/2 h-[30px] md:h-[35px] text-lg  outline-none placeholder:text-white text-white border-2 bg-amber-600 rounded-lg p-3 m-3 border-amber-500 focus:rounded-lg  focus:outline-none focus:ring-2   ${
          error ? "border-red-500 focus:ring-red-500" : "border-white focus:ring-white"}`} type="text" placeholder="Username" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input className={`1/2 h-[30px] md:h-[35px] text-lg  outline-none placeholder:text-white text-white border-2 bg-amber-600 rounded-lg p-3 m-3 border-amber-500 focus:rounded-lg  focus:outline-none focus:ring-2 focus:ring-white  ${
              error ? "border-red-500 focus:ring-red-500" : "border-white focus:ring-white"}`} type="password" placeholder="Password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="bg-amber-600 text-white px-4 py-2 m-3 rounded-md hover:bg-amber-800 transition-colors" type="submit">Login</button>
        {error && (
          <p className="text-white text-center font-medium m-3 ">{error}</p>
        )}
      </form>
      <div className="h-auto w-10 relative ">
        <img className="absolute right-[118px] -bottom-2" src={coffee} alt="coffee" />
        <img className="absolute right-[140px] bottom-2 -rotate-90" src={coffee} alt="coffee" />
        <img className="absolute right-[115px] bottom-5 -rotate-45" src={coffee} alt="coffee" />
      </div>
    </div>
  )
}

export default Loginpage;
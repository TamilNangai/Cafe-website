import React, { useState } from "react";
import bg from '../assets/contact/bg.png';
function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      phone,
      message,
      email,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    const res = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (res.ok) {
      alert("Saved Successfully!🎉");

      setFirstName("");
      setLastName("");
      setPhone("");
      setMessage("");
      setEmail("");
    } else {
      alert("Failed to save!😞");
    }
  };

  return (
    
    <section className="flex flex-col lg:flex-row md:flex-row sm:items-center sm:justify-center  rounded-2xl h-[570px] bg-[#835C3B] p-5 mt-20 mb-10 w-full" style={{ backgroundImage: `url(${bg})` }}>
      <aside className="sm:w-1/2 w-full">
        <h1 className="text-[30px] lg:text-[50px] md:text-[45px] xl:text-[60px] text-white font-[Bellefair]">Where Coffee Meet Comfort </h1>
        <p className="font-[Bellefair] text-[12px] lg:text-[17px] md:text-[12px] xl:text-[15px] text-white text-left mt-3">At Brew Haven Café, we believe every cup tells a story.
          From hand-picked beans to freshly baked treats, we serve you quality with love.
          Whether you're here to work, relax, or catch up with friends – our space is designed just for you.</p>
        <p className="text-white text-[10px] sm:text-[16px] mt-3">1K + Happy Customer</p>
      </aside>
      <main className='flex justify-center items-center sm:w-1/2 w-full mt-5'>
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-lg rounded-3xl xl:w-1/2 lg:w-3/4 md:w-4/5 w-4/5 ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 xl:w-[250px] lg:w-[250px] md:w-[200px] w-[150px] xl:h-[500px] md:h-[500px] h-[360px] mt-[10px]">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="xl:mt-8 md:mt-8 mt-2 text-[16px] lg:text-[20px] md:text-[18px]  text-xl bg-transparent outline-none font-[ABeeZee]  text-white border-b-2 border-white"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="xl:mt-8 md:mt-8 mt-3 text-xl bg-transparent outline-none font-[ABeeZee]  text-white border-b-2 border-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="xl:mt-8 md:mt-8  mt-3 text-xl bg-transparent outline-none font-[ABeeZee]  text-white border-b-2 border-white"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="xl:mt-8 md:mt-8 mt-3 text-xl bg-transparent outline-none font-[ABeeZee]  text-white border-b-2 border-white"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              value={message}
                onChange={(e) => setMessage(e.target.value)}
              className="xl:mt-8 md:mt-8 mt-3 text-xl bg-transparent outline-none font-[ABeeZee]  text-white border-b-2 border-white"
              required
            />
            <button type="submit" className="flex justify-center items-center align-center border-2 border-[#835C3B] py-1 px-3 xl:mt-8 md:mt-8 mt-2 font-bold bg-[#835C3B] text-white rounded-lg">Submit</button>
          </form>


        </div>
      </main>
    </section>
  );
}

export default Form;

import { useState } from "react";
import bg from '../assets/Hero_Carousal/h2.png';

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    const formData = {
      firstName,
      lastName,
      email,
      phone,
      message,
      Date: new Date().toLocaleDateString([],{ day: '2-digit', month: '2-digit', year: 'numeric' }),
      Time: new Date().toLocaleTimeString([],{ hour: '2-digit', minute: '2-digit' }),
    };

    console.log('Submitting data with timestamp:', formData);

    fetch("http://localhost:5000/customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('Success response:', data);
        const fullName = `${firstName} ${lastName}`.trim();
        alert(`Thank you, ${fullName}! Your message has been sent.`);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(`Failed to submit: ${error.message}`);
      });
  };
  return (
    <>
      <section className="w-full flex items-center justify-center rounded-2xl p-5 h-[570px] bg-[#835C3B] mt-20 mb-10" style={{ backgroundImage: `url(${bg})` }}>
        <aside className="w-1/2">
          <h1 className="text-[60px] text-white font-[Bellefair] ">Where Coffee Meet Comfort </h1>
          <p className="font-[Bellefair] text-1xl text-white mt-3">At Brew Haven Café, we believe every cup tells a story.
            From hand-picked beans to freshly baked treats, we serve you quality with love.
            Whether you're here to work, relax, or catch up with friends – our space is designed just for you.</p>
          <p className="text-white">1K + Happy Customer</p>
        </aside>
        <main className='flex justify-center items-center w-1/2'>
          <div id="form-container" className="flex flex-col  bg-white/20  backdrop-blur-lg rounded-3xl w-2/3 p-5 ">
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-[450px] space-y-3 ">
              <div className="flex space-x-4">
                <section className="text-left">
                  <h1 className="font-[ABeeZee] text-[#fff] text-[23px]">First Name</h1>
                  <input
                    required
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full h-[30px] md:h-[35px] text-lg bg-transparent outline-none text-white border-b-2 p-3 border-white"
                  />
                </section>
                <section className="text-left">
                  <h1 className="font-[ABeeZee] text-[#fff] text-[23px]">Last Name</h1>
                  <input
                    required
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full h-[30px] md:h-[35px] text-lg bg-transparent outline-none text-white border-b-2 p-3 border-white"
                  />
                </section>
              </div>
              <section className="text-left w-full">
                <h1 className="font-[ABeeZee] text-[#fff] text-[23px]">Email</h1>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[30px] md:h-[35px] text-lg bg-transparent outline-none text-white border-b-2 p-3 border-white"
                />
              </section>
              <section className="text-left w-full">
                <h1 className="font-[ABeeZee] text-[#fff] text-[23px]">Phone</h1>
                <input
                  required
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value.replace(/\D/g, '').slice(0, 10));
                  }}
                  pattern="\d{10}"
                  className="w-full h-[30px] md:h-[35px] text-lg bg-transparent outline-none text-white border-b-2 p-3 border-white"
                />
              </section>

              <section className="text-left w-full">
                <h1 className="font-[ABeeZee] text-[#fff] text-[23px] ">Message</h1>
                <input
                  required
                  type="text"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-[30px] md:h-[35px] text-lg bg-transparent outline-none text-white border-b-2 p-3 border-white"
                />
              </section>
              <button className="flex align-center border-2 border-[#835C3B] py-1 px-5 font-bold bg-[#835C3B] text-white rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </main>
      </section>
    </>
  )
}
export default Form;
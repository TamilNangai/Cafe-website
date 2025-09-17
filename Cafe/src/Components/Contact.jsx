import line from '../assets/Contact/line.png'
import opentime from '../assets/Contact/opentime.png'
import contact from '../assets/Contact/contact.png'
import address from '../assets/Contact/address.png'
import phone from '../assets/Contact/phone.png'
import email from '../assets/Contact/email.png'
import coffee from '../assets/Contact/coffee.png'
import coffee_beantl from '../assets/Contact/coffee_beantl.png'
import coffee_beantr from '../assets/Contact/coffee_beantr.png'
import coffee_beanbl from '../assets/Contact/coffee_beanbl.png'
import coffee_beanh from '../assets/Contact/coffee_beanh.png'
const Contact = () => {
    return (
        <div className='relative'>
            <h1 className='flex justify-center items-center font-[Abhaya-Libre-ExtraBold] font-extrabold text-[40px] text-[#5C2D0B]'>Contact us</h1>
            <h1 className='flex justify-center items-center font-[ABeeZee] font-normal text-[44px] text-[#7a2121]'>WE ARE HERE FOR YOU</h1>
            <div className='flex justify-center items-center'><img src={line} alt="line" /></div>
            <div className='absolute top-0 left-0 rotate-280'>
                <img src={coffee_beantl} alt="coffee_beantl" />
            </div>
            <div className='absolute top-0 right-0'>
                <img src={coffee_beantr} alt="coffee_beantr" />
            </div>
            <section className='flex flex-row justify-evenly mt-10 '>
                <div className='flex flex-col items-center'>
                    <img src={opentime} alt="opentime" />
                    <h2 className='font-sedgwick font-normal text-[35px] text-[#7a2121]'>Open Time</h2>
                    <p className='para mt-6'>
                        Monday to Sunday<br />
                        9.00 AM-8.00 PM</p>
                    <p className='para mt-4 '>
                        Sunday<br />
                        9.00 AM-10.00 PM</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={contact} alt="contact" />
                    <h2 className='font-sedgwick font-normal text-[35px] text-[#7a2121]'>Contact</h2>
                    <ul className='flex flex-col items-start'>
                        <li className='para mt-2'>
                            <img className='mr-5' src={phone} alt="phone" />
                            (123) 456-7890
                        </li>
                        <li className='para mt-3'>
                            <img className='mr-3' src={email} alt="email" />
                            Cozycup@mail.com
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={address} alt="address" />
                    <h2 className='font-sedgwick font-normal text-[35px] text-[#7a2121]'>Our Address</h2>
                    <p className='para'>123 Coffee lane,brew ton,<br />
                        BT,5689,Thanjavur- <br /> 6142012.</p>
                </div>
            </section>
            <div className='flex justify-center items-center mt-10'>
            <button className='bg-orange-700 p-3'>view</button>
            </div>
            <div className='absolute -bottom-28 left-0 '>
                <img src={coffee_beanbl} alt="coffee_beanbl" />
            </div>
            <div className='absolute bottom-8 left-28'>
                <img src={coffee} alt="coffee" />
            </div>
            <div>
                <img className='absolute bottom-0 right-[120px] ' src={coffee} alt="coffee" />
                <img className='absolute -bottom-10 right-[70px] ' src={coffee} alt="coffee" />
                <img className='absolute -bottom-6 right-[0px] ' src={coffee_beanh} alt="coffee_beanh" />
                <img className='absolute bottom-0 right-[20px] ' src={coffee} alt="coffee" />
                <img className='absolute bottom-8 right-[60px] -rotate-45' src={coffee} alt="coffee" />
                <img className='absolute bottom-16 right-[15px] -rotate-45' src={coffee} alt="coffee" />
            </div>
        </div>
    );
};

export default Contact;

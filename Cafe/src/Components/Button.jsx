import { Link } from 'react-router-dom';
import img from '../assets/btn/leave.png';

function Button() {
  return (
    <div className='flex justify-center items-center mt-10'>
      <button className="flex o-underline sm:flex items-center gap-2  bg-[#835C3B] font-[ABeeZee] text-white font-semibold px-3 py-1 my-1 xl:mx-[150px] lg:m-12  md:m-7 md:text-[18px] rounded-xl">View <img src={img} alt="btn" className="w-6 h-6" /></button>
    </div>

  )
}

export default Button;
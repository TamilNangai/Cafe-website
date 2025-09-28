import bg from '../assets/Footer/bg.png'
import logo from '../assets/Footer/logo.png'
import insta from '../assets/Footer/insta.png'
import twit from '../assets/Footer/twit.png'
import fb from '../assets/Footer/fb.png'
export const Footer = () => {
  return (
    <div>
      <footer className="w-full h-fit bg-cover  bg-center flex sm:justify-between justify-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className='xl:w-[20%] lg:w-[25%] md:w-[25%] w-[70%] h-fit flex flex-col  justify-items-center bg-white/70 rounded-full sm:rounded-full lg:m-14 md:m-8 lg:py-16 md:py-10 lg:px-5 md:px-2 px-5  py-16 my-5 gap-4'>
         <div className='w-full sm:w-auto h-fit justify-items-center'> <img className='w-auto xl:h-32 lg:h-24 md:h-20 h-[100px]' src={logo} alt="logo" /></div>
          <div className='w-full h-fit flex flex-col items-center  gap-4'>
            <h1 className='font-[Mate-SC] font-normal text-[36px] sm:text-[15px] md:text-[25px] lg:text-[33px] xl:text-[36px] items-center'>Cozy cup</h1>
          <p className='w-full font-[Marmelad] font-normal  text-[28px] sm:text-[8px] md:text-[12px] lg:text-[17px] xl:text-[20px] text-center'>Discover our Delicious coffee and tea!</p>
            <button className=' font-[Mate-SC] font-normal  text-[26px] sm:text-[10px] md:text-[15px] lg:text-[18px] xl:text-[20px] px-7 py-2 justify-items-center  bg-[#9B8743] rounded-[30px] '>Follow us :</button>
          <div className='flex gap-7 md:gap-3 mt-auto '>
            <img className='w-auto lg:h-8 md:h-7 h-10' src={fb} alt="facebook" />
              <img className='w-auto lg:h-8 md:h-7 h-10' src={insta} alt="instagram" />
              <img className='w-auto lg:h-8 md:h-7 h-10' src={twit} alt="twitter" />
          </div>
          </div>
        </div>
        <div className='xl:w-[28%] lg:w-[28%] md:w-[35%] h-fit  md:flex flex-col items-center bg-[#5C2D0BC2]/75 text-white xl:m-5  xl:px-5 xl:py-10 lg:m-3 md:m-8 m-8 lg:py-5 lg:px-0 md:py-10 py-10 hidden '>
          <h1 className='font-[Mate-SC] font-normal text-[13px] sm:text-[15px] md:text-[30px] lg:text-[37px] xl:text-[40px]  '>Support</h1>
          <p className='w-[50%] font-[Marmelad] font-normal text-[5px] sm:text-[5px] md:text-[15px] lg:text-[23px] xl:text-[26px]  ms-[20%]'>Product
            Help&Support
            Return policy
            Terms of us</p>
          <section className='flex flex-row items-center justify-end m-5'>
            <div className='xl:w-72 lg:w-56 md:w-40 sm:w-28 w-20 border '></div>
            <div className='bg-white xl:w-4 xl:h-5 lg:w-3 lg:h-4 md:w-2 md:h-3 w-1 h-2 rounded-[100px]'></div>
          </section>
          <h1 className='font-[Mate-SC] font-normal text-[13px] sm:text-[15px] md:text-[30px] lg:text-[37px] xl:text-[40px]  '>View Guides</h1>
          <p className='w-[36%] font-[Marmelad] font-normal text-[5px] sm:text-[5px] md:text-[15px] lg:text-[23px] xl:text-[26px] ms-[10%]'>Features
            Careers
            Blog Posts
            Our Brances</p>
        </div>
      </footer>
    </div>
  )
}

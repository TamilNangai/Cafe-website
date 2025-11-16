import a1 from '../assets/about/a1.png'
import a2 from '../assets/about/a2.png'
import a3 from '../assets/about/a3.png'
import a4 from '../assets/about/a4.png'
import linee from '../assets/coffee/line.png'
import cofc from '../assets/coffee/cofc.png'
import coffc from '../assets/coffee/coffc.png'
import le from '../assets/coffee/le.png'

function AboutUs({ bp}) {
  return (

    <section className="p-5 xl:p-20 lg:p-19 md:p-10">
      <header className="relative w-full h-full">

        <img src={bp} className="absolute xl:right-[250px] xl:top-[550px] xl:h-[600px] xl:w-[600px] lg:right-[150px] lg:top-[450px] md:w-[400px] md:h-[400px] md:top-[250px] md:right-[100px]
        w-[250px] h-[250px] top-[150px] right-[50px]" />

        <img src={coffc} className="absolute xl:-right-[80px] xl:top-[900px] xl:w-40 lg:w-[120px] lg:-right-10 lg:top-[670px] md:w-20 md:-right-10 md:top-[480px] hidden sm:block" />
        <img src={cofc} className="absolute xl:-left-[100px] xl:top-[15px] xl:w-40 lg:w-[120px] lg:-left-10 lg:-top-[10px] md:w-20 md:-left-10 md:top-[700px] hidden sm:block" />
        <img src={cofc} className="absolute xl:-left-[100px] xl:top-[1300px] xl:w-40 lg:w-[120px] lg:-left-[70px] lg:top-[950px]  md:w-20 md:-top-[20px] md:-left-10 hidden sm:block" />

        <img src={le} className="absolute xl:-right-10 xl:top-[1450px] -rotate-90 xl:w-[120px] lg:w-[100px] lg:top-[1150px] lg:right-40px md:w-20 md:top-[810px] md:-right-10 hidden sm:block" />
        <img src={le} className="absolute xl:left-[45px] xl:top-[700px] xl:w-[120px] lg:w-[100px] lg:top-[530px] md:w-20 md:top-[350px] hidden sm:block" />

        <img src={linee} className="absolute xl:top-[220px] xl:left-[300px] lg:top-[120px] lg:left-[195px] xl:w-[260px]  lg:w-[200px] md:w-[150px] lg:h-[30px] xl:h-[40px]
                md:top-[65px] md:left-[140px] md:h-[30px] w-[60px] h-[10px] left-[85px] top-[60px]" />


        <div className="w-full flex gap-10 xl:-mt-[200px] lg:-mt-[100px] md:-mt-[60px] -mt-[50px]  justify-center items-center">
          <div className="w-2/3">
            <h1 className="text-[12px] lg:text-[30px] md:text-[22px] xl:text-[44px] text-center text-[#5C2D0B] font-[ABeeZee] font-semibold xl:mb-10 lg:mb-10 md:mb-10 mb-5 mt-10">About Us</h1>

            <p className="text-[9px] lg:text-[24px] md:text-[18px] xl:text-[28px]  font-[Bellefair] text-[#5C2D0B] mb-1">"Welcome to Cafe Serenity, where passion for tea and coffee meets a cozy, welcoming atmosphere. Nestled in the heart of !our cafe is a haven
              for those who appreciate the art of a perfectly brewed cup and the joy of a warm, inviting space.</p>
          </div>
          <div className="w-1/3 ">
            <img className=" w-full min-h-[120px] max-h-[700px] xl:w-[500px] lg:-mt-[30px] md:-mt-[50px] m-auto" src={a1} />
          </div>
        </div>
        <div className="w-full flex gap-10 xl:-mt-[50px] justify-center items-center">
          <div className="w-1/3 ">
            <img className="w-full min-h-[120px] sm:max-h-[400px] xl:w-[400px] m-auto" src={a2} />
          </div>
          <div className="w-2/3">
            <h1 className="text-[12px] lg:text-[30px] md:text-[22px] xl:text-[44px] text-center text-[#5C2D0B] font-[ABeeZee] font-semibold ">Our Story</h1>

            <p className="text-[9px] lg:text-[24px] md:text-[18px] xl:text-[28px]  font-[Bellefair] text-[#5C2D0B] mb-1">Our journey began with a simple love for tea and coffee. As enthusiasts, we wanted to create a place where people could savor high-quality
              beverages while feeling right at home. Our dream turned into reality when we opened [Cafe Serenity] , a place where every detail, from the beans we select
              to the ambiance we create, is crafted with care and dedication.</p>
          </div>

        </div>
        <div className="w-full flex gap-10 mt-5 justify-center items-center">
          <div className="w-2/3">
            <h1 className="text-[12px] lg:text-[30px] md:text-[22px] xl:text-[44px] text-center text-[#5C2D0B] font-[ABeeZee] font-semibold">Our Offering</h1>

            <p className="text-[9px] lg:text-[24px] md:text-[18px] xl:text-[28px]  font-[Bellefair] text-[#5C2D0B] mb-1">At  [Cafe Serenity], we pride ourselves on offering an extensive menu of carefully curated teas and coffees. From rich, robust espressos to
              delicate, fragrant teas, there’s something for everyone. We source our ingredients from the finest suppliers, ensuring every cup is a testament to quality
              and flavor.</p>
          </div>
          <div className="w-1/3 ">
            <img className="w-full min-h-[120px] sm:max-h-[400px] xl:w-[400px] m-auto" src={a3} />
          </div>
        </div>

        <div className="w-full flex gap-10 xl:-mt-5 xl:-mb-20 justify-center items-center">
          <div className="w-1/3 ">
            <img className="w-full min-h-[120px] sm:max-h-[600px] xl:w-[600px] m-auto" src={a4} />
          </div>
          <div className="w-2/3">
            <h1 className="text-[12px] lg:text-[30px] md:text-[22px] xl:text-[44px] text-center text-[#5C2D0B] font-[ABeeZee] font-semibold ">Visit Us</h1>

            <p className="text-[9px] lg:text-[24px] md:text-[18px] xl:text-[28px]  font-[Bellefair] text-[#5C2D0B]">We invite you to come and experience the warmth and hospitality of [Your Cafe's Name]. Whether you’re here to work, relax, or catch up wit
              h friends, our friendly staff is here to make your visit memorable. Thank you for making us a part of your day!</p>
          </div>

        </div>


      </header>
    </section>

  );
}


export default AboutUs; 
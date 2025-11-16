function About({  title, description }) {

  return (
    <>
      <div className="xl:mt-10 lg:mt-10 md:mt-10 mt-3 mb-10" >
      <h3 className="text-lg lg:text-[44px] md:text-[35px] text-center font-[ABeeZee] text-[#5C2D0B] font-semibold">{title}</h3>
      <p className="text-[12px] lg:text-[27px] md:text-[20px] xl:text-[28px] mt-5 text-center font-[Bellefair] text-[#832C2C] mx-10">{description}</p>
    </div>
    </>
  );
}


export default About; 
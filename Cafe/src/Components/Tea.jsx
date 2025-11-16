import t1 from '../assets/tea/t1.png'
import t2 from '../assets/tea/t2.png'
import t3 from '../assets/tea/t3.png'
import t4 from '../assets/tea/t4.png'
import t5 from '../assets/tea/t5.png'
import t6 from '../assets/tea/t6.png'
import t7 from '../assets/tea/t7.png'
import linet from '../assets/tea/line.png'

function Tea({ lef1, lef2, lef3, lef4, coff1, cof2, cof3, }) {
  return (
    <div>

      <section className="p-5 xl:p-[110px] lg:p-19 md:p-[50px]">
        <header className="relative w-full h-full">
          <img src={lef3} className="absolute xl:-right-20 xl:top-[10px]  xl:w-[150px] lg:w-[100px] md:w-20 lg:-top-[10px] lg:-right-[20px] 
           md:-top-[50px] md:-right-[20px] hidden sm:block" />

          <img src={linet} className="absolute xl:top-[100px] xl:right-[290px] lg:top-[50px] lg:right-[200px] xl:w-[300px] lg:w-[200px] md:w-[150px] lg:h-[30px] xl:h-[47px]
                md:top-[10px] md:right-[140px] md:h-[25px] w-[60px] h-[10px] right-[90px] top-[20px]" />

          <div className="w-full h-fit flex gap-10 xl:-mt-[120px] lg:-mt-[40px] justify-center items-center">
            <div className="w-1/3">
              <img className="absolute w-[200px] h-[240px] xl:h-[700px] xl:w-[600px] xl:-top-[100px] xl:-left-[90px] md:h-[450px] md:w-[350px] md:-top-[70px] md:-left-[40px] lg:-mt-[100px] -mt-[130px] m-auto " src={t1} />
            </div>
            <div className="w-2/3 xl:mt-10 lg:mt-[10px] md:-mt-5 ">
              <h1 className="text-[12px] lg:text-[30px] md:text-[22px] xl:text-[44px] text-center text-[#5C2D0B] font-[ABeeZee]">Why We Love Tea</h1>
              <p className="text-[9px] lg:text-[20px] md:text-[18px] xl:text-[27px] font-[Bellefair] text-[#832C2C] mb-1 lg:mt-10 md:mt-10">We believe that tea is the perfect blend of tradition and innovation, offering something for everyone.
                Whether you're sipping a delicate white tea, enjoying the robust flavors of a classic black tea, or exploring the aromatic world of herbal blends,
                each cup tells a story.</p>
            </div>
          </div>

          <div className="w-full h-fit flex gap-10 xl:mt-20 lg:mt-20 md:mt-10 mt-10s justify-center items-center mt-3">
            <div className="w-2/3">
              <h1 className="text-[12px] lg:text-[30px] md:text-[22px] xl:text-[44px] text-left text-[#5C2D0B] font-[ABeeZee] xl:mb-10 lg:mb-10 mb-4">What Kind Of Tea We Serve For You</h1>
              <p className="text-[9px] lg:text-[20px] md:text-[18px] xl:text-[27px]  font-[Bellefair] text-[#832C2C] mb-1">Black tea is fully oxidized, giving it a deep, rich flavor with a hint of sweetness. It’s the most popular tea worldwide,
                known for its strong taste and higher caffeine content. Whether you enjoy it plain, with a splash of milk, or a touch of honey,
                black tea is a perfect pick-me-up any time of day.</p>
            </div>
            <div className="relative w-1/3 group">
              <img className="w-full min-h-[120px] sm:max-h-[260px] m-auto" src={t2} />
                <div className="absolute inset-0 flex  text-[50px]  font-greatvibes items-center justify-center  bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Black Tea
              </div>
            </div>
          </div>
        </header>
      </section>

      <section className="p-5 xl:p-20 lg:p-19 md:p-[60px]">
        <subheader className="relative w-full h-full">

          <img src={coff1} className="absolute xl:-right-20 rotate-0 xl:top-[460px] z-10 xl:w-[180px] lg:w-[100px] md:w-[100px] lg:-right-20 lg:top-[380px] md:top-[260px] md:-right-20  hidden sm:block" />
          <img src={cof2} className="absolute xl:-left-[100px] rotate-0 xl:-top-[260px] xl:w-[150px] lg:w-[80px] md:w-20 lg:-left-20 lg:-top-[170px] md:-top-[160px] md:-left-[80px]   hidden sm:block" />
          <img src={cof3} className="absolute xl:-left-[100px] xl:w-[180px] xl:top-[1300px] z-10 lg:w-[120px] md:w-[100px] lg:-left-20 lg:top-[1100px] md:top-[830px] md:-left-20 21 hidden sm:block" />

          <img src={lef1} className="absolute xl:-right-[80px] xl:w-[150px] xl:top-[90px] lg:w-[100px] md:w-20 lg:top-[80px] lg:-right-[50px] md:top-[40px] md:-right-[50px]  hidden sm:block" />
          <img src={lef2} className="absolute xl:-right-20 xl:w-[150px] xl:top-[1340px] lg:w-[100px] md:w-20 lg:top-[1100px] lg:-right-[20px] md:top-[860px] md:-right-[40px] hidden sm:block" />
          <img src={lef4} className="absolute xl:-left-[100px] rotate-12 xl:w-[120px] xl:top-[780px] lg:w-[100px] md:w-20 lg:top-[630px] lg:-left-20
          md:top-[460px] md:-left-[50px] hidden sm:block" />

          <div className="w-full h-fit flex gap-10 xl:-mt-20 md:-mt-20 -mt-5 justify-center items-center">
            <div className="relative w-1/3 group">
              <img className="w-full block peer min-h-[120px] sm:max-h-[280px] m-auto" src={t3} />
              <div className="absolute inset-0 flex items-center text-[50px] font-greatvibes  text-left bg-opacity-60 text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Green Tea
              </div>

            </div>
            <div className="w-2/3">
              <p className="text-[9px] lg:text-[20px] md:text-[15px] xl:text-[27px] font-[Bellefair] text-[#832C2C] mt-10 mb-1">Green tea is only slightly oxidized, which preserves its natural green color and fresh taste. It’s known for its grassy,
                slightly sweet flavor and is packed with antioxidants. Green tea is celebrated for its health benefits, including boosting metabolism and
                enhancing mental clarity.</p>
            </div>
          </div>
x
          <div className="w-full h-fit flex gap-10 lg:mt-10 md:mt-10 mt-5 justify-center items-center">
            <div className="w-2/3">
              <p className="text-[9px] lg:text-[20px] md:text-[15px] xl:text-[27px]  font-[Bellefair] text-[#832C2C] mb-1">White tea is the least processed of all teas, made from young tea leaves and buds. Its flavor is light, sweet, and delicate,
                making it a favorite for those who prefer a softer taste. White tea is also rich in antioxidants and is often praised for its calming properties.</p>
            </div>
            <div className="relative w-1/3 group">
              <img className="w-full min-h-[120px] sm:max-h-[260px] m-auto" src={t4} />
                <div className="absolute inset-0 flex  text-[50px]  font-greatvibes   bg-opacity-60 text-white text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                White Tea
              </div>

            </div>
          </div>

          <div className="w-full h-fit flex gap-10 lg:mt-10 md:mt-10 mt-5 justify-center items-center">
            <div className="w-1/3 group relative">
              <img className="w-full min-h-[120px] sm:max-h-[280px] m-auto" src={t5} />
                <div className="absolute inset-0 flex  text-[50px]  font-greatvibes   bg-opacity-60 text-white text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Olong Tea
              </div>
            </div>
            <div className="w-2/3">
              <p className="text-[9px] lg:text-[20px] md:text-[18px] xl:text-[27px] font-[Bellefair] text-[#832C2C] mt-10 mb-1">Oolong tea is partially oxidized, striking a balance between black and green tea. It offers a wide range of flavors,
                from floral and fruity to toasty and nutty, depending on the level of oxidation. Oolong is perfect for those who enjoy a tea with depth and character.</p>
            </div>
          </div>

          <div className="w-full h-fit flex gap-10 lg:mt-10 md:mt-10 mt-5 justify-center items-center">
            <div className="w-2/3">
              <p className="text-[9px] lg:text-[20px] md:text-[18px] xl:text-[27px]  font-[Bellefair] text-[#832C2C] mb-1">Herbal teas, also known as tisanes, are made from a variety of herbs, flowers, and fruits. They are naturally caffeine-free and come in a
                wide range of flavors, from soothing chamomile to zesty peppermint. Herbal teas are perfect for unwinding and enjoying a moment of tranquility.</p>
            </div>
            <div className="relative w-1/3 group">
              <img className="w-full min-h-[120px] sm:max-h-[260px] m-auto" src={t6} />
                <div className="absolute inset-0 flex  text-[50px]  font-greatvibes   bg-opacity-60 text-white text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Herbal Tea
              </div>
            </div>
          </div>

          <div className="w-full h-fit flex gap-10 lg:mt-10 md:mt-10 mt-5 justify-center items-center">
            <div className="relative w-1/3 group">
              <img className="w-full min-h-[120px] sm:max-h-[260px] m-auto" src={t7} />
                <div className="absolute inset-0 flex  text-[50px]  font-greatvibes   bg-opacity-60 text-white text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Chai
              </div>
            </div>
            <div className="w-2/3">
              <p className="text-[9px] lg:text-[20px] md:text-[18px] xl:text-[27px]  font-[Bellefair] text-[#832C2C] mb-1">Chai is a spiced tea made with black tea and a variety of warming spices like cinnamon, cardamom, and ginger.
                It’s often enjoyed with milk and sweetened to taste. Chai is a perfect blend of bold tea and aromatic spices, offering a cozy and comforting experience.</p>
            </div>

          </div>

        </subheader>
      </section>

    </div>
  );
}

export default Tea; 
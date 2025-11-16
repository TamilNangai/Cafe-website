import c1 from '../assets/coffee/c1.png'
import c2 from '../assets/coffee/c2.png'
import c3 from '../assets/coffee/c3.png'
import c4 from '../assets/coffee/c4.png'
import c5 from '../assets/coffee/c5.png'
import c6 from '../assets/coffee/c6.png'
import c7 from '../assets/coffee/c7.png'

function Coffee({ cofc1, cofc2, cofc3, cofc4, lefc1, lefc2, lefc3, lefc4, linec, }) {
   return (
      <div>

         <section className="p-5 xl:p-20 lg:p-19 md:p-10">
            <header className="relative w-full h-full">
               <img src={cofc2} className="absolute xl:-right-20 xl:-top-[70px] lg:-right-10 lg:-top-[40px] lg:w-[120px] xl:w-48 md:w-20 md:-right-10 md:-top-[40px] hidden sm:block" />
               <img src={lefc1} className="absolute xl:-right-[80px] xl:top-[350px] lg:-right-[50px] lg:top-[300px] xl:w-[150px] lg:w-[100px] md:w-20 md:-right-10 md:top-[220px] hidden sm:block " />

               <img src={linec} className="absolute xl:top-[100px] xl:right-[310px] lg:top-[75px] lg:right-[200px] xl:w-[300px]  lg:w-[200px] md:w-[150px] lg:h-[30px]   xl:h-[50px]
                md:top-[50px] md:right-[140px] md:h-[27px] w-[60px] h-[10px] right-[90px] top-[20px]" />


               <div className="w-full h-fit flex gap-10 xl:-mt-[95px] lg:-mt-[55px] md:-mt-[40px] -mt-[10px] justify-center items-center">
                  <div className="w-1/3 ">
                     <img className="w-full min-h-[120px] sm:max-h-[400px] xl:w-[3000px] m-auto" src={c1} />
                  </div>
                  <div className="w-2/3">
                     <h1 className="text-[12px] lg:text-[30px] md:text-[22px] xl:text-[44px] text-center text-[#5C2D0B] font-[ABeeZee] mb-5">Why We Love Coffee</h1>
                     <p className="text-[9px] lg:text-[22px] md:text-[15px] xl:text-[27px] font-[Bellefair] text-[#832C2C] xl:mt-10 mb-1">
                        Coffee is cherished not only for its stimulating effects but also for its rich, complex flavors and aromas.
                        It's a social beverage that brings people together, whether in bustling cafes or quiet mornings at home.
                        At Coffee Haven, we're dedicated to celebrating this beloved drink by offering the highest quality products and resources to enhance your coffee journey.</p>
                  </div>
               </div>

               <div className="w-full h-fit flex gap-10 xl:mt-10 lg:mt-10 md:mt-10 mt-5 justify-center items-center">

                  <div className="w-2/3 ">
                     <h1 className="text-[12px] lg:text-[30px] md:text-[22px] xl:text-[44px] text-center text-[#5C2D0B] font-[ABeeZee] mb-9  ">What Kind Of Coffee We Serve For You</h1>
                     <p className="text-[9px] lg:text-[22px] md:text-[15px] xl:text-[27px] font-[Bellefair] text-[#832C2C] ">
                        A cappuccino is a beloved espresso-based hot coffee drink made with layering of espresso, steamed milk, and milk foam on top.
                        The taste of cappuccinos can be described as creamy, smooth, and balanced. The combination of flavors and textures creates a
                        delightful and comforting experience for many coffee enthusiasts.</p>
                  </div>
                  <div className="relative w-1/3 group">
                     <img className="w-full min-h-[120px] sm:max-h-[280px] m-auto" src={c2} />
                      <div className="absolute inset-0 flex items-center text-[16px] lg:text-[34px] md:text-[26px] xl:text-[48px] font-greatvibes  text-left bg-opacity-60 text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Cappuccino
              </div>
                  </div>
               </div>

            </header>
         </section>


         <section className="p-5 xl:p-20 lg:p-19 md:p-10">
            <subheader className="relative w-full h-full">

               <img src={cofc1} className="absolute xl:-left-[79px] xl:top-[1070px] z-10 xl:w-40 lg:w-[120px] md:w-20 lg:-left-10 lg:top-[930px] md:top-[730px] md:-left-10 hidden sm:block" />
               <img src={cofc3} className="absolute xl:-right-[80px] xl:top-[60px] z-10 xl:w-48 lg:w-[140px] md:w-20 lg:-right-10 lg:top-[90px] md:-right-10 md:top-[100px]  hidden sm:block" />
               <img src={cofc4} className="absolute xl:-right-20 xl:top-[1430px] xl:w-48 lg:w-[150px] md:w-20 lg:-right-10 lg:top-[1180px] md:top-[940px] md:-right-10 hidden sm:block" />

               <img src={lefc2} className="absolute xl:right-[420px] xl:top-[840px] -rotate-45 xl:w-[150px] lg:w-[100px] md:w-20 lg:top-[720px] lg:right-[290px] md:top-[550px] md:right-[200px] hidden sm:block" />
               <img src={lefc3} className="absolute xl:-left-[90px] xl:top-[420px]  xl:w-[150px] lg:w-[90px] md:w-20 lg:-left-10 lg:top-[410px] md:top-[300px] md:-left-10 hidden sm:block" />
               <img src={lefc4} className="absolute xl:left-[350px] xl:-top-[160px] xl:w-[150px] lg:w-[100px] md:w-20 lg:-top-20 lg:left-[240px] md:-top-[70px] md:left-[150px] hidden sm:block" />

               <div className="w-full h-fit flex gap-10 xl:-mt-20 lg:-mt-5 md:-mt-5 justify-center items-center">
                  <div className="relative w-1/3 group">
                     <img className="w-full min-h-[120px] sm:max-h-[280px] m-auto" src={c3} />
                      <div className="absolute inset-0 flex items-center text-[16px] lg:text-[34px] md:text-[26px] xl:text-[48px] font-greatvibes  text-left bg-opacity-60 text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Latee
              </div>
                  </div>
                  <div className="w-2/3">
                     <p className="text-[9px] lg:text-[22px] md:text-[16px] xl:text-[27px] font-[Bellefair] text-[#832C2C]">A latte or caffè latte is a milk coffee that is a made up of one or two shots of espresso, steamed milk and a final,
                        thin layer of frothed milk on top. If you don't drink dairy milk, you can easily swap it for a plant-based alternative like soy, oat or coconut milk.</p>
                  </div>
               </div>

               <div className="w-full h-fit flex gap-10 mt-10 justify-center items-center">

                  <div className="w-2/3">
                     <p className="text-[9px] lg:text-[22px] md:text-[16px] xl:text-[27px] font-[Bellefair] text-[#832C2C]">It is made by diluting a shot or two of espresso with hot water. This process gives it a similar strength to drip coffee but
                        with a different flavor profile due to the espresso base. The result is a smooth, slightly milder coffee that still retains the rich flavor of espresso.</p>
                  </div>
                  <div className="relative w-1/3 group">
                     <img className="w-full min-h-[120px] sm:max-h-[280px] m-auto" src={c4} />
                      <div className="absolute inset-0 flex items-center text-[16px] lg:text-[34px] md:text-[26px] xl:text-[48px] font-greatvibes  text-left bg-opacity-60 text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Amaricano
              </div>
                  </div>
               </div>

               <div className="w-full h-fit flex gap-10 mt-10 justify-center items-center">
                  <div className="relative w-1/3 group">
                     <img className="w-full min-h-[120px] sm:max-h-[280px] m-auto" src={c5} />
                      <div className="absolute inset-0 flex items-center text-[16px] lg:text-[34px] md:text-[26px] xl:text-[48px] font-greatvibes  text-left bg-opacity-60 text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Espresso
              </div>
                  </div>
                  <div className="w-2/3">
                     <p className="text-[9px] lg:text-[22px] md:text-[16px] xl:text-[27px] font-[Bellefair] text-[#832C2C] ">Espresso is a strong, concentrated coffee made by forcing a small amount of nearly boiling water through finely-ground
                        coffee beans under high pressure. This method of brewing results in a small, intense shot of coffee with a rich,
                        bold flavor and a thick.Espresso serves as the base for many other coffee drinks, including lattes, cappuccinos, macchiatos, and Americanos.</p>
                  </div>

               </div>

               <div className="w-full h-fit flex gap-10 mt-10 justify-center items-center">

                  <div className="w-2/3">
                     <p className="text-[9px] lg:text-[22px] md:text-[16px] xl:text-[27px] font-[Bellefair] text-[#832C2C]">Cold Coffee is a creamy and popular cold beverage that is made from 3 main ingredients - coffee, sugar,
                        and cold milk shaken or blended well in a mixer grinder. Throw in a few ice cubes while blending for a frothy finish.
                        This creamy, frothy drink is just the perfect indulgence on a hot summer day.</p>
                  </div>
                  <div className="relative w-1/3 group">
                     <img className="w-full min-h-[120px] sm:max-h-[280px] m-auto" src={c6} />
                      <div className="absolute inset-0 flex items-center text-[16px] lg:text-[34px] md:text-[26px] xl:text-[48px] font-greatvibes  text-left bg-opacity-60 text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Cold Coffee
              </div>
                  </div>
               </div>

               <div className="w-full h-fit flex gap-10 mt-10  justify-center items-center">
                  <div className="relative w-1/3 group">
                     <img className="w-full min-h-[120px] sm:max-h-[280px] m-auto" src={c7} />
                      <div className="absolute inset-0 flex items-center text-[16px] lg:text-[34px] md:text-[26px] xl:text-[48px] font-greatvibes  text-left bg-opacity-60 text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Black Coffee
              </div>
                  </div>
                  <div className="w-2/3">
                     <p className="text-[9px] lg:text-[22px] md:text-[16px] xl:text-[27px] font-[Bellefair] text-[#832C2C] ">Black coffee is a simple, straightforward coffee drink made by brewing coffee without adding any milk, cream, sugar, or other flavorings.
                        It's typically made using drip coffee makers, French presses, or pour-over methods, where hot water is passed through ground coffee beans,
                        extracting the flavors and producing a clear, dark brew.</p>
                  </div>
               </div>
            </subheader>
         </section>
      </div>
   );
}

export default Coffee;




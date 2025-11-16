import Auto from "./Auto";
import Autos from "./Autos";
import Our from "./Our";

import React from 'react'

function Row() {
  return (
    <div className="flex row mx-auto mb-10 -mt-10">
      <Auto />
      <Our 
      head="Our Special Brews and Teas"
      para="Savor the unique flavors of our special brews and teas, meticulously crafted by our expert baristas using the finest coffee beans and tea leaves s made daily with love and the freshest ingredients to perfectly your coffee and tea experience"/>
      <Autos />
    </div>
  )
}

export default Row

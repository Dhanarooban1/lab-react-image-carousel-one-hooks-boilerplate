import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


function Carousel() {
    let [count, setCount] = useState(0);

    function NavigationFunction(mode) {
        setCount((prev) => (mode === "left" ? (prev - 1 + images.length) % images.length : (prev + 1 ) % images.length));
      }


return(
<>
   <div id="body" style={ {backgroundImage: `url(${images[count].img})`} }>
        <div className="Arrow"> <ArrowBackIosIcon style={{ color: "white", fontSize: "40px" }} onClick={() => NavigationFunction("left")}/>
        </div>
        <div id="textContent">
            <h2 id="txt">{images[count].title}</h2>
            <h2 id="txt">{images[count].subtitle}</h2>
        </div>
        <div className="Arrow">
        <ArrowForwardIosIcon style={{ color: "white", fontSize: "40px" }} onClick={() => NavigationFunction("right")}/>
        </div>
    </div>
</>
   )
}







export default Carousel;
import React from "react"

import STYLE from "./s2.module.css"

const Sample2 =() =>{
return(
    <>
    <div className={STYLE.divblock1}>
       <img src="https://fonts.google.com/specimen/Tilt+Warp?preview.text=coolstuff&preview.size=37&preview.text_type=custom&stylecount=1" alt="" />
       <div className={STYLE.divblock2}>
           <ul>
              <li><a href="#">Services</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">About</a></li>
           </ul>
        </div>
     <a  className={STYLE.btnblock} href=""><button>Contact</button></a>
    </div>
    </>
)
}
export default Sample2
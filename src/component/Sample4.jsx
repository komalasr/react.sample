import React from "react"

import STYLE from "./s4.module.css"

const Sample4 =() =>{
return(
    <>
    <div>
        <ul id={STYLE.main}>
            <li>Home</li>
            <li>About</li>
            <li>Skills
                
                <ul className={STYLE.drop}>
                    <div>
                     <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                    </div>
                </ul>
            </li>
            <li>Contact</li>
        </ul>
    </div>
    </>
)
}
export default Sample4
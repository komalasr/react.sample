import React from "react"

import STYLE from "./s3.module.css"

const Sample3 =() =>{
return(
    <>
    <div className={STYLE.maincontainer}>
        <div className={STYLE.leftmenu}>
            <div className={STYLE.logo}>
                <img src="" alt="" />
                <span><a href="">greek help</a></span>
            </div>
            <ul className={STYLE.ulblock}>
                <li className={STYLE.sidebar}><a className={STYLE.sidebar} href="">Home</a></li>
                <li className={STYLE.sidebar}><a className={STYLE.sidebar} href="">User</a></li>
                <li className={STYLE.sidebar}><a className={STYLE.sidebar} href="">Files</a></li>
                <li className={STYLE.sidebar}><a className={STYLE.sidebar} href="">Saved</a></li>
                <li className={STYLE.sidebar}><a className={STYLE.sidebar} href="">Events</a></li>
                <li className={STYLE.sidebar}><a className={STYLE.sidebar} href="">Message</a></li>
                <li className={STYLE.sidebar}><a className={STYLE.sidebar} href="">Analytics</a></li>
                <li className={STYLE.sidebar}><a className={STYLE.sidebar} href="">Services</a></li>
                <li className={STYLE.sidebar}><a className={STYLE.sidebar} href="">Settings</a></li>
            </ul>
        </div>

        <div className={STYLE.rightcontent}></div>
    </div>
    </>
)
}
export default Sample3
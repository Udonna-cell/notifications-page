import React from "react";
import style from "./nav.module.css"
function Nav() {
    return(<nav className={style.nav}>
        <h2>Notifications <span className={style.received}>3</span></h2>
        <p>Mark all as read</p>
    </nav>)
}

export default Nav
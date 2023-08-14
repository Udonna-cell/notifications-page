import React from "react";
import style from "./nav.module.css"


function Nav({data, handle}) {
    return(<nav className={style.nav}>
        <h2>Notifications <span className={style.received}>{data.filter(val => val === false).length}</span></h2>
        <p className={style.text} onClick={handle}>Mark all as read</p>
    </nav>)
}

export default Nav
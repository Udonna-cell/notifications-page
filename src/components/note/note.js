import React from "react";
import style from "./note.module.css";
import Reply from "../Reply/Reply";

function Note({ name, message, time, profile, status, children, DM, club }) {
  console.log(status)
  return (
    <section className={status ? style.read : style.notice}>
      <article className={style.container}>
        <div className={style.profile}>
          <img src={profile} alt="profile" />
        </div>
        <div>
          <p>
            <b>{name} </b>
            <span className={style.text}>
            {message} {club !== false? <a href="#!" className={style.link}>{club}</a> : false}
            {!(status) ? <span className={style.active}></span> : false }
            </span>
            <br />
            <span className={style.time}>{time}</span>
          </p>
          {DM !== undefined? <Reply /> : false}
        </div>
        {children}
      </article>
    </section>
  );
}

export default Note;

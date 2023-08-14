import React from "react";
import style from "./Reply.module.css";
import { useMsg } from "../../App";

function Reply() {
  const msg = useMsg();
  return <article className={style.reply}>{msg}</article>;
}

export default Reply;

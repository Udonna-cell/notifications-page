import React from "react";

function Note({ name, message, time, profile }) {
  return (
    <section>
      <div>
        <img src={profile} alt="profile" />
      </div>
      <div>
        <p>
          <b>{name}</b> {message} <br />
          {time}
        </p>
      </div>
    </section>
  );
}

export default Note;

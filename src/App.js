import { createContext } from "react";
import "./App.css";
import Nav from "./components/Nav/nav";
import Note from "./components/Note/note";
import data from "./data.json";
import mark from "./assets/images/avatar-mark-webber.webp";
import angela from "./assets/images/avatar-angela-gray.webp";
import anna from "./assets/images/avatar-anna-kim.webp";
import jacob from "./assets/images/avatar-jacob-thompson.webp";
import kimberly from "./assets/images/avatar-kimberly-smith.webp";
import nathan from "./assets/images/avatar-nathan-peterson.webp";
import rizky from "./assets/images/avatar-rizky-hasanuddin.webp";
import chess from "./assets/images/image-chess.webp";
import { useContext, useState } from "react";

const msgContext = createContext();
export function useMsg() {
  return useContext(msgContext);
}

function App() {
  const images = [mark, angela, jacob, rizky, kimberly, nathan, anna];
  const notify = data.map((value, index) => {
    if (index === 4) {
      value.picture = chess;
    }
    value.profile = images[index];
    return value;
  });
  const [status, setStatus] = useState(notify.map(value => value.status))
  // console.log(status)
  const clear = ()=>{
    setStatus(status.map(value => true))
  }
  return (
    <header className="header">
      <Nav data={status} handle={clear} />
      {notify.map((info, index) => {
        if (info.picture !== undefined) {
          if (info.DM !== undefined) {
            return (
              <msgContext.Provider value={info.DM}>
                <Note
                  club={info.club}
                  name={info.name}
                  message={info.message}
                  time={info.duration}
                  profile={info.profile}
                  status={status[index]}
                  DM={true}
                >
                  <img
                    src={info.picture}
                    alt="profile-comment"
                    className="picture"
                  />
                </Note>
              </msgContext.Provider>
            );
          } else {
            return (
              <Note
                club={info.club}
                name={info.name}
                message={info.message}
                time={info.duration}
                profile={info.profile}
                status={status[index]}
              >
                <img
                  src={info.picture}
                  alt="profile-comment"
                  className="picture"
                />
              </Note>
            );
          }
        } else {
          if (info.DM !== undefined) {
            return (
              <msgContext.Provider value={info.DM}>
                <Note
                  club={info.club}
                  name={info.name}
                  message={info.message}
                  time={info.duration}
                  profile={info.profile}
                  status={status[index]}
                  DM={true}
                />
              </msgContext.Provider>
            );
          } else {
            return (
              <Note
                club={info.club}
                name={info.name}
                message={info.message}
                time={info.duration}
                profile={info.profile}
                status={status[index]}
              />
            );
          }
        }
      })}
    </header>
  );
}
export default App;

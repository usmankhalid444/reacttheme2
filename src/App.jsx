/** @format */

import React, { useState } from "react";
const App = () => {
  const [text, setText] = useState("");
  const [click, setclick] = useState();
  const gettext = (e) => {
    setText(e.target.value);
  };

  const [firstname, setfirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [cfname, setCfname] = useState();
  const [clname, setClname] = useState();
  const [getusman, setGetusman] = useState({
    f1name: "jk",
    l1name: "",
    abc: "test",
  });

  const clicktochange = (e) => {
    setclick(text);
    e.preventDefault();
    setGetusman((prevVlaue) => {
      return {
        ...prevVlaue,
        f1name: "HAmmad",
      };
    });
    // if (text === "") {
    //   setGetusman(cfname + " " + clname);
    //   console.log(getusman);
    // }
  };
  const finput = (e) => {
    setfirstname(e.target.value);
  };
  const linput = (e) => {
    setLastname(e.target.value);
  };
  const flname = () => {
    setCfname(firstname);
    setClname(lastname);

    //setGetusman(firstname + " " + lastname);

    setText(firstname + " " + lastname);
    setfirstname("");
    setLastname("");
  };
  return (
    <>
      <div className="single">
        <form onSubmit={clicktochange}>
          <h1>welcome {click}</h1>
          <input
            type="text"
            placeholder="enter your name"
            value={text}
            onChange={gettext}
          />
          <button type="submit">click me 😆</button>
        </form>
      </div>
      <div className="double">
        <h1>
          hello mr {cfname} {clname}
        </h1>
        <input
          type="text"
          placeholder="enter first name"
          onChange={finput}
          value={firstname}
        />
        <input
          type="text"
          placeholder="enter last name"
          onChange={linput}
          value={lastname}
        />
        <button onClick={flname}>Click me 😂</button>
      </div>
    </>
  );
};
export default App;

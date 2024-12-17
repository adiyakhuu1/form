"use client";

import { useEffect, useState } from "react";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageDone from "./components/Done";
import { number } from "zod";

export default function Home() {
  const [current, setCurrent] = useState(1);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  // useEffect(() => {
  //   console.log(current);
  // });
  // const CurrentPage = ({ setCurrent }) => {
  //   if (current === 1) {
  //     return;
  //   } else if (current === 2) {
  //     return <PageTwo setCurrent={setCurrent} />;
  //   } else if (current === 3) {
  //     return <PageThree setCurrent={setCurrent} />;
  //   } else {
  //     return <PageDone setCurrent={setCurrent} />;
  //   }
  // };
  useEffect(() => {
    if (
      firstname.includes(number) ||
      lastname.includes(number) ||
      username.includes(number)
    ) {
      setError(true);
    }
  }, [error]);
  return (
    <>
      {/* <CurrentPage setCurrent={setCurrent} /> */}

      {current === 1 ? (
        <PageOne
          error={error}
          setError={setError}
          setCurrent={setCurrent}
          firstname={firstname}
          setFirstname={setFirstname}
          lastname={lastname}
          setLastname={setLastname}
          username={username}
          setUsername={setUsername}
        />
      ) : current === 2 ? (
        <PageTwo setCurrent={setCurrent} />
      ) : current === 3 ? (
        <PageThree setCurrent={setCurrent} />
      ) : (
        <PageDone setCurrent={setCurrent} />
      )}
    </>
  );
}

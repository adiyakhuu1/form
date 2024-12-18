"use client";

import { useEffect, useState } from "react";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageDone from "./components/Done";
import { number } from "zod";

export default function Home() {
  const [current, setCurrent] = useState(1);
  // const [pageOneInfo, takePageOneInfo] = useState("");
  const [form, setForm] = useState({});
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [username, setUsername] = useState("");
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
  // useEffect(() => {

  // }, [error, firstname]);

  const onChange = (e) => {
    const field = e.target.id;
    const newValues = { ...form, [field]: e.target.value };

    console.log(newValues);

    checkNumber(field, newValues);
  };
  const checkNumber = (field, newValues) => {
    if (field === "firstname" || field === "lastname") {
      if (
        form[field]?.includes("1") ||
        form[field]?.includes("2") ||
        form[field]?.includes("3") ||
        form[field]?.includes("4") ||
        form[field]?.includes("5") ||
        form[field]?.includes("6") ||
        form[field]?.includes("7") ||
        form[field]?.includes("8") ||
        form[field]?.includes("9") ||
        form[field]?.includes("0")
      ) {
        setError(true);
        setForm(newValues);
      } else {
        setError(false);
        setForm(newValues);
      }
    }
  };

  return (
    <>
      {/* <CurrentPage setCurrent={setCurrent} /> */}

      {current === 1 ? (
        <PageOne
          onChange={onChange}
          form={form}
          setForm={setForm}
          // takePageOneInfo={takePageOneInfo}
          // pageOneInfo={pageOneInfo}
          error={error}
          setError={setError}
          setCurrent={setCurrent}
          // firstname={firstname}
          // setFirstname={setFirstname}
          // lastname={lastname}
          // setLastname={setLastname}
          // username={username}
          // setUsername={setUsername}
        />
      ) : current === 2 ? (
        <PageTwo setCurrent={setCurrent} onChange={onChange} />
      ) : current === 3 ? (
        <PageThree setCurrent={setCurrent} onChange={onChange} />
      ) : (
        <PageDone setCurrent={setCurrent} onChange={onChange} />
      )}
    </>
  );
}

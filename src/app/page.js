"use client";

import { useEffect, useState } from "react";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageDone from "./components/Done";

export default function Home() {
  const [current, setCurrent] = useState(1);
  const [image, setImage] = useState(null);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    tel: "",
    password1: "",
    password2: "",
    birthdate: "",
    pfp: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    tel: "",
    password1: "",
    password2: "",
    birthdate: "",
    pfp: "",
  });
  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorNumber, setErrorNumber] = useState(false);
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

  // }, [error, firstname]);

  const onChange = (e) => {
    const field = e.target.id;
    const value = e.target.value;
    const newValues = { ...form, [field]: value };
    setForm(newValues);
    console.log(newValues);

    // checkNumber(field, value);
  };
  // const checkNumber = (field, value) => {
  //   if (field === "firstname" || field === "lastname") {
  //     if (
  //       value?.includes("1") ||
  //       value?.includes("2") ||
  //       value?.includes("3") ||
  //       value?.includes("4") ||
  //       value?.includes("5") ||
  //       value?.includes("6") ||
  //       value?.includes("7") ||
  //       value?.includes("8") ||
  //       value?.includes("9") ||
  //       value?.includes("0")
  //     ) {
  //       setError(true);
  //     } else {
  //       setError(false);
  //     }
  //   }
  // };

  return (
    <>
      {/* <CurrentPage setCurrent={setCurrent} /> */}

      {current === 1 ? (
        <PageOne
          onChange={onChange}
          form={form}
          error1={error1}
          setForm={setForm}
          // takePageOneInfo={takePageOneInfo}
          // pageOneInfo={pageOneInfo}
          error={error}
          setError={setError}
          setCurrent={setCurrent}
          setErrors={setErrors}
          errors={errors}
          current={current}
          // firstname={firstname}
          // setFirstname={setFirstname}
          // lastname={lastname}
          // setLastname={setLastname}
          // username={username}
          // setUsername={setUsername}
        />
      ) : current === 2 ? (
        <PageTwo
          setCurrent={setCurrent}
          current={current}
          onChange={onChange}
          errorEmail={errorEmail}
          setErrorEmail={setErrorEmail}
          error1={error1}
          errorNumber={errorNumber}
          setErrorNumber={setErrorNumber}
          form={form}
          errors={errors}
          setErrors={setErrors}
        />
      ) : current === 3 ? (
        <PageThree
          setCurrent={setCurrent}
          onChange={onChange}
          form={form}
          current={current}
          errors={errors}
          setErrors={setErrors}
          setForm={setForm}
          image={image}
          setImage={setImage}
        />
      ) : (
        <PageDone setCurrent={setCurrent} onChange={onChange} />
      )}
    </>
  );
}

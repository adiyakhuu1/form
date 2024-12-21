export const validate = (form, current) => {
  let isValid = true;
  let newErrors = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    tel: "",
    password1: "",
    password2: "",
    birthdate: "",
    pfp: "",
  };
  // 1st page validate
  // firstname
  if (!form) form - {};
  if (current === 1) {
    // let validateFirstname =
    //   /^[a-zA-Z0-9._-] + @ + [a-zA-Z] + \. + [a-zA-Z]{2,}/;
    let checkFirstname = /^[a-zA-Z]{1,2}$/;
    let checkLastname = /^[a-zA-Z]{1,2}$/;
    let checkUsername = /^[a-zA-Z]{1,3}$/;

    if (!form.firstname) {
      isValid = false;
      // newErrors.firstname = "Утга оруулна уу!";
    } else if (checkFirstname.test(form.firstname)) {
      isValid = false;
      newErrors.firstname = "Дор хаяж 3 н үсэг оруулна уу!";
    }
    if (/\d/.test(form.firstname)) {
      isValid = false;
      newErrors.firstname = "Тоо оруулж болохгүй!";
    }
    // lastname
    if (!form.lastname) {
      isValid = false;
      // newErrors.lastname = "Утга оруулна уу!";
    } else if (checkLastname.test(form.lastname)) {
      isValid = false;
      newErrors.lastname = "Дор хаяж 3 -н үсэг оруулна уу!";
    }
    if (/\d/.test(form.lastname)) {
      isValid = false;
      newErrors.lastname = "Тоо оруулж болохгүй!";
    }
    // username
    if (!form.username) {
      isValid = false;
      // newErrors.username = "Утга оруулна уу!";
    } else if (checkUsername.test(form.username)) {
      isValid = false;
      newErrors.username = "Дор хаяж 4 -н үсэг оруулна уу!";
    }
  }
  // 2nd page validate
  if (current === 2) {
    let checkEmail = /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    // email
    if (!form.email) {
      isValid = false;
      // newErrors.email = "Email -ээ оруулна уу!";
    } else if (!form.email.includes("@")) {
      isValid = false;
      newErrors.email = "where is @ dummy?";
    } else if (!checkEmail.test(form.email)) {
      isValid = false;
      newErrors.email = "Зөв майл оруулна уу!";
    }
    if (form.tel) {
      // phone number
      let checkLetters = /[a-zA-Z]/;
      // let counts = /{,8}/;
      // for (let i = 0; i < nums.length; i++) {
      //   if (form.tel.includes(nums[i])) {
      //     isValid = false;
      //     newErrors.tel = "Useg aguulj bolohgui!";
      //   }
      // }
      if (checkLetters.test(form.tel)) {
        isValid = false;
        newErrors.tel = "Үсэг агуулж болохгүй!";
      }
      if (form.tel.length < 8) {
        isValid = false;
        newErrors.tel = "Утасны дугаар дор хаяж 8н оронтой байх ёстой";
      }
    }
    if (!form.tel) {
      isValid = false;
      // newErrors.tel = "Утасны дугаар оруулна уу!";
    }
    // password
    if (form.password1 || form.password2) {
      if (form.password1 !== form.password2) {
        isValid = false;
        newErrors.password1 = "Нууц үг таарсангүй!";
        newErrors.password2 = "Нууц үг таарсангүй!";
      } else if (form.password1.length <= 8) {
        isValid = false;
        newErrors.password1 = "Нууц үг заавал 8н оронтой байх ёстой!";
      }
    } else {
      isValid = false;
      // newErrors.password1 = "Утга оруулна уу!";
      // newErrors.password2 = "Утга оруулна уу!";
    }
  }
  if (current === 3) {
    if (!form.birthdate) {
      isValid = false;
      // newErrors.birthdate = "Төрсөн өдрөө оруулна уу!";
    }
    if (!form.pfp) {
      isValid = false;
      // newErrors.pfp = "Хавтасны зураг оруулна уу!";
    }
  }

  return { isValid, newErrors };
};

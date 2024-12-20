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
  if (current === 1) {
    // let validateFirstname =
    //   /^[a-zA-Z0-9._-] + @ + [a-zA-Z] + \. + [a-zA-Z]{2,}/;

    if (!form.firstname) {
      isValid = false;
      newErrors.firstname = "Utga oruulna uu!";
    } else if (form.firstname.length < 3) {
      isValid = false;
      newErrors.firstname = "dor hayj 3 usegtei ner oruulna uu!";
    }
    if (/\d/.test(form.firstname)) {
      isValid = false;
      newErrors.firstname = "too oruulj bolohgu!";
    }
    // lastname
    if (!form.lastname) {
      isValid = false;
      newErrors.lastname = "Utga oruulna uu!";
    } else if (form.lastname.length < 3) {
      isValid = false;
      newErrors.lastname = "dor hayj 3 usegtei ner oruulna uu!";
    }
    if (/\d/.test(form.lastname)) {
      isValid = false;
      newErrors.lastname = "too oruulj bolohgu!";
    }
    // username
    if (!form.username) {
      isValid = false;
      newErrors.username = "Utga oruulna uu!";
    } else if (form.username.length < 4) {
      isValid = false;
      newErrors.username = "dor hayj 4 usegtei ner oruulna uu!";
    }
  }
  // 2nd page validate
  if (current === 2) {
    let checkEmail = /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    // email
    if (!form.email) {
      isValid = false;
      newErrors.email = "Email-ee oruulna uu!";
    } else if (!form.email.includes("@")) {
      isValid = false;
      newErrors.email = "where is @ dummy?";
    } else if (!checkEmail.test(form.email)) {
      isValid = false;
      newErrors.email = "zov mail oruulna uu?";
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
        newErrors.tel = "Useg aguulj bolohgui!";
      }
      if (form.tel.length < 8) {
        isValid = false;
        newErrors.tel = "Utasnii dugaar dor hayj 8n orontoi bh ystoi";
      }
    }
    if (!form.tel) {
      isValid = false;
      newErrors.tel = "Utasnii dugaar oruulna uu!";
    }
    // password
    if (form.password1 || form.password2) {
      if (form.password1 !== form.password2) {
        isValid = false;
        newErrors.password1 = "password taarsangui!";
        newErrors.password2 = "password taarsangui!";
      } else if (form.password1.length <= 8) {
        isValid = false;
        newErrors.password1 = "zaaval 8n orontoi pass oruulna uu!";
      }
    } else {
      isValid = false;
      newErrors.password1 = "Utga oruulna uu!";
      newErrors.password2 = "Utga oruulna uu!";
    }
  }
  if (current === 3) {
    if (!form.birthdate) {
      isValid = false;
      newErrors.birthdate = "torson odroo oruulna uu!";
    }
    if (!form.pfp) {
      isValid = false;
      newErrors.pfp = "zurag oruulna uu!";
    }
  }

  return { isValid, newErrors };
};

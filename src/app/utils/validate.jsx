export const validate = (form, current) => {
  let isValid = true;
  let newErrors;

  if (current === 1) {
    newErrors = {
      firstname: "",
      lastname: "",
      username: "",
    };
    if (form.firstname === "") {
      isValid = false;
      newErrors.firstname = "Utga oruulna uu!";
    } else if (form.firstname.length < 3) {
      isValid = false;
      newErrors.firstname = "dor hayj 3 usegtei ner oruulna uu!";
    }
    if (
      form.firstname.includes("1") ||
      form.firstname.includes("2") ||
      form.firstname.includes("3") ||
      form.firstname.includes("4") ||
      form.firstname.includes("5") ||
      form.firstname.includes("6") ||
      form.firstname.includes("7") ||
      form.firstname.includes("8") ||
      form.firstname.includes("9") ||
      form.firstname.includes("0")
    ) {
      isValid = false;
      newErrors.firstname = "too oruulj bolohgu!";
    }
    if (form.lastname === "") {
      isValid = false;
      newErrors.lastname = "Utga oruulna uu!";
    } else if (form.lastname.length < 3) {
      isValid = false;
      newErrors.lastname = "dor hayj 3 usegtei ner oruulna uu!";
    }
    if (
      form.lastname.includes("1") ||
      form.lastname.includes("2") ||
      form.lastname.includes("3") ||
      form.lastname.includes("4") ||
      form.lastname.includes("5") ||
      form.lastname.includes("6") ||
      form.lastname.includes("7") ||
      form.lastname.includes("8") ||
      form.lastname.includes("9") ||
      form.lastname.includes("0")
    ) {
      isValid = false;
      newErrors.lastname = "too oruulj bolohgu!";
    }

    if (form.username === "") {
      isValid = false;
      newErrors.username = "Utga oruulna uu!";
    } else if (form.username.length < 4) {
      isValid = false;
      newErrors.username = "dor hayj 4 usegtei ner oruulna uu!";
    }
  }
  if (current === 2) {
    newErrors = {
      email: "",
      tel: "",
      password1: "",
      password2: "",
    };
    if (form.email === "") {
      isValid = false;
      newErrors.email = "Email-ee oruulna uu!";
    } else if (!form.email.includes("@")) {
      isValid = false;
      newErrors.email = "where @";
    }
    if (form.tel === "") {
      isValid = false;
      newErrors.tel = "Utasnii dugaar oruulna uu!";
    } else if (form.tel) {
      // let nums = "0987654321";
      let symbols = "№-₮:._,%?-=][';/.,";
      for (let i = 0; i < nums.length; i++) {
        if (form.tel.includes(nums[i])) {
          newErrors.tel = "too esvel temdeg aguulj bolohgui";
        }
      }
    }
  }
  return { isValid, newErrors };
};

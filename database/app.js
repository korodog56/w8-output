const buttonElm = document.querySelector("#button");

buttonElm.addEventListener("click", (e) => {
  e.preventDefault();
  const emailElm = document.getElementById("email");
  const passwordElm = document.getElementById("password");
  console.log(emailElm.value);
  console.log(passwordElm.value);
  localStorage.setItem("email", emailElm.value);
  localStorage.setItem("password", passwordElm.value);
});

const test = () => {
  const emailLs = localStorage.getItem("email");
  const passwordLs = localStorage.getItem("password");
  console.log(emailLs);
  console.log(passwordLs);
  const emailElm = document.getElementById("email");
  const passwordElm = document.getElementById("password");
  emailElm.value = emailLs;
  passwordElm.value = passwordLs;
};

test();

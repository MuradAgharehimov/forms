const nameInput = document.getElementById("formGroupExampleInput");
const surnameInput = document.getElementById("formGroupExampleInput2");
const ageInput = document.getElementById("formGroupExampleInput3");
const emailInput = document.getElementById("formGroupExampleInput4");
const formSubmit = document.getElementById("form");
const products = document.getElementById("products")


function axiosPost(x) {
  x.preventDefault();
  axios.post("https://65675cba64fcff8d73103f34.mockapi.io/xpolee", {
      name: nameInput.value,
      surname: surnameInput.value,
      age: ageInput.value,
      email: emailInput.value,
    })
    .then((res) => {
      console.log(res.data);
      form.reset();
    });
}

form.addEventListener("submit", axiosPost);




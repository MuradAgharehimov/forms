const usernameInput = document.getElementById('formGroupExampleInput')
const emailInput = document.getElementById('formGroupExampleInput2')
const passwordInput = document.getElementById('formGroupExampleInput3')
const addressInput = document.getElementById('formGroupExampleInput4')
const countryInput = document.getElementById('formGroupExampleInput5')
const submitform = document.getElementById('form')


function axiosPost(x) {
    x.preventDefault();
    axios.post("https://65675cba64fcff8d73103f34.mockapi.io/xpolee", {
        username:usernameInput.value,
        email:emailInput.value,
        password: passwordInput.value,
        address: addressInput.value,
        country: countryInput.value
      })
      .then((res) => {
        console.log(res.data);
        form.reset();
      });
  }
  
  form.addEventListener("submit", axiosPost); 
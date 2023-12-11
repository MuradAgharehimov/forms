const titleInput = document.getElementById('formGroupExampleInput')
const priceInput = document.getElementById('formGroupExampleInput2')
const DescriptionInput = document.getElementById('formGroupExampleInput3')
const DiscountInput = document.getElementById('formGroupExampleInput4')
const StockInput = document.getElementById('formGroupExampleInput5')
const QualityInput =  document.getElementById('formGroupExampleInput6')
const countryInput = document.getElementById('formGroupExampleInput7')
const customersCountInput = document.getElementById('formGroupExampleInput8')
const CategoryInput = document.getElementById('formGroupExampleInput9')
const cityInput = document.getElementById('formGroupExampleInput10')
const submitform = document.getElementById('form')


function axiosPost(x) {
    x.preventDefault();
    axios.post("https://65675cba64fcff8d73103f34.mockapi.io/xpolee", {
        Title:titleInput.value,
        Price:priceInput.value,
        Description: DescriptionInput.value,
        Discount: DiscountInput.value,
        Stock: StockInput.value,
        Quality: QualityInput.value,
        country: countryInput.value,
        customersCount: customersCountInput.value,
        Category: CategoryInput.value,
        City: cityInput.value
      })
      .then((res) => {
        console.log(res.data);
        form.reset();
      });
  }
  
  form.addEventListener("submit", axiosPost); 
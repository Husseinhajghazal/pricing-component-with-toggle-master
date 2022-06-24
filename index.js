let inpute = document.querySelector("input");
let price1 = document.querySelector(".price-1");
let price2 = document.querySelector(".price-2");
let price3 = document.querySelector(".price-3");

inpute.addEventListener("click", function () {
  inpute.classList.toggle("checked");

  if (inpute.classList.contains("checked")) {
    price1.innerHTML = `<span class="me-2">&dollar;</span> 19.99`;
    price2.innerHTML = `<span class="me-2">&dollar;</span> 24.99`;
    price3.innerHTML = `<span class="me-2">&dollar;</span> 39.99`;
  } else {
    price1.innerHTML = `<span class="me-2">&dollar;</span> 199.99`;
    price2.innerHTML = `<span class="me-2">&dollar;</span> 249.99`;
    price3.innerHTML = `<span class="me-2">&dollar;</span> 399.99`;
  }
});

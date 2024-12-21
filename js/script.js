const firstResButton = document.getElementById("first-task-res-button");
const quantityField = document.getElementById("quantity");
const pricePerDroidField = document.getElementById("pricePerDroid");
const resField = document.getElementById("first-task-result-field");

firstResButton.addEventListener("click", () => {
  resField.value = makeTransaction(
    quantityField.value,
    pricePerDroidField.value
  );
});

const secondResButton = document.getElementById("second-task-res-button");
const country = document.getElementById("country");
const price = document.getElementById("price");
const deliveryFee = document.getElementById("deliveryFee");
const resSecondField = document.getElementById("second-task-result-field");

secondResButton.addEventListener("click", () => {
  resSecondField.value = getShippingMessage(
    country.value,
    Number.parseInt(price.value),
    Number.parseInt(deliveryFee.value)
  );
});

const thirdResButton = document.getElementById("third-task-res-button");
const contentWidth = document.getElementById("content");
const paddingWidth = document.getElementById("padding");
const borderWidth = document.getElementById("border");
const resThirdField = document.getElementById("third-task-result-field");

thirdResButton.addEventListener("click", () => {
  resThirdField.value = getElementWidth(
    contentWidth.value,
    paddingWidth.value,
    borderWidth.value
  );
});




function favouriteFoodList(event) {
  event.preventDefault();
  const favouriteFood1 = document.getElementById("food1").value;
  const favouriteFood2 = document.getElementById("food2").value;
  const favouriteFood3 = document.getElementById("food3").value;
  const favouriteFood4 = document.getElementById("food4").value;
  let favouriteFoodArr = [favouriteFood1, favouriteFood2, favouriteFood3, favouriteFood4]
  console.log(favouriteFoodArr)
  
  let liElement = document.createElement("li");
  const olElement = document.createElement("ol");
  const form1 = document.querySelector("form")
  form1.after(olElement);


  for (let i = 0; i <= favouriteFoodArr.length-1; i++) {
    console.log(i);
    liElement;
    liElement.textContent = favouriteFoodArr[i];
    olElement.appendChild(liElement);
  }


}

window.addEventListener("load", function() {
  const formSubmit = document.getElementById("food-form");
  formSubmit.addEventListener("submit", favouriteFoodList);
});
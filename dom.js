let plus = Array.from(document.getElementsByClassName('plus'));
let min = Array.from(document.getElementsByClassName('min'));
let count = Array.from(document.getElementsByClassName('count'));
let price = Array.from(document.getElementsByClassName('price'));
let remove = document.getElementsByClassName("remove");
let total = document.getElementById('total');
console.log(total)


let like = document.getElementsByClassName("like");
for (let i = 0; i < like.length; i++) {
like[i].addEventListener("click", changeColor);
  // myByttons[i].addEventListener("click", removeLi);

function changeColor(el) {
  if (el.target.style.color !== "red") {
    el.target.style.color = "red";
  } else {
    el.target.style.color = "black";
  }
  console.log(el)
}
}

function calculateSum() {
  let sum = 0
  for (let j = 0; j < count.length; j++) {
      sum += parseInt(count[j].innerText) * parseInt(price[j].innerText);
  };
  total.innerText= sum;
  console.log(sum)
}

for (let i = 0; i < count.length; i++) {


  plus[i].addEventListener('click', function() {
    count[i].innerText++
    calculateSum()
})

 
 min[i].addEventListener('click', function() {
  if(count[i].innerHTML>0){
  count[i].innerText--
  calculateSum()
}
else { alert('stop')}
})

let buttonremove=remove[i]
buttonremove.addEventListener('click',function(event){
  let buttonclick=event.target
  buttonclick.parentElement.parentElement.parentElement.remove()
  // count[i].innerText = 0;
  price[i].innerHTML=0;


  calculateSum()


})

}
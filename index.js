/*let container3=document.createElement('Div')
let shown=documen t.getElementById('topurchase')
let items;*/
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    handleList(e.target.to_purchase.value);
  });
});
let list = document.querySelector("#to_purchase");
function handleList(list) {
  let p = document.createElement("p");
  let btn = document.createElement("button");
  //let radio=document.createElement('input[type="radio"]')
  p.textContent = `${list}`;
  btn.textContent = "x";
  p.appendChild(btn)
  //p.appendChild(radio)
  btn.addEventListener("click", (e) => e.target.parentNode.remove())
  //radio.addEventListener('change',(e)=>e.style.color='red')
  document.querySelector("#container4").appendChild(p);
}

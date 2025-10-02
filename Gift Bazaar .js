let showcard=document.querySelector(".parents");
let searchtext=document.querySelector(".inputclass");
let searchbtn=document.querySelector(".btn");
let fetching=document.querySelector(".fetching");
let btndiv=document.querySelector(".parents");
let h2text=document.querySelector(".h2text");
async function showAllProducts() {
  // showcard.innerHTML = "<p>Loading products...</p>";

  try {
    const data = await fetch("https://fakestoreapi.com/products"); // সব product আনবো
    const response = await data.json();
    // displayProducts(response);
    response.forEach(product=>{
     const creatediv=document.createElement("div");
  creatediv.classList.add("card");
    showcard.appendChild(creatediv);
  creatediv.innerHTML=`<img src="${product.image}">
  <p>${product.title}</p>
  <h2>price:$${product.price}</h2>
  `
   const btn=document.createElement("button")
  btn.classList.add("jsbtn");
  btn.innerHTML="Add to Cart";
  creatediv.appendChild(btn);
   })
  } catch (err) {
    showcard.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
  }
}
window.addEventListener("load", showAllProducts);
 async function showgift(input){
  const data= await fetch(`https://fakestoreapi.com/products/category/${input}`);
  const responce= await data.json();
  console.log(responce);
  responce.forEach(product=>{
  const creatediv=document.createElement("div");
  creatediv.classList.add("card");
    showcard.appendChild(creatediv);
  creatediv.innerHTML=`<img src="${product.image}">
  <p>type:${product.title}</p>
  `
  const btn=document.createElement("button")
  btn.classList.add("jsbtn");
  btn.innerHTML="view details";
  creatediv.appendChild(btn);

  function detailsdiv(){
    creatediv.innerHTML="";
    creatediv.innerHTML= `
    <img src="${product.image}">
    <p><b>${product.title}</b></p>
    <p><b>price:$${product.price}</b></p>
    <p><b>description:${product.description}</b></p>
    <p><b>category:${product.category}</b></p>
    `;
}
btn.addEventListener("click",()=>{
  detailsdiv();
});
})
}
searchbtn.addEventListener("click",()=>{
  showcard.innerHTML="";
    const search=searchtext.value;
    // console.log(search);
    showgift(search);
    detailsdiv.remove();
})

function random() {
  // return "#"+Math.floor(Math.random()*16777215).toString(16);
  let colorindx=["red","green","blue"];
  let indx=0;
 setInterval(()=>{
 h2text.style.color=colorindx[indx];
  indx++;
  if(indx==colorindx.length){
  indx=0;
}
},100);
}
random();


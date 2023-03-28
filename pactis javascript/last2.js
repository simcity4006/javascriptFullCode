let massenge=document.querySelector("#message");
let result =document.querySelector("#result");

massenge.addEventListener("input", function(){
    result.textContent=massenge.value
})
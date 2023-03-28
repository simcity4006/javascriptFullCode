<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>dom dom</title>

</head>
<body>

<p>select your size:</p>
<div class="group">

</div>
<p class="output"></p>







<script src="radio.js"></script> 
</body>
</html> 


let group=document.querySelector(".group")
let output=document.querySelector(".output")


let sizes=["XS", "S", "M", "L", "XL", "XXL"];
group.innerHTML=sizes.map((size)=>
    `<div> <input type="radio" id="${size}" value="${size}" name="size">
    <label for="${size}">${size}</label>
    </div>`
).join(" ");
let RadioButton=document.querySelectorAll("input");
for(let radiobtn of RadioButton){
    radiobtn.addEventListener("change", Showoutput)
}

function Showoutput(E){
    console.log(E)
    if(this.checked){
        document.querySelector(".output").innerHTML=`your selected ${this.value}`
    }
}
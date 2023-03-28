<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>This Is a Heading Tag</title>
</head>
<body>
    <p>message:</p>
    <input type="text" id="message">
    <button>submit</button>
    <p id="result"></p>



    <script src="last.js"></script>
</body>
</html>



let massage=document.querySelector("#message");
const result=document.querySelector("#result");

// massage.addEventListener("change", ()=>{
//     result.textContent=massage.value
// })
massage.addEventListener("change", function(){
    result.textContent=massage.value 
})
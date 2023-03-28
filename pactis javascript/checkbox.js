<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <label for="">
        <input type="checkbox" name="color" value="Green">Green
        <input type="checkbox" name="color" value="red">red
        <input type="checkbox" name="color" value="yellow">yellow
        <input type="checkbox" name="color" value="black">black
    </label>
    <button id="btn">Select your color:</button>
    <script src="checkbox.js"></script>
</body>
</html>



let btn=document.querySelector("#btn");



btn.addEventListener("click", (e) =>{
    let checkbox = document.querySelectorAll("input[name='color']:checked");
    let values=[];
    checkbox.forEach((checkbox)=>{
        values.push(checkbox.value);
    })

    console.log(values)
})

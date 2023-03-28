<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <p>Select one or more js Fremeworks:</p>
   <form>
    <select name="" id="lang">
        <option value="1">Python</option>
        <option value="1">mysql</option>
        <option value="1">javascript</option>
        <option value="1">php</option>
    </select>
    <br>
    <br>
    <button id="btn">Get Selected FrameWorks</button>
   </form> 



    <script src="select.js"></script>
</body>
</html>








const lang=document.querySelector("#lang")
const btn=document.querySelector("#btn")

btn.onclick =(e) =>{
    e.preventDefault();
    const optionValue=[].filter
    .call(lang.options, (option)=> option.selected)
    .map((option)=>option.text)
    console.log(optionValue)
    alert(optionValue)
}
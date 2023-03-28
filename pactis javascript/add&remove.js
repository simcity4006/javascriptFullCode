<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form>
        <p>language Name:</p>
        <input type="text" id="lang">
        <button id="btnAdd">ADD</button>
        <br>
        <br>

        <P>Framework List:</P> 
        <select name="" id="list" multiple>

        </select>
        <br>
        <br>
        <button id="btnRemove">Remove Selected Framework </button>
    </form>



    <script src="add&remove.js"></script>
</body>
</html>



let Framework=document.querySelector("#lang");
let btnAdd=document.querySelector("#btnAdd");
let list=document.querySelector("#list");
let btnRemove=document.querySelector("#btnRemove");


btnAdd.onclick = (e) =>{
    e.preventDefault();

    if(Framework.value ==""){
        console.log("please add an name ")
    }
    const option=new Option(Framework.value);
    list.add(option)
    Framework.value="";


}

btnRemove.onclick =(e)=>{
    e.preventDefault();
    let selected=[];
for(let i=0; i<list.options.length; i++){
    selected[i]=list.options[i].selected;
}

    let index=list.options.length;
    while(index--){
if(selected[index]){
    list.remove(index)
}
    }
}


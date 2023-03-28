// let menu= document.querySelector("#menu");
// let lang=['python', 'java', 'javascript', 'html', 'css'];


// let fragment=document.createDocumentFragment();

// lang.forEach((language)=>{
//    let  li =document.createElement("li")
//    li.textContent=language;
//    fragment.appendChild(li);
// })
// menu.appendChild(fragment)}}}}}} ar index.html sudu id menu ar div ar bitore}}}}

// let foysaldor=document.getElementById("menu")
// let li=document.createElement("li")
// li.textContent="home"
// foysaldor.insertBefore(li,foysaldor.firstElementChild)


// let app =document.querySelector("#app")


// let names=["foysal", "ahmed", "sorker", "simcity"]


// let DOMScript= names.map((names)=>{
//     let li=document.createElement("li");
//     li.textContent=names
//     return li 
// })
// app.append(... DOMScript);



// let apps=document.querySelector("#apps")
// let namets=["laptop", "phone", "tv","tap"]


// let foysalM= namets.map((phoneM)=>{
//     let li =document.createElement("li");
//     li.innerHTML=phoneM;
//     return li
// })
// apps.prepend(...foysalM)


// let selet=document.getElementById("menu")
// selet.insertAdjacentHTML("beforebegin", "<h3>beforebegin</h3>")
// selet.insertAdjacentHTML("afterbegin", "<h3>afterbeign</h3>")

// let  li =document.createElement("li")
// li.textContent="HOME"
// selet.replaceChild(li, selet.lastChild)
// selet.removeChild(selet.firstElementChild)
// let clonemenu=selet.cloneNode(true);
// clonemenu.id="cloneid";


// document.body.appendChild(clonemenu)


// // let div=document.querySelector("div")
// let foysalB=document.querySelector("#btn")
// if(foysalB){
//     foysalB.setAttribute("name", "foysal")
// }

// let btn=document.querySelector("#btn")
// if(btn){
//     console.log(btn.getAttribute("target"))   
    // let target=btn.getAttribute("target")
    // console.log(target)
// }

// let btn2=document.querySelector("#hasan")
// if(btn2){
//     console.log(btn2.getAttribute("class"))

// //     let target=btn2.getAttribute("target")
// //     console.log(target)
// }

// let btn3=document.querySelector("#fid")
// if(btn3){
//     console.log(btn3.setAttribute("name", "amarname foysal"))
// }
// console.log(btn3.removeAttribute("target"))
// console.log(btn3.hasAttribute("class"))

// let menu = document.getElementById("menu");
// menu.style.backgroundColor="black"
// menu.style.color="#fff"

// let style = getComputedStyle(menu, "::first-letter")

// console.log(style.fontSize)


// let p=document.querySelector("p")
// // p.className="foysal"
// console.log(p.className)

// let div=document.querySelector("#menu")
// console.log(div.classList.add("fosyhal", "ahmed", "sorker","khan"))
// console.log(div.classList.remove("ahmed"))
// console.log(div.classList.replace("sorker","tSorkerforysla"))

// let div=document.querySelector("div")
// let width=div.offsetWidth;
// let height=div.offsetHeight;
// console.log(width, height)


// let bt= document.getElementById("btn");
// bt.addEventListener("click", function(){
//     alert("this is a button watch click")
// })


// document.addEventListener("DOMContentLoaded", (E)=>{


//     alert("this is offer")
// })

// addEventListener("load", ()=>{
//     alert("this is a foysal")
// })

// addEventListener("beforeunload", (e)=>{
//     e.preventDefault();
//     e.returnValue ='';
// });  


// let track=document.querySelector("#track")

// function mouseEven(e){
//     console.log(e.type)
// }
// track.addEventListener("mousedown", mouseEven)
// track.addEventListener("mouseup", mouseEven)
// track.addEventListener("click", mouseEven)
// track.addEventListener("mouseover", mouseEven)
// track.addEventListener("mouseout", mouseEven)


// let  message=document.querySelector("#message")

// message.addEventListener("keyup", (e)=>{
//     console.log(e.type)
// })



// let  message=document.querySelector("#message")


// function evenName(e){
//     document.write(e.key)
// }
// message.addEventListener("keyup", evenName)
// message.addEventListener("keydown", evenName)
// message.addEventListener("keypress", evenName)

// window.onscroll =()=>{
//     alert("scrolled")
// }
// window.addEventListener("scroll", ()=>{
//     console.log("scroll down foyhsal")
// })

// let scroller=0;
// window.addEventListener("scroll", ()=>{
//     if(window.scrollYOffset || document.documentElement.scrollTop > scroller){
//         console.log("scroll is down")
//     }else{
//         console.log("scroll is up")
//     }
// })



// let scroller=0;
// window.addEventListener("scroll", ()=>{
//     let foysasl=window.scrollYOffset || document.documentElement.scrollTop
//     if(foysasl > scroller){
//         console.log("scroll is down")
//     }else{
//         console.log("scroll is up")
//     }
//     scroller=foysasl;
// })

let message=document.getElementById("message");
    console.log(focus)
message.addEventListener("focus", (e)=>{
   let newtarget= e.target.className="myClass";
    console.log(message)

})

message.addEventListener("focus", (e)=>{
    e.target.style.backgroundColor="yellow"
    e.target.style.color="black"
})
message.addEventListener("blur", (e)=>{
    e.target.style.backgroundColor="green"
    e.target.style.color="yellow"
})
const butt = document.getElementsByTagName
("button")
const body = document.querySelector("*")
console.log(body);
let para = document.createElement("p")
function change(){
        body.style.backgroundImage = "url('index.jpg')"
        body.style.backgroundSize = "cover"
        body.style.overflow = "hidden"
        para.textContent = "Want to back? Just mouseout from the button🤓"
        document.body.appendChild(para)
        para.style.color = "lime"
        para.style.fontSize = "35px"
}
function white(){
    body.style.background = "none"
    para.remove()
}
butt[0].addEventListener("click", change)
butt[0].addEventListener("mouseout",white)





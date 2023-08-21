function color(){
    let cons = "#"
    const val = "0123456789ABCDEF"
    for(let i = 0;i<6;i++){
    cons = cons + val [Math.floor(Math.random()*16)]
 }
 return cons
}
function Addcolor(){ 
       document.body.style.backgroundColor = color()
//        console.log(color());
}
let butt = document.getElementById("but")
butt.addEventListener("dblclick" ,Addcolor)



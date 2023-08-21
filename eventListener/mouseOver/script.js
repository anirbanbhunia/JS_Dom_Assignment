const res = document.getElementById("rs")
const heading = document.getElementsByTagName("h1")
 function rest(){
    document.body.style.backgroundColor = "green"
    res.style.backgroundImage = "url('rad.jpeg')"
    res.style.backgroundSize = "cover"
    res.style.boxShadow = "5px 10px 10px 10px darkblue"
    heading[0].style.color = "lime"
    heading[0].style.textShadow = "5px 5px rgba(125, 233, 188, 0.5)"
}
 function def() {
    document.body.style.backgroundColor = "white"
    res.style.backgroundImage = "none"
    res.style.backgroundSize = "none"
    res.style.boxShadow = "none"
    heading[0].style.color = "teal"
    heading[0].style.textShadow = "5px 5px rgba(0, 0, 0, 0.5)"
 }
res.addEventListener("mouseover",rest)
res.addEventListener("mouseout",def)
def()

const input = document.getElementsByTagName("input")
let p = document.getElementsByTagName("p")
input[0].addEventListener("keypress",function (x) {
    p[0].textContent = `You have pressed ${x.key}`
}
)
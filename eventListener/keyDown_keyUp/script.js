let para = document.getElementsByTagName("p")
document.addEventListener("keydown",function (x){
   para[0].textContent = `${x.key} key down 🔻` 
})
document.addEventListener("keyup",function (x){
    para[0].textContent = `${x.key} key up 🔺` 
 })

const dec = document.getElementById("but1")
const inc = document.getElementById("but2")
const rst = document.getElementById("but3")
const sp = document.querySelector("#display")
function numberinc(){
    let val = Number(sp.textContent)
    if(val>=0 && val<10){
        val = val+1;
    }else{
        alert("10+ values are not allowed")
    }
    sp.textContent = val;
    return sp
}
function numberdec(){
    let val = Number(sp.textContent)
    if(val>0){
       val = val-1; 
    }else{
        alert("Negative value not allowed")
    }
    sp.textContent = val;
    return sp
}
function rev(){
    sp.textContent = 0;
    return sp
}
dec.addEventListener("click",numberdec)
inc.addEventListener("click",numberinc)
rst.addEventListener("click",rev)
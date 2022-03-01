let txt=document.getElementById("txt");
let spn2=document.getElementById("spn2");
let btn=document.querySelector(".btn");
txt.addEventListener("keyup",()=>{
    let spn1=document.getElementById("spn1");
    let len=txt.value.length;
    spn1.innerText=len;
    spn2.innerText=150-len;
})

const copy = () => {
    txt.select();
    txt.selectSelectionRange(0,9999);
    navigator.clipboard.writeText(txt.value);
}
btn.addEventListener("click",copy);
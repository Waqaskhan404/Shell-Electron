const shell=require("electron").shell

const openBtn=document.getElementById("openBtn");

openBtn.addEventListener("click",function(){
    shell.showItemInFolder("F:\\")
    shell.openItem("F:\\demo.text.txt")
    shell.openExternal("https://www.electronjs.org/")
})
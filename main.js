
//List nav logic

//

let dropdownsButtons = Array.from(document.getElementsByClassName("dropdown--button"));
let dropdownsContent = Array.from(document.getElementsByClassName("dropdown--content"));



dropdownsButtons.forEach((btn, index)=>{
    btn.addEventListener("click",()=>{
        console.log("clicked")
        dropdownsContent[index].classList.toggle("dropdown--open");
    })
})

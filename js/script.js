const popup = document.getElementById("popup");

const postit = document.getElementById("postit")
const close = document.querySelector(".close");
const conteudopopup = document.getElementById("conteudopopup");

postit.addEventListener('click',function(){

    popup.style.display = "flex";
    conteudopopup.style.height = "70%";

})

close.addEventListener('click', function(){

    popup.style.display = "none";
    conteudopopup.style.height = "0px";

})

popup.addEventListener('click', function(e){
    if (e.target === popup){
        popup.style.display = "none";
        conteudopopup.style.height = "0px";
    }
        
})


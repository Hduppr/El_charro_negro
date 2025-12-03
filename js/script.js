const popup1 = document.getElementById("popup1");
const postit1 = document.getElementById("postit1")
const close1 = document.getElementById("close1");
const conteudopopup1 = document.getElementById("conteudopopup1");

postit1.addEventListener('click',function(){

    popup1.style.display = "flex";
    conteudopopup1.style.height = "70%";
    
})

close1.addEventListener('click', function(){

    popup1.style.display = "none";
    conteudopopup1.style.height = "0px";

})

popup1.addEventListener('click', function(e){
    if (e.target === popup1){
        popup1.style.display = "none";
        conteudopopup1.style.height = "0px";
    }
        
})

const popup2 = document.getElementById("popup2");
const postit2 = document.getElementById("postit2");
const close2 = document.getElementById("close2");
const conteudopopup2 = document.getElementById("conteudopopup2");

postit2.addEventListener('click',function(){

    popup2.style.display = "flex";
    conteudopopup2.style.height = "70%";

})

close2.addEventListener('click', function(){

    popup2.style.display = "none";
    conteudopopup2.style.height = "0px";

})

popup2.addEventListener('click', function(e){
    if (e.target === popup2){
        popup2.style.display = "none";
        conteudopopup2.style.height = "0px";
    }
        
})

const popup3 = document.getElementById("popup3");
const postit3 = document.getElementById("postit3");
const close3 = document.getElementById("close3");
const conteudopopup3 = document.getElementById("conteudopopup3");

postit3.addEventListener('click',function(){

    popup3.style.display = "flex";
    conteudopopup3.style.height = "70%";

})

close3.addEventListener('click', function(){

    popup3.style.display = "none";
    conteudopopup3.style.height = "0px";

})

popup3.addEventListener('click', function(e){
    if (e.target === popup3){
        popup3.style.display = "none";
        conteudopopup3.style.height = "0px";
    }
        
})

const popup4 = document.getElementById("popup4");
const postit4 = document.getElementById("postit4");
const close4 = document.getElementById("close4");
const conteudopopup4 = document.getElementById("conteudopopup4");

postit4.addEventListener('click',function(){

    popup4.style.display = "flex";
    conteudopopup4.style.height = "70%";

})

close4.addEventListener('click', function(){

    popup4.style.display = "none";
    conteudopopup4.style.height = "0px";

})

popup4.addEventListener('click', function(e){
    if (e.target === popup4){
        popup4.style.display = "none";
        conteudopopup4.style.height = "0px";
    }
        
})

const popup5 = document.getElementById("popup5");
const postit5 = document.getElementById("postit5")
const close5 = document.getElementById("close5");
const conteudopopup5 = document.getElementById("conteudopopup5");

postit5.addEventListener('click',function(){

    popup5.style.display = "flex";
    conteudopopup5.style.height = "70%";

})

close5.addEventListener('click', function(){

    popup5.style.display = "none";
    conteudopopup5.style.height = "0px";

})

popup5.addEventListener('click', function(e){
    if (e.target === popup5){
        popup5.style.display = "none";
        conteudopopup5.style.height = "0px";
    }
        
})





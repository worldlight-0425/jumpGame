var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        zap = document.getElementById('zap');
        zap.play();
        var userConfirm = confirm( 'Score : '+Math.floor(counter/100)+'  This game is created by SAMEER BALYAN  click or tap any where to jump  Click  OK  to play again')
            if(userConfirm == true){
                location.reload();
            }else{
                window.location = 'https://www.google.com/';
            }
        counter=0;
        
        // block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
        
    }
}, 10);

var randcolor = document.querySelector('#block');
function randomColor(){
    function c(){
        
        let hex = Math.floor(Math.random() * 256).toString(16);
        return ('0' + String(hex)).substr(-2)
    }
    return '#' + c()+c()+c();
}
randcolor.style.backgroundColor = randomColor();

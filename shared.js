var backdrop = document.querySelector('.backdrop');
var planButtons = document.querySelectorAll('.plan button');
var noButton = document.querySelector('.modal__action--negative');
var modal = document.querySelector('.modal');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
//console.dir(planButtons);

if(planButtons){
    for(var i=0; i< planButtons.length; i++){
        planButtons[i].addEventListener('click', showOption);
    }
}


backdrop.addEventListener('click', cancel);

if(noButton){
    noButton.addEventListener('click', cancel);
}


function cancel(){
    if(modal){
        modal.classList.remove('open');
    }
    
    backdrop.classList.remove('open');
    mobileNav.classList.remove('open');
}

function showOption(){
    if(modal){
        modal.classList.add('open');
    }
    backdrop.classList.add('open');
}

toggleButton.addEventListener('click', function(){
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
    
});
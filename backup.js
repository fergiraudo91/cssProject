var backdrop = document.querySelector('.backdrop');
var planButtons = document.querySelectorAll('.plan button');
var noButton = document.querySelector('.modal__action--negative');
var modal = document.querySelector('.modal');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
console.dir(planButtons);

for(var i=0; i< planButtons.length; i++){
    planButtons[i].addEventListener('click', showOption);
}

backdrop.addEventListener('click', cancel);

noButton.addEventListener('click', cancel);

function cancel(){
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

function showOption(){
    modal.style.display = 'block';
    backdrop.style.display = 'block';
}

toggleButton.addEventListener('click', function(){
    backdrop.style.display = 'block';
    
});
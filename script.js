const idea = document.getElementById('Idea');
const features = document.getElementById('Features');
const plans = document.getElementById('Plans');

function getIdea(){
    idea.style.display = 'block';
    plans.style.display = 'none';
} 

 

function getPlans(){
    idea.style.display = 'none';
    plans.style.display = 'block';
}
const btn = document.getElementById('Action-btn');

btn.onmouseover = function(){
    btn.innerHTML= 'Давай'
}
btn.onmouseout = function(){
    btn.innerHTML = 'Давай TON по 10'
}
function chooselang() {
    var modal = document.getElementById("languageModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("languageModal");
    modal.style.display = "none";
}

actionOn = function() {
    chooselang();
}
let count = 0;

function nextstep(){
    count++;
    const modal = document.getElementsByClassName('modal-content')[0];
    if(count == 1){
        if (modal) {
            modal.style.backgroundImage = 'url("step1.jpg")';
        } else {
            console.error('Element with class "modal-content" not found.');
        }
    }
    if(count == 2){
        if (modal) {
            modal.style.backgroundImage = 'none';
            modal.innerHTML = '<p>Станьте частью истории вместе с нами и инвестируйте в проект Grebanoe dermo | GD. <br>Давайте вместе поднимем TON с колен и вернем ему былое величие 🫡.</p>';
            
        } else {
            console.error('Element with class "modal-content" not found.');
        }
    }
    if(count == 3){
        closeModal();
    }
    console.log(count);
}
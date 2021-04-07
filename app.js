
const inputs = document.querySelector('body > div.quiz.py-4.bg-primary > div > div.text-center > input');
const formi = document.querySelector('.quiz-form');


//FORM SUBMITTING
formi.addEventListener('submit', e => {
    e.preventDefault();
    const regx = /^[a-zA-Z]{6,12}$/
    let value = document.getElementById("answer").value;
    if (regx.test(value)) {
        var para = document.createElement("input");
        var element = document.getElementById("req-box");
        element.append(para);
        para.setAttribute('value', value);
        para.classList.add("rect")
        document.getElementById("myBtn").disabled = true;
        envoyer.disabled=false;
    }
    else alert("you didnt respect the regex")

});


const goodanswers = ['B', 'B', 'B', 'B'];

// var radios = document.querySelectorAll('[type="radio"]:checked');

function getCheckedValue() {
    var radios = document.querySelectorAll('[type="radio"]:checked');
    /* A node list in Javascript is an array it can be iterative */
    let score = 0;
    radios.forEach((elemnt,key) => {
        if(elemnt.value == goodanswers[key])
            score += 25;
    //code here to get the value of the radios
    });
   
    return score;
}

//RADIOS BUTTON GETTING VALUE ON CLICK
inputs.addEventListener('click', e => {
    e.preventDefault();
    console.log(getCheckedValue());
});

//the window object //scroll on top automatique
scrollTo(0, 0);

//Code to animate the speed of the Score
const result = document.querySelector('.result');
result.classList.remove('d-none');
let output = 0;
const timer = setInterval(() => {
    result.querySelector('span').textContent=` ${output}% `;
   
    if(output === getCheckedValue()){
        clearInterval(timer);
    }
    else {
        output++;
    }
}, 20);


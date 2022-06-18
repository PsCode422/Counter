const counter = document.getElementById("counter")

var count = 0;

counter.innerHTML =count;

const increase = document.getElementById("increase-btn");

const reset =  document.getElementById("reset-btn");

const decrease = document.getElementById("decrease-btn");

const incrementer = () => {
    count++ ;
    counter.innerHTML = count;
}

const decrementer = () => {
    count-- ;
   counter.innerHTML = count;
}

const reseting = () => {
    count = 0;
    counter.innerHTML = count;
}

increase.addEventListener("click", incrementer);
decrease.addEventListener("click", decrementer);
reset.addEventListener("click", reseting);
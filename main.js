const body = document.querySelector("body");

const container = document.createElement("div");
container.style.border = "1px solid black";
container.style.width = "100px";
container.style.padding = "10px";
container.style.margin = "0 auto";
container.style.textAlign = "center";

const time = document.createElement("div");
time.innerHTML = 0;

//Start Button
const start = document.createElement("button");
start.innerHTML = "Start";

//Pause Button
const pause = document.createElement("button");
pause.innerHTML = "Pause";

//Reset Button
const reset = document.createElement("button");
reset.innerHTML = "Reset";


container.appendChild(time);
container.appendChild(start);
container.appendChild(pause);
container.appendChild(reset);
body.appendChild(container);


let timeInterval;

//Start Button Click
start.addEventListener("click", () => {
    timeInterval = setInterval(() => {
        let getTime = Number(time.innerHTML);
        time.innerHTML = getTime + 1;
    },1000);
})


//Pause Button Click
pause.addEventListener("click", () => {
    clearInterval(timeInterval);
});



//Reset Button Click
reset.addEventListener("click", () => {
    time.innerHTML = 0;
});
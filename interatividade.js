const img = document.querySelector('#apagado');
const buttons = document.querySelector('#buttons');
let colorIndex = 0;
let intervalId = null;  

const trafficLight = (event)=>{
    stopAutomatic();
    turnOn[event.target.id]();
};
const nextIndex = ()=>{
    colorIndex = colorIndex<2 ? ++colorIndex : 0;
};

const changeColor = ()=>{
    const colors = ['red','yellow','green'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}
const stopAutomatic = ()=>{
    clearInterval(intervalId)
}

const turnOn = {
    'red': ()=>{img.src= './imagem/vermelho.png'},
    'yellow': ()=>{img.src='./imagem/amarelo.png'},
    'green': ()=>{img.src='./imagem/green.png'},
    'automatic':()=>intervalId = setInterval(changeColor,1500)
}
buttons.addEventListener('click',trafficLight);
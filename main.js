//selecionando os elementos do DOM
const startEL = document.getElementById('start');
const timeEL = document.getElementById('timer');
const stopEl = document.getElementById('stop');
const resetEl = document.getElementById('reset')

// declarando as variaveis
let intervalo 
let timeleft = 1500;

//função de atulizar o time
function updateTime(){
    let minuto = Math.floor(timeleft/60);
    let segundo = timeleft%60;
    let tempoFormatado = `${minuto.toString().padStart(2,'0')}:${segundo.toString().padStart(2,'0')}`;
    timeEL.innerHTML = tempoFormatado;
}

//Função de start no tempo
function startTime(){
    intervalo = setInterval(()=>{
        timeleft--
        updateTime()
          if(timeleft === 0){
            clearInterval(intervalo)
            alert('o tempo acabou')
            timeleft = 1500
            updateTime()
          }
    }, 1000)
};

// funçao stop
function stopTimer(){
  clearInterval(intervalo)
}

// reset
function resetTimer(){
  clearInterval(intervalo)
  timeleft = 1500
  updateTime()
};


//setando a funçao startTimer no botao Start
startEL.addEventListener('click', startTime);
stopEl.addEventListener('click', stopTimer);
resetEl.addEventListener('click', resetTimer);

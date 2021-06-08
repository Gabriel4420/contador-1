const daysContainer = document.getElementById('dias')
const hoursContainer = document.getElementById('horas')
const minutesContainer = document.getElementById('minutos')
const secondsContainer = document.getElementById('segundos')
const spinnerLoading = document.getElementById('spinner')
const countdownContainer = document.getElementById('countdown')

const Year = new Date().getFullYear();
if(localStorage.getItem('data') < JSON.stringify(new Date())){
  console.log('Data Invalida');
}else{

}

const newDate = new Date(`${localStorage.getItem('data')} 00:00:00`)
//const getTimeUnit = unit => unit < 10 ? '0'+ unit : unit "AINDA NÃO SEI ESTE MODO DE CRIAÇÃO DE FUNÇÃO"

function unit(unidade){
  return unidade < 10 ? '0'+ unidade : unidade
}

const insertCountdownValues = ({days, hours, minutes, seconds}) => {
  daysContainer.textContent = days
  hoursContainer.textContent = hours
  minutesContainer.textContent = minutes
  secondsContainer.textContent = seconds
}

const updateCountdown = () => {
  const currentTime = new Date()
  const difference = newDate - currentTime;
  const days = Math.floor(difference / 1000 / 60 / 60 / 24)
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24
  const minutes = Math.floor(difference / 1000 / 60) % 60
  const seconds = Math.floor(difference / 1000) % 60
  
  insertCountdownValues({days, hours, minutes, seconds})
  // Passando um OBJ
}

const handleCountdownDisplay = () => {
  spinnerLoading.remove()
  countdownContainer.style.display = 'flex'
}

setTimeout(handleCountdownDisplay, 1000) //Remover o spinner depois de 1s.

setInterval(updateCountdown, 1000) //Invoca a função a cada 1s


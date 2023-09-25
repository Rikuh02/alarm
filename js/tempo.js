//manipulação de data e hora
const time = document.getElementById("time") //container - quam possui todas as divs

const data_res = document.getElementById("data")
const relogio = document.getElementById("relogio")

const time_alarm = document.getElementById("tam_alarm") //input
const def_alarm = document.getElementById("def_alarm")

const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")

const data = new Date()

//trabalhando com audio 
let som_alarm = new Audio("media/Timer _ Alarm Clock 4.0_media_japanese school bell.mp3")

som_alarm.loop=-1 //loop infinito (-1)

let ts_atual = null
let ts_alarm = null
let alarm_ativado = false
let alarm_tocando = false

//trabalhando com botoes
btn_ativar.addEventListener("click",()=>{

    ts_atual = Date.now()
    ts_alarm = ts_atual+(time_alarm.value*1000)
    alarm_ativado = true
    const dt_alarm = new Date(ts_alarm)

    let horas = dt_alarm.getHours()
    horas = horas <10?"0" + horas : horas

    let minutos = dt_alarm.getMinutes()
    minutos = minutos <10?"0" + minutos : minutos

    let segundos = dt_alarm.getSeconds()
    segundos = segundos <10?"0" + segundos : segundos
    
    def_alarm.innerHTML = "Hora do alarme:" + horas +":"+ minutos +":"+ segundos

})

btn_parar.addEventListener("click",()=>{
    alarm_ativado = false
    alarm_tocando = false
    def_alarm.innerHTML = "Hora do alarme:"
    tam_alarm.value = 0
    time.classList.remove("alarm")
    som_alarm.pause()
    som_alarm.currentTime = 0;

})

//trabalhando com a data
const dia_mes = data.getDate() <10?"0" + data.getDate() : data.getDate()
const mes = data.getMonth() <10?"0" + data.getMonth() : data.getMonth()

const data_r = dia_mes + "/" + mes + "/" + data.getFullYear()

data_res.innerHTML = data_r

//trabalhando o relogio
const relogio_f = ()=>{
    const data = new Date()
    let hora = data.getHours()
    hora = hora <10?"0" + hora : hora

    let minuto = data.getMinutes()
    minuto = minuto <10?"0" + minuto : minuto

    let segundo = data.getSeconds()
    segundo = segundo <10?"0" + segundo : segundo

    const hora_completa = hora +":"+ minuto +":"+ segundo
    relogio.innerHTML = hora_completa

    //trabalhando com o som do alarme
    if(alarm_ativado && !alarm_tocando){
        if(data.getTime() >= ts_alarm){
            alarm_tocando = true
            som_alarm.play()
            time.classList.add("alarm")
        }
    }
}

const intervalo = setInterval(relogio_f, 1000);

//console.log(Date.now())

//Date.now() - timestamp
//.getDate()
//.getDay() - Dia da semana (número)
//.getFullYears() - ano com 4 dígitos
//.getHours() - horas
//.getMilliseconds() - Milisegundos
//.getMinutes() - Minutos
//.getMonth() - Mês
//.getSeconds - Segundos
//.getTime() - Timestamp
//.getTimeZoneOffSet() -timezone da localidade
//.setDate() - Define um dia
//.SetMonth() - Define um mês
//.setFullYear() - Define um Ano
//.setHours() - Define uma hora
//.setMinutes() - Define munutos
//.setSecons() - Define segundos
//.setMilliseconds() - Define millisegundos
//.toDateString() - Retorna somente a data
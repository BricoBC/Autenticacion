const btnStar = document.getElementById('btnStart');
const clock = document.getElementById('clock')

const first_view = document.getElementById('first-view');
const second_view = document.getElementById('second-view');
const welcome = document.getElementById('welcome');
const clock_start = document.getElementById('clock_start')

const recognition = new webkitSpeechRecognition();

recognition.continuos = true;
recognition.lang = 'es-Es';
recognition.interimResults = false;


btnStar.addEventListener('click', ()=>{
    recognition.start();
});

recognition.onresult = (event) => {
    const texto = event.results[event.results.length - 1][0].transcript;
    for(let i = 0; i<phrases.length; i++){
        if (texto == phrases[i])
            showSesion(users[i], time() )

    }
    console.log(texto)
}

phrases = [
    'Soy el ingeniero Bruno Nicolás Barajas Correa.',
    'Soy el ayudante del ingeniero, me llamo Eduardo García Marín.',
    'Usuario.'
]
users = [
    'Administrador', 'Ayudante', 'Usuario normal'
]

function showSesion(person, hora){
    second_view.classList.remove('inactive');
    first_view.classList.add('inactive');
    welcome.innerText = 'Bienvenido sea ' + person
    clock_start.innerText = 'Inicio sesión a las ' + hora
}

function time(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()
    return hora + ':' + minuto + ':' + segundo
}

function mueveReloj(){
    clock.innerText = 'La hora es ' + time()

    setTimeout("mueveReloj()",1000)
}
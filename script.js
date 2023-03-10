const btnStar = document.getElementById('btnStart');
const btnEnd = document.getElementById('btnEnd');
const clock = document.getElementById('clock')

const recognition = new webkitSpeechRecognition();

recognition.continuos = true;
recognition.lang = 'es-Es';
recognition.interimResults = false;
//recognition.maxAlternatives = 1;


btnStar.addEventListener('click', ()=>{
    recognition.start();
});

btnEnd.addEventListener('click', () => {
    recognition.abort();
});

recognition.onresult = (event) => {
    const texto = event.results[event.results.length - 1][0].transcript;
    for(let i = 0; i<phrases.length; i++){
        if (texto == phrases[i])
            alert('Bienvenido sea ' + users[i])
    }
}

phrases = [
    'Soy el ingeniero Bruno Nicolás Barajas Correa.',
    'Soy el ayudante del ingeniero, me llamo Eduardo García Marín.',
    'Usuario.'
]
users = [
    'Administrador', 'Ayudante', 'Usuario normal'
]


function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    clock.innerText = 'La hora es ' + hora + ':' + minuto + ':' + segundo

    setTimeout("mueveReloj()",1000)
}
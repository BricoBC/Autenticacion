const btnStar = document.getElementById('btnStart');
const clock = document.getElementById('clock')
const login_view = document.getElementById('login-view')
const first_view = document.getElementById('first-view');
const second_view = document.getElementById('second-view');
const welcome = document.getElementById('welcome');
const clock_start = document.getElementById('clock_start')
const btnCloseSesion = document.getElementById('btnCloseSesion')

const recognition = new webkitSpeechRecognition();

const arrAllViews = [first_view, second_view, login_view]

const $submit = document.getElementById("submit"),
    $password = document.getElementById("password"),
    $username = document.getElementById("username"),
    $visible = document.getElementById("visible");

phrases = [
    'Soy el ingeniero Bruno Nicolás Barajas Correa.',
    'Soy el ayudante del ingeniero, me llamo Eduardo García Marín.',
    'Usuario.'
]
users = [
    'Administrador', 'Ayudante', 'Usuario'
]
passwords = [
    '25$eptember2000!',
    '29Enero2000',
    '16)ecember2000'
]
document.addEventListener("change", (e)=>{
        if(e.target === $visible){
            if($visible.checked === false) $password.type ="password";
            else $password.type = "text";
        }
});

document.addEventListener("click", (e)=>{
    if(e.target === $submit){
        if(isValidLogin($username,$password)){
            e.preventDefault();
            openView(first_view);
            document.title ="Autenticación por frase";
        }   
        else{
            alert('Revisa tu usuario y contraseña')
        }
    }
})

function isValidLogin(user, pass){
    for(let i=0; i<users.length; i++)
    if(user.value == users[i] && pass.value == passwords[i]){
        return true
    }
    else return false
}
// Función que nos permitirá ver cierta página
function openView(view){
    for(let i = 0 ; i < arrAllViews.length; i++){
        if(view == arrAllViews[i])
        {
            arrAllViews[i].classList.remove('inactive');
        }else{
            arrAllViews[i].classList.add('inactive');
        }
        console.log(arrAllViews[i])
    }
}
recognition.continuos = true;
recognition.lang = 'es-Es';
recognition.interimResults = false;


btnStar.addEventListener('click', ()=>{
    recognition.start();
});

btnCloseSesion.addEventListener('click', ()=>{
    openView(login_view);
    document.title ="Iniciar Sesion";
})

recognition.onresult = (event) => {
    const texto = event.results[event.results.length - 1][0].transcript;
    for(let i = 0; i<phrases.length; i++){
        if (texto == phrases[i])
            showSesion(users[i], time() )
            document.title ="Bienvenido " + users[i];
    }
    console.log(texto)
}



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
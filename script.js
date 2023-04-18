const clock = document.getElementById('clock')
const login_view = document.getElementById('login-view'),
$submit = document.getElementById("submit"),
password = document.getElementById("password"),
username = document.getElementById("username"),
$visible = document.getElementById("visible");
const first_view = document.getElementById('first-view'),
btnStar = document.getElementById('btnStart');
const second_view = document.getElementById('second-view'),
btnCloseSesion = document.getElementById('btnCloseSesion'),
welcome = document.getElementById('welcome'),
clock_start = document.getElementById('clock_start');
let who = 0;
const recognition = new webkitSpeechRecognition();

const arrAllViews = [first_view, second_view, login_view]

phrases = [
    'Soy el ingeniero Bruno Nicolás Barajas Correa.',
    'Soy Eduardo García Marín, el ayudante.',
    'Usuario.'
]
users = [
    'Administrador', 
    'Ayudante', 
    'Usuario'
]
passwords = [
    '25$eptember2000!',
    '29Enero2000',
    '16)ecember2000'
]

document.addEventListener("change", (e)=>{
    if(e.target === $visible){
        if($visible.checked === false) password.type ="password";
        else password.type = "text";
    }
});

login_view.addEventListener("click", (e)=>{
    if(e.target === $submit){
        if(isValidLogin(username,password)){
            e.preventDefault();
            openView(first_view);
            document.title ="Frase para " + users[who];
            username.value = "";
            password.value = "";
        }
        else{
            alert('Revisa tu usuario y contraseña')
        }
    }
})

function isValidLogin(user, pass){
    for(let i=0; i<users.length; i++){
        if(user.value == users[i] && pass.value == passwords[i])
        {
            who = i;
            return true;
        }
    }
    return false;
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
        console.log(texto)
        for(let i = 0; i<phrases.length; i++){
            if (texto == phrases[who])
            showSesion(users[who], time() )
            document.title ="Bienvenido " + users[who];
        }
        
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
    
    //Lógica y funciones para la configuración
    fetch('routerUno.html')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const contenido = parser.parseFromString(data, 'text/html');
            const elemento = contenido.getElementById('ELEMENTO');

            document.getElementById('htmlRouterUno').appendChild(elemento);


            btn = contenido.getElementById('switchs')
            addBtnSwich(btn);
        });

        arrAllViewsOfRouters = []
        arrAllBtnSwich = []


    const btnSwitch = document.getElementById('switchs'),
    btnMachines = document.getElementById('machines'),
    btnRouterUno = document.getElementById('routerUno'),
    tableRouterUno = document.getElementById('tableRouterUno'),
    tableSwitchs = document.getElementById('tableSwitchs'),
    tableMachines = document.getElementById('tableMachines');
    
    // arrAllViewsOfRouters = [
    //     tableRouterUno//, tableRouter1, tableRouter2, tableRouter3
    // ]
    // arrAllViewsOfSetting = [
    //     tableSwitchs, tableMachines,
    //     // tableSwitchsR1, tableMachinesR1, 
    //     // tableSwitchsR2, tableMachinesR2, 
    //     // tableSwitchsR3, tableMachinesR3
    // ]


    // arrAllBtnSwich[0].addEventListener('click', toggleSwitch);
    // btnMachines.addEventListener('click', toggleMachines);
    // btnRouterUno.addEventListener('click', openRouter);

    function openRouter(){
        const isViewOfRouterClosed = tableRouterUno.classList.contains('inactive');
        if (!isViewOfRouterClosed){
            tableRouterUno.classList.toggle('inactive');
            if(btnSwitch.innerText == 'Ocultar'){
                toggleSwitch();
            }
            if(btnMachines.innerText == 'Ocultar'){
                toggleMachines();
            }
        }
        else{
            tableRouterUno.classList.remove('inactive');
        }
    }

    function toggleSwitch(){
        closeViews(tableSwitchs, arrAllViewsOfSetting, btnSwitch, 'Ver Switchs')
        
    }
    function toggleMachines(){
        closeViews(tableMachines, arrAllViewsOfSetting, btnMachines, 'Ver Machines')
    }

    function closeViews(element , arrViews, btn, txtShow){
        let isTheElementOpen = element.classList.contains('inactive');
        if(!isTheElementOpen){
            element.classList.add('inactive');
            btn.innerText = txtShow;
        }
        else{
            for (let views of arrViews){
                (views==element)? views.classList.remove('inactive'): views.classList.add('inactive');   
                putText();
                btn.innerText = 'Ocultar';
            }
        }
    }

    function putText(){
        if (btnSwitch.innerText == 'Ocultar'){
            btnSwitch.innerText = 'Ver Switch';
        }
        if(btnMachines.innerText == 'Ocultar'){
            btnMachines.innerText = 'Ver máquinas'
        }
    }
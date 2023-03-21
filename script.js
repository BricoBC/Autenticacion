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
const btnSwitch = document.getElementById('switchs'),
    btnMachines = document.getElementById('machines'),
    btnRouterUno = document.getElementById('routerUno'),
    tableSwitchs = document.getElementById('tableSwitchs'),
    tableMachines = document.getElementById('tableMachines'),
    tableRouterUno = document.getElementById('tableRouterUno');
    
    arrAllViewsOfRouters = [
        tableRouterUno
    ]
    arrAllViewsOfSetting = [
        tableSwitchs, tableMachines
    ]

    btnSwitch.addEventListener('click', toggleSwitch);
    btnMachines.addEventListener('click', toggleMachines);
    btnRouterUno.addEventListener('click', openRouter);

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

    // <button id="routerUno">Ver Router</button>
    //         <!-- Configuración -->
    //         <div id="tableRouterUno" class="inactive">
    //             <table>
    //                 <caption>Configuración Router CDMX </caption>
    //                 <tr>
    //                     <td>Dirección IP: </td>
    //                     <td>192.168.20.1</td>
    //                 </tr>
    //                 <tr>
    //                     <td>Contraseña vty 0 4</td>
    //                     <td>1234</td>
    //                 </tr>
    //                 <tr>
    //                     <td>Mensaje del día: </td>
    //                     <td>"Sólo el administrador puede hacer modificaciones en el Router CDMX"</td>
    //                 </tr>
    //             </table>
    //             <section class="botones">
    //                 <button id="switchs" class="btn Switch">Ver Switchs</button>
    //                 <button id="machines" class="btn Machines">Ver máquinas</button>
    //             </section>
    //         </div>
    //         <table id="tableSwitchs" class="inactive">
    //             <caption>Configuración de los Switchs</caption>
    //             <td></td><td>Switch #1</td>
    //             <tr>
    //                 <td>Dirección IP:</td>
    //                 <td>192.168.10.1</td>
    //             </tr>
    //         </table>
    //         <table id="tableMachines" class="inactive">
    //             <caption>Configuración de las máquinas</caption>
    //             <td></td>
    //             <td >Maquina #1</td>
    //             <td >Maquina #2</td>
    //             <tr>
    //                 <td>IPv4 Addres:</td>
    //                 <td>192.168.10.10</td>
    //                 <td>192.168.10.11</td>
    //             </tr>
    //             <tr>
    //                 <td>Subnet Mask:</td>
    //                 <td colspan="2">255.255.255.0</td>
    //             </tr>
    //             <tr>
    //                 <td>Default Gateway:</td>
    //                 <td colspan="2">192.168.10.1</td>
    //             </tr>
    //         </table>

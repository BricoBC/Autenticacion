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
const btnRouterUno = document.getElementById('routerUno'),
    btnSwitchRouterUno = document.getElementById('switchsRouterUno'),
    btnMachinesRouterUno = document.getElementById('machinesRouterUno'),
    tableSwitchsRouterUno = document.getElementById('tableSwitchsRouterUno'),
    tableRouterUno = document.getElementById('tableRouterUno'),
    tableMachinesRouterUno = document.getElementById('tableMachinesRouterUno');

const btnRouterDos = document.getElementById('routerDos'),
    btnSwitchRouterDos = document.getElementById('switchsRouterDos'),
    btnMachinesRouterDos = document.getElementById('machinesRouterDos'),
    tableSwitchsRouterDos = document.getElementById('tableSwitchsRouterDos'),
    tableRouterDos = document.getElementById('tableRouterDos'),
    tableMachinesRouterDos = document.getElementById('tableMachinesRouterDos');

const btnRouterTres = document.getElementById('routerTres'),
    btnSwitchRouterTres = document.getElementById('switchsRouterTres'),
    btnMachinesRouterTres = document.getElementById('machinesRouterTres'),
    tableSwitchsRouterTres = document.getElementById('tableSwitchsRouterTres'),
    tableRouterTres = document.getElementById('tableRouterTres'),
    tableMachinesRouterTres = document.getElementById('tableMachinesRouterTres');
    
    
    const arrAllViewsOfRouters = [
        tableRouterUno, tableRouterDos, tableRouterTres
    ];

    const arrAllViewsOfSetting = [
        tableSwitchsRouterUno, tableMachinesRouterUno,
        tableSwitchsRouterDos, tableMachinesRouterDos,
        tableSwitchsRouterTres, tableMachinesRouterTres
    ];

    //btnSwitchRouterUno.addEventListener('click', toggleSwitch(tableSwitchsRouterUno, btnSwitchRouterUno));
    // btnMachinesRouterUno.addEventListener('click', toggleMachines(tableMachinesRouterUno, btnMachinesRouterUno));
    btnRouterUno.addEventListener('click', openTableR1);
    
    btnRouterDos.addEventListener('click', openTableR2);

    btnRouterTres.addEventListener('click', openTableR3);


    function openTableR1(){
        openViewTables(tableRouterUno);
    }

    function openTableR2(){
        openViewTables(tableRouterDos);
    }

    function openTableR3(){
        openViewTables(tableRouterTres);
    }

    function openTable(table, btnUno, btnDos ){
        const isViewOfRouterClosed = table.classList.contains('inactive');
        if (!isViewOfRouterClosed){
            table.classList.toggle('inactive')
        }
        else{
            table.classList.remove('inactive');
        }
    }

    function openViewTables(table){
        let isTheTableOpen = !table.classList.contains('inactive');
        if(!isTheTableOpen){
            for (let views of arrAllViewsOfRouters){
                (views == table)? views.classList.remove('inactive'): views.classList.add('inactive');       
            }            
        }
        else
            table.classList.toggle('inactive')
    }

    function toggleSwitch(table, btnSwitch){
        closeViews(table, arrAllViewsOfSetting, btnSwitch, 'Ver Switchs');    
    }

    function toggleMachines(table, btnMachines){
        closeViews(table, arrAllViewsOfSetting, btnMachines, 'Ver Machines');
    }

    function closeViews(element , arrViews, btn, txtShow){
        let isTheElementOpen = element.classList.contains('inactive');
        if(!isTheElementOpen){
            element.classList.add('inactive');
            btn.innerText = txtShow;
        }
        else{
            for (let views of arrViews){
                (views == element)? views.classList.remove('inactive'): views.classList.add('inactive');   
                putText();
                btn.innerText = 'Ocultar';
            }
        }
    }

    function putText(btnMachines, btnSwitch){
        if (btnSwitch.innerText == 'Ocultar'){
            btnSwitch.innerText = 'Ver Switch';
        }
        if(btnMachines.innerText == 'Ocultar'){
            btnMachines.innerText = 'Ver máquinas'
        }
    }

let config_red = {
    "router": { //Información de todos los routers
        "name": ["CDMX", "TOREO", "ZENTRALIA"],
        "ip_v4": [["172.15.100.1"], //El tamaño del arreglo es igual a las conexiones que tiene con otro router
        ["172.15.100.1", "172.15.110.2"],
        ["172.15.110.2"]],
        "pass_vty": ["1234", ["5678", "8765"], "91012"], //Hacer un arreglo para cada router
        "pass_con": ["L4v1g4admn4h_R1", ["L4v1g4admn4h_R2", "L4v1g4admn4h_R2"], "L4v1g4admn4h_R3"],
        "pass": ["Cisco_r1", ["Cisco_R2", "Cisco_r2"], "Cisco_r3"],
        "pass_secret": ["1ng3n13r14_r1", ["1ng3n13r14_1_r2", "1ng3n13r14_2_r2"], "1ng3n13r14_r3"],
        "mensaje": [["Sólo el administrador puede hacer modificaciones en el Router CDMX"],
        ["Sólo el administrador puede hacer modificaciones en el Router CDMX - TOREO", "Sólo el administrador puede hacer modificaciones en el Router TOREO - ZENTRALIA"],
        ["Sólo el administrador puede hacer modificaciones en el Router ZENTRALIA"]],
        //Hacer un arreglo para cada mensaje de cada router    
        "dominio": "mex.mx.uaem.com"
    },
    "switch": { //el primer numero indica a cuál router se conecta
        "id": [["172.15.110.1"], ["172.15.120.1"], ["172.15.130.1"]],
        "subnet_mask": "255.255.0.0",
        "vlan": [["172.15.110.25"], ["172.15.120.25"], ["172.15.130.25"]],
        "subnet_mask_v4": [["172.15.110.25"], ["172.15.120.25"], ["172.15.130.25"]],
        "default_gateway": "192.168.10.1"
    },
    "maquinas": {
        "r1": {
            "ip_v4": ["172.15.110.15", "172.15.110.16", "172.15.110.17"],
            "subnet_mask": "255.255.0.0",
            "default_gateway": "172.15.110.1",
            "DNS_preferido": "172.10.162.4",
            "DNS_alternativo": "172.10.162.5"
        },
        "r2": {
            "ip_v4": ["172.15.120.20", "172.15.120.21", "172.15.120.22"],
            "subnet_mask": "255.255.0.0",
            "default_gateway": "172.15.120.1",
            "DNS_preferido": "172.10.162.4",
            "DNS_alternativo": "172.10.162.5"
        },
        "r3": {
            "ip_v4": ["172.15.110.30", "172.15.110.31", "172.15.110.32"],
            "subnet_mask": "255.255.0.0",
            "default_gateway": "172.15.110.1",
            "DNS_preferido": "172.10.162.4",
            "DNS_alternativo": "172.10.162.5"
        },
    }
};

//funcion para el router 1
function updateRouterUno() {
    const btn = document.getElementById('routerUno');
    btn.innerText = 'Router ' + config_red["router"]["name"][0];
    const caption = document.getElementById('capt_routerUno');
    caption.innerText = 'Configuración Router ' + config_red["router"]["name"][0];
    const dir_ip = document.getElementById('ip_routerUno');
    dir_ip.innerText = config_red["router"]['ip_v4'][0];
    const pass_vty = document.getElementById('pass_vty_routerUno');
    pass_vty.innerText = config_red["router"]["pass_vty"][0];
    const pass_con = document.getElementById('pass_con_routerUno');
    pass_con.innerText = config_red["router"]["pass_con"][0];
    const pass = document.getElementById('pass_routerUno');
    pass.innerText = config_red["router"]["pass"][0];
    const pass_secret = document.getElementById('pass_secret_routerUno');
    pass_secret.innerText = config_red["router"]["pass_secret"][0];
    const msj_router = document.getElementById('msj_routerUno');
    msj_router.innerText = 'Sólo el administrador puede hacer modificaciones en el Router' + config_red["router"]["name"][0];

    //Router 2
    const titleR2 = document.getElementById('title');
    titleR2.innerText = 'Configuración ' + config_red["router"]["name"][0] + ' - ' + config_red["router"]["name"][1];
    const titleInputs = document.getElementById('titleInput');
    titleInputs.innerText = config_red["router"]["name"][0] + ' - ' + config_red["router"]["name"][1];
    const td = document.getElementById('td_Router2_1');
    td.innerText = "Sólo el administrador puede hacer modificaciones en el Router " + config_red["router"]["name"][0] + '-' + config_red["router"]["name"][1]
}
updateRouterUno();

function updateRouterDos() {
    const btn = document.getElementById('routerDos');
    btn.innerText = 'Router ' + config_red["router"]["name"][1];
    const caption = document.getElementById('caption_routerDos');
    caption.innerText = 'Configuración Router ' + config_red["router"]["name"][1];
    const titleUno = document.getElementById('title');
    const titleDos = document.getElementById('titleDos');
    titleUno.innerText = 'Router ' + config_red["router"]["name"][0] + ' - ' + config_red["router"]["name"][1];
    titleDos.innerText = 'Router ' + config_red["router"]["name"][1] + ' - ' + config_red["router"]["name"][2];
    const ip = document.getElementById('ip_uno_routerDos');
    const ip2 = document.getElementById('ip_dos_routerDos');
    ip.innerText = config_red["router"]['ip_v4'][1][0];
    ip2.innerText = config_red["router"]['ip_v4'][1][1];
    const pass_1_vty04 = document.getElementById('pass04_uno_routerDos');
    const pass_2_vty04 = document.getElementById('pass04_dos_routerDos');
    pass_1_vty04.innerText = config_red["router"]["pass_vty"][1][0];
    pass_2_vty04.innerText = config_red["router"]["pass_vty"][1][1];
    const pass_con_1 = document.getElementById('pass_consol_uno');
    const pass_con_2 = document.getElementById('pass_consol_dos');
    pass_con_1.innerText = config_red["router"]["pass_con"][1][0];
    pass_con_2.innerText = config_red["router"]["pass_con"][1][1];
    const pass_1 = document.getElementById('pass_uno');
    const pass_2 = document.getElementById('pass_dos');
    pass_1.innerText = config_red["router"]["pass"][1][0];
    pass_2.innerText = config_red["router"]["pass"][1][1];
    const pass_secret_uno = document.getElementById('pass_secret_uno');
    const pass_secret_dos = document.getElementById('pass_secret_dos');
    pass_secret_uno.innerText = config_red["router"]["pass_secret"][1][0];
    pass_secret_dos.innerText = config_red["router"]["pass_secret"][1][1];
    const msj1 = document.getElementById('td_Router2_1');
    const msj2 = document.getElementById('td_Router2_2');
    msj1.innerText = 'Sólo el administrador puede hacer modificaciones en el ' + config_red["router"]["name"][0] + '-' + config_red["router"]["name"][1];
    msj2.innerText = 'Sólo el administrador puede hacer modificaciones en el ' + config_red["router"]["name"][1] + '-' + config_red["router"]["name"][2];

    const titleTd = document.getElementById('titleInput');
    const titleId2 = document.getElementById('titleInput2');
    titleTd.innerText = config_red["router"]["name"][0] + ' - ' + config_red["router"]["name"][1];
    titleId2.innerText = config_red["router"]["name"][1] + ' - ' + config_red["router"]["name"][2];
}
updateRouterDos()

function updateRouterTres() {
    const btn = document.getElementById('routerTres');
    btn.innerText = 'Router ' + config_red["router"]["name"][2];
    const caption = document.getElementById('capt_routerTres');
    caption.innerText = 'Configuración Router ' + config_red["router"]["name"][2];
    const dir_ip = document.getElementById('ip_routerTres');
    dir_ip.innerText = config_red["router"]['ip_v4'][2];
    const pass_vty = document.getElementById('pass_vty_routerTres');
    pass_vty.innerText = config_red["router"]["pass_vty"][2];
    const pass_con = document.getElementById('pass_con_routerTres');
    pass_con.innerText = config_red["router"]["pass_con"][2];
    const pass = document.getElementById('pass_routerTres');
    pass.innerText = config_red["router"]["pass"][2];
    const pass_secret = document.getElementById('pass_secret_routerTres');
    pass_secret.innerText = config_red["router"]["pass_secret"][2];
    const msj_router = document.getElementById('msj_routerTres');
    msj_router.innerText = 'Sólo el administrador puede hacer modificaciones en el Router ' + config_red["router"]["name"][2];

    //Router 2
    // const titleR2 = document.getElementById('title');
    // titleR2.innerText = 'Configuración ' + config_red["router"]["name"][0]+' - '+config_red["router"]["name"][1];
    // const titleInputs = document.getElementById('titleInput');
    // titleInputs.innerText = config_red["router"]["name"][0]+' - '+config_red["router"]["name"][1];
    // const td = document.getElementById('td_Router2_1');
    // td.innerText = "Sólo el administrador puede hacer modificaciones en el Router " + config_red["router"]["name"][0] +'-'+config_red["router"]["name"][1]
}
updateRouterTres();

function updateDominio() {
    const dominio = document.getElementsByClassName('dominio');
    for (let i = 0; i < dominio.length; i++) {
        dominio[i].innerText = config_red["router"]["dominio"];
    }
}
updateDominio();

const clock = document.getElementById('clock');
const login_view = document.getElementById('login-view'),
    $submit = document.getElementById("submit"),
    password = document.getElementById("password"),
    username = document.getElementById("username"),
    $visible = document.getElementById("visible");
const first_view = document.getElementById('first-view'),
    btnStar = document.getElementById('btnStart'),
    txtSpeak = document.getElementById('speak');
const second_view = document.getElementById('second-view'),
    btnCloseSesion = document.getElementById('btnCloseSesion'),
    welcome = document.getElementById('welcome'),
    clock_start = document.getElementById('clock_start'),
    btnCloseImag = document.getElementById('btnCloseImag'),
    imag = document.getElementById('imgRed');
const contrasena = document.getElementsByClassName('Contraseñas_Admin');

const chckBxR1Ip = document.getElementById('dir_ip_r1'),
    chckBxR1Pass04 = document.getElementById('pass_vty_r1'),
    chckBxR1PassCon = document.getElementById('pass_con_r1'),
    chckBxR1Pass = document.getElementById('pass_r1'),
    chckBxR1PassSec = document.getElementById('pass_secret_r1');
const chckBxR1R2Ip = document.getElementById('dir_ip_r1r2'),
    chckBxR1R2Pass04 = document.getElementById('pass_vty_r1r2'),
    chckBxR1R2PassCon = document.getElementById('pass_con_r1r2'),
    chckBxR1R2Pass = document.getElementById('pass_r1r2'),
    chckBxR1R2PassSec = document.getElementById('pass_secret_r1r2'),
    txtBxR1 = document.getElementById('txtR1'),
    btnR1 = document.getElementById('btnR1');
const chckBxR2R3Ip = document.getElementById('dir_ip_r2r3'),
    chckBxR2R3Pass04 = document.getElementById('pass_vty_r2r3'),
    chckBxR2R3PassCon = document.getElementById('pass_con_r2r3'),
    chckBxR2R3Pass = document.getElementById('pass_r2r3'),
    chckBxR2R3PassSec = document.getElementById('pass_secret_r2r3'),
    chckBxR2Ip = document.getElementById('dir_ip_r2'),
    chckBxR2Pass04 = document.getElementById('pass_vty_r2'),
    chckBxR2PassCon = document.getElementById('pass_con_r2'),
    chckBxR2Pass = document.getElementById('pass_r2'),
    chckBxR2PassSec = document.getElementById('pass_secret_r2'),
    txtBxR2 = document.getElementById('txtR2'),
    btnR2 = document.getElementById('btnR2');
const chckBxR3Ip = document.getElementById('dir_ip_r3'),
    chckBxR3Pass04 = document.getElementById('pass_vty_r3'),
    chckBxR3PassCon = document.getElementById('pass_con_r3'),
    chckBxR3Pass = document.getElementById('pass_r3'),
    chckBxR3PassSec = document.getElementById('pass_secret_r3'),
    txtBxR3 = document.getElementById('txtR3'),
    btnR3 = document.getElementById('btnR3');

let who = null;
const recognition = new webkitSpeechRecognition();

const arrAllViews = [first_view, second_view, login_view]

let phrases = [
    'SOY EL INGENIERO BRUNO NICOLÁS',
    'SOY EDUARDO GARCÍA MARÍN EL AYUDANTE',
    'USUARIO'
]
let users = [
    'Administrador',
    'Ayudante',
    'Usuario'
]
let passwords = [
    '25$eptember2000!',
    '29Enero2000',
    '16)ecember2000'
]

document.addEventListener("change", (e) => {
    if (e.target === $visible) {
        if ($visible.checked === false) password.type = "password";
        else password.type = "text";
    }
});

login_view.addEventListener("click", (e) => {
    username.style.borderColor = '';
    password.style.borderColor = '';
    if (e.target === $submit) {
        if (isValidLogin(username, password)) {
            e.preventDefault();
            openView(first_view);
            document.title = "Frase para " + users[who];
            username.value = "";
            password.value = "";
        }
        else {
            username.style.borderColor = 'red';
            password.style.borderColor = 'red';
            username.value = '';
            password.value = '';
            // alert('Revisa tu usuario y contraseña')
        }
    }
});

function isValidLogin(user, pass) {
    for (let i = 0; i < users.length; i++) {
        if (user.value == users[i] && pass.value == passwords[i]) {
            who = i;
            return true;
        }
    }
    return false;
}
// Función que nos permitirá ver cierta página
function openView(view) {
    for (let i = 0; i < arrAllViews.length; i++) {
        if (view == arrAllViews[i]) {
            arrAllViews[i].classList.remove('inactive');
        } else {
            arrAllViews[i].classList.add('inactive');
        }
        console.log(arrAllViews[i])
    }
}
recognition.continuos = true;
recognition.lang = 'es-Es';
recognition.interimResults = false;


btnStar.addEventListener('click', () => {
    txtSpeak.innerText = ''
    recognition.start();
});

btnCloseSesion.addEventListener('click', () => {
    let isNotShowImagen = imag.classList.contains('inactive');
    if (isNotShowImagen) {
        toggleImag()
    }
    openView(login_view);
    document.title = "Iniciar Sesion";
});

recognition.onresult = (event) => {
    const texto = event.results[event.results.length - 1][0].transcript;
    console.log(texto.toUpperCase())
    for (let i = 0; i < phrases.length; i++) {
        if (texto.toUpperCase() == phrases[who]) {
            showSesion(users[who], time())
            document.title = "Bienvenido " + users[who];
            whoStartSesion(users[who]);
        }
        else {
            txtSpeak.style.color = 'red'
            txtSpeak.style.textDecoration = 'line-through'
            txtSpeak.innerText = texto.toUpperCase();
        }
    }

}

function showSesion(person, hora) {
    second_view.classList.remove('inactive');
    first_view.classList.add('inactive');
    welcome.innerText = 'Bienvenido sea ' + person
    clock_start.innerText = 'Inicio sesión a las ' + hora
}

function whoStartSesion(persona) {
    imag.classList.remove('inactive');
    switch (persona) {
        case 'Administrador':
            btnCloseImag.classList.remove('inactive');
            for (let i = 0; i < contrasena.length; i++) {
                contrasena[i].style.display = ''
            }
            btnRouterUno.classList.remove('inactive');
            btnRouterDos.classList.remove('inactive');
            btnRouterTres.classList.remove('inactive');
            btnCloseImag.classList.remove('inactive');
            break;
        case 'Ayudante':
            btnRouterUno.classList.remove('inactive');
            btnRouterDos.classList.remove('inactive');
            btnRouterTres.classList.remove('inactive');
            btnCloseImag.classList.remove('inactive');
            btnCloseImag.classList.remove('inactive');
            for (let i = 0; i < contrasena.length; i++) {
                contrasena[i].style.display = 'none'
            }
            break;
        case 'Usuario':
            btnRouterUno.classList.add('inactive');
            btnRouterDos.classList.add('inactive');
            btnRouterTres.classList.add('inactive');
            btnCloseImag.classList.add('inactive');
            break;
    }

}

function time() {
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()
    return hora + ':' + minuto + ':' + segundo
}

function mueveReloj() {
    clock.innerText = 'La hora es ' + time()
    setTimeout("mueveReloj()", 1000)
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

function startSesionUser() {
    btnRouterUno.classList.add('inactive');
    btnRouterDos.classList.add('inactive');
    btnRouterTres.classList.add('inactive');
}

//Funcion openTableR1 es para activar las funciones de poner texto a los botones y abrir la vista de la tabla del router.
const openTableR1 = () => toggleTableRouter(1)
btnRouterUno.addEventListener('click',
    openTableR1);
btnSwitchRouterUno.addEventListener('click', openTableSwitchR1);
btnMachinesRouterUno.addEventListener('click', openTableMachinesR1);

const openTableR2 = () => toggleTableRouter(2)
btnRouterDos.addEventListener('click',
    openTableR2);
btnSwitchRouterDos.addEventListener('click', openTableSwitchR2);
btnMachinesRouterDos.addEventListener('click', openTableMachinesR2);

const openTableR3 = () => toggleTableRouter(3);
btnRouterTres.addEventListener('click',
    openTableR3);
btnSwitchRouterTres.addEventListener('click', openTableSwitchR3);
btnMachinesRouterTres.addEventListener('click', openTableMachinesR3);

btnCloseImag.addEventListener('click', toggleImag);

//change values
btnR1.addEventListener('click', changeValueR1);
btnR2.addEventListener('click', changeValueR2);
btnR3.addEventListener('click', changeValueR3);

function changeValueR1() {
    if (chckBxR1Ip.checked) {
        config_red.router.ip_v4[0] = txtBxR1.value
        chckBxR1Ip.checked = false;
    }
    if (chckBxR1Pass04.checked) {
        config_red.router.pass_vty[0] = txtBxR1.value
        chckBxR1Pass04.checked = false;
    }
    if (chckBxR1PassCon.checked) {
        config_red.router.pass_con[0] = txtBxR1.value
        chckBxR1PassCon.checked = false;
    }
    if (chckBxR1Pass.checked) {
        config_red.router.pass[0] = txtBxR1.value
        chckBxR1Pass.checked = false;
    }
    if (chckBxR1PassSec.checked) {
        config_red.router.pass_secret[0] = txtBxR1.value
        chckBxR1PassSec.checked = false;
    }
    txtBxR1.value = ' ';
    updateRouterUno()
}

function changeValueR2() {
    console.log(12)
    if (chckBxR1R2Ip.checked) {
        config_red.router.ip_v4[1][0] = txtBxR2.value
        chckBxR1R2Ip.checked = false;
    }
    if (chckBxR1R2Pass04.checked) {
        config_red.router.pass_vty[1][0] = txtBxR2.value
        chckBxR1R2Pass04.checked = false;
    }
    if (chckBxR1R2PassCon.checked) {
        config_red.router.pass_con[1][0] = txtBxR2.value
        chckBxR1R2PassCon.checked = false;
    }
    if (chckBxR1R2Pass.checked) {
        config_red.router.pass[1][0] = txtBxR2.value
        chckBxR1R2Pass.checked = false;
    }
    if (chckBxR1R2PassSec.checked) {
        config_red.router.pass_secret[1][0] = txtBxR2.value
        chckBxR1R2PassSec.checked = false;
    }

    if (chckBxR2R3Ip.checked) {
        config_red.router.ip_v4[1][1] = txtBxR2.value
        chckBxR2R3Ip.checked = false;
    }
    if (chckBxR2R3Pass04.checked) {
        config_red.router.pass_vty[1][1] = txtBxR2.value
        chckBxR2R3Pass04.checked = false;
    }
    if (chckBxR2R3PassCon.checked) {
        config_red.router.pass_con[1][1] = txtBxR2.value
        chckBxR2R3PassCon.checked = false;
    }
    if (chckBxR2R3Pass.checked) {
        config_red.router.pass[1][1] = txtBxR2.value
        chckBxR2R3Pass.checked = false;
    }
    if (chckBxR2R3PassSec.checked) {
        config_red.router.pass_secret[1][1] = txtBxR2.value
        chckBxR2R3PassSec.checked = false;
    }
    txtBxR2.value = ' ';
    updateRouterDos()
}

function changeValueR3() {
    if (chckBxR3Ip.checked) {
        config_red.router.ip_v4[2] = txtBxR3.value
        chckBxR3Ip.checked = false;
    }
    if (chckBxR3Pass04.checked) {
        config_red.router.pass_vty[2] = txtBxR3.value
        chckBxR3Pass04.checked = false;
    }
    if (chckBxR3PassCon.checked) {
        config_red.router.pass_con[2] = txtBxR3.value
        chckBxR3PassCon.checked = false;
    }
    if (chckBxR3Pass.checked) {
        config_red.router.pass[2] = txtBxR3.value
        chckBxR3Pass.checked = false;
    }
    if (chckBxR3PassSec.checked) {
        config_red.router.pass_secret[2] = txtBxR3.value
        chckBxR3PassSec.checked = false;
    }
    updateRouterTres()
    txtBxR3.value = ' ';
}

function toggleImag() {
    let isShowImagen = !imag.classList.contains('inactive');
    if (isShowImagen) {
        imag.classList.add('inactive');
    }
    else {
        imag.classList.remove('inactive');
    }
    for (let i = 0; i < arrAllViewsOfRouters.length; i++) {
        let isShowTheTable = !arrAllViewsOfRouters[i].classList.contains('inactive')
        if (isShowTheTable) {
            toggleTableRouter(i + 1);
            imag.classList.remove('inactive');
        }
    }
}

//Funcion para activar las funciones de poner texto a los botones y abrir la vista de la tabla del switch.
function openTableSwitchR1() {
    openViewTables(tableSwitchsRouterUno, arrAllViewsOfSetting);
    putTextSwitchAndMachines(btnSwitchRouterUno,
        btnMachinesRouterUno, tableSwitchsRouterUno, tableMachinesRouterUno);
}
//Funcion para activar las funciones de poner texto a los botones y abrir la vista de la tabla de las máquinas
function openTableMachinesR1() {
    openViewTables(tableMachinesRouterUno, arrAllViewsOfSetting);
    putTextSwitchAndMachines(btnMachinesRouterUno,
        btnSwitchRouterUno, tableMachinesRouterUno, tableSwitchsRouterUno);
}

function openTableSwitchR2() {
    openViewTables(tableSwitchsRouterDos, arrAllViewsOfSetting);
    putTextSwitchAndMachines(btnSwitchRouterDos,
        btnMachinesRouterDos, tableSwitchsRouterDos, tableMachinesRouterDos);
}
function openTableMachinesR2() {
    openViewTables(tableMachinesRouterDos, arrAllViewsOfSetting);
    putTextSwitchAndMachines(btnMachinesRouterDos,
        btnSwitchRouterDos, tableMachinesRouterDos, tableSwitchsRouterDos);
}

function openTableSwitchR3() {
    openViewTables(tableSwitchsRouterTres, arrAllViewsOfSetting);
    putTextSwitchAndMachines(btnSwitchRouterTres,
        btnMachinesRouterTres, tableSwitchsRouterTres, tableMachinesRouterTres);
}
function openTableMachinesR3() {
    openViewTables(tableMachinesRouterTres, arrAllViewsOfSetting);
    putTextSwitchAndMachines(btnMachinesRouterTres,
        btnSwitchRouterTres, tableMachinesRouterTres, tableSwitchsRouterTres);
}


function toggleTableRouter(indice) {
    imag.classList.add('inactive');

    let primerRouter = tableReturn(indice);

    isATableActivade = false;
    for (let i = 0; i < arrAllViewsOfRouters.length; i++) {
        let segundoRouter = tableReturn(i + 1);
        isTheTableActivade = !segundoRouter.tableRouter.classList.contains('inactive');
        if (isTheTableActivade && segundoRouter.tableRouter !== primerRouter.tableRouter) {
            openViewTables(segundoRouter.tableRouter, arrAllViewsOfRouters);
            hideBtnContent(segundoRouter.tableRouter, segundoRouter.tableSwitchsRouter, segundoRouter.tableMachinesRouter);
            putTextToButtons(segundoRouter.btnRouter, segundoRouter.tableRouter, segundoRouter.text);
        }
    }

    openViewTables(primerRouter.tableRouter, arrAllViewsOfRouters);
    hideBtnContent(primerRouter.tableRouter, primerRouter.tableSwitchsRouter, primerRouter.tableMachinesRouter);
    putTextToButtons(primerRouter.btnRouter, primerRouter.tableRouter, primerRouter.text);
}

function tableReturn(indice) {
    let tableRouter, tableSwitchsRouter, tableMachinesRouter, btnRouter, text;
    switch (indice) {
        case 1:
            tableRouter = arrAllViewsOfRouters[indice - 1]
            tableSwitchsRouter = arrAllViewsOfSetting[0]
            tableMachinesRouter = arrAllViewsOfSetting[1]
            btnRouter = btnRouterUno,
                text = 'Router ' + config_red["router"]["name"][0];
            break;
        case 2:
            tableRouter = arrAllViewsOfRouters[indice - 1]
            tableSwitchsRouter = arrAllViewsOfSetting[2]
            tableMachinesRouter = arrAllViewsOfSetting[3]
            btnRouter = btnRouterDos,
                text = 'Router ' + config_red["router"]["name"][1]
            break;
        case 3:
            tableRouter = arrAllViewsOfRouters[indice - 1]
            tableSwitchsRouter = arrAllViewsOfSetting[4]
            tableMachinesRouter = arrAllViewsOfSetting[5]
            btnRouter = btnRouterTres,
                text = 'Router ' + config_red["router"]["name"][2];
            break;
    }
    return {
        tableRouter: tableRouter,
        tableSwitchsRouter: tableSwitchsRouter,
        tableMachinesRouter: tableMachinesRouter,
        btnRouter: btnRouter,
        text: text
    }
}

function openTable(i, text) {
    text === 'switch' ? openTableSwitch(i) : openTableMachines(i);
}

function openTableMachines(i) {
    switch (i) {
        case 0:
            openTableMachinesR1();
            break;
        case 1:
            openTableMachinesR2();
            break;
        case 2:
            openTableMachinesR3();
            break;
    }
}

function openTableSwitch(i) {
    switch (i) {
        case 0:
            openTableSwitchR1();
            break;
        case 1:
            openTableSwitchR2();
            break;
        case 2:
            openTableSwitchR3();
            break;
    }
}

//función que recibe como parametro la tabla que quiere mostrar su contenido y cuando muestra su contenido cierra el contenido de las demás.
function openViewTables(table, arrAllView) {
    let isTheTableOpen = !table.classList.contains('inactive');
    if (!isTheTableOpen) {
        for (let views of arrAllView) {
            (views == table) ? views.classList.remove('inactive') : views.classList.add('inactive');
        }
    }
    else {
        table.classList.toggle('inactive');
    }
}

//Función que sirve para poner el texto de 'Ver máquinas' o de 'Ver switchs' según como corresponda
function putTextSwitchAndMachines(btnToActiveTable, btn, tableOfButtonActived, table) {
    isTheBtnOfSwitch = btn.id.slice(0, 7);
    if (isTheBtnOfSwitch == 'switchs') {
        putTextToButtons(btn, table, 'Ver switchs');
        putTextToButtons(btnToActiveTable, tableOfButtonActived, 'Ver máquinas');
    }
    else {
        putTextToButtons(btn, table, 'Ver máquinas');
        putTextToButtons(btnToActiveTable, tableOfButtonActived, 'Ver switchs');

    }
}

function putTextToButtons(btn, tableOfButton, textToSee) {
    let isTheTableShow = !tableOfButton.classList.contains('inactive');
    isTheTableShow ? btn.innerText = 'Ocultar' : btn.innerText = textToSee;
}

//Función para ocultar todas las tablas dando click al boton del router
function hideBtnContent(tableRouter, tableSwitch, tableMachines) {
    let j = 0; // es para saber cuál será la posicion para después el arreglo de las tablas de máquinas y de tablas
    for (let i = 0; i < arrAllViewsOfRouters.length; i++) {
        if (arrAllViewsOfRouters[i] == tableRouter) {
            j = i; //es para saber cuál router está abierto
        }
    }
    let isTheTableOpen = tableRouter.classList.contains('inactive');

    let isTheTableShow = !tableSwitch.classList.contains('inactive');
    if (isTheTableShow && isTheTableOpen) {
        openTable(j, 'switch');
    }
    isTheTableShow = !tableMachines.classList.contains('inactive');
    if (isTheTableShow && isTheTableOpen) {
        openTable(j, 'machines');
    }
}


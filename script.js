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
        tableRouterUno//, tableRouter1, tableRouter2, tableRouter3
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
const sectRender = document.getElementById('render');

let config_red = {
    "router": { //Información de todos los routers
        "name": ["CDMX", "Toreo", "Pachuca"],
        "ip_v4": [["172.15.100.1"], //El tamaño del arreglo es igual a las conexiones que tiene con otro router
        ["172.15.100.2", "172.15.110.1"], 
        ["172.15.110.2"]],
        "pass_vty": ["1234", "5678", "91012"], //Hacer un arreglo para cada router
        "subnet_mask": "255.255.0.0",
        "mensaje": ["Sólo el Admin puede hacer modificaciones en el Router 1",
        "Solo el Admin puede hacer modificaciones en el Router 2",
        "Solo el Admin puede hacer modificaciones en el Router 3"]
        //Hacer un arreglo para cada mensaje de cada router    
    },
    "switch": { //el primer numero indica a cuál router se conecta
        "id": [1, "172.15.110.1", 2, "172.15.120.1", 3, "172.15.130.1" ],
        "vlan": [1, "172.15.110.25", 2, "172.15.120.25", 3, "172.15.130.25"],
        "ip_v4": "192.168.10.11",
        "subnet_mask": "255.255.255.0",
        "default_gateway": "192.168.10.1"
    },
    "maquinas": {
        "r1" : ["172.15.110.15", "172.15.110.16", "172.15.110.17"],
        "r2" : ["172.15.120.20", "172.15.120.21", "172.15.120.22"],
        "r3": ["172.15.110.30", "172.15.110.31", "172.15.110.32"]
    }
};
let k = 1; //linea 356, para hacer de forma dinamica el default gateway
function renderConfig(obj){
    for (let i = 0; i < config_red.router.name.length; i++){            
        route = Object.keys(config_red.maquinas)[i];

        const buttonRouter = document.createElement('button');
        buttonRouter.innerText = 'Ver Router ' + config_red.router.name[i];
        buttonRouter.setAttribute("id", "router"+ config_red.router.name[i])

        const tableRouter = document.createElement('div');
        tableRouter.classList.add('inactive');
        tableRouter.setAttribute("id", "tableRouter"+ (i + 1).toString());

            const table = document.createElement('table');
            tableRouter.appendChild(table);

            const captionConfRout = document.createElement('caption');
            captionConfRout.innerText = 'Configuración Router ' + config_red.router.name[i];
            
            const thBodyRouter = document.createElement('thbody');
            for(let j = 0; j < 3; j++){
                const trUno = document.createElement('tr');
                const tdDirIp = document.createElement('td');
                const tdIp = document.createElement('td');                    
                if(j === 0){
                    tdDirIp.innerText = 'Dirección IP: '
                    tdIp.innerText = obj.router.ip_v4[i];  
                }
                if(j === 1){
                    tdDirIp.innerText = 'Contraseña vty 0 4'
                    tdIp.innerText = obj.router.pass_vty[i];                                            
                }
                if(j === 2){
                    tdDirIp.innerText = 'Mensaje'
                    tdIp.innerText = obj.router.mensaje[i];                                            
                }          
                trUno.append(tdDirIp, tdIp);              
                thBodyRouter.appendChild(trUno);     
            }   
            table.append(captionConfRout, thBodyRouter);   
            const sectionBotones = document.createElement('section');              
            sectionBotones.classList.add('botones');
    
            // Segúnda seccion (tabla de switch)
        const btnSwitch = document.createElement('button');
        const btnMachines = document.createElement('button');
        btnSwitch.classList.add('btn');
        btnSwitch.classList.add('Switch');

        btnMachines.classList.add('btn');
        btnMachines.classList.add('Machines');
        
        btnSwitch.setAttribute("id", "switchs");
        btnMachines.setAttribute("id", "machines");

        btnSwitch.innerText = 'Ver Switchs';
        btnMachines.innerText = 'Ver Machines';

        sectionBotones.append(btnSwitch, btnMachines);

        tableRouter.append(table, sectionBotones);

        const tableSwitchs = document.createElement('table');
        tableSwitchs.classList.add('inactive');
        tableSwitchs.setAttribute("id", "tableSwichsR" +  (i + 1).toString());
        const captionConfSwitch = document.createElement('caption');
        captionConfSwitch.innerText = 'Configuración de los Switchs';
        const tdTableSwVacio = document.createElement('td');
        const tdTableSw = document.createElement('td');

        const thBodySwich = document.createElement('thbody');
        for(let j = 0; j < 4; j++){
            
            const trTableSw = document.createElement('tr');
            const tdDirIp = document.createElement('td');
            const tdIp = document.createElement('td');                    
            if(j === 0){
                tdDirIp.innerText = 'Dirección IP: '
                tdIp.innerText = obj.switch.id[1];                    
            }
            if(j === 1){
                tdDirIp.innerText = 'Subnet Mask: '
                tdIp.innerText = obj.switch.subnet_mask;                                            
            }
            if(j === 2){
                tdDirIp.innerText = 'Dirección IP VLAN'
                tdIp.innerText = obj.switch.vlan[1];                                            
            }
            if(j === 3){
                tdDirIp.innerText = 'Default gateway: '
                tdIp.innerText = obj.switch.default_gateway;                                            
            }                        
            trTableSw.append(tdDirIp, tdIp); 
            thBodySwich.appendChild(trTableSw);    
        }   

        tableSwitchs.append(captionConfSwitch, thBodySwich);
// Render de las tablas de máquinas
        const tableMachines = document.createElement('table');
        tableMachines.classList.add('inactive');
        tableMachines.setAttribute("id", "tableMachinesR"+ (i + 1).toString());

        const captionMachines = document.createElement('caption');
        captionMachines.innerText = 'Configuración de las máquinas del router ' + config_red.router.name[i];


        const tdVacio = document.createElement('td');
        tableMachines.append(captionMachines, tdVacio);
        for(let j = 0; j < config_red['maquinas'][route].length; j++){
            const tdNum = document.createElement('td');
            tdNum.innerText = 'Maquina ' + (j + 1);
            tableMachines.appendChild(tdNum);
        }

        const trIpv4 = document.createElement('tr');
        const tdTitleIpv4 = document.createElement('td');
        tdTitleIpv4.innerText = 'IPv4 Addres: ';
        trIpv4.append(tdTitleIpv4);
        for(let j = 0; j < config_red['maquinas'][route].length; j++){
            const tdIp = document.createElement('td');
            tdIp.innerText = config_red['maquinas'][route][j];
            trIpv4.append(tdIp);
        }

        const trSubnet = document.createElement('tr');
            const tdTitleSubnet = document.createElement('td');
            tdTitleSubnet.innerText = 'Subnet Mask: '

            const tdValueSubnet = document.createElement('td');
            tdValueSubnet.setAttribute("colspan", "3");
            tdValueSubnet.innerText = config_red.switch.subnet_mask


            trSubnet.append(tdTitleSubnet, tdValueSubnet);

        const trDefGat = document.createElement('tr');
            const tdTitleDefGat = document.createElement('td');
            tdTitleDefGat.innerText = 'Default Gateway: '

            const tdValueDefGat = document.createElement('td');
            tdValueDefGat.setAttribute("colspan", "3");
            tdValueDefGat.innerText = config_red.switch.id[k]
            k= k+2;

            trDefGat.append(tdTitleDefGat, tdValueDefGat);
        
        tableMachines.append(trIpv4, trSubnet, trDefGat);

    sectRender.append(buttonRouter, tableRouter, tableSwitchs, tableMachines);

    }
}
    renderConfig(config_red);
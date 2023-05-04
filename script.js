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
    clock_start = document.getElementById('clock_start'),
    btnCloseImag = document.getElementById('btnCloseImag'),
    imag = document.getElementById('imgRed');
let who = null;
const recognition = new webkitSpeechRecognition();

const arrAllViews = [first_view, second_view, login_view]

phrases = [
    'Soy el ingeniero Bruno Nicolás.',
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
        if (texto == phrases[who]){
            showSesion(users[who], time() )
            document.title ="Bienvenido " + users[who];
        }
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

    function startSesionUser(){
        btnRouterUno.classList.add('inactive');
        btnRouterDos.classList.add('inactive');
        btnRouterTres.classList.add('inactive');
    }

    //Funcion openTableR1 es para activar las funciones de poner texto a los botones y abrir la vista de la tabla del router.
    btnRouterUno.addEventListener('click', 
    openTableR1 = () => toggleTableRouter(1));
    btnSwitchRouterUno.addEventListener('click', openTableSwitchR1);
    btnMachinesRouterUno.addEventListener('click', openTableMachinesR1);
    
    btnRouterDos.addEventListener('click', 
    openTableR2 = () => toggleTableRouter(2));
    btnSwitchRouterDos.addEventListener('click', openTableSwitchR2);
    btnMachinesRouterDos.addEventListener('click', openTableMachinesR2);

    btnRouterTres.addEventListener('click', 
    openTableR3 = () => toggleTableRouter(3));
    btnSwitchRouterTres.addEventListener('click', openTableSwitchR3);
    btnMachinesRouterTres.addEventListener('click', openTableMachinesR3);

    btnCloseImag.addEventListener('click', toggleImag);

    function toggleImag(){
        let isShowImagen = !imag.classList.contains('inactive');
        if (isShowImagen){
            imag.classList.add('inactive');
        }
        else{
            imag.classList.remove('inactive');
        }
        console.log('out')
        for (let i = 0 ; i < arrAllViewsOfRouters.length; i++){
            let isShowTheTable = !arrAllViewsOfRouters[i].classList.contains('inactive')
            if(isShowTheTable){
                toggleTableRouter(i+1);
                imag.classList.remove('inactive');
            }
        }
    }
   
    //Funcion para activar las funciones de poner texto a los botones y abrir la vista de la tabla del switch.
    function openTableSwitchR1(){
        openViewTables(tableSwitchsRouterUno, arrAllViewsOfSetting);
        putTextSwitchAndMachines(btnSwitchRouterUno, 
            btnMachinesRouterUno, tableSwitchsRouterUno, tableMachinesRouterUno );
    }
    //Funcion para activar las funciones de poner texto a los botones y abrir la vista de la tabla de las máquinas
    function openTableMachinesR1(){
        openViewTables(tableMachinesRouterUno, arrAllViewsOfSetting);
        putTextSwitchAndMachines(btnMachinesRouterUno, 
            btnSwitchRouterUno, tableMachinesRouterUno, tableSwitchsRouterUno );
    }
    
    function openTableSwitchR2(){
        openViewTables(tableSwitchsRouterDos, arrAllViewsOfSetting);
        putTextSwitchAndMachines(btnSwitchRouterDos, 
            btnMachinesRouterDos, tableSwitchsRouterDos, tableMachinesRouterDos );
    }
    function openTableMachinesR2(){
        openViewTables(tableMachinesRouterDos, arrAllViewsOfSetting);
        putTextSwitchAndMachines(btnMachinesRouterDos, 
            btnSwitchRouterDos, tableMachinesRouterDos, tableSwitchsRouterDos );
    }

    function openTableSwitchR3(){
        openViewTables(tableSwitchsRouterTres, arrAllViewsOfSetting);
        putTextSwitchAndMachines(btnSwitchRouterTres, 
            btnMachinesRouterTres, tableSwitchsRouterTres, tableMachinesRouterTres );
    }
    function openTableMachinesR3(){
        openViewTables(tableMachinesRouterTres, arrAllViewsOfSetting);
        putTextSwitchAndMachines(btnMachinesRouterTres, 
            btnSwitchRouterTres, tableMachinesRouterTres, tableSwitchsRouterTres );
    }


    function toggleTableRouter(indice){
        imag.classList.add('inactive');

        let primerRouter = tableReturn(indice);
        
        isATableActivade = false;
        for (let i = 0 ; i < arrAllViewsOfRouters.length; i++){
            let segundoRouter = tableReturn(i+1);        
            isTheTableActivade = !segundoRouter.tableRouter.classList.contains('inactive');
            if(isTheTableActivade && segundoRouter.tableRouter !== primerRouter.tableRouter){
                openViewTables(segundoRouter.tableRouter, arrAllViewsOfRouters);
                hideBtnContent(segundoRouter.tableRouter, segundoRouter.tableSwitchsRouter, segundoRouter.tableMachinesRouter);
                putTextToButtons(segundoRouter.btnRouter, segundoRouter.tableRouter, segundoRouter.text);
            }
        }
        
        openViewTables(primerRouter.tableRouter, arrAllViewsOfRouters);
        hideBtnContent(primerRouter.tableRouter, primerRouter.tableSwitchsRouter, primerRouter.tableMachinesRouter);
        putTextToButtons(primerRouter.btnRouter, primerRouter.tableRouter, primerRouter.text);
    }

    function tableReturn(indice){
        let tableRouter, tableSwitchsRouter, tableMachinesRouter, btnRouter, text;
        switch(indice){
            case 1:
                tableRouter = arrAllViewsOfRouters[indice-1]
                tableSwitchsRouter = arrAllViewsOfSetting[0]
                tableMachinesRouter = arrAllViewsOfSetting[1]                
                btnRouter = btnRouterUno, 
                text = 'Router CDMX'
            break;
            case 2:
                tableRouter = arrAllViewsOfRouters[indice-1]
                tableSwitchsRouter = arrAllViewsOfSetting[2]
                tableMachinesRouter = arrAllViewsOfSetting[3]
                btnRouter = btnRouterDos, 
                text = 'Router TOREO'
            break;
            case 3:
                tableRouter = arrAllViewsOfRouters[indice-1]
                tableSwitchsRouter = arrAllViewsOfSetting[4]
                tableMachinesRouter = arrAllViewsOfSetting[5]
                btnRouter = btnRouterTres, 
                text = 'Router BR'
            break;
        }
        return {tableRouter: tableRouter, 
            tableSwitchsRouter: tableSwitchsRouter, 
            tableMachinesRouter: tableMachinesRouter, 
            btnRouter: btnRouter,
            text: text}
    }

    function openTable(i, text){
        text === 'switch'? openTableSwitch(i): openTableMachines(i);
    }

    function openTableMachines(i){
        switch(i){
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

    function openTableSwitch(i){
        switch(i){
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
    function openViewTables(table, arrAllView){
        let isTheTableOpen = !table.classList.contains('inactive');
        if(!isTheTableOpen){
            for (let views of arrAllView){
                (views == table)? views.classList.remove('inactive'): views.classList.add('inactive');       
            }            
        }
        else{
            table.classList.toggle('inactive');
        }
    }

    //Función que sirve para poner el texto de 'Ver máquinas' o de 'Ver switchs' según como corresponda
    function putTextSwitchAndMachines(btnToActiveTable, btn, tableOfButtonActived, table){
        isTheBtnOfSwitch = btn.id.slice(0,7);
        if(isTheBtnOfSwitch == 'switchs'){
            putTextToButtons(btn, table, 'Ver switchs');
            putTextToButtons(btnToActiveTable, tableOfButtonActived, 'Ver máquinas');
        }
        else{
            putTextToButtons(btn, table, 'Ver máquinas');
            putTextToButtons(btnToActiveTable, tableOfButtonActived, 'Ver switchs');

        }
    }

    function putTextToButtons(btn, tableOfButton, textToSee){
        let isTheTableShow = !tableOfButton.classList.contains('inactive');
        isTheTableShow ? btn.innerText = 'Ocultar': btn.innerText = textToSee;
    }

    //Función para ocultar todas las tablas dando click al boton del router
    function hideBtnContent(tableRouter, tableSwitch, tableMachines){
        let j = 0; // es para saber cuál será la posicion para después el arreglo de las tablas de máquinas y de tablas
        for(let i=0 ; i < arrAllViewsOfRouters.length; i++){
            if (arrAllViewsOfRouters[i] == tableRouter){ 
                j = i; //es para saber cuál router está abierto
            }
        }
        let isTheTableOpen = tableRouter.classList.contains('inactive');

        let isTheTableShow = !tableSwitch.classList.contains('inactive');
        if(isTheTableShow && isTheTableOpen){
            openTable(j, 'switch');
        }
        isTheTableShow = !tableMachines.classList.contains('inactive');
        if(isTheTableShow && isTheTableOpen){
            openTable(j, 'machines');
        }        
    }

    
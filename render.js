    //
    //     <button id="routerUno">Ver Router</button>
    //     <!-- Configuración -->
    //     <div id="tableRouterUno" class="inactive">
    //         <table>
    //             <caption>Configuración Router 0 </caption>
    //             <tr>
    //                 <td>Dirección IP: </td>
    //                 <td>172.15.100.1</td>
    //             </tr>
    //             <tr>
    //                 <td>Contraseña vty 0 4</td>
    //                 <td>1234</td>
    //             </tr>
    //             <tr>
    //                 <td>Mensaje del día: </td>
    //                 <td>"Sólo el administrador puede hacer modificaciones en el Router CDMX"</td>
    //             </tr>
    //         </table>
    //         <section class="botones">
    //             <button id="switchs" class="btn Switch">Ver Switchs</button>
    //             <button id="machines" class="btn Machines">Ver máquinas</button>
    //         </section>
    //     </div>
    //     <table id="tableSwitchs" class="inactive">
    //         <caption>Configuración de los Switchs</caption>
    //         <td></td><td>Switch #1</td>
    //         <tr>
    //             <td>Dirección IP:</td>
    //             <td>172.15.110.1</td>
    //         </tr>
    //         <tr>
    //             <td>Subnet Mask:</td>
    //             <td>255.255.0.0</td>
    //         </tr>
    //         <tr>
    //             <td>Dirección IP VLAN:</td>
    //             <td>172.15.110.25</td>
    //         </tr>
    //         <tr>
    //             <td>Subnet Mask:</td>
    //             <td>255.255.0.0</td>
    //         </tr>
    //     </table>
    //     <table id="tableMachines" class="inactive">
    //         <caption>Configuración de las máquinas</caption>
    //         <td></td>
    //         <td >Maquina #1</td>
    //         <td >Maquina #2</td>
    //         <td >Maquina #3</td>
    //         <tr>
    //             <td>IPv4 Addres:</td>
    //             <td>172.15.110.15</td>
    //             <td>172.15.110.16</td>
    //             <td>172.15.110.17</td>
    //         </tr>
    //         <tr>
    //             <td>Subnet Mask:</td>
    //             <td colspan="3">255.255.0.0</td>
    //         </tr>
    //         <tr>
    //             <td>Default Gateway:</td>
    //             <td colspan="3">172.15.110.1</td>
    //         </tr>
    //     </table>
    // 
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
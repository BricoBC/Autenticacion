export let config_red = {
    "router": { //Información de todos los routers
        "name": ["CDMX", "Toreo", "Zentralia"],
        "ip_v4": [["172.15.100.1"], //El tamaño del arreglo es igual a las conexiones que tiene con otro router
        ["172.15.100.2", "172.15.110.1"], 
        ["172.15.110.2"]],
        "pass_vty": ["1234", "5678", "91012"], //Hacer un arreglo para cada router
        "pass_con": ["L4v1g4admn4h", "L4v1g4admn4h", "L4v1g4admn4h" ],
        "pass": ["Cisco", "Cisco", "Cisco"],
        "pass_secret": ["1ng3n13r14", "1ng3n13r14", "1ng3n13r14"],
        "subnet_mask": "255.255.0.0",
        "mensaje": [["Sólo el administrador puede hacer modificaciones en el Router CDMX"],
        ["Sólo el administrador puede hacer modificaciones en el Router CDMX - TOREO", "Sólo el administrador puede hacer modificaciones en el Router TOREO - ZENTRALIA"],
        ["Sólo el administrador puede hacer modificaciones en el Router ZENTRALIA"]],
        //Hacer un arreglo para cada mensaje de cada router    
        "dominio": "mex.mx.uaem.com"
    },
    "switch": { //el primer numero indica a cuál router se conecta
        "id": [["172.15.110.1"],["172.15.120.1"],["172.15.130.1" ]],
        "subnet_mask": "255.255.0.0",
        "vlan": [["172.15.110.25"], ["172.15.120.25"],["172.15.130.25"]],
        "subnet_mask_v4": [["172.15.110.25"], ["172.15.120.25"], ["172.15.130.25"]],
        "default_gateway": "192.168.10.1"
    },
    "maquinas": {
        "r1" :{
            "ip_v4": ["172.15.110.15", "172.15.110.16", "172.15.110.17"],
            "subnet_mask": "255.255.0.0",
            "default_gateway": "172.15.110.1",
            "DNS_preferido": "172.10.162.4",
            "DNS_alternativo": "172.10.162.5"
        },
        "r2" : {
            "ip_v4": ["172.15.120.20", "172.15.120.21", "172.15.120.22"],
            "subnet_mask": "255.255.0.0",
            "default_gateway": "172.15.120.1",
            "DNS_preferido": "172.10.162.4",
            "DNS_alternativo": "172.10.162.5"
        },
        "r3":{
            "ip_v4": ["172.15.110.30", "172.15.110.31", "172.15.110.32"],
            "subnet_mask": "255.255.0.0",
            "default_gateway": "172.15.110.1",
            "DNS_preferido": "172.10.162.4",
            "DNS_alternativo": "172.10.162.5"
        },
    }
};


export function changeValueOfRouter(i){
    const dir_ip = document.getElementById('name');
    dir_ip.innerText = 'Configuración Router ' + config_red["router"];
}
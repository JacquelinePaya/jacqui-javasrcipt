const listaAsistentes = [];
const opcionesMenu = ["cárnico", "vegetariano", "celíaco", "deslactosado", "otro"];
const contadorMenu = {
    cárnico: 0,
    vegetariano: 0,
    celíaco: 0,
    deslactosado: 0,
    otro: 0
};

function confirmarAsistencia() {
    let nombre = prompt("Por favor, ingresa tu nombre y apellido:");
    if (!nombre) {
        alert("Nombre no ingresado. Asistencia no confirmada.");
        return;
    }

    let eleccionMenu;
    do {
        eleccionMenu = prompt(`Por favor, elige tu tipo de alimentación: 
        1. Cárnico
        2. Vegetariano
        3. Celíaco
        4. Deslactosado
        5. Otro`);

        eleccionMenu = parseInt(eleccionMenu);
        if (isNaN(eleccionMenu) || eleccionMenu < 1 || eleccionMenu > 5) {
            alert("Opción no válida. Por favor, elige una opción del 1 al 5.");
        }
    } while (isNaN(eleccionMenu) || eleccionMenu < 1 || eleccionMenu > 5);

    const menuSeleccionado = opcionesMenu[eleccionMenu - 1];
    
    if (menuSeleccionado === "otro") {
        let requerimientoEspecial = prompt("¿Sos alérgico a algún alimento? ¿Requerís un menú especial? Contanos tu requerimiento:");
        alert(`Gracias ${nombre}, tu asistencia ha sido confirmada con el siguiente requerimiento especial: ${requerimientoEspecial}.`);
        listaAsistentes.push({ nombre, menu: "otro", requerimiento: requerimientoEspecial });
        contadorMenu["otro"]++; 
    } else {
        contadorMenu[menuSeleccionado]++;
        listaAsistentes.push({ nombre, menu: menuSeleccionado });
        alert(`Gracias ${nombre}, tu asistencia ha sido confirmada con menú ${menuSeleccionado}.`);
    }

    actualizarResultados();
}

function calcularTotalInvitados() {
    return listaAsistentes.length;
}

function calcularTotalMenus(tipoMenu) {
    return contadorMenu[tipoMenu];
}

function actualizarResultados() {
    console.log(`Resumen de Asistencias:
    Total de asistencias confirmadas: ${calcularTotalInvitados()}
    Total de menús cárnicos: ${calcularTotalMenus('cárnico')}
    Total de menús vegetarianos: ${calcularTotalMenus('vegetariano')}
    Total de menús celíacos: ${calcularTotalMenus('celíaco')}
    Total de menús deslactosados: ${calcularTotalMenus('deslactosado')}
    Total de otros menús: ${calcularTotalMenus('otro')}
    Lista de asistentes:`, listaAsistentes);
}

document.getElementById('confirmarAsistencia').addEventListener('click', () => {
    alert("¿Confirmás tu asistencia? Presiona Aceptar para continuar.");
    confirmarAsistencia();
});

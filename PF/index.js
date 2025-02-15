// Me costo muchisimo llegar a esto asique emplee la ayuda de coopilot, tremenda herramienta, este es el camino que me recomendo:
// crearEncuesta → ejecutarEncuesta → procesarRondaVotacion → registrarVoto → mostrarResultadosFinales

// El primer paso fue crear la constante de las preguntas
const crearPregunta = (textoPregunta, opciones) => ({
    textoPregunta,
    opciones: opciones.map(opcion => opcion.trim()),
    resultados: {}
});

// Luego la forma en como se registra el voto
const registrarVoto = (pregunta, opcionSeleccionada) => {
    if (!pregunta.opciones.includes(opcionSeleccionada)) {
        console.log("La opción seleccionada no es válida.");
        return pregunta;
    }
    
    return {
        ...pregunta,
        resultados: {
            ...pregunta.resultados,
            [opcionSeleccionada]: (pregunta.resultados[opcionSeleccionada] || 0) + 1
        }
    };
};

// Funciones para manejar la encuesta
const crearEncuesta = (preguntas) => ({
    preguntas,
    resultados: []
});

const obtenerVoto = (pregunta) => {
    const opcionSeleccionada = prompt(
        `Pregunta: ${pregunta.textoPregunta}\nSeleccione una opción (${pregunta.opciones.join(", ")}):`
    );
    return opcionSeleccionada ? opcionSeleccionada.trim() : null;
};

const procesarRondaVotacion = (encuesta) => {
    const nuevasPreguntas = encuesta.preguntas.map(pregunta => {
        const voto = obtenerVoto(pregunta);
        return voto ? registrarVoto(pregunta, voto) : pregunta;
    });
    
    return {
        ...encuesta,
        preguntas: nuevasPreguntas
    };
};

// Utilice el mismo metodo de mostrar resultados que en el proyecto de POO
const mostrarResultadosFinales = (encuesta) => {
    console.log("\n=== RESULTADOS FINALES DE LA ENCUESTA ===");
    const resultadosTabla = encuesta.preguntas.map(pregunta => ({
        Pregunta: pregunta.textoPregunta,
        ...pregunta.opciones.reduce((acc, opcion) => ({
            ...acc,
            [opcion]: pregunta.resultados[opcion] || 0
        }), {})
    }));
    
    console.table(resultadosTabla);
    return encuesta;
};

// LLamamaos a la funcion ejecutarEncuesta y le pasamos las preguntas 
const ejecutarEncuesta = (encuestaInicial) => {
    let encuestaActual = encuestaInicial;
    let seguirVotando = true;

    while (seguirVotando) {
        encuestaActual = procesarRondaVotacion(encuestaActual);
        seguirVotando = confirm("¿Desea seguir votando?");
    }

    return mostrarResultadosFinales(encuestaActual);
};

// Preguntas 
const preguntasIniciales = [
    crearPregunta("¿Cuál es la capital de Francia?", ["París", "Londres", "Roma"]),
    crearPregunta("¿Cuál es la capital de Inglaterra?", ["Madrid", "Londres", "Berlín"]),
    crearPregunta("¿Cuál es la capital de España?", ["Madrid", "Barcelona", "Sevilla"]),
    crearPregunta("¿Cuál es la capital de Italia?", ["Milán", "Roma", "Nápoles"]),
    crearPregunta("¿Cuál es la capital de Alemania?", ["Hamburgo", "Berlín", "Múnich"]),
    crearPregunta("¿Cuál es la capital de Rusia?", ["Moscú", "San Petersburgo", "Sochi"]),
    crearPregunta("¿Cuál es la capital de Japón?", ["Osaka", "Tokio", "Yokohama"]),
    crearPregunta("¿Cuál es la capital de Australia?", ["Sydney", "Melbourne", "Canberra"])
];

ejecutarEncuesta(crearEncuesta(preguntasIniciales));
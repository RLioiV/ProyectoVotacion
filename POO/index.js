// Use basicamente el mismo código de la clase Encuesta del demo, pero con la modificación 
// de que ahora se muestra una tabla con los resultados de cada pregunta
class pregunta {
    constructor(textoPregunta, opciones) {
        this.textoPregunta = textoPregunta;
        this.opciones = opciones.map((opcion) => opcion.trim());
        this.resultados = {};
    }

    agregarVoto(opcionSeleccionada) {
        if (this.opciones.includes(opcionSeleccionada)) {
            this.resultados[opcionSeleccionada] =
                (this.resultados[opcionSeleccionada] || 0) + 1;
        } else {
            console.log("La opción seleccionada no es válida.");
        }
    }

    mostrarResultados() {
        console.log(`Resultados para la pregunta: "${this.textoPregunta}":`);
        this.opciones.forEach((opcion) => {
            console.log(`Opción "${opcion}": ${this.resultados[opcion] || 0} votos`);
        });
    }
}


class Encuesta {
    constructor() {
        this.Preguntas = [];
    }

    ejecutar() {
        let seguirVotando = true;
        while (seguirVotando) {
            this.Preguntas.forEach((pregunta) => this.votar(pregunta));
            seguirVotando = confirm("¿Desea seguir votando?");
        }
        this.mostrarResultadosFinales();
    }

    votar(pregunta) {
        const opcionSeleccionada = prompt(
            `Pregunta: ${pregunta.textoPregunta}\nSeleccione una opción (${pregunta.opciones.join(", ")}):`
        );
        if (opcionSeleccionada !== null) {
            pregunta.agregarVoto(opcionSeleccionada.trim());
            console.log("Opción seleccionada:", opcionSeleccionada);
        } else {
            console.log("La opción seleccionada no es válida.");
        }
    }
// Método para mostrar los resultados finales de la encuesta, las opciones seleccionadas, ademas de una tabla con los resultados de cada pregunta
    mostrarResultadosFinales() {
        console.log("\n=== RESULTADOS FINALES DE LA ENCUESTA ===");
        const resultadosTabla = this.Preguntas.map(pregunta => {
            const resultados = {};
            pregunta.opciones.forEach(opcion => {
                resultados[opcion] = pregunta.resultados[opcion] || 0;
            });
            return {
                Pregunta: pregunta.textoPregunta,
                ...resultados
            };
        });
        console.table(resultadosTabla);
    }
}
// Use las preguntas y opciones del demo.
const encuesta = new Encuesta();

encuesta.Preguntas = [
    new pregunta("¿Cuál es la capital de Francia?", ["París", "Londres", "Roma"]),
    new pregunta("¿Cuál es la capital de Inglaterra?", ["Madrid", "Londres", "Berlín"]),
    new pregunta("¿Cuál es la capital de España?", ["Madrid", "Barcelona", "Sevilla"]),
    new pregunta("¿Cuál es la capital de Italia?", ["Milán", "Roma", "Nápoles"]),
    new pregunta("¿Cuál es la capital de Alemania?", ["Hamburgo", "Berlín", "Múnich"]),
    new pregunta("¿Cuál es la capital de Rusia?", ["Moscú", "San Petersburgo", "Sochi"]),
    new pregunta("¿Cuál es la capital de Japón?", ["Osaka", "Tokio", "Yokohama"]),
    new pregunta("¿Cuál es la capital de Australia?", ["Sydney", "Melbourne", "Canberra"])
];

encuesta.ejecutar();
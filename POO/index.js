class pregunta {
    constructor(textoPregunta, opciones) {
      this.textoPregunta = textoPregunta;
      this.opciones = opciones.map((opcion) => opcion.trim());
      this.resultados = {}; // Inicia el objeto de resultados vacío
    }
  
    // Método para agregar un voto
    agregarVoto(opcionSeleccionada) {
      if (this.opciones.includes(opcionSeleccionada)) {
        this.resultados[opcionSeleccionada] =
          (this.resultados[opcionSeleccionada] || 0) + 1;
      } else {
        console.log("La opción seleccionada no es válida.");
      }
    }
  
    // Método para mostrar los resultados
    mostrarResultados() {
      console.log(`Resultados para la pregunta: "${this.textoPregunta}":`);
      this.opciones.forEach((opcion) => {
        console.log(`Opción "${opcion}": ${this.resultados[opcion] || 0} votos`);
      });
    }
  }
  
class Encuesta {
        constructor (){
            this.Preguntas = [];
        }

    ejecutar(){
        let seguirVotando = true;
        while (seguirVotando){
            this.Preguntas.forEach((pregunta) => this.votar(pregunta));
            seguirVotando = confirm("¿Desea seguir votando?");
        }
        this.mostrarResultadosFinales();
    }
    votar(pregunta){
        const opcionSeleccionada = prompt(
            `Pregunta: ${
              pregunta.textoPregunta
            }\nSeleccione una opción (${pregunta.opciones.join(", ")}):`
          );
          if (opcionSeleccionada !== null) {
            pregunta.agregarVoto(opcionSeleccionada.trim());
            console.log("opciones selecciones", opcionSeleccionada);
            console.log("Resultados finales de la encuesta:");
            this.Preguntas.forEach((pregunta) => pregunta.mostrarResultados());
    } else {
        console.log("La opción seleccionada no es válida.");
    }
    }
} 

const encuesta = new Encuesta();

encuesta.Preguntas = [
    new pregunta("¿Cuál es la capital de Francia?", ["París", "Londres", "Roma"], "París", "París"),
    new pregunta("¿Cuál es la capital de Inglaterra?", ["Madrid", "Londres", "Berlín"], "Londres", "Berlín"),
    new pregunta("¿Cuál es la capital de España?", ["Madrid", "Barcelona", "Sevilla"], "Madrid", "Madrid"),
    new pregunta("¿Cuál es la capital de Italia?", ["Milán", "Roma", "Nápoles"], "Roma", "Milán"),
    new pregunta("¿Cuál es la capital de Alemania?", ["Hamburgo", "Berlín", "Múnich"], "Berlín", "Berlín"),
    new pregunta("¿Cuál es la capital de Rusia?", ["Moscú", "San Petersburgo", "Sochi"], "Moscú", "San Petersburgo"),
    new pregunta("¿Cuál es la capital de Japón?", ["Osaka", "Tokio", "Yokohama"], "Tokio", "Tokio"),
    new pregunta("¿Cuál es la capital de Australia?", ["Sydney", "Melbourne", "Canberra"], "Canberra", "Sydney"),
  ];
  
  encuesta.ejecutar();
  
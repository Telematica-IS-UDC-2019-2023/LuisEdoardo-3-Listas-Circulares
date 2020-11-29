import Base from "./clases/Bases.js";
import Bases from "./clases/Bases.js"
import Ruta from "./clases/Ruta"

const Agregar = document.getElementById('btnBaseA');
const Eliminar = document.getElementById('btnBaseEl');
const Buscar = document.getElementById('btnBaseB');
const Imprimir = document.getElementById('btnBaseI');
const Insertar = document.getElementById('btnBaseIns');
const CrearTarjeta = document.getElementById('btnCrearTarjeta');

var BaseN = document.getElementById('BaseN');
var Minutos = document.getElementById('BaseM');
var Posicion = document.getElementById('BaseP');
var Lista = document.getElementById('etListaB');
var NombreB = document.getElementById('etNombreB');
var Duracion = document.getElementById('etDuracionB');
var SiguienteB = document.getElementById('etSiguienteB');
var AnteriorB = document.getElementById('etAnteriorB');

var horaInicial = document.getElementById('horaI');
var horaFinal = document.getElementById('horaF');
var baseInicio = document.getElementById('baseInicio');

var ruta = new Ruta;

Agregar.addEventListener('click' , () => {
    let nombre = BaseN.value;
    let minutos = Number(Minutos.value);
    let base  = new Base (nombre, minutos);
    ruta.Agregar(base)
})
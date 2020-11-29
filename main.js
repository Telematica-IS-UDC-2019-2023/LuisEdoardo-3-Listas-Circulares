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

var horarioInicial = document.getElementById('horaI');
var horarioFinal = document.getElementById('horaF');
var baseInicio = document.getElementById('baseInicio');

var ruta = new Ruta;

Agregar.addEventListener('click' , () => {
    let nombre = BaseN.value;
    let minutos = Number(Minutos.value);
    let base  = new Base (nombre, minutos);
    ruta.agregarBase(base);
    console.log(base);
})

Eliminar,addEventListener('click' , () => {
    let nombre = BaseN.value;
    ruta.eliminarBase(nombre);
    console.log(ruta);
})

Buscar.addEventListener('click' , () => {
    let nombre = BaseN.value;
    let base = ruta.buscarBase(nombre);
    NombreB.innerHTML = 'Nombre: ' + base.nombre;
    Duracion.innerHTML = 'Duracion: ' + base.minutos;
    SiguienteB.innerHTML = 'Siguiente: ' + base.siguiente.nombre;
    AnteriorB.innerHTML = 'Anterior: ' + base.anterior.nombre;

    console.log('Nombre: ' + base.nombre);
    console.log('Duracion: ' + base.minutos);
    console.log('Siguiente: ' + base.siguiente.nombre);
    console.log('Anterior: ' + base.anterior.nombre);
})

Imprimir.addEventListener('click', () => {
    Lista.innerHTML = 'Bases: ' + ruta.listarBases;
    console.log(ruta.listarBases());
})

Insertar.addEventListener('click', () => {
    let nombre = BaseN.value;
    let minutos = Number(Minutos.value);
    let posicion = Number(Posicion.value);
    let base = new Base (nombre, minutos);
    ruta.insertarBase(base, posicion);
    console.log(ruta);
})

CrearTarjeta.addEventListener('click', () => {
    let horaInicial = new Date();
    horaInicial.setHours(horarioInicial.value.slice(0,2));
    horaInicial.setMinutes(horarioInicial.value.slice(-2));

    let horaFinal = new Date();
    horaFinal.setHours(horarioFinal.value.slice(0,2));
    horaFinal.setMinutes(horarioFinal.value.slice(-2));

    let nombre = baseInicio.value;

    console.log(ruta.crearRecorrido(nombre, horaInicial, horaFinal));
})
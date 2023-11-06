import { cargarCabecero, cargarIngresos, cargarEgresos } from "./Aplicacion.js"
import { cargarEventos } from './Eventos.js'

// Cargar contenido de la app
cargarCabecero()
cargarIngresos()
cargarEgresos()

// Agregar evento a los botones
cargarEventos()

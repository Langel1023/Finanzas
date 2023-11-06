import Dato from './Dato.js'

export default class Egreso extends Dato {
    static contadorEgresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor)
        this._id = this.contadorEgresos + 1
    }

    getId = () => this._id
}
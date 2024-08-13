// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:


export class Contador {
    private _valor: number

    constructor(valor: number = 0) {
        this._valor = valor
    }

    // a) Zerar;
    public zerar(): void {
        this._valor = 0
    }

    // b) Incrementar;
    public incrementar(): void {
        this._valor += 1
    }

    // c) Retornar o valor do contador.
    public get valor(): number {
        return this._valor
    }
}

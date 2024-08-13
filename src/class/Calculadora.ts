// 4. Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.

// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.

// b. Esta classe deve iniciar com o histórico vazio

// c. Esta classe deve conter uma ação para visualizar o histórico.

export class Calculadora {

    historico: string[]

    constructor() {
        this.historico = []
    }


    somar(a: number, b: number): number {
        const total = a + b

        this.historico.push(`Somar: ${a} + ${b} = ${total}`)
        return total
    }

    diminuir(a: number, b: number): number {
        const total = a - b

        this.historico.push(`Diminuir: ${a} - ${b} = ${total}`)
        return total
    }

    multiplicar(a: number, b: number): number {
        const total = a * b

        this.historico.push(`Multiplicar: ${a} * ${b} = ${total}`)
        return total
    }

    dividir(a: number, b: number): number {
        const total = a / b

        this.historico.push(`Dividir: ${a} / ${b} = ${total}`)
        return total
    }


    mostrarHistorico(): void {
        console.log('Histórico dos cálculos:');

        console.log(this.historico);
    }
}
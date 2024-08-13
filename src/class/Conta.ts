// 3. Crie uma classe para implementar uma conta corrente. A classe
// deve possuir os seguintes atributos:

// a. Número da conta
// b. Nome do correntista
// c. Saldo

// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque


// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo
// negativo.

export class Conta {

    numeroConta: number
    nome: string
    saldo: number

    constructor(numeroConta: number, nome: string, saldo?: number) {
        this.numeroConta = numeroConta
        this.nome = nome
        this.saldo = saldo || 0
    }

    alterarNome(novoNome: string): void {
        this.nome = novoNome
    }

    deposito(valor: number): void {
        if (valor <= 0) {
            console.log('Depósito precisa ser maior que 0');
            return
        }

        this.saldo += valor
    }

    saque(valor: number): void {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente');
            return
        }

        this.saldo -= valor
    }
}
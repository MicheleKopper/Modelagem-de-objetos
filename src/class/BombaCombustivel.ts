// 5. Faça um programa completo utilizando classes e métodos que:

// a. Possua uma classe chamada BombaCombustivel, com no
// mínimo esses atributos:
// i. tipoCombustivel.
// ii. valorLitro
// iii. quantidadeCombustivel

export type tipoCombustivel = 'Normal' | 'Aditivada'

export class BombaCombustivel {

    tipoCombustivel: tipoCombustivel
    valorLitro: number
    qntCombustivel: number

    constructor(tipoCombustivel: tipoCombustivel, valorLitro: number, qntCombustivel: number) {
        this.tipoCombustivel = tipoCombustivel
        this.valorLitro = valorLitro
        this.qntCombustivel = qntCombustivel
    }


    // b. Possua no mínimo esses métodos:
    // i. abastecerPorValor() – método onde é informado o
    // valor a ser abastecido e mostra a quantidade de litros
    // que foi colocada no veículo
    abastecerPorValor(valor: number): void {
        if (valor <= 0) {
            console.log('O valor precisa ser maior que 0');
            return
        }

        const litros = valor / this.valorLitro


        if (litros > this.qntCombustivel) {
            console.log('Combustível insuficiente');
            return
        }

        this.qntCombustivel -= litros
        console.log(`Abastecer ${litros} litros`);
    }

    // ii. abastecerPorLitro() – método onde é informado a
    // quantidade em litros de combustível e mostra o valor a
    // ser pago pelo cliente.
    abastecerPorLitro(qntLitros: number): void {
        if (qntLitros <= 0) {
            console.log('Abasteça mais que 0 litros');
            return
        }

        if (qntLitros > this.qntCombustivel) {
            console.log('Combustível insuficiente');
            return
        }

        const valotTotal = qntLitros * this.valorLitro
        this.qntCombustivel -= qntLitros
        console.log(`Valor a ser pago R$${valotTotal}`);
    }

    // iii. alterarValor() – altera o valor do litro do combustível.
    alterarValor(novoValor: number): void {
        if (novoValor <= 0) {
            console.log('O novo valor precisa ser maior que 0');
            return
        }
        this.valorLitro = novoValor
        console.log(`O novo valor por litro de combustível é R$${novoValor}`);
    }

    // iv. alterarCombustivel() – altera o tipo do combustível.
    alterarCombustivel(novoCombustivel: tipoCombustivel): void {
        this.tipoCombustivel = novoCombustivel
        console.log(`O novo combustível é: ${novoCombustivel}`);
    }

    // v. alterarQuantidadeCombustivel() – altera a
    // quantidade de combustível restante na bomba.
    alterarQuantidadeCombustivel(novaQntCombustivel: number): void {
        if (novaQntCombustivel <= 0) {
            console.log('A quantidade de combustível precisa ser maior que 0');
            return
        }

        this.qntCombustivel = novaQntCombustivel
        console.log(`Nova quantidade de combustível: ${novaQntCombustivel} litros`);
    }
}

// OBS: Sempre que acontecer um abastecimento é necessário
// atualizar a quantidade de combustível total na bomba. Não deve ser
// possível abastecer se não tiver gasolina suficiente na bomba.
// 6. Implemente uma classe chamada Carro com as seguintes
// propriedades:

// a. Um veículo tem um certo consumo de combustível (medidos
// em km / litro) e uma certa quantidade de combustível no
// tanque.

// b. O consumo é especificado no construtor e o nível de
// combustível inicial é 0.

export class Carro {
    private consumoKm: number; // Consumo de combustível em km por litro
    private combustivelTanque: number; // Nível de combustível no tanque em litros

    constructor(consumoKm: number) {

        this.consumoKm = consumoKm;
        this.combustivelTanque = 0
    }

    // c. Forneça um método andar() que simula o ato de dirigir o
    // veículo por uma certa distância, reduzindo o nível de
    // combustível no tanque de gasolina.
    andar(distancia: number): void {
        if (distancia <= 0) {
            console.log('Informe uma distância maior que 0');
            return;
        }

        const combustivelNecessario = distancia / this.consumoKm;

        if (combustivelNecessario > this.combustivelTanque) {
            console.log('Combustível insuficiente para percorrer a distância desejada');
            return;
        }

        this.combustivelTanque -= combustivelNecessario;
        console.log(`Distância percorrida: ${distancia} km. Nível de combustível restante: ${this.combustivelTanque.toFixed(2)} litros.`);
    }

    // d. Forneça um método obterGasolina(), que retorna o nível atual
    // de combustível e forneça um método adicionarGasolina(),
    // para abastecer o tanque.
    obterGasolina(): number {
        return this.combustivelTanque;
    }

    adicionarGasolina(quantidade: number): void {
        if (quantidade <= 0) {
            console.log('A quantidade de gasolina deve ser maior que 0');
            return;
        }
        this.combustivelTanque += quantidade;
        console.log(`Gasolina adicionada: ${quantidade} litros. Nível atual: ${this.combustivelTanque.toFixed(2)} litros.`);
    }
}






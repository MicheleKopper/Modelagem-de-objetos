import { Contador } from "./class/Contador";
import { Bola } from "./class/Bola";
import { Conta } from "./class/Conta";
import { Calculadora } from "./class/Calculadora";
import { BombaCombustivel } from "./class/BombaCombustivel";
import { Carro } from "./class/Carro";

console.log();
console.log('---------------------- Atividade 01 ----------------------');
console.log()

const contador = new Contador(15)
console.log(`O valor do contador inicia com: ${contador.valor}`);

contador.incrementar()
console.log(`Contador após incrementar 1 fica com: ${contador.valor}`);

contador.zerar()
console.log(`Contador zerar: ${contador.valor}`);




console.log();
console.log('---------------------- Atividade 02 ----------------------');
console.log()

const bola = new Bola('Azul', 20, 'Couro')
console.log(`Características da bola - Cor: ${bola.cor}, Cincunferência: ${bola.circunferencia}cm, Material: ${bola.material}`);


bola.trocarCor('Verde')
console.log(`Características atualizadas - Cor: ${bola.cor}, Cincunferência: ${bola.circunferencia}cm, Material: ${bola.material}`);




console.log();
console.log('---------------------- Atividade 03 ----------------------');
console.log()

const conta = new Conta(9799, 'Michele Kopper', 50000)
console.log(conta);

conta.alterarNome('Mi Kopper')
console.log(conta);

conta.deposito(30000)
console.log(conta);

conta.saque(5000)
console.log(conta);




console.log();
console.log('---------------------- Atividade 04 ----------------------');
console.log()

const calculadora = new Calculadora()

calculadora.somar(20, 30)
calculadora.diminuir(20, 5)
calculadora.multiplicar(20, 2)
calculadora.dividir(20, 8)

calculadora.mostrarHistorico()




console.log();
console.log('---------------------- Atividade 05 ----------------------');
console.log()

const bomba = new BombaCombustivel('Aditivada', 5, 500)
console.log(`A bomba atual tem os seguintes dados - Gasolina: ${bomba.tipoCombustivel}, Valor/L R$${bomba.valorLitro}, Total de gasolina: ${bomba.qntCombustivel}L`);

console.log('------------------ Novas informações ------------------');

bomba.abastecerPorValor(10)
bomba.abastecerPorLitro(50)
bomba.alterarValor(7)
bomba.alterarCombustivel('Normal')
bomba.alterarQuantidadeCombustivel(750)




console.log();
console.log('---------------------- Atividade 06 ----------------------');
console.log()

// Exemplo:
// meuFusca = new Carro(15)
// meuFusca.adicionarGasolina(20)
// meuFusca.andar(100)
// meuFusca.obterGasolina()

const carro = new Carro (15)
console.log(carro);

carro.adicionarGasolina(20)

carro.andar(100)



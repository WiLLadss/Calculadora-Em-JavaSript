function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1-Soma (+)\n 2-subtração(-)\n 3-divisão real(/)\n 4-divisão inteira(%)\n 5-multiplicação(*)\n 6-potenciação(**)'));

    if (!operacao || operacao >= 7) {
        alert('Erro operação invalida');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;
        if (!n1 || !n2) {
            alert('Digite apenas Numeros')
            calculadora();

        } else {

            function soma() {
                resultado = n1 + n2;
                alert(`${n1} +${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} -${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} /${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`${n1} %${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} *${n2} = ${resultado}`);
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} **${n2} = ${resultado}`);
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt('Deseja relizar outra conta?\n 1-Sim\n 2-Não')

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Ate logo!!');
                } else {
                    alert('Digite uma opção valida!');
                    novaoOperacao();
                }
            }

        }

//com if e else
        /*if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            divisaoReal();
        } else if (operacao == 4) {
            divisaoInteira();
        } else if (operacao == 5) {
            multiplicacao();
        } else if (operacao == 6) {
            potenciacao();
        }*/

// com switch
        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                divisaoReal();
                break;
            case 4:
                divisaoInteira();
                break;
            case 5:
                multiplicacao();
                break;
            case 6:
                potenciacao();
                break;
        }
    }
}
calculadora();

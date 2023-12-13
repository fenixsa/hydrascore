// JavaScript Document

// Selecionando o elemento de input do CNPJ
        const inputCNPJ = document.getElementById('input-cnpj');

        // Adicionando um evento de input ao campo de entrada de CNPJ
        inputCNPJ.addEventListener('input', function() {
            const cnpjValue = inputCNPJ.value.replace(/\D/g, ''); // Remover caracteres não numéricos

            if (document.getElementById('cpf').checked) {
                // Configuração para CPF
                document.getElementById('doc-score').textContent = 'CPF:';
                document.getElementById('score-titulo').textContent = 'Score do CPF consultado';
                inputCNPJ.placeholder = '000.000.000-00';
                inputCNPJ.maxLength = 14;

                // Formatação para CPF (###.###.###-##)
                let formattedCNPJ = cnpjValue.substring(0, 3);
                if (cnpjValue.length > 3) formattedCNPJ += '.' + cnpjValue.substring(3, 6);
                if (cnpjValue.length > 6) formattedCNPJ += '.' + cnpjValue.substring(6, 9);
                if (cnpjValue.length > 9) formattedCNPJ += '-' + cnpjValue.substring(9, 11);

                inputCNPJ.value = formattedCNPJ;
            } else {
                // Configuração para CNPJ
                document.getElementById('doc-score').textContent = 'CNPJ:';
                document.getElementById('score-titulo').textContent = 'Score do CNPJ consultado';
                inputCNPJ.placeholder = '00.000.000/0001-00';
                inputCNPJ.maxLength = 18;

                // Formatação para CNPJ (##.###.###/####-##)
                let formattedCNPJ = cnpjValue.substring(0, 2);
                if (cnpjValue.length > 2) formattedCNPJ += '.' + cnpjValue.substring(2, 5);
                if (cnpjValue.length > 5) formattedCNPJ += '.' + cnpjValue.substring(5, 8);
                if (cnpjValue.length > 8) formattedCNPJ += '/' + cnpjValue.substring(8, 12);
                if (cnpjValue.length > 12) formattedCNPJ += '-' + cnpjValue.substring(12, 14);

                inputCNPJ.value = formattedCNPJ;
            }
        });

        // Adicionando evento de mudança para os botões de opção CPF e CNPJ
        const cpfOption = document.getElementById('cpf');
        const cnpjOption = document.getElementById('cnpj');

        cpfOption.addEventListener('change', function() {
            if (this.checked) {
                inputCNPJ.value = ''; // Limpa o valor quando alterar para CPF
                inputCNPJ.dispatchEvent(new Event('input')); // Dispara o evento de input
            }
        });

        cnpjOption.addEventListener('change', function() {
            if (this.checked) {
                inputCNPJ.value = ''; // Limpa o valor quando alterar para CNPJ
                inputCNPJ.dispatchEvent(new Event('input')); // Dispara o evento de input
            }
        });


document.addEventListener('DOMContentLoaded', function () {
    const consultaOption = document.getElementById('consulta');
    const aumentoOption = document.getElementById('aumento');
    const solicitarDiv = document.querySelector('.solicitar');
    const sobreSimples1Div = document.querySelector('.sobre-simples1');

    const restaurarConfiguracoes = () => {
        // Restaurar configurações para a opção "Consulta"
        solicitarDiv.style.backgroundColor = '';
        const icon = solicitarDiv.querySelector('img');
        icon.src = 'Icones/keyboard_double_arrow_up.svg';
        const descricaoSolicitar = solicitarDiv.querySelector('.solicitar-descricao');
        descricaoSolicitar.textContent = 'Solicitar aumento de Score';
        const solicitarBotao = solicitarDiv.querySelector('.solicitar-botao');
        solicitarBotao.textContent = 'Solicitar';
        solicitarBotao.style.fontWeight = '';
        solicitarBotao.style.color = '';
        sobreSimples1Div.querySelector('.simples-descricao').textContent = 'Para esta negociação considere a solicitação de aumento de Score.';
    };

    consultaOption.addEventListener('change', function () {
        if (this.checked) {
            restaurarConfiguracoes();
        }
    });

    aumentoOption.addEventListener('change', function () {
        if (this.checked) {
            // Alterar configurações para a opção "Aumento"
            solicitarDiv.style.backgroundColor = '#0F9D58';
            const icon = solicitarDiv.querySelector('img');
            icon.src = 'Icones/priority.svg';
            const descricaoSolicitar = solicitarDiv.querySelector('.solicitar-descricao');
            descricaoSolicitar.textContent = 'Status da solicitação de aumento';
            const solicitarBotao = solicitarDiv.querySelector('.solicitar-botao');
            solicitarBotao.textContent = 'APROVADO';
            solicitarBotao.style.fontWeight = '700';
            solicitarBotao.style.color = '#0F9D58';
            sobreSimples1Div.querySelector('.simples-descricao').textContent = 'Aumento de Score habilitado.';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const inputSCORE = document.getElementById('inputSCORE');
    const scoreValue = document.getElementById('score');
    const grafico = document.querySelector('.grafico');

    inputSCORE.addEventListener('input', function() {
        let inputValue = parseInt(inputSCORE.value);

        // Verifica se o valor está entre 0 e 1000 e limita para 0 e 1000
        if (isNaN(inputValue) || inputValue < 0) {
            inputValue = 0;
        } else if (inputValue > 1000) {
            inputValue = 1000;
        }

        // Limita o campo inputSCORE para 4 caracteres
        if (inputSCORE.value.length > 4) {
            inputSCORE.value = inputSCORE.value.slice(0, 4);
        }

        inputSCORE.value = inputValue; // Atualiza o valor exibido no inputSCORE

        scoreValue.textContent = inputValue; // Atualiza o valor exibido em "score"

        // Define a imagem do gráfico baseado no valor inserido
        if (inputValue >= 0 && inputValue <= 100) {
            grafico.innerHTML = '<img src="Score/score1.svg" alt="Score">';
        } else if (inputValue > 100 && inputValue <= 250) {
            grafico.innerHTML = '<img src="Score/score2.svg" alt="Score">';
        } else if (inputValue > 250 && inputValue <= 600) {
            grafico.innerHTML = '<img src="Score/score3.svg" alt="Score">';
        } else if (inputValue > 600 && inputValue <= 1000) {
            grafico.innerHTML = '<img src="Score/score4.svg" alt="Score">';
        } else {
            // Se o valor não estiver definido, exibe a imagem inativa
            grafico.innerHTML = '<img src="Score/inativo.svg" alt="Score">';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const inputLIMITE = document.getElementById('inputLIMITE');
    const limiteValue = document.getElementById('limite-valor');

    inputLIMITE.addEventListener('input', function() {
        let inputValue = this.value;
        
        // Substitui todos os caracteres que não são números, ponto ou vírgula por uma string vazia
        inputValue = inputValue.replace(/[^0-9.,]/g, '');
        
        // Atualiza o valor do campo input com a nova versão filtrada
        this.value = inputValue;

        limiteValue.textContent = inputValue; // Atualiza o valor exibido em "limite-valor"
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // ...outros códigos...

    var botaoImprimir = document.getElementById('botao-imprimir');
    var secaoConfig = document.querySelector('.config'); // Certifique-se de que o seletor corresponda à sua classe de configuração

    if (botaoImprimir && secaoConfig) {
        botaoImprimir.addEventListener('click', function () {
            // Adiciona uma classe para ocultar a seção de configuração
            secaoConfig.classList.add('ocultar-na-impressao');

            // Dispara a impressão
            window.print();

            // Espera um pouco antes de remover a classe (por exemplo, 500 milissegundos)
            setTimeout(function () {
                secaoConfig.classList.remove('ocultar-na-impressao');
            }, 500);
        });
    }
});
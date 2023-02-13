'use strict';

let numero, pontos, fim = false, recorde = 0;

inicioJogo();

// Lógica do jogo
document.querySelector('.check').addEventListener('click', () => {
    
    // Número que o usuário digitar para tentar adivinhar
    const chute = Number(document.querySelector('.guess').value)

    // Se houverem pontos e o jogo não tiver chegado ao fim...
    if (Number(document.querySelector('.score').textContent) > 1 && !fim) {
        
        // Se estiver vazio o campo de chute...
        if (!chute) {

            document.querySelector('.message').textContent = "⛔ Digite um número!"

        // Se o jogador acertar o número...
        } else if (chute === numero) {
            
            venceuPerdeu('venceu');

            // Seta o recorde
            if (pontos > recorde)
                recorde = pontos;

        // Se o jogador chutar alto...
        } else if (chute > numero) {

            maiorMenor("maior");

        // Se o jogador chutar baixo...
        } else if (chute < numero) {

            maiorMenor('menor');
        }
    // Se não houverem mais pontos...
    } else if (fim) {
        // Fazer nada. Evita que continue decrescendo o placar com a vitória
    }
    else {

        venceuPerdeu("perdeu");
    }
});

// Ao clicar no botão "Tentar de novo!"...
document.querySelector('.again').addEventListener('click', () => {

    inicioJogo();

});

// Função para setar os valores iniciais do jogo
function inicioJogo() {
    // Geração do número aleatório de 1 a 20
    // numero = Math.floor(Math.random() * 20) + 1;

    // Número fixo para implementação da lógica
    numero = 15;

    // Pontuação inicial do jogo. 10 chances!
    pontos = 10;

    fim = false;

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('h1').textContent = "Adivinhe o número!";

    document.querySelector('.number').textContent = "?";

    document.querySelector('.guess').value = '';

    document.querySelector('.message').textContent = "Comece a adivinhar...";

    document.querySelector('.score').textContent = pontos;

    document.querySelector('.highscore').textContent = recorde;
}

// Função para mostrar respostas das tentativas quando forem altas ou baixas
function maiorMenor(maiorMenor) {

    let mensagem;

    if (maiorMenor === 'maior') {
        mensagem = "📈 Chutou alto demais... escolha um número menor!";
    } else {
        mensagem = "📉 Chutou baixo demais... escolha um número maior!";
    }

    document.querySelector('.message').textContent = mensagem;

    document.querySelector('.score').textContent = --pontos;
}

// Função para setar os valores de vitória e de derrota
function venceuPerdeu(resultado){

    let mensagem, bg_color;

    fim = true;

    // Seta as mensagens de acordo com o resultado
    if (resultado === 'venceu') {
        mensagem = "🎉 Você acertou o número!!";
        bg_color = "#60b347";
    } else {
        // Faz o decremento final para chegar a zero
        if(Number(document.querySelector('.score').textContent) > 0)
            document.querySelector('.score').textContent = --pontos;

        mensagem = "❌ VOCÊ PERDEU!! ❌";
        bg_color = '#cf1717';
    }

    

    document.querySelector('.message').textContent = mensagem;

    document.querySelector('body').style.backgroundColor = bg_color;

    document.querySelector('h1').textContent = "O número era:";

    document.querySelector('.number').textContent = `${numero}`;
}
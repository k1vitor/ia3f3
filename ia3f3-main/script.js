const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [ //serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: " o que você acha da inteligência artificial?",
        alternativas: ["gosto e uso frequentemnte","não gosto e nao uso"]
    },
    {
        enunciado: "qual inteligência artificial você gostuma usar?",
        alternativas: ["chat gpt, gamma","outros em geral"]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: ["Alternativa 1","Alternativa 2"]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado
mostraalternativas();
}
function mostraalternativas()
mostraPergunta();
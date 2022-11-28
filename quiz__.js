let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0
let placar = 0

//PERGUNTAS
let = numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')
//ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')
//AARTICLE COM A CLASS QUESTOES
let articleQuestoes = document.querySelector('.questoes')
//AARTICLE COM A CLASS QUESTOES
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao  : 0,
    pergunta    : "Pergunta",
    alternativaA: "Alterativa A",
    alternativaB: "Alterativa B",
    alternativaC: "Alterativa C",
    alternativaD: "Alterativa D",
    correta     : "0",
}
const q1 = {
    numQuestao  : 1,
    pergunta    : "Como ocorre a perseguição à Igreja nos dias atuais?",
    alternativaA: "Por meio da normalização de comportamentos e práticas contrárias à fé cristã.",
    alternativaB: "Por meio das redes sociais como facebook, tik-tok entre outros",
    alternativaC: "Por meio da falta de oração e leitura da palavra",
    alternativaD: "Por meio da televisão com filmes e novelas com tems bíblicos",
    correta     : "Por meio da normalização de comportamentos e práticas contrárias à fé cristã.",
}

const q2 = {
    numQuestao  : 2,
    pergunta    : "Segundo a lição, o que significa a expressão “últimos tempos”?",
    alternativaA: "“últimos tempos” diz respeito a volta de Jesus",
    alternativaB: "“últimos tempos” o esfriamento dos crentes em todo o mundo",
    alternativaC: "A expressão “últimos tempos” é uma referência ao período compreendido como sendo a era da Igreja.",
    alternativaD: "“últimos tempos” é o grande avivamento na igreja de Cristo",
    correta     : "A expressão “últimos tempos” é uma referência ao período compreendido como sendo a era da Igreja.",
}
const q3 = {
    numQuestao  : 3,
    pergunta    : "Em qual esfera se encontram os comportamentos “hipócrita” e “mentiroso”?",
    alternativaA: "Na esfera da moral.",
    alternativaB: "Na esfera da carnal.",
    alternativaC: "Na esfera da espiritual.",
    alternativaD: "Na esfera da eclesiástica.",
    correta     : "Na esfera da moral.",
}
const q4 = {
    numQuestao  : 4,
    pergunta    : "Qual expressão bíblica que caracteriza o ataque à Igreja na esfera social?",
    alternativaA: "“A liberaão do casamento entre pessoas do mesmo sexo”",
    alternativaB: "“Que proíbem O casamento”",
    alternativaC: "“Que proíbem casamento de padres”",
    alternativaD: "“Que proíbem O casamento muito cedo”",
    correta     : "“Que proíbem O casamento”",
}
const q5 = {
    numQuestao  : 5,
    pergunta    : "Segundo a lição, quais as duas importantes armas ou ferramentas capazes de neutralizar os ataques do Diabo?",
    alternativaA: "O Jejum e Oração",
    alternativaB: "Vigilancia e Oração",
    alternativaC: "A Palavra de Deus e a Oração.",
    alternativaD: "Dizimar e Ofertar",
    correta     : "A Palavra de Deus e a Oração.",
}
//CONSTANTE COM ARRAY DE OBJETOS COM TODAS AS QUESTÕES
const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de Questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// montar q 1ª questão completa, para iniciar o quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

//configurar o value inicial da 1ª questão completa
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

//para montar as próximas questões
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD

    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
}
function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}
function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEsta = resposta.textContent
    console.log("RespU " + respostaEsta)

    let certa = questoes[numeroDaQuestao].correta
    console.log("RespC " + certa)

    if (respostaEsta == certa) {
        console.log ('Acertou')
        respostaEsta.textContent = "Correta"
        pontos += 10
    } else{
        console.log ("Errou!")
        respostaEsta.textContent = "Errada"
    }
    //atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos" + placar
    //bloquear a escolha de opçoes
       bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

    if(proxima > totalDeQuestoes) {
        console.log('Fim do Questinário!')
        fimDoQuestionario()
        }  else {
        proximaQuestao(proxima)
    }
    }, 950)
    desbloquearAlternativas()
    }
function fimDoQuestionario(){
        instrucoes.textContent = "Fim do Questionário"
        numQuestao.textContent = ""

        let pont = ''
        pontos == 0 ? pont = 'ponto' : pont = 'pontos'

        
            aviso.textContent = "Você estudou de verdade" + pontos + " " + pont
        
            pergunta.textContent = "Você estudou de verdade " + pontos + " " + pont

            aviso.textContent = "Você estudou mesmo, Parabéns! " + pontos + " " + pont


    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute = ('value', '0')
    b.setAttribute = ('value', '0')
    c.setAttribute = ('value', '0')
    d.setAttribute = ('value', '0')

    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0
        location.reload();
     
    },3000)
}

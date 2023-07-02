const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {

    const valorRespostaCerta = 2;
    let acertos = 0;

    for (let questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            acertos++
        };
    };

    const nota = valorRespostaCerta * acertos

    console.log(`O aluno ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota}`);

};

corrigirProva(prova)
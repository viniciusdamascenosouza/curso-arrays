const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const mediaDosAlunos = [10,7,9,6];


let listaDeNotasEalunos = [alunos, mediaDosAlunos];


const exibeNomeEnota = (nomeDoAluno) => {
    if (listaDeNotasEalunos [0].includes(nomeDoAluno)){
        let indice = listaDeNotasEalunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEalunos[0][indice] + ', sua média é ' 
        + listaDeNotasEalunos [1] [indice] + '.'
    } else{
        return "Aluno não está cadastrado!"
    }
}

console.log(exibeNomeEnota("Vinícius"))
// 3. Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.

let aluno1 = {
    nome: "Igor",
    nota1: 10,
    nota2: 8
}

let aluno2 = {
    nome: "Maria",
    nota1: 9,
    nota2: 7
}

function media(n1, n2) {
    let media = (n1 + n2) / 2
    return media
}

function mediaTurma (mediaAluno1, mediaAluno2) {
    let mediaTurma = (mediaAluno1 + mediaAluno2) / 2
    return mediaTurma
}

console.log(aluno1, aluno2)
console.log(`A media do aluno1 é: ${media(aluno1.nota1, aluno1.nota2)}`)
console.log(`A media do aluno2 é: ${media(aluno2.nota1, aluno2.nota2)}`)
console.log(`A media da turma é: ${mediaTurma(media(aluno1.nota1, aluno1.nota2), media(aluno2.nota1, aluno2.nota2))}`)

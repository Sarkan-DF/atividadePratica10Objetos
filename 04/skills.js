// 4. Crie cinco objetos JavaScript dentro de um Array contendo
// nome(texto), idade(número), skills (array), ou seja um total de cinco
// alunos. Agora crie uma função que receba estes cinco objetos e
// mais um parâmetro skill. Dependendo da skill enviada mostrar no
// console.log(), quais alunos têm a skill enviada por parâmetro,
// mostrar todo o objeto.
// Exemplo: Pedro, 24, [JavaScript, TypeScript, React]. Se mandar
// chamar a função enviando (alunos, “JavaScript”), precisa mostrar o
// Pedro e qual mais se encaixa nessa skill.

let listaAlunoSkill = []
let listaSkills = []
let continua1 = true;
let continua2 = true;

do {
    
    let alunoSkill = {}

    const nome = prompt("Digite seu nome: ")
    alunoSkill.nome = nome

    const idade = Number(prompt("Digite sua idade: "))
    alunoSkill.idade = idade

    do {
        let skills = (prompt("Digite sua skill: "))
        listaSkills.push(skills)
        alunoSkill.skills = listaSkills
        continua2 = confirm("Deseja cadastrar mais uma skill?")
    } while (continua2);
    listaSkills = [];
  
    listaAlunoSkill.push(alunoSkill)
    continua1 = confirm("Deseja cadastrar mais um aluno?")
} while (continua1);

function contemSkill(listaAlunos, skill) {
    const skills = listaAlunos.filter ( (valor, indice, array) => valor.skills.includes(skill) )
    console.log(skills)
}

contemSkill(listaAlunoSkill, "JavaScript")
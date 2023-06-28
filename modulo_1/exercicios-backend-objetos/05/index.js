const cursos = {
  id: 1234,
  nome: "Lógica de programação",
  aulas: []
};

const newClasses = [
  {
    identificador: 1,
    class: "Introduçõ a Programação"
  },
  {
    identificador: 2,
    class: "Variáveis"
  },
  {
    identificador: 3,
    class: "Condicionais"
  },
  {
    identificador: 4,
    class: "Arrays"
  }
];

for (let aula = 0; aula < newClasses.length; aula++) {
  cursos.aulas.push(newClasses[aula])
}

console.log(cursos)
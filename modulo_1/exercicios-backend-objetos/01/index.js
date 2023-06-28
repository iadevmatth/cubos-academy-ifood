const endereco = {
  rua: "nazaré",
  numero: 5,
  complemento: "apartamento",
  bairro: "leblon",
  cep: 25444000,
  cidade: "rio de janeiro",
  estado: "rio de janeiro",
  pais: "brasil"
};

const usuario = {
  nome: "henrique lopes silva",
  email: "riquesilva@gmail.com",
  telefone: 21955556055,
  data_nascimento: 10082000,
  endereco
};

for (let dado of endereco) {
  console.log(dado)
}


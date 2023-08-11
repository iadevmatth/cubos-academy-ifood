const contas = require('../bancodedados/bancodedados');
const { format, parse } = require('date-fns');
const { emailExistente, cpfExistente, verificarSenha } = require('../intermediarios/interTransacao');


const listarContas = async (req, res) => {

  const qtdContas = contas.contas.length

  if (contas.contas.length === 0) {
    return res.status(200).json({
      mensagem: 'Nenhuma conta encontrada.',
    });
  };

  if (contas.contas) {
    const contasEncontradas = contas.contas;
    return res.status(200).json({
      mensagem: `${qtdContas} contas encontradas`,
      contas: contasEncontradas,
    });
  };
};

const criarContas = async (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

  if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
    return res.status(400).json({ message: 'Todos os campos precisam ser preenchidos.' })
  };

  const dataObj = parse(data_nascimento, 'dd/MM/yyyy', new Date());
  const cpf_Numero = Number(cpf);
  const telefone_Numero = Number(telefone);

  if (isNaN(cpf_Numero) || isNaN(telefone_Numero)) {
    return res.status(400).json({ message: 'Os campos (cpf, telefone e data_nascimento) devem ser apenas números.' });
  };

  if (emailExistente(email)) {
    return res.status(400).json({ mensagem: 'O email informado já existe no banco de dados.' });
  };

  if (cpfExistente(cpf)) {
    return res.status(400).json({ mensagem: 'O cpf informado já existe no banco de dados' });
  };

  const novaConta = {
    numero: contas.contas.length + 1,
    saldo: 0,
    usuario: {
      nome,
      cpf: cpf_Numero,
      data_nascimento: format(dataObj, 'yyyy-MM-dd'),
      telefone: telefone_Numero,
      email,
      senha,
    }
  };
  contas.contas.push(novaConta);

  return res.status(201).json({ mensagem: 'Sucesso ao cadastrar', conta: novaConta })

};

const atualizarContas = async (req, res) => {
  const { numeroConta } = req.params;
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

  const numeroValido = (numeroConta) => !isNaN(parseFloat(numeroConta));

  if (!numeroValido(numeroConta)) {
    return res.status(400).json({ mensagem: 'Numero de Conta Inválido' });
  };

  const usuarioEncontrado = contas.contas.findIndex((usuario) => {
    return usuario.numero === Number(numeroConta);
  });

  if (usuarioEncontrado === -1) {
    return res.status(404).json({ mensagem: 'Usuario não encontrado.' })
  };

  if (emailExistente(email)) {
    return res.status(400).json({ mensagem: 'O email informado já existe no banco de dados.' });
  };

  if (cpfExistente(cpf)) {
    return res.status(400).json({ mensagem: 'O cpf informado já existe no banco de dados' });
  };

  const usuarioAtualizado = { ...contas.contas[usuarioEncontrado].usuario };

  if (nome) usuarioAtualizado.nome = nome
  if (cpf) usuarioAtualizado.cpf = cpf
  if (data_nascimento) usuarioAtualizado.data_nascimento = data_nascimento
  if (telefone) usuarioAtualizado.telefone = telefone
  if (email) usuarioAtualizado.email = email
  if (senha) usuarioAtualizado.senha = senha

  contas.contas[usuarioEncontrado].usuario = usuarioAtualizado

  return res.status(200).json({ mensagem: 'Conta atualizada com sucesso.' });
};

const deletarContas = async (req, res) => {
  const { numeroConta } = req.params;

  const numeroValido = (numeroConta) => !isNaN(parseFloat(numeroConta));

  if (!numeroValido(numeroConta)) {
    return res.status(400).json({ mensagem: 'Numero de Conta Inválido' });
  };

  const usuarioEncontrado = contas.contas.find((usuario) => {
    return usuario.numero === Number(numeroConta);
  });

  if (!usuarioEncontrado) {
    return res.status(404).json({ mensagem: 'Usuario não encontrado.' })
  };

  if (usuarioEncontrado.saldo > 0) {
    return res.status(403).json({ mensagem: 'A conta precisa estar zerada para se excluida.' })
  };

  contas.contas = contas.contas.filter((usuario) => {
    return usuario.numero !== Number(numeroConta)
  });

  return res.status(200).json({ mensagem: 'Conta excluída com sucesso.' })

};

const depositarValor = async (req, res) => {
  const { data, numero_conta, valor } = req.body;

  const numeroValido = (numero_conta) => !isNaN(parseFloat(numero_conta));
  const valorValido = (valor) => !isNaN(parseFloat(valor));

  if (!numeroValido(numero_conta) || !valorValido(valor)) {
    return res.status(400).json({ mensagem: 'Numero da conta ou valor inválido.' });
  };

  const valorDeposito = parseFloat(valor);

  if (valorDeposito <= 0) {
    return res.status(400).json({ mensagem: 'Deposito negado! Por favor, deposite um valor.' });
  };

  const usuarioEncontrado = contas.contas.find((usuario) => {
    return usuario.numero === Number(numero_conta);
  });

  if (usuarioEncontrado) {
    usuarioEncontrado.saldo += valorDeposito;

    const deposito = {
      data,
      numero_conta,
      valor: valorDeposito,
    };

    contas.depositos.push(deposito);
  } else {
    return res.status(403).json({ mensagem: 'Usuario não encontrado' });
  };

  return res.status(201).json({ mensagem: 'Deposito realizado com sucesso.' });
};

const sacarValor = async (req, res) => {
  const { data, numero_conta, valor, senha } = req.body;

  const numeroValido = (numero_conta) => !isNaN(parseFloat(numero_conta));
  const valorValido = (valor) => !isNaN(parseFloat(valor));

  if (!numeroValido(numero_conta) || !valorValido(valor)) {
    return res.status(400).json({ mensagem: 'Um dos campos está incorreto.' });
  };

  const valorSaque = parseFloat(valor);

  if (valorSaque <= 0) {
    return res.status(400).json({ mensagem: 'Saque negado.' });
  };

  const usuarioEncontrado = contas.contas.find((usuario) => {
    return usuario.numero === Number(numero_conta);
  });

  if (senha !== usuarioEncontrado.usuario.senha) {
    return res.status(401).json({ mensagem: 'senha incorreta.' })
  };

  if (usuarioEncontrado.saldo < valorSaque) {
    return res.status(403).json({ mensagem: 'Saldo insuficiente.' })
  };

  if (usuarioEncontrado) {
    usuarioEncontrado.saldo -= valorSaque;

    const saque = {
      data,
      numero_conta,
      valor: valorSaque,
    };

    contas.saques.push(saque);
  } else {
    return res.status(403).json({ mensagem: 'Usuario não encontrado' });
  };

  return res.status(201).json({ mensagem: 'Saque realizado com sucesso.' });

};

const transferirValor = async (req, res) => {
  const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

  const numeroValido = (numero_conta) => !isNaN(parseFloat(numero_conta));
  const valorValido = (valor) => !isNaN(parseFloat(valor));

  if (!numeroValido(numero_conta_origem) || !numeroValido(numero_conta_destino) || !valorValido(valor)) {
    return res.staus(400).json({ mensagem: 'um dos campos está incorreto.' });
  };

  const valorTransferencia = parseFloat(valor);

  if (valorTransferencia <= 0) {
    return res.status(400).json({ mensagem: 'Valor inválido.' });
  };

  const usuarioDeOrigem = contas.contas.find((usuario) => usuario.numero === Number(numero_conta_origem));

  const usuarioDeDestino = contas.contas.find((usuario) => usuario.numero === Number(numero_conta_destino));

  if (!usuarioDeOrigem || !usuarioDeDestino) {
    return res.status(404).json({ mensagem: 'Uma das contas não foi encontrada.' });
  };

  if (senha !== usuarioDeOrigem.usuario.senha) {
    return res.status(401).json({ mensagem: 'Senha incorreta.' });
  };

  if (usuarioDeOrigem.saldo < valorTransferencia) {
    return res.status(403).json({ mensagem: 'Saldo insuficiente.' });
  };

  if (usuarioDeOrigem === usuarioDeDestino) {
    return res.status(400).json({ mensagem: 'Transferencia inválida.' });
  };

  usuarioDeOrigem.saldo -= valorTransferencia;
  usuarioDeDestino.saldo += valorTransferencia;

  const transferencia = {
    data: new Date(),
    numero_conta_origem,
    numero_conta_destino,
    valor: valorTransferencia,
  };

  contas.transferencias.push(transferencia)

  return res.status(201).json({ mensagem: 'Transferencia realizada com sucesso.' })
};

const consultarSaldo = async (req, res) => {
  const { numero_conta, senha } = req.query;

  const numeroValido = (numero_conta) => !isNaN(parseFloat(numero_conta));

  if (!numeroValido(numero_conta)) {
    return res.status(400).json({ mensagem: 'Número de conta inválido.' });
  };

  const usuarioEncontrado = contas.contas.find((usuario) => usuario.numero === Number(numero_conta));

  if (!usuarioEncontrado) {
    return res.status(404).json({ mensagem: 'Usuario não encontrado.' });
  };

  if (senha !== usuarioEncontrado.usuario.senha) {
    return res.status(401).json({ mensagem: 'Senha incorreta.' });
  };

  const saldo = {
    saldo: usuarioEncontrado.saldo,
  };

  return res.status(200).json(saldo);
};

const extratoConta = async (req, res) => {
  const { numero_conta, senha } = req.query;

  const numeroValido = (numero_conta) => !isNaN(parseFloat(numero_conta));

  if (!numeroValido(numero_conta)) {
    return res.status(400).json({ mensagem: 'Número de conta inválido.' });
  };

  const usuarioEncontrado = contas.contas.find((usuario) => usuario.numero === Number(numero_conta));

  if (!usuarioEncontrado) {
    return res.status(404).json({ mensagem: 'Usuario não encontrado.' });
  };

  if (senha !== usuarioEncontrado.usuario.senha) {
    return res.status(401).json({ mensagem: 'Senha incorreta.' });
  };

  const depositos = contas.depositos.filter((deposito) => deposito.numero_conta === numero_conta);
  const saques = contas.saques.filter((saque) => saque.numero_conta === numero_conta);
  const transferenciasEnviadas = contas.transferencias.filter((transferencia) => transferencia.numero_conta_origem === numero_conta);
  const transferenciasRecebidas = contas.transferencias.filter((transferencia) => transferencia.numero_conta_destino === numero_conta);


  const extratoConta = {
    depositos,
    saques,
    transferenciasEnviadas,
    transferenciasRecebidas,
  };

  return res.status(200).json(extratoConta);
};

module.exports = {
  listarContas,
  criarContas,
  atualizarContas,
  deletarContas,
  depositarValor,
  sacarValor,
  transferirValor,
  consultarSaldo,
  extratoConta,
};
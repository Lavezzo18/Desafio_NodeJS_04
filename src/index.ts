import { Aluno } from "./alunos";

var express = require('express');
var app = express();

app.listen(7000, () => {
    console.log('Executando na porta 7000!');

	const entrada = require("prompt-sync")({ sigint: true });
	let aluno = new Aluno();
	
	let alunos: Array<Aluno> = [];
	var q: number = 0;

	console.log("Desafio_04");

	q = parseInt(entrada("Total de alunos: "));
	var name: string;
	var nota: number;
	var idade: number;
	
	for (let i = 1; i <= q; i++) {
		
		name = entrada(`Nome do ${i}º aluno(a): `);
		
		nota = parseFloat(entrada(`Nota de ${name}: `));
		
		idade = parseInt(entrada(`Idade de ${name}: `));
	
		alunos.push({
		  nome: name,
		  idade: idade,
		  nota: nota,
		});
	  }
	  console.log(`Lista de alunos: `);
	  console.log(alunos);
	  var soma = alunos.reduce((a, b) => a + b.nota, 0);
	  var media = soma / q;

	  console.log(`Soma das notas: ${soma}`);
	  
	  console.log(`Média dos alunos: ${media}`);

	});

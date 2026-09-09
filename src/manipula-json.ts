import {existsSync, mkdirSync, writeFileSync, readFileSync} from 'fs';

//Models:
type livro = {
    titulo: string;
    autor: string;
    ano: number;
    genero?: string;
    lido: boolean;
};

type Hobby = string;

type FamosoFavorito = {
    nome: string;
};

type Amigo = {
    nome: string;
    ondeConheci: string;
    hobbies: Hobby[];
    famososFavoritos: FamosoFavorito[];
};

// Manipulação de JSON:

// 1. Função para adicionar um livro a um arquivo JSON
// Variavel 
const livros: livro[] = [];
// Função para adicionar um livro ao array de livros
livros.push({
    titulo: "Alice no País das Maravilhas",
    autor: "Lewis Carroll",
    ano: 1865,
    genero: "Fantasia",
    lido: true
});

livros.push({
    titulo: "1984",
    autor: "George Orwell",
    ano: 1949,
    genero: "Distopia",
    lido: false
});

// "push" é um método de array que adiciona um novo elemento ao final do array.
livros.push({
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    ano: 1943,
    lido: true
});

livros.push({
    titulo: "Cortiço",
    autor: "Aluísio Azevedo",
    ano: 1890,
    genero: "Realismo",
    lido: false
});

livros.push({
    titulo: "Saboroso Cadaver",
    autor: "H.P. Lovecraft",
    ano: 1928,
    genero: "Terror",
    lido: true
});

livros.push({
    titulo: "Mentirosos",
    autor: "E. Lockhart",
    ano: 2014,
    genero: "Mistério",
    lido: false
});

// 2. Percorrer o array de livros e imprimir todos os  títulos 
// forEach é um método de array que executa uma função para cada elemento do array.
livros.forEach((livro) => {
// Formatação do texto, ou seja, como vai aparecer na hora de imprimir no console.O que está fora do $ ira aparecer.
    console.log(`Título: ${livro.titulo} (${livro.ano}) - Autor: ${livro.autor} - ${livro.lido ? "Lido" : "Não lido"}`);
});

//3.Filtrar a lista (ex: Apenas livros lidos)
const livrosLidos = livros.filter((livro) => livro.lido === true);

// 4. Encontar um livro específico (ex: Por campo)
const livroEncontrado = livros.find((livro) => livro.titulo === "1984");

// 5. Salvar no disco (arquivo JSON)
const diretorio = './data';
if (!existsSync(diretorio)) {
    mkdirSync(diretorio);
}
writeFileSync(`${diretorio}/livros.json`, JSON.stringify(livros, null, 2), 'utf-8');
// Os parametros null e 2 servem para identar o JSON de forma legível, com 2 espaços de indentação.

// 6. Ler do disco (arquivo JSON)
const livrosLidosDoArquivo: 
    livro[] = JSON.parse(readFileSync(`${diretorio}/livros.json`, 'utf-8'));
console.log("Livros lidos do arquivo JSON:", livrosLidosDoArquivo);

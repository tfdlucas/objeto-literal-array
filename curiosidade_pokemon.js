var curiosidades_pokemon = [
    {nome: "Kabuto",     curiosidade: "Pokémon regenerado a partir de um fóssil"},
    {nome: "Electabuzz", curiosidade: "Possui seis dedos em cada mão"},
    {nome: "Ekanz",      curiosidade: "Seu nome ao contrário significa cobra em inglês"},
    {nome: "Dragonite",  curiosidade: "Pode voar duas vezes a velocidade do som"},
    {nome: "Magikarp",   curiosidade: "Pula montanhas facilmente"},
    {nome: "Taillow",    curiosidade: "Voa mais de 180 milhas por dia"},
    {nome: "Muk",        curiosidade: "Uma gota desse pokémon pode poluir um lago inteiro"},
    {nome: "Slowbro",    curiosidade: "Único pokémon que pode voltar a evolução anterior"},
    {nome: "Zapdos",     curiosidade: "Tem maior vantagem de tipo entre os pássaros lendários"},
    {nome: "Spoink",     curiosidade: "Esse pokémon nunca para de pular"}
];

var tamanho_colecao = curiosidades_pokemon.length;

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

var pokemon_escolhido = curiosidades_pokemon[numero_sorteado];

var nome_pokemon = pokemon_escolhido.nome;
var curiosidade_pokemon = pokemon_escolhido.curiosidade;

console.log("CURIOSIDADE SOBRE O UNIVERSO POKÉMON");
console.log("Pokémon: " + nome_pokemon);
console.log("Curiosidade: " + curiosidade_pokemon);
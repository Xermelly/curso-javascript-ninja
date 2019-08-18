/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Paulista';

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['São Paulo', 'Corinthians', 'Santos', 'Palmeiras', 'Mogi Mirim'];
console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(num){
    var posicao = num - 1;
    if (posicao >= 5) {
    return 'Não temos a informação do time que está nessa posição';
    }; 
    return 'O time que está em '+ num +'º lugar é o '+ teams[posicao] +'.';
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1) // 'O time que está em 1º lugar é o São Paulo.'
showTeamPosition(3) // 'O time que está em 3º lugar é o Santos.'
showTeamPosition(5) // 'O time que está em 5º lugar é o Mogi Mirim.'
showTeamPosition(6) // 'Não temos a informação do time que está nessa posição'

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var counter = 20;

while(counter <= 30) {
    console.log(counter);
    counter++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor) {
 var hex;
 switch(cor) {
 case 'Branco':
 hex = '#FFFFFF';
 break;
 case 'Preto':
 hex = '#000000';
 break;
 case 'Azul':
 hex = '#0000FF';
 break;
 case 'Vermelho':
 hex ='#FF0000';
 break
 case 'Rosa':
 hex ='#FFC0CB ';
 break;
 default:
 return 'Não temos o equivalente hexadecimal para ' + cor + '.';
    }
    return 'O hexadecimal para a cor ' + cor + ' é ' + hex + '.'; 
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('Vermelho') //'O hexadecimal para Vermelho é #FF0000.'
convertToHex('Preto') //'O hexadecimal para Vermelho é #000000.'
convertToHex('Branco') //'O hexadecimal para Vermelho é #FFFFFF.'
convertToHex('Verde') //'Não temos o equivalente hexadecimal para Verde.'
convertToHex('Rosa') //'O hexadecimal para Vermelho é #FFC0CB.'
convertToHex('Azul') //'O hexadecimal para Vermelho é #0000FF.'
convertToHex('Marrom') //'Não temos o equivalente hexadecimal para Marrom.'
convertToHex('Cinza') //'Não temos o equivalente hexadecimal para Cinza.'
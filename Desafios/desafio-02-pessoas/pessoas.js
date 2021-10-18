//Declarar uma variável qualquer, que receba um objeto vazio.
var pessoas = new Object ;

/*
Declarar uma variável `pessoas`, que receba suas informações pessoasis.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

pessoas.nome = 'Edson',
pessoas.sobrenome = 'Maciel',
pessoas.sexo = 'Masculino',
pessoas.idade = 17,
pessoas.altura = 1.70,
pessoas.peso = 70,
pessoas.andando  = false,  
pessoas.caminhouQuantosMetros = 0
console.log(pessoas)

/*
Adicione um método ao objeto `pessoas` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoas, somando `1` a cada vez que
for chamado.
*/
pessoas.fazerAniversario = function () {
    pessoas.idade++;
}

/*
Adicione um método ao objeto `pessoas` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoas.andar = function (metros) {
    pessoas.caminhouQuantosMetros += metros;
    pessoas.andando = true
};
/*
Adicione um método ao objeto `pessoas` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoas.parar = function () {
    pessoas.andando = false
};


/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoas.nomeCompleto = function () {
    return 'Olá! Meu nome é ' + pessoas.nome + ' ' + pessoas.sobrenome;
    console.log(pessoas.nomeCompleto)
};

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoas.mostrarIdade = function () {
  return 'Olá, eu tenho ' + pessoas.idade + 'anos!';  
};

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoas.mostrarPeso = function() {
    return 'Eu peso ' + pessoas.peso + 'Kg.';
};

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoas.mostrarAltura = function () {
    return 'Minha altura é ' + pessoas.altura + 'm.';
};

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoas? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoas.nomeCompleto(); //Olá! Meu nome é Edson Maciel!

/*
Qual a idade da pessoas? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoas.mostrarIdade(); //Olá, eu tenho 17 anos!


/*
Qual o peso da pessoas? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoas.mostrarPeso(); //Eu peso 70 Kg.

/*
Qual a altura da pessoas? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoas.mostrarAltura(); //Minha altura é 1.7 m.

/*
Faça a `pessoa` fazer 3 aniversários.
*/
pessoas.fazerAniversario();
pessoas.fazerAniversario();
pessoas.fazerAniversario();
/*
Quantos anos a `pessoas` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

pessoas.mostrarIdade(); // Olá, eu tenho 20 anos!


/*
Agora, faça a `pessoas` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

pessoas.andar(30);
pessoas.andar(6);
pessoas.andar(99);

/*
A pessoas ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoas.andando; //True

/*
Se a pessoas ainda está andando, faça-a parar.
*/
pessoas.parar(); 

/*
E agora: a pessoas ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
pessoas.andando; //False

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
pessoas.caminhouQuantosMetros; // 135


/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoas` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"
Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoas` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

pessoas.apresentacao = function () {
    var sexo = 'o';
    var idade = 'anos';
    var metros = 'metros'; 

    if (pessoas.sexo === 'feminino') {
        sexo = 'a';
    }

    if (pessoas.idade === 1) {
        idade = 'ano';
    }

    if (pessoas.caminhouQuantosMetros === 1) {
        metros = 'metro';
    }

    return 'Olá, eu sou ' + sexo + ' ' + pessoas.nome + ', tenho ' + pessoas.idade + ' ' + idade + ', ' + pessoas.altura +', meu peso é ' + pessoas.peso + ' e, só hoje, eu já caminhei ' + pessoas.caminhouQuantosMetros + ' ' + metros + '!';
}


// Agora, apresente-se ;)
console.log(pessoas.apresentacao())
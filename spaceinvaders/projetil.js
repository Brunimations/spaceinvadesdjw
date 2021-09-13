class Projetil{

    //variaveis
    EncostadoNoInimigo;
    EncostadoNoPlayer;
    EncostadoNaBarricada;
    Velocidade;
    xTiro;
    yTiro;
    TipoDeTiro;

    constructor(xTiro, yTiro, TipoDeTiro, Velocidade, EncostadoNaBarricada, EncostadoNoInimigo, EncostadoNoPlayer){
        this.xTiro=xTiro;
        this.yTiro=yTiro;
        this.TipoDeTiro=TipoDeTiro;
        this.Velocidade=Velocidade;
        this.EncostadoNaBarricada=EncostadoNaBarricada;
        this.EncostadoNoInimigo=EncostadoNoInimigo;
        this.EncostadoNoPlayer=EncostadoNoPlayer;
    }

    SerAtiradoPorInimigo(){
    /*cria o projetil na posição de um inimigo aleatório em um
    intervalo de tempo aleatório, diminui o seu y até o limite da
    tela, ao encostar no limite executa a classe serDestruido*/
    }
    SerAtiradoPorPlayer(){
    /*torna a variavel pausaParaAtirar verdadeiro e cria o projetil
    na posição do player e aumenta o seu y até o limite da tela, ao
    encostar no limite executa o metodo serDestruido*/
    }
    SerDestruido(){
    /*Destroi o projetil e torna a variavel pausaParaAtirar falsa*/
    }
    AcertarInimigo(){
    /*identifica se o projetil encostou em um inimigo com a
    variavel inimigoVivo verdadeiro, torna a variavel falsa,
    executa o metodo serDestruido e executa o metodo calcularPontos
    da classe navePlayer*/
    }
    AcertarPlayer(){
    /*Identifica se o pojetil encostou na nave do player, caso
    sim ele executa o metodo morrer da classe navePlayer e o
    metodo serDestruido*/
    }
    AcertarBarreira(){
    /*Identifica se o pojetil encostou em alguma barricada com a
    variavel areaIntacta ou areaDanificada como verdadeira, caso
    sim e se a variavel areaDanificada for falsa ele executa o
    metodo danificarArea da classe barricada, caso seja verdadeira
    ele executa o metodo quebrararea, após isso executar metodo
    serDestruido*/
    }
   }
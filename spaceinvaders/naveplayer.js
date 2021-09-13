class NavePlayer{
    //variaveis
    Vidas;
    xPlayer;
    yPlayer;
    Pontos;
    Tiro;
    PausaParaAtirar;

    constructor(Vidas, xPlayer, Pontos){
        this.Vidas = Vidas;
        this.xPlayer = xPlayer;
        this.Pontos = Pontos;
    }

    Atirar(){
    /*executa a o método serAtiradoPorPlayer da classe projetil ao
    apertar espaço caso a variavel pausa para atirar sejá igual a falsa*/
    }
    Movimentar(){
    /*muda o x da nave dentro dos limites da tela para
    o jogador poder mirar mas não sair da area desejada*/
    }
    Morrer(){
    /*Retira uma vida do jogador ao ser atingido por projetil e
    cria a nave novamente no centro da area que o player pode
    andar*/
    }
    GameOver(){
    /*iidentifica quandoo as vidas do jogador chegam a 0, assim
    dando a opção do jogador de iniciar novamente*/
    }
    CalcularPontos(){
    /*usano a variavel tipoDDeInimigo da classe Inimigo define a
    quantidade de pontos que deve ser somada a variavel pontos e
    exibe ela ao jogador*/
    }
   }
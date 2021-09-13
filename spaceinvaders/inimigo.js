class Inimigo{
    //variaveis
    InimigoVivo;
    GrupoDeInimigos;
    TipoDeInimigo;
    Velocidade;
    xInimigo;
    yInimigo;
    TiroInimigo;
    Pontos;
   
    constructor(InimigoVivo, Velocidade, xInimigo, yInimigo){
        this.InimigoVivo = InimigoVivo;
        this.Velocidade = Velocidade;
        this.xInimigo = xInimigo;
        this.yInimigo = yInimigo;
    }

    Movimentar(){
    /*é responsavel movimentar o conjunto de inimigos com base na
    variavel de velocidade*/
    }
    Atirar(){
    /*executa a o método serAtiradoPorPlayer da classe projetil ao
    apertar espaço caso o tempo*/
    }
    Morrer(){
    /*torna a opacidade do inimigo como 0 quando a variavel
    inimigoVivo for falsa*/
    }
   }
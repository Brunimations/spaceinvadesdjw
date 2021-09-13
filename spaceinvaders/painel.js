class Painel{

    //variaveis

    Nivel;
    Player;
    Inimigo;
    Barricada;

    constructor(Nivel){
        this.Nivel = Nivel;
    }

    Iniciar(){
        /*ela chama as classes de player, barricada
        e inimigo e posiciona elas no canvas, ao mesmo
        tempo determina a variavel de nivel como 1*/
    }

    MudarDeNivel(){
        /*verifica se todos os inimigos foram eliminados,
        caso sim, o jogo acrescenta uma vida ao jogador,
        aumenta a variavel de velocidade de inimigos e
        os posiciona novamente*/
    }

}
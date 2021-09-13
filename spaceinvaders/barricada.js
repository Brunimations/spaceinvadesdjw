class Barricada{
    //variaveis
    AreaIntacta;
    AreaDanificada;
    AreaDestruida;
    xBarricada;
    yBarricada;

    constructor(AreaDanificada, AreaIntacta, AreaDestruida){
        this.AreaDestruida = AreaDestruida;
        this.AreaDanificada = AreaDanificada;
        this.AreaIntacta = AreaIntacta;
    }

    DanificarArea(){
    /*torna variavel areaIntacta falsa e areaDanificada como verdadeira*/
    }
    QuebrarArea(){
    /*torna a variavel areaDestruida como verdadeira, e determina areaIntacta
    e areaDanificada como falsas além de ddefinir opacidadde como 0 */
    }
   }
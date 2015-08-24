
/*
-----------------------------------------------------
Função de controles da galeria de imagens
-----------------------------------------------------

Função desenvolvida por:

Ayrton Monier

Objetivo;
Treinamento HTML5, CSS3 e JAVASCRIPT

Treinador: VAT Tecnologia S.A / Dev. Fábio Assunção.

-------------------------------------------------------
Nesta função, seta-se a classe .ativo no elemento
a partir do clique no botão da respectiva imagem ao 
qual se quer mostrar.

A função setInterval também é encarregada de executar 
este procedimento automaticamente em um intervalo de 3 
em 3 segundos se o usuário não selecionar imagens ou
após uma seleção. 

-------------------------------------------------------
obs: 
A classe .ativo é configurada com a propriedade 
opacidade no valor igual à 1.

Os demais imagens tem opacidade 0 por padrão.
-------------------------------------------------------

DATA: 21/08/2015

*/
function controlesGaleriaImagens(){

    //armazena as funções de controle da galeria
    var controles = {

        //identifica a primeira imagem para setar a classe .ativo 
        autoAtivaPrimeiraImg: function(){

            //armazena o primeiro elementoImg "a" (imagem)
            elementoImg = document.querySelector("#conteiner-imagens a:first-child");

            
            //adciona a classe .ativo neste elemento 
            elementoImg.classList.add("ativo");

        },

        //identifica a proxima imagem a ser ativada
        autoAtivaProximaImg: function(){

            //armazena a imagem ativa atual
            elementoImg = document.querySelector(".ativo");

            //se houver uma proxima imagem a ser mostrada... (próximo elemento irmao)
            if(elementoImg.nextElementSibling){

                //remove classe .ativo do elementoImg atual
                elementoImg.classList.remove("ativo");

                //adiciona classe .ativo no proximo elementoImg ĩrmão encontrado
                elementoImg.nextElementSibling.classList.add("ativo");

                
            //caso não haja um proximo elemento (imagem)  
            }else{

                //remove classe .ativo do elementoImg atual
                elementoImg.classList.remove("ativo");
                
                //executa função pra setar a primeira imagem.
                controles.autoAtivaPrimeiraImg();
            }
        },

        //ativa a imagem do repectivo botão clicado 
        imgSelecionada: function(img){

            //sessa o intervalo de execução temporário
            clearInterval(intervalo);    

            //armazena elementoImg .ativo atual
            elementoImg = document.querySelector(".ativo");

            //remove a classe .ativo do elementoImg atual
            elementoImg.classList.remove("ativo");   

            //armazena o respectivo elemento clicado
            elementoImg = document.querySelector(img);

             //adiciona classe .ativo no no respectivo elemento clicado
            elementoImg.classList.add("ativo");

            //seta novo intervalo de execuxao
            intervalo = setInterval(controles.autoAtivaProximaImg,3000);

        }
    }

    //auto ativa primera imagem
    controles.autoAtivaPrimeiraImg();

    //chama o autoAtivaProximaImg à um determinado tempo
    var intervalo = setInterval(controles.autoAtivaProximaImg,3000);

    //eventos de clique adicionados
    document.querySelector(".bt-img1").addEventListener("click", function(){controles.imgSelecionada("#img1")});
    document.querySelector(".bt-img2").addEventListener("click", function(){controles.imgSelecionada("#img2")});
    document.querySelector(".bt-img3").addEventListener("click", function(){controles.imgSelecionada("#img3")});
    document.querySelector(".bt-img4").addEventListener("click", function(){controles.imgSelecionada("#img4")});
    document.querySelector(".bt-img5").addEventListener("click", function(){controles.imgSelecionada("#img5")});
    document.querySelector(".bt-img6").addEventListener("click", function(){controles.imgSelecionada("#img6")});


}


/*
FUNÇÃO DE CONTROLE DA GALERIA DE CURSOS

Ativa / Desativa a guia da galeria de cursos selecionada
*/
function controlesGaleriaCursos(){


    var controle = {

        guiaSelecionada: function(){
            guiaGrad = document.querySelector("#gc-graduacao");
            labelGrad = document.querySelector("#gc-label-graduacao");


            guiaPosGrad = document.querySelector("#gc-pos-graduacao");
            labelPosGrad = document.querySelector("#gc-label-pos-graduacao");

                if(guiaGrad.checked){
                    labelPosGrad.classList.remove("guia-ativa-galeria-curso");
                    labelGrad.classList.add("guia-ativa-galeria-curso");
                }
                else{
                    labelGrad.classList.remove("guia-ativa-galeria-curso");
                    labelPosGrad.classList.add("guia-ativa-galeria-curso");
                }
            }

            //LISTA DE OUTRAS FUNÇÕES DA GALERIA DE CURSOS...

    }

    //eventos de clique adicionados
    document.querySelector("#gc-graduacao").addEventListener("click", controle.guiaSelecionada);
    document.querySelector("#gc-pos-graduacao").addEventListener("click", controle.guiaSelecionada);

}


/*
FUNÇÃO DE CONTROLE DO PAINEL ENCONTRE SEU CURSO

Ativa / Desativa a guia do painel encontre seu curso
*/
function controlesPainelEncontreCursos(){


    var controle = {

        guiaSelecionada: function(){
            guiaGrad = document.querySelector("#ec-graduacao");
            labelGrad = document.querySelector("#ec-label-graduacao");


            guiaPosGrad = document.querySelector("#ec-pos-graduacao");
            labelPosGrad = document.querySelector("#ec-label-pos-graduacao");

                if(guiaGrad.checked){
                    labelPosGrad.classList.remove("guia-ativa-galeria-curso");
                    labelGrad.classList.add("guia-ativa-galeria-curso");
                }
                else{
                    labelGrad.classList.remove("guia-ativa-galeria-curso");
                    labelPosGrad.classList.add("guia-ativa-galeria-curso");
                }
            }

            //LISTA DE OUTRAS FUNÇÕES DO PAINEL ENCONTRE CURSOS...

    }

    //ecentos de clique adicionados
    document.querySelector("#ec-graduacao").addEventListener("click", controle.guiaSelecionada);
    document.querySelector("#ec-pos-graduacao").addEventListener("click", controle.guiaSelecionada);

}



//carrega as funções junto com a página
window.addEventListener("load",controlesGaleriaImagens);
window.addEventListener("load",controlesGaleriaCursos);
window.addEventListener("load",controlesPainelEncontreCursos);






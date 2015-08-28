
/*
-----------------------------------------------------
FONÇÕES JAVASCRIPT
-----------------------------------------------------

Funções desenvolvidas por:

Ayrton Monier

Objetivo;
Treinamento HTML5, CSS3 e JAVASCRIPT

Treinador: VAT Tecnologia S.A / Dev. Fábio Assunção.

-------------------------------------------------------





FUNÇÃO DE CONTROLE DA GALERIA DE IMÁGENS
------------------------------------------------------
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
    var controle = {

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
                controle.autoAtivaPrimeiraImg();
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
            intervalo = setInterval(controle.autoAtivaProximaImg,3000);

        }
    }

    //auto ativa primera imagem
    controle.autoAtivaPrimeiraImg();

    //chama o autoAtivaProximaImg à um determinado tempo
    var intervalo = setInterval(controle.autoAtivaProximaImg,3000);

    //eventos de clique adicionados
    document.querySelector(".bt-img1").addEventListener("click", function(){controle.imgSelecionada("#img1")});
    document.querySelector(".bt-img2").addEventListener("click", function(){controle.imgSelecionada("#img2")});
    document.querySelector(".bt-img3").addEventListener("click", function(){controle.imgSelecionada("#img3")});
    document.querySelector(".bt-img4").addEventListener("click", function(){controle.imgSelecionada("#img4")});
    document.querySelector(".bt-img5").addEventListener("click", function(){controle.imgSelecionada("#img5")});
    document.querySelector(".bt-img6").addEventListener("click", function(){controle.imgSelecionada("#img6")});

}


/*
FUNÇÃO DE CONTROLE DA GALERIA DE CURSOS
------------------------------------------------------------------

No CSS, a classe ".guia-ativa-galeria-curso" pinta o fundo do label
indicando que a guia está selecionada.

A função adiciona/remove esta classe na guia (label/input) clicada.
*/
function controlesGaleriaCursos(){

    var controle = {

        /*Adiciona/remove a classe ".guia-ativa-galeria-curso" 
        no label (guias) do painel encontre seu curso*/
        guiaSelecionada: function(){

            //armazena input(guia) GRADUAÇÃO
            guiaGrad = document.querySelector("#gc-graduacao");
            //armazena o label (do input) GRADUAÇÃO
            labelGrad = document.querySelector("#gc-label-graduacao");

            //armazena input(guia) POS-GRADUAÇÃO
            guiaPosGrad = document.querySelector("#gc-pos-graduacao");
            //armazena o label (do input) POS-GRADUAÇÃO
            labelPosGrad = document.querySelector("#gc-label-pos-graduacao");

                //se input (guia) graduação SELECIONADO
                if(guiaGrad.checked){
                    //remove a classe ".guia-ativa-galeria-curso" do label GRADUAÇÃO
                    labelPosGrad.classList.remove("guia-ativa-galeria-curso");
                    //adiciona a classe ".guia-ativa-galeria-curso" no label PÓS-GRADUAÇÃO 
                    labelGrad.classList.add("guia-ativa-galeria-curso");
                }

                //se input (guia) PÓS-graduação SELECIONADO
                else{
                    //remove a classe ".guia-ativa-galeria-curso" do label POS-GRADUAÇÃO
                    labelGrad.classList.remove("guia-ativa-galeria-curso");
                    //adiciona a classe ".guia-ativa-galeria-curso" no label GRADUAÇÃO 
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
-------------------------------------------------------------------

No CSS, a classe ".guia-ativa-galeria-curso" pinta o fundo do label
indicando que a guia está selecionada.

A função adiciona/remove esta classe na guia (label/input) clicada.
*/
function controlesPainelEncontreCursos(){


    var controle = {

        /*Adiciona/remove a classe ".guia-ativa-galeria-curso" 
        no label (guias) do painel encontre seu curso*/
        guiaSelecionada: function(){

            //armazena input(guia) GRADUAÇÃO
            guiaGrad = document.querySelector("#ec-graduacao");
            //armazena o label (do input) GRADUAÇÃO
            labelGrad = document.querySelector("#ec-label-graduacao");

            //armazena input(guia) POS-GRADUAÇÃO
            guiaPosGrad = document.querySelector("#ec-pos-graduacao");
            //armazena o label (do input) POS-GRADUAÇÃO
            labelPosGrad = document.querySelector("#ec-label-pos-graduacao");

                //se input (guia) graduação SELECIONADO
                if(guiaGrad.checked){

                    //remove a classe ".guia-ativa-galeria-curso" do label GRADUAÇÃO
                    labelPosGrad.classList.remove("guia-ativa-galeria-curso");

                    //adiciona a classe ".guia-ativa-galeria-curso" no label PÓS-GRADUAÇÃO 
                    labelGrad.classList.add("guia-ativa-galeria-curso");
                }

                //se input (guia) PÓS-graduação SELECIONADO
                else{
                    //remove a classe ".guia-ativa-galeria-curso" do label POS-GRADUAÇÃO
                    labelGrad.classList.remove("guia-ativa-galeria-curso");

                    //adiciona a classe ".guia-ativa-galeria-curso" no label GRADUAÇÃO 
                    labelPosGrad.classList.add("guia-ativa-galeria-curso");
                }
            }

            //OUTRAS FUNÇÕES DO PAINEL ENCONTRE CURSOS...

    }

    //eventos de clique adicionados
    document.querySelector("#ec-graduacao").addEventListener("click", controle.guiaSelecionada);
    document.querySelector("#ec-pos-graduacao").addEventListener("click", controle.guiaSelecionada);

}


/*FUNÇÃO DE CONTROLE DO MENU DROP/DOWN

No CSS, a classe ".menu1-lista-drop-down" é por padrão adicionada ao elemento <ol>
deixando o menu em blocos de linha. Abaixo de 647px de viewport, a média querie referente
modifica o valor desta classe fazendo esta lista sumir com a propriedade:valor  display:none. 

Ainda nesta média querie, os elementos <span> (botoes) são programados para serem mostrados e 
a classe ".menu1-lista-down" é configurada para mostrar uma lista em bloco.

O javascrip se encarrega de adicionar/remover as classes ".menu1-lista-drop-down" e ".menu1-lista-down"
dependendo do viewport em questao.

*/
function controlesMenuDropDown(){

    //armazena por padrão que os MENUS 1 e 2 não estao expandidos
    var menu1Expandido = false;
    var menu2Expandido = false;


    var controle = {

        //controle ao CLICAR NO BOTÃO do menu 1
        expandeEscondeMenu1: function(){

            //caso NÃO ESTEJA expandido
            if(menu1Expandido==false){

                //armazena a o elemento (ol) que está com a classe ".menu1-lista-drop-down"
                menu1 = document.querySelector(".menu1-lista-drop-down");

                //remove a classe ".menu1-lista-drop-down" do elemento
                menu1.classList.remove("menu1-lista-drop-down");

                //adciona a classe ".menu1-lista-down" no elemento (mostra expandido)
                menu1.classList.add("menu1-lista-down");

                //armazena que o menu está expandido
                menu1Expandido=true;

            //caso JÁ ESTEJA expandido
            }else{

                //armazena a o elemento (ol) que está com a classe ".menu1-lista-down" 
                menu1 = document.querySelector(".menu1-lista-down");

                //remove a classe ".menu1-lista-down"  do elemento
                menu1.classList.remove("menu1-lista-down");

                /*adciona a classe "menu1-lista-drop-down" no elemento 
                (mostra em linha com viewport acima de 647px ou esconde caso abaixo deste)*/ 
                menu1.classList.add("menu1-lista-drop-down");

                //armazena que não está expandido
                menu1Expandido=false;

            }
        },

        //controle ao CLICAR NO BOTÃO do menu 2
        expandeEscondeMenu2: function(){

            //caso NÃO ESTEJA expandido
            if(menu2Expandido==false){

                //armazena a o elemento (ol) que está com a classe ".menu2-lista-drop-down"
                menu2 = document.querySelector(".menu2-lista-drop-down");

                //remove a classe ".menu2-lista-drop-down" do elemento
                menu2.classList.remove("menu2-lista-drop-down");

                //adciona a classe ".menu2-lista-down" no elemento (mostra expandido)
                menu2.classList.add("menu2-lista-down");

                //armazena que o menu está expandido
                menu2Expandido=true;

            //caso JÁ ESTEJA expandido
            }else{

                //armazena a o elemento (ol) que está com a classe ".menu2-lista-down" 
                menu2 = document.querySelector(".menu2-lista-down");

                //remove a classe ".menu2-lista-down"  do elemento
                menu2.classList.remove("menu2-lista-down");

                /*adciona a classe "menu2-lista-drop-down" no elemento 
                (mostra em linha com viewport acima de 647px ou esconde caso abaixo deste)*/ 
                menu2.classList.add("menu2-lista-drop-down");

                //armazena que não está expandido
                menu2Expandido=false;
            }
        }

    }

    //eventos de clique adicionados 
    document.querySelector("#bt-menu1").addEventListener("click", controle.expandeEscondeMenu1);
    document.querySelector("#bt-menu2").addEventListener("click", controle.expandeEscondeMenu2);
}


//carrega as funções junto com a página
window.addEventListener("load",controlesMenuDropDown);
window.addEventListener("load",controlesGaleriaImagens);
window.addEventListener("load",controlesGaleriaCursos);
window.addEventListener("load",controlesPainelEncontreCursos);
//variavél para qguardar quantos slides eu tenho
let totalSlides = document.querySelectorAll('.slider--item').length;

//variável que vai guardar a posição do slider
let currentSlider = 0;

/*função para fazer o slider com o tamanho fixxo */
//variavél que vai conter ao tamnho fixo
//let sliderwidth = document.querySelector('.slider').clientWidth;

//função que vai pegar e trocar os sliders para o tamanhjo fixo
//document.querySelector('.slider--width').style.width = `${sliderwidth * totalSlides}px`;

//função que vai ter o calculo das imagens para fazer a troca
document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;

//função que vai ajustar os controles na tela
document.querySelector('.slider--controls').style.height = `${document.querySelector
    ('.slider').clientHeight}px`;

//função que vai manter o botão do tamanho do slider com tamanho fixo
/*document.querySelector('.slider--controls').style.height = `${sliderwidth}px`;*/

//função dos botões para passar de foto
function goPrev() {
    currentSlider--;

    //verificação para ir para o ultimo slider
    if(currentSlider < 0) {
        currentSlider = totalSlides - 1;
    }
    updateMargin();
}

function goNext() {
    currentSlider++;

    //verificação para ir para o Primeiro slider
    if(currentSlider > (totalSlides - 1)) {
        currentSlider = 0;
    }
    updateMargin();
}

//função para atualizar a margem
function updateMargin() {
    //variavél que vai guardar a largura da pagina para correção das fotos
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;

    //variável que vai controlar as margens das fotos para trocar
    let newMargin = (currentSlider * sliderItemWidth);
    //let newMargin = currentSlider * document.body.clientWidth;
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}

//criando timer para as fotos passarem altomaticamente
setInterval(goNext, 2000);
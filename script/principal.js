function ocultar(elemento){
    elemento.style.display = 'none';
}

function desocultar(elemento){
    elemento.style.display = 'flex';
}

function limpar(elemento){
    elemento.textContent = '';
}

//Variaveis importantes para o imc
const btnImc = document.getElementById('btn-imc');
const campoImc = document.getElementById('calculadoraIMC');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const btnCalcularImc = document.getElementById('btn-IMC');
const exibirResultado = document.getElementById('exibir-resultado');

//Chamar a tela do imc
btnImc.addEventListener('click', () => {
    desocultar(campoImc);
    ocultar(campoArea);
    ocultar(campoConversor);
    ocultar(campoTemperatura);
    //Calcula o imc
    btnCalcularImc.addEventListener('click', () => {
        let imc = peso.value / (altura.value * altura.value);
        if(imc < 18.5){
            exibirResultado.textContent = 'Abaixo do peso.';
        } else if(imc > 18.5 && imc < 24.9){
            exibirResultado.textContent = 'Peso normal.';
        } else if(imc > 25 && imc < 29.9){
            exibirResultado.textContent = 'Sobrepeso.';
        } else if(imc > 30 && imc < 34.9){
            exibirResultado.textContent = 'Obesidade grau I';
        } else if(imc > 35 && imc < 39.9){
            exibirResultado.textContent = 'Obsidade grau II (Severa)';
        } else if(imc > 40){
            exibirResultado.textContent = 'Obsidade grau III (Mórbida)'
        }
    });
});

//variaveis para a area
const btnArea = document.getElementById('btn-area');
const campoArea = document.getElementById('calculadoraArea');
const base = document.getElementById('base');
const alturaArea = document.getElementById('altura-h');
const btnCalcularArea = document.getElementById('btn-calcular-area');
const exibirResultadoArea = document.getElementById('exibir-resultado-area');

btnArea.addEventListener('click', () => {
    desocultar(campoArea);
    ocultar(campoImc);
    ocultar(campoTemperatura);
    ocultar(campoConversor)
    btnCalcularArea.addEventListener('click', () => {
        let area = base.value * alturaArea.value;
        exibirResultadoArea.textContent = area;
    });
});

//variaveis para a temperatura
const btnTemperatura = document.getElementById('btn-temperatura');
const campoTemperatura = document.getElementById('conversorTemperatura');
const temperatura = document.getElementById('temperatura');
const btnConverter = document.getElementById('btn-converter-temperatura');
const exibirResultadoTemperatura = document.getElementById('exibir-resultado-temperatura');

btnTemperatura.addEventListener('click', () => {
    desocultar(campoTemperatura);
    ocultar(campoArea);
    ocultar(campoImc);
    ocultar(campoConversor);
    btnConverter.addEventListener('click', () => {
        let f = (temperatura.value * 9/5) + 32;
        exibirResultadoTemperatura.textContent = f+"°F";
    });
});

//Variaveis do conversor de moedas
const btnConversor = document.getElementById('btn-conversor');
const campoConversor = document.getElementById('conversorMoedas');
const valor = document.getElementById('moedaUm');
const moedaInicial = document.getElementById('moeda');
const moedaFinal = document.getElementById('moeda-para-converter');
const btnConverterMoeda = document.getElementById('btn-converter-moeda');
const exibirResultadoMoeda = document.getElementById('exibir-resultado-moeda');

const taxaUSD = 5.50;
const taxaEUR = 6.50;
const taxaGBP = 7.50;

btnConversor.addEventListener('click', () => {
    desocultar(campoConversor);
    ocultar(campoArea);
    ocultar(campoTemperatura);
    ocultar(campoImc);
    btnConverterMoeda.addEventListener('click', () => {
        let tipoUm = moedaInicial.options[moedaInicial.selectedIndex].text;
        let tipoDois = moedaFinal.options[moedaInicial.selectedIndex].text;
        if(tipoUm === 'Real (BRL)' && tipoDois === 'Dólar Americano (USD)'){
            let resultado = valor.value * taxaUSD;
            exibirResultadoMoeda.textContent = resultado;
        }
    });
    //categoriaProduto.options[categoriaProduto.selectedIndex].
    
});
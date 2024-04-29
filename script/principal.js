//FUNÇOÊS IMPORTANTES
function ocultar(elemento, desSelecionar){
    elemento.style.display = 'none';
    desSelecionar.style.backgroundColor = 'transparent';
    desSelecionar.style.color = '#f2f2f2';
}

function desocultar(elemento, selecionado){
    elemento.style.display = 'flex';
    selecionado.style.backgroundColor = '#f2f2f2';
    selecionado.style.color = 'black'
}

function limpar(elemento){
    elemento.textContent = '';
}

function paraReal(elemento){
    return elemento / 1;
}



//PARTE DO IMC
//Variaveis importantes para o imc
const btnImc = document.getElementById('btn-imc');
const campoImc = document.getElementById('calculadoraIMC');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const btnCalcularImc = document.getElementById('btn-IMC');
const exibirResultado = document.getElementById('exibir-resultado');

//Chamar a tela do imc
btnImc.addEventListener('click', () => {
    desocultar(campoImc, btnImc);
    ocultar(campoArea, btnArea);
    ocultar(campoConversor, btnConversor);
    ocultar(campoTemperatura, btnTemperatura);
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

//PARTE DO CALCULO DE AREA
//variaveis para a area
const btnArea = document.getElementById('btn-area');
const campoArea = document.getElementById('calculadoraArea');
const base = document.getElementById('base');
const alturaArea = document.getElementById('altura-h');
const btnCalcularArea = document.getElementById('btn-calcular-area');
const exibirResultadoArea = document.getElementById('exibir-resultado-area');

btnArea.addEventListener('click', () => {
    desocultar(campoArea, btnArea);
    ocultar(campoImc, btnImc);
    ocultar(campoTemperatura, btnTemperatura);
    ocultar(campoConversor, btnConversor);
    btnCalcularArea.addEventListener('click', () => {
        let area = base.value * alturaArea.value;
        exibirResultadoArea.textContent = area;
    });
});

//PARTE DA CONVERSÃO DE TEMPERATURA
//variaveis para a temperatura
const btnTemperatura = document.getElementById('btn-temperatura');
const campoTemperatura = document.getElementById('conversorTemperatura');
const temperatura = document.getElementById('temperatura');
const btnConverter = document.getElementById('btn-converter-temperatura');
const exibirResultadoTemperatura = document.getElementById('exibir-resultado-temperatura');

btnTemperatura.addEventListener('click', () => {
    desocultar(campoTemperatura, btnTemperatura);
    ocultar(campoArea, btnArea);
    ocultar(campoImc, btnImc);
    ocultar(campoConversor, btnConversor);
    btnConverter.addEventListener('click', () => {
        let f = (temperatura.value * 9/5) + 32;
        exibirResultadoTemperatura.textContent = f+"°F";
    });
});

//PARTE DO CONVERSOR DE MOEDAS
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

const real = 'Real (BRL)';
const dolar = 'Dólar Americano (USD)';
const euro = 'Euro (EUR)';
const libra = 'Libra Esterlina (GBP)';

btnConversor.addEventListener('click', () => {
    desocultar(campoConversor, btnConversor);
    ocultar(campoArea, btnArea);
    ocultar(campoTemperatura, btnTemperatura);
    ocultar(campoImc, btnImc);
    btnConverterMoeda.addEventListener('click', () => {
        let tipoUm = moedaInicial.options[moedaInicial.selectedIndex].text;
        let tipoDois = moedaFinal.options[moedaFinal.selectedIndex].text;
        
        if(tipoUm === real && tipoDois === dolar || tipoDois == real && tipoUm === dolar){
            var resultado = valor.value * taxaUSD;
        } else if(tipoUm === real && tipoDois === euro || tipoDois == real && tipoUm === euro){
            var resultado = valor.value * taxaEUR;
        } else if(tipoUm === real && tipoDois === libra || tipoDois === real && tipoUm === libra){
            var resultado = valor.value * taxaGBP;
        }
        
        if(tipoUm === dolar && tipoDois === euro || tipoDois === dolar && tipoUm === euro){
            var resultado = paraReal(taxaUSD) * taxaEUR; 
        } else if(tipoUm === dolar && tipoDois === libra || tipoDois === libra && tipoUm === dolar){
            var resultado = paraReal(taxaUSD) * taxaGBP;
        }

        if(tipoUm === libra && tipoDois === euro || tipoDois === libra && tipoUm == euro){
            var resultado = paraReal(taxaGBP) * taxaEUR;
        }

        exibirResultadoMoeda.textContent = resultado.toFixed(2);
    });
});
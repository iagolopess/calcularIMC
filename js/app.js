var botaoCalcula = document.querySelector("#calcula-imc")
var botaoLimpa = document.querySelector("#limpar-info")

botaoCalcula.addEventListener("click", function(event){    
    event.preventDefault();

    var peso = document.getElementById("peso").value.replace(",",".");
    var altura = document.getElementById("altura").value.replace(",",".");
    
    document.querySelector(".div-dicas").style.visibility = "visible";

    calculaIMC(peso, altura)

});

botaoLimpa.addEventListener("click", function(event){
    event.preventDefault();
    
    var linhas = document.querySelectorAll(".linha-imc")
    var resultado = document.querySelector(".resultado")

    resultado.innerHTML = "";

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.querySelector(".div-dicas").style.visibility = "hidden";
    
    for (i = 0; i <= linhas.length; i++){
        linhas[i].style.backgroundColor = "#F2F0F0";
    }

})

function calculaIMC(peso, altura){
    var erro = document.querySelector(".msg-erro");

    if(peso <= 0 || altura >= 2.5){
        erro.innerHTML = "Peso ou altura invalida"
        
    }else{
        imc = peso / (altura * altura);
        resultadoIMC(imc.toFixed(2))
    }
   

}



function resultadoIMC(imc){

    txtResultado = document.querySelector(".resultado")

    atributoCor(imc)

    if(imc < 18.5){
      txtResultado.innerHTML = `Seu IMC deu ${imc} isso siginifica que você está abaixo do ideal`
      document.querySelector(".resultado").style.color = '#ff9100';
    } 
    
    if(imc >= 18.5 && imc <= 24.9){
        txtResultado.innerHTML = `Seu IMC deu ${imc} isso siginifica que você está no ideal`
        document.querySelector("#resultado").style.color = '#099951';
    } 
    
    if(imc >= 25 && imc <= 29.9){
        txtResultado.innerHTML = `Seu IMC deu ${imc} isso siginifica que você está com sobrepeso e precisa se cuidar mais`;
        document.querySelector("#resultado").style.color = '#d67900';
    } 
    
    if (imc >= 30 && imc <= 39.9){
        txtResultado.innerHTML = `Seu IMC deu ${imc} isso siginifica que você está em obesidade nivel 1, procure um médico`
        document.querySelector("#resultado").style.color = '#d64e00';
    } 
    
    if(imc >= 40){
        txtResultado.innerHTML = `Seu IMC deu ${imc} isso siginifica que você está com obesidade grave`
        document.querySelector("#resultado").style.color = '#d63900';
    }

}


function atributoCor(imc){

    var linhas = document.querySelectorAll(".linha-imc")

    var valorImc = imc;
        
    if(valorImc < 18.5){
        linhas[0].style.backgroundColor = "#ff9100";

        
    }
    
    if(valorImc >= 18.5 && valorImc <= 24.9){
        linhas[1].style.backgroundColor = "#099951";

    }
    
    if(valorImc >= 25 && valorImc <= 29.9){
        linhas[2].style.backgroundColor = "#d67900";
    }
    
    if(valorImc >= 30 && valorImc <=39.9){
        linhas[3].style.backgroundColor = "#d64e00";
    }

    if(valorImc >= 40){
        linhas[4].style.backgroundColor = "#d63900";
    }

}
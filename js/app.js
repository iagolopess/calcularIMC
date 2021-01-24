var botaoCalcula = document.querySelector("#calcula-imc")

botaoCalcula.addEventListener("click", function(event){    
    event.preventDefault();

    document.querySelector(".info-resultados").style.visibility = "visible";

    var peso = document.getElementById("peso").value.replace(",",".");
    var altura = document.getElementById("altura").value.replace(",",".");

    calculaIMC(peso, altura)

});


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

    txtResultado = document.querySelector("#resultado")

    if(imc < 18.5){
      txtResultado.innerHTML = `Seu IMC deu ${imc} isso siginifica que você está abaixo do ideal`
      document.querySelector("#resultado").style.color = '#ff9100';
      document.querySelector(".linha-imc1").style.backgroundColor = "ff9100";
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
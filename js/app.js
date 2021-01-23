var botaoCalcula = document.querySelector("#calcula-imc")

botaoCalcula.addEventListener("click", function(event){    
    event.preventDefault();

    var peso = document.getElementById("peso").value.replace(",",".");
    var altura = document.getElementById("altura").value.replace(",",".");

    calculaIMC(peso, altura)

});




function calculaIMC(peso, altura){

    imc = peso / (altura * altura);
    resultadoIMC(imc.toFixed(2))

}


function resultadoIMC(imc){

    txtResultado = document.querySelector("#resultado")

    if(imc < 18.5){
      txtResultado.innerHTML = `Seu IMC deu ${imc} isso siginifica que você está abaixo do ideal`

    } 
    
    if(imc >= 18.5 && imc <= 24.9){
        txtResultado.innerHTML = `Seu IMC deu ${imc} isso siginifica que você está no ideal`
    } 
    
    if(imc >= 25 && imc <= 29.9){
        txtResultado.innerHTML = `Seu IMC deu ${imc} isso siginifica que você está com sobrepeso e precisa se cuidar mais`
    } 
    
    if (imc >= 30 && imc <= 39.9){
        txtResultado.innerHTML = `Seu IMC deu ${imc} isso siginifica que você está em obesidade nivel 1, procure um médico`
    } 
    
    if(imc >= 40){
        txtResultado.innerHTML = `Seu IMC deu ${imc} isso siginifica que você está com obesidade grave`
    }

}
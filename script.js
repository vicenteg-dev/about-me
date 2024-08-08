document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        responseMessage.textContent = "Obrigado, sua mensagem foi enviada com sucesso! Aguarde o retorno.";
        responseMessage.style.color = "#87CEEB"; 
        
        form.reset();
    });
});